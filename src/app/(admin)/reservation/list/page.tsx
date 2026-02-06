import Link from "next/link";
import { redirect } from "next/navigation";
import type { Prisma, ReservationStatus } from "~/server/db";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "../../_components/glass-card";
import { StatusPill } from "../../_components/status-pill";
import { FilterForm } from "../_components/filter-form";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

type SearchParams = Promise<{
  status?: string;
  date?: string;
}>;

export default async function ReservationListPage(props: {
  searchParams: SearchParams;
}) {
  const session = await auth();
  const searchParams = await props.searchParams;

  if (!session?.user) {
    redirect("/");
  }

  const isAdmin = session.user.role === "ADMIN";
  const statusFilter = searchParams.status;
  const dateFilter = searchParams.date;

  const whereClause: Prisma.ReservationWhereInput = {};

  if (!isAdmin) {
    whereClause.midwifeId = session.user.id;
  }

  if (statusFilter && statusFilter !== "ALL") {
    whereClause.status = statusFilter as ReservationStatus;
  }

  if (dateFilter) {
    const targetDate = new Date(dateFilter);
    const nextDay = new Date(targetDate);
    nextDay.setDate(nextDay.getDate() + 1);
    whereClause.startAt = { gte: targetDate, lt: nextDay };
  }

  const reservations = await db.reservation.findMany({
    where: whereClause,
    include: {
      customer: true,
      baby: true,
      midwife: true,
      items: {
        include: {
          treatment: true,
        },
      },
    },
    orderBy: { startAt: "desc" },
    take: 50,
  });

  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href="/reservation"
        >
          ← Kembali ke menu
        </Link>
      </div>

      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              List Reservasi
            </h2>
            <p className="mt-1 text-sm text-slate-700/80">
              {reservations.length} reservasi ditemukan
            </p>
          </div>
          {isAdmin ? (
            <Link
              href="/reservation/new"
              className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
            >
              + Tambah Reservasi
            </Link>
          ) : null}
        </div>

        <FilterForm />
      </GlassCard>

      {reservations.length === 0 ? (
        <GlassCard>
          <div className="py-12 text-center">
            <p className="text-sm text-slate-700/80">
              Tidak ada reservasi ditemukan
            </p>
          </div>
        </GlassCard>
      ) : (
        <div className="grid gap-4">
          {reservations.map((reservation) => {
            const treatmentNames = reservation.items
              .map((item) => item.treatment.name)
              .join(", ");
            return (
              <Link
                key={reservation.id}
                href={`/reservation/${reservation.id}`}
              >
                <GlassCard className="transition hover:bg-white/45">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-base font-semibold text-slate-900">
                          {reservation.customer.motherName}
                        </span>
                        <StatusPill status={reservation.status} />
                      </div>
                      <div className="mt-2 space-y-1 text-sm text-slate-700/80">
                        <p>
                          <span className="font-medium">Tanggal:</span>{" "}
                          {formatDate(reservation.startAt)} •{" "}
                          {formatTime(reservation.startAt)} -{" "}
                          {formatTime(reservation.endAt)}
                        </p>
                        {reservation.baby ? (
                          <p>
                            <span className="font-medium">Baby:</span>{" "}
                            {reservation.baby.name}
                          </p>
                        ) : null}
                        {reservation.midwife ? (
                          <p>
                            <span className="font-medium">Bidan:</span>{" "}
                            {reservation.midwife.name ?? reservation.midwife.email}
                          </p>
                        ) : null}
                        <p>
                          <span className="font-medium">Treatment:</span>{" "}
                          {treatmentNames || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
