import { db } from "~/server/db";
import { GlassCard } from "../(admin)/_components/glass-card";

import { PublicReservationForm } from "./_components/public-reservation-form";

type TreatmentItem = {
  id: string;
  name: string;
  description: string | null;
  durationMinutes: number;
  basePrice: number;
};

export default async function PublicReservationPage() {

  const treatments = await db.treatment.findMany({
    where: { deletedAt: null, isActive: true },
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      description: true,
      durationMinutes: true,
      basePrice: true,
    },
  });

  const uiTreatments: TreatmentItem[] = treatments.map((t) => ({
    id: t.id,
    name: t.name,
    description: t.description,
    durationMinutes: t.durationMinutes,
    basePrice: t.basePrice.toNumber(),
  }));

  return (
    <main className="relative min-h-screen overflow-x-hidden px-6 py-10 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-200/70 via-pink-200/55 to-violet-200/65 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-amber-100/70 via-pink-200/45 to-sky-200/60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/35 to-white/0 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1024px]">
        <section className="grid gap-6">
          <GlassCard>
            <h1 className="text-xl font-semibold text-slate-900">
              Form Reservasi
            </h1>
            <p className="mt-1 text-sm text-slate-700/80">
              Silakan isi data untuk membuat reservasi. Tim kami akan menghubungi
              Anda untuk konfirmasi.
            </p>
          </GlassCard>

          <PublicReservationForm treatments={uiTreatments} />
        </section>
      </div>
    </main>
  );
}
