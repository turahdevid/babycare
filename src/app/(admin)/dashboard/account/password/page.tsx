import { redirect } from "next/navigation";
import { z } from "zod";

import { auth } from "~/server/auth";
import { hashPassword, verifyPassword } from "~/server/auth/password";
import { db } from "~/server/db";

type SearchParams = Record<string, string | string[] | undefined>;

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function getFormString(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : "";
}

export default async function ChangePasswordPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const errorParam = typeof searchParams?.error === "string" ? searchParams.error : undefined;
  const successParam = typeof searchParams?.success === "string" ? searchParams.success : undefined;

  const showSuccess = successParam === "1";
  const showInvalid = errorParam === "invalid";
  const showUnsupported = errorParam === "unsupported";

  async function changePassword(formData: FormData) {
    "use server";

    const currentPassword = getFormString(formData.get("currentPassword"));
    const newPassword = getFormString(formData.get("newPassword"));
    const confirmPassword = getFormString(formData.get("confirmPassword"));

    if (currentPassword === null || newPassword === null || confirmPassword === null) {
      redirect("/dashboard/account/password?error=invalid");
    }

    const parsed = changePasswordSchema.safeParse({
      currentPassword,
      newPassword,
      confirmPassword,
    });

    if (!parsed.success) {
      redirect("/dashboard/account/password?error=invalid");
    }

    const freshSession = await auth();

    if (!freshSession) {
      redirect("/");
    }

    const user = await db.user.findUnique({
      where: { id: freshSession.user.id },
      select: { password: true },
    });

    if (!user?.password) {
      redirect("/dashboard/account/password?error=unsupported");
    }

    const isValid = await verifyPassword(parsed.data.currentPassword, user.password);

    if (!isValid) {
      redirect("/dashboard/account/password?error=invalid");
    }

    const nextHash = await hashPassword(parsed.data.newPassword);

    await db.user.update({
      where: { id: freshSession.user.id },
      data: { password: nextHash },
    });

    redirect("/dashboard/account/password?success=1");
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden px-6 pb-[calc(9.5rem+env(safe-area-inset-bottom))] pt-10 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-200/70 via-pink-200/55 to-violet-200/65 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-amber-100/70 via-pink-200/45 to-sky-200/60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/35 to-white/0 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1024px]">
        <header className="mb-8">
          <div className="rounded-[22px] border border-white/55 bg-white/30 px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Ganti password
            </h1>
          </div>
        </header>

        {showSuccess ? (
          <div className="mb-6 rounded-[20px] border border-emerald-200/60 bg-emerald-50/40 p-4 text-sm font-medium text-emerald-800 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            Password berhasil diperbarui
          </div>
        ) : null}

        {showInvalid ? (
          <div className="mb-6 rounded-[20px] border border-rose-200/60 bg-rose-50/40 p-4 text-sm font-medium text-rose-800 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            Password lama tidak valid
          </div>
        ) : null}

        {showUnsupported ? (
          <div className="mb-6 rounded-[20px] border border-amber-200/60 bg-amber-50/40 p-4 text-sm font-medium text-amber-800 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            Akun ini belum memiliki password
          </div>
        ) : null}

        <div className="rounded-[24px] border border-white/55 bg-white/35 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
          <form action={changePassword} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800/90" htmlFor="currentPassword">
                Password lama
              </label>
              <input
                autoComplete="current-password"
                className="w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-14px_30px_rgba(15,23,42,0.08)] outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="currentPassword"
                name="currentPassword"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800/90" htmlFor="newPassword">
                Password baru
              </label>
              <input
                autoComplete="new-password"
                className="w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-14px_30px_rgba(15,23,42,0.08)] outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-sky-200/60"
                id="newPassword"
                name="newPassword"
                placeholder="Minimal 8 karakter"
                required
                type="password"
              />
              <p className="text-xs text-slate-600/70">
                Minimal 8 karakter, kombinasi huruf &amp; angka
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800/90" htmlFor="confirmPassword">
                Konfirmasi password baru
              </label>
              <input
                autoComplete="new-password"
                className="w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-14px_30px_rgba(15,23,42,0.08)] outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-sky-200/60"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Ulangi password baru"
                required
                type="password"
              />
            </div>

            <button
              className="group relative w-full overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#93C5FD,#FBCFE8,#C4B5FD)] bg-[length:200%_200%] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_14px_40px_rgba(59,130,246,0.18)] transition hover:bg-[position:100%_0%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              type="submit"
            >
              <span className="relative z-10">Simpan password</span>
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -left-1/2 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/35 blur-xl" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
