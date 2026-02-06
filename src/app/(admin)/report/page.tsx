import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { auth } from "~/server/auth";
import { GlassCard } from "../_components/glass-card";

type CardItem = {
  href: string;
  title: string;
  description: string;
  icon: (props: { className?: string }) => ReactNode;
};

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3v18h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M7 14v4M11 10v8M15 6v12M19 12v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
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
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2v4M16 2v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M3 10h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 6h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M23 21v-2a4 4 0 0 0-3-3.87"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MoneyIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10H3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21 6H3v12h18V6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default async function ReportPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const cards: CardItem[] = [
    {
      href: "/report/overview",
      title: "Overview",
      description: "Ringkasan laporan berdasarkan periode.",
      icon: ChartIcon,
    },
    {
      href: "/report/today",
      title: "Ringkasan hari ini",
      description: "Monitor reservasi dan omzet hari ini.",
      icon: CalendarIcon,
    },
    {
      href: "/report/midwives",
      title: "Performa bidan",
      description: "Jumlah reservasi per bidan dan completion.",
      icon: UsersIcon,
    },
    {
      href: "/report/status",
      title: "Status reservasi",
      description: "Breakdown status reservasi per periode.",
      icon: ListIcon,
    },
    {
      href: "/report/treatments",
      title: "Treatment populer",
      description: "Treatment paling sering dibooking.",
      icon: SparkIcon,
    },
    {
      href: "/report/revenue",
      title: "Estimasi omzet",
      description: "Total pemasukan dari reservasi completed.",
      icon: MoneyIcon,
    },
  ];

  return (
    <section className="grid gap-6">
      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">Report</h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Pilih menu untuk melihat laporan
        </p>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="group">
            <GlassCard className="transition hover:bg-white/45">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(147,197,253,0.55),rgba(251,207,232,0.42),rgba(196,181,253,0.52))] text-slate-900 shadow-[0_12px_28px_rgba(99,102,241,0.16)]">
                  {card.icon({ className: "h-6 w-6 text-slate-900/80" })}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700/80">
                    {card.description}
                  </p>
                </div>

                <span className="text-slate-700/70 transition group-hover:text-slate-900">
                  →
                </span>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
