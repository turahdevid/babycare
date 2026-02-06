import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { GlassCard } from "../../_components/glass-card";
import { SendReservationLink } from "./_components/send-reservation-link";

export default async function ReservationSendFormPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/reservation"
        >
          ← Kembali ke menu
        </Link>
      </div>

      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">
          Send Form Reservasi
        </h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Buat link form reservasi untuk customer tanpa perlu login.
        </p>
      </GlassCard>

      <SendReservationLink />
    </section>
  );
}
