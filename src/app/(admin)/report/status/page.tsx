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
  getPeriodEndDate,
  getPeriodStartDate,
  parseReportPeriod,
} from "~/app/(admin)/report/_utils";

type SearchParams = Promise<{
  period?: string;
}>;

export default async function ReportStatusPage(props: { searchParams: SearchParams }) {
  const session = await auth();
  const searchParams = await props.searchParams;

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

  const statusBreakdown = await db.reservation.groupBy({
    by: ["status"],
    where: { startAt: { gte: start, lt: end } },
    _count: true,
    orderBy: { status: "asc" },
  });

  const total = statusBreakdown.reduce((sum, s) => sum + s._count, 0);

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
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold text-slate-900">Status reservasi</h2>
          <div className="flex items-center gap-2 print:hidden">
            <PeriodSelector basePath="/report/status" />
            <ReportActions
              pdfHref={`/api/report/export?type=status&period=${period}&format=pdf`}
              csvHref={`/api/report/export?type=status&period=${period}`}
            />
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-slate-700/80">Total</span>
          <span className="text-2xl font-semibold text-slate-900">{total}</span>
        </div>

        <div className="mt-5 space-y-2">
          {statusBreakdown.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-700/80">
              Belum ada data
            </p>
          ) : (
            statusBreakdown.map((item) => (
              <div
                key={item.status}
                className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2 text-sm"
              >
                <span className="font-medium text-slate-900">{item.status}</span>
                <span className="text-slate-700/80">{item._count}</span>
              </div>
            ))
          )}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-base font-semibold text-slate-900">Detail transaksi</h3>
        <div className="mt-4">
          <TransactionDetailTable rows={transactions} />
        </div>
      </GlassCard>
    </section>
  );
}
