import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../../../_components/glass-card";
import { updateCustomer } from "../../_actions";

type Params = Promise<{ id: string }>;

export default async function EditCustomerPage(props: { params: Params }): Promise<React.JSX.Element> {
  const session = await auth();
  const params = await props.params;

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const customer = await db.customer.findUnique({
    where: { id: params.id, deletedAt: null },
    select: {
      id: true,
      motherName: true,
      fatherName: true,
      motherPhone: true,
      motherEmail: true,
      address: true,
      notes: true,
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
          href={`/customer/${customer.id}`}
        >
          ← Kembali ke detail
        </Link>
      </div>

      <GlassCard>
        <h2 className="text-xl font-semibold text-slate-900">Edit Customer</h2>
        <p className="mt-1 text-sm text-slate-700/80">
          Ubah data customer {customer.motherName}
        </p>
      </GlassCard>

      <form action={updateCustomer.bind(null, customer.id)}>
        <GlassCard>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="motherName"
                >
                  Nama Ibu <span className="text-rose-600">*</span>
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  defaultValue={customer.motherName}
                  id="motherName"
                  name="motherName"
                  placeholder="Masukkan nama ibu"
                  required
                  type="text"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="fatherName"
                >
                  Nama Ayah (Opsional)
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  defaultValue={customer.fatherName ?? ""}
                  id="fatherName"
                  name="fatherName"
                  placeholder="Masukkan nama ayah"
                  type="text"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="motherPhone"
                >
                  No. Telepon / WhatsApp <span className="text-rose-600">*</span>
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  defaultValue={customer.motherPhone}
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
                  defaultValue={customer.motherEmail ?? ""}
                  id="motherEmail"
                  name="motherEmail"
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
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
                defaultValue={customer.address ?? ""}
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
                defaultValue={customer.notes ?? ""}
                id="notes"
                name="notes"
                placeholder="Catatan tambahan"
                rows={2}
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
              href={`/customer/${customer.id}`}
            >
              Batal
            </Link>
          </div>
        </GlassCard>
      </form>
    </section>
  );
}
