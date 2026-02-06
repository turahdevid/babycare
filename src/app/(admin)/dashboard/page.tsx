import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../_components/glass-card";
import { StatusPill } from "../_components/status-pill";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3.8v2.6M17 3.8v2.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 8.4h15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M6.8 5.4h10.4A2.8 2.8 0 0 1 20 8.2v10A3.4 3.4 0 0 1 16.6 21.6H7.4A3.4 3.4 0 0 1 4 18.2v-10A2.8 2.8 0 0 1 6.8 5.4Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M8.3 12.2h.2M12 12.2h.2M15.7 12.2h.2M8.3 15.9h.2M12 15.9h.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}


function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.2 20.2V10.6c0-.9.7-1.6 1.6-1.6h.5c.9 0 1.6.7 1.6 1.6v9.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M10.6 20.2V6.8c0-.9.7-1.6 1.6-1.6h.5c.9 0 1.6.7 1.6 1.6v13.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M16 20.2v-7c0-.9.7-1.6 1.6-1.6h.5c.9 0 1.6.7 1.6 1.6v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M4 20.2h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}


export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const isAdmin = session.user.role === "ADMIN";

  const whereClause = isAdmin
    ? {
        startAt: {
          gte: today,
          lt: tomorrow,
        },
      }
    : {
        midwifeId: session.user.id,
        startAt: {
          gte: today,
          lt: tomorrow,
        },
      };

  const [todayReservations, todayCount] = await Promise.all([
    db.reservation.findMany({
      where: whereClause,
      include: {
        customer: true,
        baby: true,
        items: {
          include: {
            treatment: true,
          },
        },
      },
      orderBy: { startAt: "asc" },
      take: 5,
    }),
    db.reservation.count({ where: whereClause }),
  ]);

  const nextReservation = todayReservations[0];
  const nextSlot = nextReservation ? formatTime(nextReservation.startAt) : "-";

  return (
    <div className="bc-dash-enter">
      <section className="grid gap-6 md:grid-cols-2">
          <GlassCard className="md:col-span-2">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700/80">
                  Today&apos;s reservations
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold tracking-tight text-slate-900">
                    {todayCount}
                  </span>
                  <span className="text-sm text-slate-700/80">total</span>
                </div>
                <p className="text-sm text-slate-700/80">
                  Next slot at <span className="font-medium text-slate-900">{nextSlot}</span>
                </p>
              </div>

              <div className="relative hidden h-24 w-24 shrink-0 sm:block">
                <div className="absolute inset-0 rounded-[26px] bg-[linear-gradient(135deg,rgba(147,197,253,0.55),rgba(251,207,232,0.42),rgba(196,181,253,0.52))] shadow-[0_14px_36px_rgba(99,102,241,0.18)]" />
                <div className="absolute inset-[1px] rounded-[25px] bg-white/40 backdrop-blur-xl" />
                <div className="absolute inset-0 flex items-center justify-center text-slate-900">
                  <CalendarIcon className="h-8 w-8" />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base font-semibold text-slate-900">
                Upcoming schedule
              </h2>
              <span className="text-sm text-slate-700/80">Today</span>
            </div>

            <div className="mt-5 space-y-3">
              {todayReservations.length === 0 ? (
                <div className="rounded-2xl border border-white/55 bg-white/25 px-4 py-8 text-center">
                  <p className="text-sm text-slate-700/80">
                    Tidak ada reservasi hari ini
                  </p>
                </div>
              ) : (
                todayReservations.map((reservation) => {
                  const treatmentNames = reservation.items
                    .map((item) => item.treatment.name)
                    .join(", ");
                  return (
                    <Link
                      key={reservation.id}
                      href={`/reservation/${reservation.id}`}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/55 bg-white/25 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition hover:bg-white/35"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-slate-900">
                            {formatTime(reservation.startAt)}
                          </span>
                          <span className="text-sm text-slate-700/90">
                            {reservation.customer.motherName}
                          </span>
                        </div>
                        <p className="mt-1 truncate text-xs text-slate-600/80">
                          {treatmentNames || "No treatment"}
                        </p>
                      </div>
                      <StatusPill status={reservation.status} />
                    </Link>
                  );
                })
              )}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base font-semibold text-slate-900">Quick actions</h2>
              <span className="text-sm text-slate-700/80">Touch-friendly</span>
            </div>

            <div className="mt-5 grid gap-3">
              <Link
                className={cn(
                  "group flex items-center justify-between rounded-2xl border border-white/60 bg-white/30 px-4 py-4",
                  "shadow-[0_16px_40px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl",
                  "transition active:scale-[0.99] hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/60",
                )}
                href="/reservation/new"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    Add reservation
                  </p>
                  <p className="mt-1 text-xs text-slate-700/80">
                    Create a new booking in seconds.
                  </p>
                </div>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(147,197,253,0.55),rgba(251,207,232,0.42),rgba(196,181,253,0.52))] shadow-[0_12px_28px_rgba(99,102,241,0.16)]">
                  <span className="absolute inset-[1px] rounded-2xl bg-white/35" />
                  <span className="relative text-slate-900">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="28"
                      viewBox="0 0 24 24"
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </span>
              </Link>

              <Link
                className={cn(
                  "group flex items-center justify-between rounded-2xl border border-white/60 bg-white/25 px-4 py-4",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]",
                  "transition active:scale-[0.99] hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/60",
                )}
                href="/report"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">View reports</p>
                  <p className="mt-1 text-xs text-slate-700/80">
                    Weekly trends and analytics.
                  </p>
                </div>
                <span className="text-slate-700/80 transition group-hover:text-slate-900">
                  <ChartIcon className="h-7 w-7" />
                </span>
              </Link>
            </div>
          </GlassCard>
        </section>
    </div>
  );
}
