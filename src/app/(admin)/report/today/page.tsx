import Link from "next/link";
import { redirect } from "next/navigation";

import { GlassCard } from "~/app/(admin)/_components/glass-card";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
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

  const [totalReservations, completedReservations, statusBreakdown, completedItems] =
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
      db.reservationTreatment.findMany({
        where: {
          reservation: {
            startAt: { gte: start, lt: end },
            status: "COMPLETED",
          },
        },
        select: { quantity: true, unitPrice: true },
      }),
    ]);

  const completedCount = completedReservations.length;

  const revenue = completedItems.reduce(
    (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
    0,
  );

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
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Ringkasan hari ini
            </h2>
            <p className="mt-1 text-sm text-slate-700/80">{formatShortDate(now)}</p>
          </div>
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

        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Omzet</h3>
          <div className="mt-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-slate-700/80">Total omzet</span>
              <span className="text-2xl font-semibold text-slate-900">
                {formatCurrency(revenue)}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-700/80">
              Omzet dihitung dari reservasi dengan status COMPLETED.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
