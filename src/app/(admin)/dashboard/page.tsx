
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type ReservationItem = {
  id: string;
  time: string;
  name: string;
  detail: string;
  status: "confirmed" | "pending";
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function HomeIcon({ className }: { className?: string }) {
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
        d="M4 10.6 12 4l8 6.6V19a2.3 2.3 0 0 1-2.3 2.3H6.3A2.3 2.3 0 0 1 4 19v-8.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 21V14.8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
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

function BabyIcon({ className }: { className?: string }) {
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
        d="M12 21.6c4.7 0 8.5-3.7 8.5-8.3 0-2.2-.9-4.2-2.3-5.7-1.2-1.2-2.8-2-4.5-2.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M12 21.6c-4.7 0-8.5-3.7-8.5-8.3 0-2.2.9-4.2 2.3-5.7 1.2-1.2 2.8-2 4.5-2.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9.2 13.1h.2M14.6 13.1h.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M10.2 16c.6.6 1.2.9 1.8.9s1.2-.3 1.8-.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M10.4 4.5c.2-1.2 1.3-2.1 2.6-2.1s2.4.9 2.6 2.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
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

function StatusPill({ status }: { status: ReservationItem["status"] }) {
  const label = status === "confirmed" ? "Confirmed" : "Pending";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        status === "confirmed" &&
          "border-emerald-200/60 bg-emerald-50/50 text-emerald-700",
        status === "pending" &&
          "border-amber-200/60 bg-amber-50/50 text-amber-700",
      )}
    >
      {label}
    </span>
  );
}

function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/55 bg-white/35 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BottomNavItem = {
  href: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

function BottomNav({ items }: { items: BottomNavItem[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-[1024px] px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
    >
      <div className="rounded-t-[26px] rounded-b-[26px] border border-white/55 bg-white/35 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
        <div className="grid h-[76px] grid-cols-4 items-center">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
                className="group flex h-full items-center justify-center outline-none"
                href={item.href}
              >
                <div
                  className={cn(
                    "relative flex h-12 w-12 items-center justify-center rounded-2xl transition duration-200",
                    "active:scale-[0.97]",
                    isActive &&
                      "bg-[linear-gradient(135deg,rgba(147,197,253,0.55),rgba(251,207,232,0.42),rgba(196,181,253,0.52))] shadow-[0_12px_28px_rgba(99,102,241,0.20)]",
                    !isActive && "hover:bg-white/35",
                  )}
                >
                  <span
                    className={cn(
                      "text-slate-600 transition duration-200",
                      isActive && "text-slate-900",
                      !isActive &&
                        "group-hover:text-slate-800 group-focus-visible:text-slate-800",
                    )}
                  >
                    {item.icon({
                      className: cn(
                        "h-8 w-8 transition duration-200",
                        isActive && "scale-110",
                      ),
                    })}
                  </span>

                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/60"
                    />
                  ) : null}
                </div>
                <span className="sr-only">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default function DashboardPage() {
  const reservations = useMemo<ReservationItem[]>(
    () => [
      {
        id: "r-1",
        time: "09:30",
        name: "Ava",
        detail: "Well-baby check",
        status: "confirmed",
      },
      {
        id: "r-2",
        time: "11:00",
        name: "Noah",
        detail: "Vaccination",
        status: "pending",
      },
      {
        id: "r-3",
        time: "14:15",
        name: "Mia",
        detail: "Consultation",
        status: "confirmed",
      },
    ],
    [],
  );

  const navItems = useMemo<BottomNavItem[]>(
    () => [
      {
        href: "/dashboard",
        label: "Home",
        icon: ({ className }) => <HomeIcon className={className} />,
      },
      {
        href: "/dashboard/reservation",
        label: "Reservation",
        icon: ({ className }) => <CalendarIcon className={className} />,
      },
      {
        href: "/dashboard/customer",
        label: "Customer",
        icon: ({ className }) => <BabyIcon className={className} />,
      },
      {
        href: "/dashboard/report",
        label: "Report",
        icon: ({ className }) => <ChartIcon className={className} />,
      },
    ],
    [],
  );

  const todayCount = 8;
  const nextSlot = "09:30";

  return (
    <main className="relative min-h-screen overflow-x-hidden px-6 pb-[calc(9.5rem+env(safe-area-inset-bottom))] pt-10 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-200/70 via-pink-200/55 to-violet-200/65 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-amber-100/70 via-pink-200/45 to-sky-200/60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/35 to-white/0 blur-3xl" />
      </div>

      <div className="bc-dash-enter relative mx-auto w-full max-w-[1024px]">
        <header className="mb-8">
          <div className="rounded-[22px] border border-white/55 bg-white/30 px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Dashboard
            </h1>
          </div>
        </header>

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
              {reservations.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/55 bg-white/25 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-900">
                        {item.time}
                      </span>
                      <span className="text-sm text-slate-700/90">
                        {item.name}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs text-slate-600/80">
                      {item.detail}
                    </p>
                  </div>
                  <StatusPill status={item.status} />
                </div>
              ))}
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
                href="#"
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
                href="#"
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

      <BottomNav items={navItems} />

      <style jsx global>{`
        @keyframes bc-dash-enter {
          from {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .bc-dash-enter {
          animation: bc-dash-enter 650ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }
      `}</style>
    </main>
  );
}
