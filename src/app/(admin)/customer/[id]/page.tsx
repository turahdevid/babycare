import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../../_components/glass-card";
import { StatusPill } from "../../_components/status-pill";
import { addBaby } from "../_actions";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function calculateAge(birthDate: Date) {
  const today = new Date();
  const birth = new Date(birthDate);
  const months = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
  
  if (months < 12) {
    return `${months} bulan`;
  }
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (remainingMonths === 0) {
    return `${years} tahun`;
  }
  return `${years} tahun ${remainingMonths} bulan`;
}

type Params = Promise<{ id: string }>;

export default async function CustomerDetailPage(props: { params: Params }) {
  const session = await auth();
  const params = await props.params;

  if (!session?.user) {
    redirect("/");
  }

  const isAdmin = session.user.role === "ADMIN";

  const customer = await db.customer.findUnique({
    where: { id: params.id },
    include: {
      babies: {
        where: { deletedAt: null },
        orderBy: { createdAt: "desc" },
      },
      reservations: {
        include: {
          baby: true,
          midwife: true,
          items: {
            include: {
              treatment: true,
            },
          },
        },
        orderBy: { startAt: "desc" },
        take: 20,
      },
    },
  });

  if (!customer) {
    notFound();
  }

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/customer"
        >
          ← Kembali ke daftar
        </Link>
      </div>

      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">
          {customer.motherName}
        </h2>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-700">WhatsApp:</span>
            <span className="text-slate-900">{customer.motherPhone}</span>
          </div>
          {customer.motherEmail ? (
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-700">Email:</span>
              <span className="text-slate-900">{customer.motherEmail}</span>
            </div>
          ) : null}
          {customer.address ? (
            <div>
              <span className="font-medium text-slate-700">Alamat:</span>
              <p className="mt-1 text-slate-900">{customer.address}</p>
            </div>
          ) : null}
          {customer.notes ? (
            <div>
              <span className="font-medium text-slate-700">Catatan:</span>
              <p className="mt-1 text-slate-900">{customer.notes}</p>
            </div>
          ) : null}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-base font-semibold text-slate-900">Daftar Baby</h3>
        {customer.babies.length === 0 ? (
          <p className="mt-4 text-sm text-slate-700/80">Belum ada data baby</p>
        ) : (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {customer.babies.map((baby) => (
              <div
                key={baby.id}
                className="rounded-xl border border-white/55 bg-white/25 px-4 py-3"
              >
                <p className="font-medium text-slate-900">{baby.name}</p>
                <div className="mt-2 space-y-1 text-xs text-slate-700/80">
                  {baby.gender ? (
                    <p>
                      Jenis kelamin:{" "}
                      {baby.gender === "MALE" ? "Laki-laki" : "Perempuan"}
                    </p>
                  ) : null}
                  {baby.birthDate ? (
                    <p>
                      Usia: {calculateAge(baby.birthDate)} ({formatDate(baby.birthDate)})
                    </p>
                  ) : null}
                  {baby.notes ? <p>Catatan: {baby.notes}</p> : null}
                </div>
              </div>
            ))}
          </div>
        )}

        {isAdmin ? (
          <div className="mt-6 rounded-2xl border border-white/55 bg-white/25 px-4 py-4">
            <h4 className="text-sm font-semibold text-slate-900">
              Tambah Baby
            </h4>
            <form action={addBaby.bind(null, customer.id)} className="mt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="babyName"
                  >
                    Nama Baby <span className="text-rose-600">*</span>
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="babyName"
                    name="name"
                    placeholder="Masukkan nama baby"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="babyGender"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="babyGender"
                    name="gender"
                  >
                    <option value="">-</option>
                    <option value="MALE">Laki-laki</option>
                    <option value="FEMALE">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="babyBirthDate"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="babyBirthDate"
                    name="birthDate"
                    type="date"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="babyNotes"
                  >
                    Usia Baby / Catatan (Opsional)
                  </label>
                  <textarea
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="babyNotes"
                    name="notes"
                    placeholder="Contoh: 1 bulan 2 minggu"
                    rows={2}
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="w-full rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
                  type="submit"
                >
                  Simpan Baby
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </GlassCard>

      <GlassCard>
        <h3 className="text-base font-semibold text-slate-900">
          Histori Reservasi
        </h3>
        {customer.reservations.length === 0 ? (
          <p className="mt-4 text-sm text-slate-700/80">
            Belum ada reservasi
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            {customer.reservations.map((reservation) => {
              const treatmentNames = reservation.items
                .map((item) => item.treatment.name)
                .join(", ");
              return (
                <Link
                  key={reservation.id}
                  href={`/reservation/${reservation.id}`}
                >
                  <div className="rounded-xl border border-white/55 bg-white/25 px-4 py-3 transition hover:bg-white/35">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-slate-900">
                            {formatDate(reservation.startAt)}
                          </span>
                          <StatusPill status={reservation.status} />
                        </div>
                        <div className="mt-2 space-y-1 text-xs text-slate-700/80">
                          <p>
                            Waktu: {formatTime(reservation.startAt)} -{" "}
                            {formatTime(reservation.endAt)}
                          </p>
                          {reservation.baby ? (
                            <p>Baby: {reservation.baby.name}</p>
                          ) : null}
                          {reservation.midwife ? (
                            <p>
                              Bidan:{" "}
                              {reservation.midwife.name ??
                                reservation.midwife.email}
                            </p>
                          ) : null}
                          <p>Treatment: {treatmentNames || "-"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </GlassCard>
    </section>
  );
}
