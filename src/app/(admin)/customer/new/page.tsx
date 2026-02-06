import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { GlassCard } from "../../_components/glass-card";
import { createCustomer } from "../_actions";

export default async function NewCustomerPage() {
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
          href="/customer"
        >
          ← Kembali ke daftar
        </Link>
      </div>

      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">
          Tambah Customer Baru
        </h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Isi data bunda untuk membuat customer baru
        </p>
      </GlassCard>

      <form action={createCustomer}>
        <GlassCard>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="motherName"
              >
                Nama Bunda <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="motherName"
                name="motherName"
                placeholder="Masukkan nama bunda"
                required
                type="text"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="motherPhone"
              >
                Nomor WhatsApp <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="motherPhone"
                name="motherPhone"
                placeholder="08xxxxxxxxxx"
                required
                type="tel"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="motherEmail"
              >
                Email (Opsional)
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="motherEmail"
                name="motherEmail"
                placeholder="email@example.com"
                type="email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="address"
              >
                Alamat (Opsional)
              </label>
              <textarea
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="address"
                name="address"
                placeholder="Masukkan alamat lengkap"
                rows={3}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="notes"
              >
                Catatan (Opsional)
              </label>
              <textarea
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="notes"
                name="notes"
                placeholder="Catatan tambahan"
                rows={2}
              />
            </div>

            <div className="rounded-2xl border border-white/55 bg-white/25 px-4 py-4">
              <h3 className="text-sm font-semibold text-slate-900">
                Data Baby (Opsional)
              </h3>
              <p className="mt-1 text-xs text-slate-700/80">
                Isi jika ingin menyimpan data baby untuk reminder ulang tahun.
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="babyName"
                  >
                    Nama Baby
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="babyName"
                    name="babyName"
                    placeholder="Masukkan nama baby"
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
                    name="babyGender"
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
                    name="babyBirthDate"
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
                    name="babyNotes"
                    placeholder="Contoh: 1 bulan 2 minggu"
                    rows={2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              className="flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
              type="submit"
            >
              Simpan Customer
            </button>
            <Link
              className="rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
              href="/customer"
            >
              Batal
            </Link>
          </div>
        </GlassCard>
      </form>
    </section>
  );
}
