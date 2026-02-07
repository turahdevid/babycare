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

export default async function ReportTreatmentsPage(props: {
  searchParams: SearchParams;
}) {
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

  const treatmentStats = await db.reservationTreatment.groupBy({
    by: ["treatmentId"],
    where: {
      reservation: {
        startAt: { gte: start, lt: end },
      },
    },
    _sum: { quantity: true },
    orderBy: { _sum: { quantity: "desc" } },
    take: 20,
  });

  const treatmentIds = treatmentStats.map((t) => t.treatmentId);
  const treatments = await db.treatment.findMany({
    where: { id: { in: treatmentIds } },
    select: { id: true, name: true },
  });

  const treatmentMap = new Map(treatments.map((t) => [t.id, t.name]));

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
          <h2 className="text-base font-semibold text-slate-900">Treatment populer</h2>
          <div className="flex items-center gap-2 print:hidden">
            <PeriodSelector basePath="/report/treatments" />
            <ReportActions
              pdfHref={`/api/report/export?type=treatments&period=${period}&format=pdf`}
              csvHref={`/api/report/export?type=treatments&period=${period}`}
            />
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="mt-2 space-y-2">
          {treatmentStats.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-700/80">Belum ada data</p>
          ) : (
            treatmentStats.map((item) => (
              <div
                key={item.treatmentId}
                className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2.5 text-sm"
              >
                <span className="font-medium text-slate-900">
                  {treatmentMap.get(item.treatmentId) ?? "Unknown"}
                </span>
                <span className="text-slate-700/80">
                  {item._sum.quantity ?? 0}x dibooking
                </span>
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
