import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { GlassCard } from "../../_components/glass-card";
import { createTreatment } from "../_actions";
import { RupiahInput } from "../_components/rupiah-input";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function NewTreatmentPage({
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

  const errorParam =
    typeof searchParams?.error === "string" ? searchParams.error : undefined;

  const showInvalid = errorParam === "invalid";

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/treatment"
        >
          ← Kembali ke daftar
        </Link>
      </div>

      {showInvalid ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Data tidak valid. Periksa kembali input.
          </div>
        </GlassCard>
      ) : null}

      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">
          Tambah Treatment Baru
        </h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Isi data treatment untuk menambahkan layanan baru
        </p>
      </GlassCard>

      <form action={createTreatment}>
        <GlassCard>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="name"
              >
                Nama Treatment <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="name"
                name="name"
                placeholder="Contoh: Pijat bayi"
                required
                type="text"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="description"
              >
                Deskripsi (Opsional)
              </label>
              <textarea
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="description"
                name="description"
                placeholder="Deskripsi singkat"
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="durationMinutes"
                >
                  Durasi (menit) <span className="text-rose-600">*</span>
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  id="durationMinutes"
                  min={1}
                  name="durationMinutes"
                  required
                  type="number"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="basePrice"
                >
                  Harga (Rp) <span className="text-rose-600">*</span>
                </label>
                <RupiahInput
                  id="basePrice"
                  name="basePrice"
                  placeholder="Contoh: 50.000"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                className="h-4 w-4"
                defaultChecked
                id="isActive"
                name="isActive"
                type="checkbox"
              />
              <label className="text-sm text-slate-700" htmlFor="isActive">
                Aktif
              </label>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              className="flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
              type="submit"
            >
              Simpan Treatment
            </button>
            <Link
              className="rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
              href="/treatment"
            >
              Batal
            </Link>
          </div>
        </GlassCard>
      </form>
    </section>
  );
}
