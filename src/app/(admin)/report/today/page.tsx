import Link from "next/link";
import { redirect } from "next/navigation";

import { GlassCard } from "~/app/(admin)/_components/glass-card";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { ReportActions } from "~/app/(admin)/report/_components/report-actions";
import { TransactionDetailTable } from "~/app/(admin)/report/_components/transaction-detail-table";
import { fetchTransactionDetails } from "~/app/(admin)/report/_queries";
import { formatCurrency, formatShortDate } from "~/app/(admin)/report/_utils";

export default async function ReportTodayPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const [totalReservations, completedReservations, statusBreakdown, completedTotals] =
    await Promise.all([
      db.reservation.count({ where: { startAt: { gte: start, lt: end } } }),
      db.reservation.findMany({
        where: {
          startAt: { gte: start, lt: end },
          status: "COMPLETED",
        },
        select: { id: true },
      }),
      db.reservation.groupBy({
        by: ["status"],
        where: { startAt: { gte: start, lt: end } },
        _count: true,
      }),
      db.reservation.findMany({
        where: {
          startAt: { gte: start, lt: end },
          status: "COMPLETED",
        },
        select: {
          paymentMethod: true,
          subtotalPrice: true,
          discountPercent: true,
          discountAmount: true,
          totalPrice: true,
          items: { select: { quantity: true, unitPrice: true } },
        },
      }),
    ]);

  const completedCount = completedReservations.length;

  let cashRevenue = 0;
  let cashCount = 0;
  let transferRevenue = 0;
  let transferCount = 0;
  let unknownPaymentRevenue = 0;
  let unknownPaymentCount = 0;

  const revenue = completedTotals.reduce((sum, reservation) => {
    const itemSubtotal = reservation.items.reduce(
      (subSum, item) => subSum + item.unitPrice.toNumber() * item.quantity,
      0,
    );
    const subtotal = reservation.subtotalPrice?.toNumber() ?? itemSubtotal;
    const discountAmount =
      reservation.discountAmount?.toNumber() ??
      (reservation.discountPercent ? (subtotal * reservation.discountPercent) / 100 : 0);
    const total = reservation.totalPrice?.toNumber() ?? subtotal - discountAmount;
    const safeTotal = Math.max(total, 0);

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

    return sum + safeTotal;
  }, 0);

  const transactions = await fetchTransactionDetails({ gte: start, lt: end });

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/report"
        >
          ← Kembali
        </Link>
      </div>

      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Ringkasan hari ini
            </h2>
            <p className="mt-1 text-sm text-slate-700/80">{formatShortDate(now)}</p>
          </div>

          <ReportActions
            pdfHref="/api/report/export?type=today&format=pdf"
            csvHref="/api/report/export?type=today"
          />
        </div>
      </GlassCard>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Reservasi</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-slate-700/80">Total reservasi</span>
              <span className="text-2xl font-semibold text-slate-900">
                {totalReservations}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-slate-700/80">Completed</span>
              <span className="text-2xl font-semibold text-emerald-700">
                {completedCount}
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {statusBreakdown.map((item) => (
              <div
                key={item.status}
                className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2 text-sm"
              >
                <span className="font-medium text-slate-900">{item.status}</span>
                <span className="text-slate-700/80">{item._count}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="w-full min-w-0">
          <h3 className="text-base font-semibold text-slate-900">Omzet Hari Ini</h3>
          <div className="mt-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Omzet
            </span>
            <p className="mt-1 break-words text-xl font-bold text-slate-900 sm:text-2xl">
              {formatCurrency(revenue)}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Dihitung dari {completedCount} reservasi COMPLETED
            </p>
          </div>

          <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-3 shadow-xs">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Cash / Tunai
                </span>
                <span className="shrink-0 rounded-md bg-emerald-200/80 px-1.5 py-0.5 text-xs font-bold text-emerald-900">
                  {cashCount} tx
                </span>
              </div>
              <p className="mt-1 break-words text-base font-bold text-emerald-700 sm:text-lg">
                {formatCurrency(cashRevenue)}
              </p>
            </div>

            <div className="min-w-0 rounded-2xl border border-sky-200/80 bg-sky-50/50 p-3 shadow-xs">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Transfer Bank
                </span>
                <span className="shrink-0 rounded-md bg-sky-200/80 px-1.5 py-0.5 text-xs font-bold text-sky-900">
                  {transferCount} tx
                </span>
              </div>
              <p className="mt-1 break-words text-base font-bold text-sky-700 sm:text-lg">
                {formatCurrency(transferRevenue)}
              </p>
            </div>

            {unknownPaymentCount > 0 ? (
              <div className="min-w-0 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-3 shadow-xs sm:col-span-2">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Belum Ditentukan
                  </span>
                  <span className="shrink-0 rounded-md bg-amber-200/80 px-1.5 py-0.5 text-xs font-bold text-amber-900">
                    {unknownPaymentCount} tx
                  </span>
                </div>
                <p className="mt-1 break-words text-base font-bold text-amber-700 sm:text-lg">
                  {formatCurrency(unknownPaymentRevenue)}
                </p>
              </div>
            ) : null}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="text-base font-semibold text-slate-900">Detail transaksi</h3>
        <div className="mt-4">
          <TransactionDetailTable rows={transactions} />
        </div>
      </GlassCard>
    </section>
  );
}
