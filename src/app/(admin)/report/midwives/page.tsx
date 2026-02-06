import Link from "next/link";
import { redirect } from "next/navigation";

import { GlassCard } from "~/app/(admin)/_components/glass-card";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { PeriodSelector } from "~/app/(admin)/report/_components/period-selector";
import {
  getPeriodEndDate,
  getPeriodStartDate,
  parseReportPeriod,
} from "~/app/(admin)/report/_utils";

type SearchParams = Promise<{
  period?: string;
}>;

export default async function ReportMidwivesPage(props: {
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

  const [totalByMidwife, completedByMidwife] = await Promise.all([
    db.reservation.groupBy({
      by: ["midwifeId"],
      where: {
        startAt: { gte: start, lt: end },
        midwifeId: { not: null },
      },
      _count: true,
    }),
    db.reservation.groupBy({
      by: ["midwifeId"],
      where: {
        startAt: { gte: start, lt: end },
        midwifeId: { not: null },
        status: "COMPLETED",
      },
      _count: true,
    }),
  ]);

  const midwifeIds = totalByMidwife
    .map((m) => m.midwifeId)
    .filter((id): id is string => id !== null);

  const midwives = await db.user.findMany({
    where: { id: { in: midwifeIds } },
    select: { id: true, name: true, email: true },
    orderBy: { name: "asc" },
  });

  const completedMap = new Map(
    completedByMidwife
      .map((m) => (m.midwifeId ? [m.midwifeId, m._count] : null))
      .filter((v): v is [string, number] => v !== null),
  );

  const midwifeMap = new Map(midwives.map((m) => [m.id, m]));

  const rows = totalByMidwife
    .filter((m): m is { midwifeId: string; _count: number } => m.midwifeId !== null)
    .map((m) => {
      const completedCount = completedMap.get(m.midwifeId) ?? 0;
      const completionRate = m._count > 0 ? Math.round((completedCount / m._count) * 100) : 0;
      const midwife = midwifeMap.get(m.midwifeId);
      return {
        id: m.midwifeId,
        name: midwife?.name ?? midwife?.email ?? "-",
        total: m._count,
        completed: completedCount,
        rate: completionRate,
      };
    })
    .sort((a, b) => b.completed - a.completed);

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/report"
        >
          ← Kembali
        </Link>
      </div>

      <GlassCard>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold text-slate-900">Performa bidan</h2>
          <PeriodSelector basePath="/report/midwives" />
        </div>
      </GlassCard>

      <GlassCard>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/60 text-xs text-slate-600">
                <th className="px-3 py-3 font-medium">Bidan</th>
                <th className="px-3 py-3 font-medium">Total</th>
                <th className="px-3 py-3 font-medium">Completed</th>
                <th className="px-3 py-3 font-medium">Rate</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-3 py-10 text-center text-sm text-slate-700/80">
                    Belum ada data
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="border-b border-white/50">
                    <td className="px-3 py-3 font-medium text-slate-900">{row.name}</td>
                    <td className="px-3 py-3 text-slate-900">{row.total}</td>
                    <td className="px-3 py-3 text-emerald-700">{row.completed}</td>
                    <td className="px-3 py-3 text-slate-900">{row.rate}%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </section>
  );
}
