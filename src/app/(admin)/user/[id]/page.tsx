import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../../_components/glass-card";
import { updateUser } from "../_actions";

type SearchParams = Record<string, string | string[] | undefined>;

type Params = Promise<{ id: string }>;

export default async function EditUserPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams?: SearchParams;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const { id } = await params;

  const user = await db.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
    },
  });

  if (!user) {
    redirect("/user?error=not-found");
  }

  const errorParam =
    typeof searchParams?.error === "string" ? searchParams.error : undefined;

  const showInvalid = errorParam === "invalid";
  const showEmailExists = errorParam === "email-exists";
  const showLastAdmin = errorParam === "last-admin";

  const updateAction = updateUser.bind(null, user.id);

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/user"
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

      {showEmailExists ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Email sudah terdaftar.
          </div>
        </GlassCard>
      ) : null}

      {showLastAdmin ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Tidak bisa mengubah role admin terakhir.
          </div>
        </GlassCard>
      ) : null}

      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">Edit Pegawai</h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Kosongkan password jika tidak ingin mengubah password
        </p>
      </GlassCard>

      <form action={updateAction}>
        <GlassCard>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="email"
              >
                Email <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                defaultValue={user.email ?? ""}
                id="email"
                name="email"
                placeholder="email@example.com"
                required
                type="email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="name"
              >
                Nama Lengkap <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                defaultValue={user.name ?? ""}
                id="name"
                name="name"
                placeholder="Masukkan nama lengkap"
                required
                type="text"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="role"
              >
                Role <span className="text-rose-600">*</span>
              </label>
              <select
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                defaultValue={user.role}
                id="role"
                name="role"
                required
              >
                <option value="ADMIN">Admin</option>
                <option value="MIDWIFE">Midwife (Bidan)</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="password"
              >
                Password Baru (Opsional)
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="password"
                minLength={8}
                name="password"
                placeholder="Minimal 8 karakter"
                type="password"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              className="flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
              type="submit"
            >
              Simpan Perubahan
            </button>
            <Link
              className="rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
              href="/user"
            >
              Batal
            </Link>
          </div>
        </GlassCard>
      </form>
    </section>
  );
}
