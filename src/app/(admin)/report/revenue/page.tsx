import Link from "next/link";
import { redirect } from "next/navigation";

import { GlassCard } from "~/app/(admin)/_components/glass-card";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { PeriodSelector } from "~/app/(admin)/report/_components/period-selector";
import { ReportActions } from "~/app/(admin)/report/_components/report-actions";
import { TransactionDetailTable } from "~/app/(admin)/report/_components/transaction-detail-table";
import { fetchTransactionDetails } from "~/app/(admin)/report/_queries";
import {
  formatCurrency,
  getPeriodEndDate,
  getPeriodStartDate,
  parseReportPeriod,
} from "~/app/(admin)/report/_utils";

type SearchParams = {
  period?: string;
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
  const now = new Date();
  const start = getPeriodStartDate(period, now);
  const end = getPeriodEndDate(period, now);

  const items = await db.reservationTreatment.findMany({
    where: {
      reservation: {
        startAt: { gte: start, lt: end },
        status: "COMPLETED",
      },
    },
    select: {
      quantity: true,
      unitPrice: true,
      treatment: { select: { name: true } },
    },
  });

  const revenue = items.reduce(
    (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
    0,
  );

  const byTreatment = new Map<string, number>();
  for (const item of items) {
    const key = item.treatment.name;
    const current = byTreatment.get(key) ?? 0;
    byTreatment.set(key, current + item.unitPrice.toNumber() * item.quantity);
  }

  const rows = Array.from(byTreatment.entries())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 20);

  const transactions = await fetchTransactionDetails(
    { gte: start, lt: end },
    { status: "COMPLETED" },
  );

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
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold text-slate-900">Estimasi omzet</h2>
          <div className="flex items-center gap-2 print:hidden">
            <PeriodSelector basePath="/report/revenue" />
            <ReportActions
              pdfHref={`/api/report/export?type=revenue&period=${period}&format=pdf`}
              csvHref={`/api/report/export?type=revenue&period=${period}`}
            />
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Total omzet</h3>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            {formatCurrency(revenue)}
          </p>
          <p className="mt-2 text-xs text-slate-700/80">
            Omzet dihitung dari reservasi dengan status COMPLETED.
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Top treatment</h3>
          <div className="mt-4 space-y-2">
            {rows.length === 0 ? (
              <p className="py-6 text-center text-sm text-slate-700/80">Belum ada data</p>
            ) : (
              rows.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-900">{row.name}</span>
                  <span className="text-slate-700/80">{formatCurrency(row.total)}</span>
                </div>
              ))
            )}
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
