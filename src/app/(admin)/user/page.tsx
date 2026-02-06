import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../_components/glass-card";
import { deleteUser } from "./_actions";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function UserManagementPage({
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

  const users = await db.user.findMany({
    orderBy: { email: "asc" },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      emailVerified: true,
    },
  });

  const userReservationCounts = await Promise.all(
    users.map(async (user) => ({
      userId: user.id,
      count: await db.reservation.count({
        where: { midwifeId: user.id },
      }),
    })),
  );

  const reservationCountMap = new Map(
    userReservationCounts.map((item) => [item.userId, item.count]),
  );

  const successParam =
    typeof searchParams?.success === "string" ? searchParams.success : undefined;
  const errorParam =
    typeof searchParams?.error === "string" ? searchParams.error : undefined;

  const showCreated = successParam === "created";
  const showUpdated = successParam === "updated";
  const showDeleted = successParam === "deleted";

  const showInvalid = errorParam === "invalid";
  const showNotFound = errorParam === "not-found";
  const showCannotDeleteSelf = errorParam === "cannot-delete-self";
  const showLastAdmin = errorParam === "last-admin";

  return (
    <section className="grid gap-6">
      {showCreated ? (
        <GlassCard>
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
            Pegawai berhasil ditambahkan
          </div>
        </GlassCard>
      ) : null}

      {showUpdated ? (
        <GlassCard>
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
            Pegawai berhasil diperbarui
          </div>
        </GlassCard>
      ) : null}

      {showDeleted ? (
        <GlassCard>
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
            Pegawai berhasil dihapus
          </div>
        </GlassCard>
      ) : null}

      {showInvalid ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Data tidak valid. Periksa kembali input.
          </div>
        </GlassCard>
      ) : null}

      {showNotFound ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Pegawai tidak ditemukan
          </div>
        </GlassCard>
      ) : null}

      {showCannotDeleteSelf ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Tidak bisa menghapus akun yang sedang digunakan
          </div>
        </GlassCard>
      ) : null}

      {showLastAdmin ? (
        <GlassCard>
          <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
            Tidak bisa menghapus admin terakhir
          </div>
        </GlassCard>
      ) : null}

      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Manajemen Pegawai
            </h2>
            <p className="mt-1 text-sm text-slate-700/80">
              {users.length} pegawai terdaftar
            </p>
          </div>
          <Link
            href="/user/new"
            className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
          >
            + Tambah Pegawai
          </Link>
        </div>
      </GlassCard>

      <div className="grid gap-4">
        {users.map((user) => {
          const deleteAction = deleteUser.bind(null, user.id);

          return (
            <GlassCard key={user.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <h3 className="truncate text-base font-semibold text-slate-900">
                        {user.name ?? user.email}
                      </h3>
                      <span
                        className={
                          user.role === "ADMIN"
                            ? "rounded-full border border-rose-200/60 bg-rose-50/50 px-2.5 py-0.5 text-xs font-medium text-rose-700"
                            : "rounded-full border border-violet-200/60 bg-violet-50/50 px-2.5 py-0.5 text-xs font-medium text-violet-700"
                        }
                      >
                        {user.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        aria-label="Edit pegawai"
                        title="Edit"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/60 bg-slate-50/50 text-slate-700 transition hover:bg-slate-50/70"
                        href={`/user/${user.id}`}
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

                      <form action={deleteAction}>
                        <button
                          aria-label="Hapus pegawai"
                          title="Hapus"
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
                  </div>

                  <div className="mt-2 space-y-1 text-sm text-slate-700/80">
                    <p>Email: {user.email}</p>
                    {user.emailVerified ? (
                      <p className="text-xs text-emerald-700">✓ Email verified</p>
                    ) : (
                      <p className="text-xs text-amber-700">⚠ Email not verified</p>
                    )}
                    {user.role === "MIDWIFE" ? (
                      <p className="text-xs">
                        {reservationCountMap.get(user.id) ?? 0} reservasi ditangani
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
