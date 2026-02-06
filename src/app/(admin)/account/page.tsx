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
    <section className="grid gap-6">
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
    </section>
  );
}
