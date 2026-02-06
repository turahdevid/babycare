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

function PlusIcon({ className }: { className?: string }) {
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
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function EmployeeIcon({ className }: { className?: string }) {
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
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function TreatmentIcon({ className }: { className?: string }) {
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
        d="M7 7h10M7 12h10M7 17h10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 6.5v11"
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

function SendIcon({ className }: { className?: string }) {
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
        d="M22 2 11 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 2 15 22l-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
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
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default async function ReservationPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const isAdmin = session.user.role === "ADMIN";

  const cards: CardItem[] = [
    {
      href: "/reservation/new",
      title: "Tambah reservasi",
      description: "Buat booking baru dengan cepat.",
      icon: PlusIcon,
    },
    {
      href: "/reservation/list",
      title: "List reservasi",
      description: "Lihat dan filter daftar reservasi.",
      icon: ListIcon,
    },
    {
      href: "/reservation/send-form",
      title: "Send form reservasi",
      description: "Kirim form reservasi ke customer.",
      icon: SendIcon,
    },
    {
      href: "/reservation/completed",
      title: "Completed reservasi",
      description: "Lihat reservasi yang sudah selesai.",
      icon: CheckIcon,
    },
  ];

  if (isAdmin) {
    cards.push({
      href: "/treatment",
      title: "Treatment",
      description: "Kelola master treatment.",
      icon: TreatmentIcon,
    });

    cards.push({
      href: "/user",
      title: "Pegawai/Bidan",
      description: "Kelola akun pegawai dan bidan.",
      icon: EmployeeIcon,
    });
  }

  return (
    <section className="grid gap-6">
      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">Reservation</h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Pilih menu untuk mengelola reservasi
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
