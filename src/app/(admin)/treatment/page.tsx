import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../_components/glass-card";
import { archiveTreatment, toggleTreatmentActive } from "./_actions";

type SearchParams = Record<string, string | string[] | undefined>;

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function formatDuration(minutes: number) {
  if (minutes < 60) {
    return `${minutes} menit`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} jam`;
  }
  return `${hours} jam ${remainingMinutes} menit`;
}

export default async function TreatmentPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const treatments = await db.treatment.findMany({
    where: { deletedAt: null },
    orderBy: { name: "asc" },
  });

  const successParam =
    typeof searchParams?.success === "string" ? searchParams.success : undefined;
  const errorParam =
    typeof searchParams?.error === "string" ? searchParams.error : undefined;

  const showCreated = successParam === "created";
  const showUpdated = successParam === "updated";
  const showToggled = successParam === "toggled";
  const showArchived = successParam === "archived";

  const showNotFound = errorParam === "not-found";

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/reservation"
        >
          ← Kembali ke menu
        </Link>

        <Link
          className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
          href="/treatment/new"
        >
          Tambah Treatment
        </Link>
      </div>

      {showCreated ? (
        <GlassCard>
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
            Treatment berhasil ditambahkan
          </div>
        </GlassCard>
      ) : null}

      {showUpdated ? (
        <GlassCard>
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
            Treatment berhasil diperbarui
          </div>
        </GlassCard>
      ) : null}

      {showToggled ? (
        <GlassCard>
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
            Status treatment berhasil diubah
          </div>
        </GlassCard>
      ) : null}

      {showArchived ? (
        <GlassCard>
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
            Treatment berhasil diarsipkan
          </div>
        </GlassCard>
      ) : null}

      {showNotFound ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Treatment tidak ditemukan
          </div>
        </GlassCard>
      ) : null}

      <GlassCard>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Master Treatment
            </h2>
            <p className="mt-1 text-sm text-slate-700/80">
              Kelola daftar layanan yang tersedia
            </p>
          </div>
          <span className="rounded-full border border-white/60 bg-white/40 px-3 py-1 text-sm font-medium text-slate-700">
            {treatments.length} treatment
          </span>
        </div>
      </GlassCard>

      {treatments.length === 0 ? (
        <GlassCard>
          <div className="py-8 text-center">
            <p className="text-sm text-slate-700/80">
              Belum ada treatment. Tambahkan treatment pertama.
            </p>
          </div>
        </GlassCard>
      ) : (
        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] table-auto border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="whitespace-nowrap border-b border-white/60 bg-white/30 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Nama
                  </th>
                  <th className="border-b border-white/60 bg-white/30 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Deskripsi
                  </th>
                  <th className="whitespace-nowrap border-b border-white/60 bg-white/30 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Durasi
                  </th>
                  <th className="whitespace-nowrap border-b border-white/60 bg-white/30 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Harga
                  </th>
                  <th className="whitespace-nowrap border-b border-white/60 bg-white/30 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Status
                  </th>
                  <th className="whitespace-nowrap border-b border-white/60 bg-white/30 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {treatments.map((treatment) => {
                  const toggleAction = toggleTreatmentActive.bind(
                    null,
                    treatment.id,
                  );
                  const archiveAction = archiveTreatment.bind(
                    null,
                    treatment.id,
                  );

                  return (
                    <tr key={treatment.id}>
                      <td className="border-b border-white/40 px-3 py-3 align-top">
                        <div className="font-medium text-slate-900">
                          {treatment.name}
                        </div>
                      </td>
                      <td className="border-b border-white/40 px-3 py-3 align-top">
                        {treatment.description ? (
                          <div className="line-clamp-2 text-sm text-slate-700/80">
                            {treatment.description}
                          </div>
                        ) : (
                          <div className="text-sm text-slate-500/70">-</div>
                        )}
                      </td>
                      <td className="whitespace-nowrap border-b border-white/40 px-3 py-3 align-top text-sm text-slate-700">
                        {formatDuration(treatment.durationMinutes)}
                      </td>
                      <td className="whitespace-nowrap border-b border-white/40 px-3 py-3 align-top text-sm font-medium text-slate-900">
                        {formatRupiah(treatment.basePrice.toNumber())}
                      </td>
                      <td className="whitespace-nowrap border-b border-white/40 px-3 py-3 align-top">
                        <span
                          className={
                            treatment.isActive
                              ? "inline-flex rounded-full border border-emerald-200/60 bg-emerald-50/50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                              : "inline-flex rounded-full border border-slate-200/60 bg-slate-50/50 px-2.5 py-1 text-xs font-medium text-slate-600"
                          }
                        >
                          {treatment.isActive ? "Aktif" : "Nonaktif"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap border-b border-white/40 px-3 py-3 align-top">
                        <div className="flex flex-wrap items-center gap-2">
                          <Link
                            aria-label="Edit treatment"
                            title="Edit"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/60 bg-slate-50/50 text-slate-700 transition hover:bg-slate-50/70"
                            href={`/treatment/${treatment.id}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="h-4 w-4"
                            >
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                            </svg>
                          </Link>
                          <form action={toggleAction}>
                            <button
                              aria-label={
                                treatment.isActive
                                  ? "Nonaktifkan treatment"
                                  : "Aktifkan treatment"
                              }
                              title={
                                treatment.isActive ? "Nonaktifkan" : "Aktifkan"
                              }
                              className={
                                treatment.isActive
                                  ? "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50/50 text-amber-800 transition hover:bg-amber-50/70"
                                  : "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200/60 bg-emerald-50/50 text-emerald-800 transition hover:bg-emerald-50/70"
                              }
                              type="submit"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-4 w-4"
                              >
                                <path d="M12 2v8" />
                                <path d="M5.5 6.5a7.5 7.5 0 1 0 13 0" />
                              </svg>
                            </button>
                          </form>
                          <form action={archiveAction}>
                            <button
                              aria-label="Arsipkan treatment"
                              title="Arsipkan"
                              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rose-200/60 bg-rose-50/50 text-rose-700 transition hover:bg-rose-50/70"
                              type="submit"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-4 w-4"
                              >
                                <path d="M3 6h18" />
                                <path d="M19 6v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                              </svg>
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </GlassCard>
      )}
    </section>
  );
}
