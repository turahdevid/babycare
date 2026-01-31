import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-600/80">
        {label}
      </p>
      <p className="rounded-2xl border border-white/55 bg-white/25 px-4 py-3 text-sm font-medium text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
        {value}
      </p>
    </div>
  );
}

export default async function AccountPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      name: true,
      email: true,
      role: true,
      emailVerified: true,
    },
  });

  if (!user?.email) {
    redirect("/");
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
              Data user
            </h1>
          </div>
        </header>

        <div className="rounded-[24px] border border-white/55 bg-white/35 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Email" value={user.email} />
            <Field label="Role" value={user.role} />
            <Field label="Nama" value={user.name ?? "-"} />
            <Field
              label="Email verified"
              value={user.emailVerified ? "Verified" : "Not verified"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
