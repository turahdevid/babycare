import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../../_components/glass-card";
import { ReservationForm } from "./_components/reservation-form-v2";

export default async function NewReservationPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const [customers, treatments, midwives] = await Promise.all([
    db.customer.findMany({
      where: { deletedAt: null },
      include: {
        babies: {
          where: { deletedAt: null },
        },
      },
      orderBy: { motherName: "asc" },
    }),
    db.treatment.findMany({
      where: { deletedAt: null, isActive: true },
      orderBy: { name: "asc" },
    }),
    db.user.findMany({
      where: { role: "MIDWIFE" },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
      },
    }),
  ]);

  const uiTreatments = treatments.map((t) => ({
    id: t.id,
    name: t.name,
    description: t.description,
    durationMinutes: t.durationMinutes,
    basePrice: t.basePrice.toNumber(),
    isActive: t.isActive,
  }));

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/reservation/list"
        >
          ← Kembali ke daftar
        </Link>
      </div>

      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">
          Tambah Reservasi Baru
        </h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Isi data reservasi untuk customer
        </p>
      </GlassCard>

      <ReservationForm
        customers={customers}
        midwives={midwives}
        treatments={uiTreatments}
      />
    </section>
  );
}
