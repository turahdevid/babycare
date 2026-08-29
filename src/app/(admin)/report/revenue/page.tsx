import Link from "next/link";
import { redirect } from "next/navigation";

import { GlassCard } from "~/app/(admin)/_components/glass-card";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { PeriodSelector } from "~/app/(admin)/report/_components/period-selector";
import { ReportActions } from "~/app/(admin)/report/_components/report-actions";
import { TransactionDetailTable } from "~/app/(admin)/report/_components/transaction-detail-table";
import { fetchTransactionDetailsPage } from "~/app/(admin)/report/_queries";
import {
  formatCurrency,
  getPeriodEndDate,
  getPeriodStartDate,
  parseReportPeriod,
} from "~/app/(admin)/report/_utils";

type SearchParams = {
  period?: string;
  page?: string;
};

export default async function ReportRevenuePage(props: {
  searchParams?: Promise<SearchParams>;
}) {
  const session = await auth();
  let searchParams: SearchParams = {};
  if (props.searchParams) {
    searchParams = await props.searchParams;
  }

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const period = parseReportPeriod(searchParams.period);
  const pageRaw = typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? Math.floor(pageRaw) : 1;
  const pageSize = 10;
  const now = new Date();
  const start = getPeriodStartDate(period, now);
  const end = getPeriodEndDate(period, now);

  const reservations = await db.reservation.findMany({
    where: {
      startAt: { gte: start, lt: end },
      status: "COMPLETED",
    },
    select: {
      paymentMethod: true,
      serviceType: true,
      subtotalPrice: true,
      discountPercent: true,
      discountAmount: true,
      totalPrice: true,
      items: {
        select: {
          quantity: true,
          unitPrice: true,
          treatment: { select: { name: true } },
        },
      },
    },
    take: 500,
  });

  const byTreatment = new Map<string, number>();
  let revenue = 0;
  let cashRevenue = 0;
  let cashCount = 0;
  let transferRevenue = 0;
  let transferCount = 0;
  let unknownPaymentRevenue = 0;
  let unknownPaymentCount = 0;
  let outletRevenue = 0;
  let homecareRevenue = 0;

  for (const reservation of reservations) {
    const itemSubtotal = reservation.items.reduce(
      (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
      0,
    );
    const subtotal = reservation.subtotalPrice?.toNumber() ?? itemSubtotal;
    const discountAmount =
      reservation.discountAmount?.toNumber() ??
      (reservation.discountPercent ? (subtotal * reservation.discountPercent) / 100 : 0);
    const total = reservation.totalPrice?.toNumber() ?? subtotal - discountAmount;
    const safeTotal = Math.max(total, 0);
    revenue += safeTotal;

    if (reservation.paymentMethod === "CASH") {
      cashRevenue += safeTotal;
      cashCount += 1;
    } else if (reservation.paymentMethod === "TRANSFER") {
      transferRevenue += safeTotal;
      transferCount += 1;
    } else {
      unknownPaymentRevenue += safeTotal;
      unknownPaymentCount += 1;
    }

    if (reservation.serviceType === "OUTLET") {
      outletRevenue += safeTotal;
    } else {
      homecareRevenue += safeTotal;
    }

    const ratio = subtotal > 0 ? safeTotal / subtotal : 0;

    for (const item of reservation.items) {
      const key = item.treatment.name;
      const current = byTreatment.get(key) ?? 0;
      const itemValue = item.unitPrice.toNumber() * item.quantity * ratio;
      byTreatment.set(key, current + itemValue);
    }
  }

  const rows = Array.from(byTreatment.entries())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 20);

  const transactionPage = await fetchTransactionDetailsPage(
    { gte: start, lt: end },
    { status: "COMPLETED" },
    { page, pageSize },
  );

  const firstRow =
    transactionPage.totalCount === 0
      ? 0
      : (transactionPage.page - 1) * transactionPage.pageSize + 1;
  const lastRow = Math.min(
    transactionPage.totalCount,
    transactionPage.page * transactionPage.pageSize,
  );

  const buildPageHref = (nextPage: number) =>
    `/report/revenue?period=${period}&page=${nextPage}`;

  return (
    <section className="grid w-full min-w-0 gap-4">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/report"
        >
          ← Kembali
        </Link>
      </div>

      <GlassCard className="w-full min-w-0 p-4 sm:p-5">
        <div className="flex flex-col gap-3 border-b border-slate-200/50 pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-800">Laporan Omzet</h2>
            <p className="text-xs text-slate-500">
              {reservations.length} reservasi status COMPLETED
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <PeriodSelector basePath="/report/revenue" />
            <ReportActions
              pdfHref={`/api/report/export?type=revenue&period=${period}&format=pdf`}
              csvHref={`/api/report/export?type=revenue&period=${period}`}
            />
          </div>
        </div>

        <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <div className="min-w-0 rounded-2xl border border-slate-200/70 bg-white/50 p-4 shadow-xs">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Omzet
            </span>
            <p className="mt-1 break-words text-xl font-bold text-slate-900 sm:text-2xl">
              {formatCurrency(revenue)}
            </p>
            <span className="mt-1 block text-xs text-slate-500">
              Semua metode pembayaran
            </span>
          </div>

          <div className="min-w-0 rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4 shadow-xs">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Cash / Tunai
              </span>
              <span className="shrink-0 rounded-md bg-emerald-200/80 px-2 py-0.5 text-xs font-bold text-emerald-900">
                {cashCount} tx
              </span>
            </div>
            <p className="mt-1 break-words text-xl font-bold text-emerald-700 sm:text-2xl">
              {formatCurrency(cashRevenue)}
            </p>
            <span className="mt-1 block text-xs text-emerald-600/90">
              Pembayaran tunai
            </span>
          </div>

          <div className="min-w-0 rounded-2xl border border-sky-200/80 bg-sky-50/50 p-4 shadow-xs sm:col-span-2 xl:col-span-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Transfer Bank
              </span>
              <span className="shrink-0 rounded-md bg-sky-200/80 px-2 py-0.5 text-xs font-bold text-sky-900">
                {transferCount} tx
              </span>
            </div>
            <p className="mt-1 break-words text-xl font-bold text-sky-700 sm:text-2xl">
              {formatCurrency(transferRevenue)}
            </p>
            <span className="mt-1 block text-xs text-sky-600/90">
              Transfer non-tunai
            </span>
          </div>
        </div>

        {unknownPaymentCount > 0 ? (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-200/80 bg-amber-50/50 p-3 text-xs">
            <span className="font-semibold text-amber-800">
              Belum Ditentukan ({unknownPaymentCount} transaksi)
            </span>
            <span className="font-bold text-amber-900">{formatCurrency(unknownPaymentRevenue)}</span>
          </div>
        ) : null}
      </GlassCard>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Tipe layanan</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2.5">
              <span className="font-medium text-slate-900">Outlet</span>
              <span className="font-semibold text-slate-900">{formatCurrency(outletRevenue)}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2.5">
              <span className="font-medium text-slate-900">Homecare</span>
              <span className="font-semibold text-slate-900">{formatCurrency(homecareRevenue)}</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Top treatment</h3>
          <div className="mt-4 space-y-2">
            {rows.length === 0 ? (
              <p className="py-6 text-center text-sm text-slate-700/80">Belum ada data</p>
            ) : (
              rows.slice(0, 5).map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-900">{row.name}</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(row.total)}</span>
                </div>
              ))
            )}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="text-base font-semibold text-slate-900">Detail transaksi</h3>
        <div className="mt-4">
          <TransactionDetailTable rows={transactionPage.rows} />
        </div>

        {transactionPage.pageCount > 1 ? (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <p className="text-slate-700/80">
              Menampilkan {firstRow}-{lastRow} dari {transactionPage.totalCount}
            </p>
            <div className="flex items-center gap-2">
              <Link
                aria-disabled={transactionPage.page <= 1}
                className={`rounded-2xl border border-white/60 bg-white/35 px-4 py-2 font-medium text-slate-800 transition hover:bg-white/45 ${
                  transactionPage.page <= 1
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
                href={buildPageHref(Math.max(1, transactionPage.page - 1))}
              >
                Sebelumnya
              </Link>
              <span className="text-slate-700/80">
                Halaman {transactionPage.page} dari {transactionPage.pageCount}
              </span>
              <Link
                aria-disabled={transactionPage.page >= transactionPage.pageCount}
                className={`rounded-2xl border border-white/60 bg-white/35 px-4 py-2 font-medium text-slate-800 transition hover:bg-white/45 ${
                  transactionPage.page >= transactionPage.pageCount
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
                href={buildPageHref(
                  Math.min(transactionPage.pageCount, transactionPage.page + 1),
                )}
              >
                Berikutnya
              </Link>
            </div>
          </div>
        ) : transactionPage.totalCount > 0 ? (
          <p className="mt-4 text-sm text-slate-700/80">
            Menampilkan {firstRow}-{lastRow} dari {transactionPage.totalCount}
          </p>
        ) : null}
      </GlassCard>
    </section>
  );
}
