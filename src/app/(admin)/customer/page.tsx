import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../_components/glass-card";
import { CustomerSearch } from "./_components/customer-search";

type SearchParams = Promise<{
  q?: string;
  page?: string;
}>;

function normalizeIndoPhone(phone: string): string {
  const trimmed = phone.trim();
  if (trimmed.startsWith("+62")) return trimmed.slice(1);
  if (trimmed.startsWith("62")) return trimmed;
  if (trimmed.startsWith("0")) return `62${trimmed.slice(1)}`;
  return `62${trimmed}`;
}

export default async function CustomerPage(props: { searchParams: SearchParams }) {
  const session = await auth();
  const searchParams = await props.searchParams;

  if (!session?.user) {
    redirect("/");
  }

  const searchQuery = (searchParams.q ?? "").trim();
  const pageParam = Number.parseInt((searchParams.page ?? "1").trim(), 10);
  const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  const pageSize = 12;

  const where = {
    deletedAt: null,
    OR: searchQuery
      ? [
          { motherName: { contains: searchQuery } },
          { motherPhone: { contains: searchQuery } },
          { motherEmail: { contains: searchQuery } },
        ]
      : undefined,
  };

  const [totalCount, customers] = await Promise.all([
    db.customer.count({ where }),
    db.customer.findMany({
      where,
      include: {
        babies: {
          where: { deletedAt: null },
          select: { id: true, name: true, birthDate: true },
        },
        _count: { select: { babies: true, reservations: true } },
      },
      orderBy: { createdAt: "desc" },
      take: pageSize,
      skip: (page - 1) * pageSize,
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  return (
    <section className="grid gap-6">
      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Customer</h2>
            <p className="mt-1 text-sm text-slate-700/80">
              {totalCount} customer ditemukan
            </p>
          </div>
          {session.user.role === "ADMIN" ? (
            <Link
              href="/customer/new"
              className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
            >
              + Tambah Customer
            </Link>
          ) : null}
        </div>

        <div className="mt-5 flex gap-2">
          <CustomerSearch initialQuery={searchQuery} />
        </div>
      </GlassCard>

      {totalCount === 0 ? (
        <GlassCard>
          <div className="py-12 text-center">
            <p className="text-sm text-slate-700/80">
              {searchQuery ? "Tidak ada customer ditemukan" : "Belum ada customer"}
            </p>
          </div>
        </GlassCard>
      ) : (
        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/60 text-xs text-slate-600">
                  <th className="px-3 py-3 font-medium">Nama Bunda</th>
                  <th className="px-3 py-3 font-medium">WA</th>
                  <th className="px-3 py-3 font-medium">Email</th>
                  <th className="px-3 py-3 font-medium">Baby</th>
                  <th className="px-3 py-3 font-medium">Reservasi</th>
                  <th className="px-3 py-3 font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c) => {
                  const waPhone = normalizeIndoPhone(c.motherPhone);
                  const firstBaby = c.babies[0];
                  const babyName = firstBaby?.name ?? "";
                  const birthDateText = firstBaby?.birthDate
                    ? new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(
                        firstBaby.birthDate,
                      )
                    : "";
                  const waText = encodeURIComponent(
                    babyName
                      ? `Halo Bunda ${c.motherName}, selamat ulang tahun untuk ${babyName}! 🎉\nSemoga sehat selalu. (Tanggal lahir: ${birthDateText})`
                      : `Halo Bunda ${c.motherName}, kami mengucapkan selamat ulang tahun untuk si kecil! 🎉`,
                  );
                  const waHref = `https://wa.me/${waPhone}?text=${waText}`;

                  return (
                    <tr key={c.id} className="border-b border-white/50">
                      <td className="px-3 py-3">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-900">{c.motherName}</span>
                          {c.address ? (
                            <span className="text-xs text-slate-600">{c.address}</span>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-slate-900">{c.motherPhone}</td>
                      <td className="px-3 py-3 text-slate-900">{c.motherEmail ?? "-"}</td>
                      <td className="px-3 py-3">
                        <span className="rounded-full border border-violet-200/60 bg-violet-50/50 px-2.5 py-1 text-xs font-medium text-violet-700">
                          {c._count.babies}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="rounded-full border border-sky-200/60 bg-sky-50/50 px-2.5 py-1 text-xs font-medium text-sky-700">
                          {c._count.reservations}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex gap-2">
                          <Link
                            href={`/customer/${c.id}`}
                            className="rounded-xl border border-slate-200/60 bg-slate-50/50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50/70"
                          >
                            Detail
                          </Link>
                          <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-3 py-1.5 text-xs font-medium text-emerald-700 transition hover:bg-emerald-50/70 disabled:opacity-50"
                            aria-disabled={!firstBaby}
                          >
                            Kirim WA Birthday
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 text-sm">
            <span className="text-slate-700/80">
              Halaman {page} dari {totalPages}
            </span>
            <div className="flex gap-2">
              {page > 1 ? (
                <Link
                  href={`/customer?${new URLSearchParams({ q: searchQuery, page: String(page - 1) }).toString()}`}
                  className="rounded-xl border border-slate-200/60 bg-slate-50/50 px-3 py-1.5 font-medium text-slate-700 transition hover:bg-slate-50/70"
                >
                  Prev
                </Link>
              ) : null}
              {page < totalPages ? (
                <Link
                  href={`/customer?${new URLSearchParams({ q: searchQuery, page: String(page + 1) }).toString()}`}
                  className="rounded-xl border border-slate-200/60 bg-slate-50/50 px-3 py-1.5 font-medium text-slate-700 transition hover:bg-slate-50/70"
                >
                  Next
                </Link>
              ) : null}
            </div>
          </div>
        </GlassCard>
      )}
    </section>
  );
}
