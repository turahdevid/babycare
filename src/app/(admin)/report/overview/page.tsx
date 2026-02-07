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

type SearchParams = {
  period?: string;
};

export default async function ReportOverviewPage(props: {
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
  const startDate = getPeriodStartDate(period, now);
  const endDate = getPeriodEndDate(period, now);

  const [totalReservations, statusBreakdown, midwifePerformance, treatmentStats] =
    await Promise.all([
      db.reservation.count({
        where: { startAt: { gte: startDate, lt: endDate } },
      }),
      db.reservation.groupBy({
        by: ["status"],
        where: { startAt: { gte: startDate, lt: endDate } },
        _count: true,
      }),
      db.reservation.groupBy({
        by: ["midwifeId"],
        where: {
          startAt: { gte: startDate, lt: endDate },
          midwifeId: { not: null },
        },
        _count: true,
      }),
      db.reservationTreatment.groupBy({
        by: ["treatmentId"],
        where: {
          reservation: {
            startAt: { gte: startDate, lt: endDate },
          },
        },
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: "desc" } },
        take: 5,
      }),
    ]);

  const midwifeIds = midwifePerformance
    .map((m) => m.midwifeId)
    .filter((id): id is string => id !== null);
  const midwives = await db.user.findMany({
    where: { id: { in: midwifeIds } },
    select: { id: true, name: true, email: true },
  });

  const treatmentIds = treatmentStats.map((t) => t.treatmentId);
  const treatments = await db.treatment.findMany({
    where: { id: { in: treatmentIds } },
    select: { id: true, name: true },
  });

  const midwifeMap = new Map(midwives.map((m) => [m.id, m]));
  const treatmentMap = new Map(treatments.map((t) => [t.id, t]));

  const completedCount =
    statusBreakdown.find((s) => s.status === "COMPLETED")?._count ?? 0;
  const completionRate =
    totalReservations > 0
      ? Math.round((completedCount / totalReservations) * 100)
      : 0;

  const transactions = await fetchTransactionDetails({ gte: startDate, lt: endDate });

  return (
    <section className="grid gap-6">
      <GlassCard>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold text-slate-900">Laporan</h2>
          <div className="flex items-center gap-2 print:hidden">
            <PeriodSelector basePath="/report/overview" />
            <ReportActions
              pdfHref={`/api/report/export?type=overview&period=${period}&format=pdf`}
              csvHref={`/api/report/export?type=overview&period=${period}`}
            />
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Ringkasan</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-slate-700/80">Total reservasi</span>
              <span className="text-2xl font-semibold text-slate-900">
                {totalReservations}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-slate-700/80">Completion rate</span>
              <span className="text-2xl font-semibold text-emerald-700">
                {completionRate}%
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

        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">
            Performa Bidan
          </h3>
          <div className="mt-4 space-y-2">
            {midwifePerformance.length === 0 ? (
              <p className="py-4 text-center text-sm text-slate-700/80">
                Belum ada data
              </p>
            ) : (
              midwifePerformance.map((item) => {
                const midwife = item.midwifeId ? midwifeMap.get(item.midwifeId) : null;
                return (
                  <div
                    key={item.midwifeId ?? "unassigned"}
                    className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2 text-sm"
                  >
                    <span className="font-medium text-slate-900">
                      {midwife?.name ?? midwife?.email ?? "Unassigned"}
                    </span>
                    <span className="text-slate-700/80">
                      {item._count} reservasi
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="text-base font-semibold text-slate-900">Treatment Populer</h3>
        <div className="mt-4 space-y-2">
          {treatmentStats.length === 0 ? (
            <p className="py-4 text-center text-sm text-slate-700/80">
              Belum ada data
            </p>
          ) : (
            treatmentStats.map((item) => {
              const treatment = treatmentMap.get(item.treatmentId);
              return (
                <div
                  key={item.treatmentId}
                  className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-3 py-2.5 text-sm"
                >
                  <span className="font-medium text-slate-900">
                    {treatment?.name ?? "Unknown"}
                  </span>
                  <span className="text-slate-700/80">
                    {item._sum.quantity ?? 0}x dibooking
                  </span>
                </div>
              );
            })
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
