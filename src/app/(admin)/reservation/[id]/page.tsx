import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { calculateAge } from "~/lib/calculate-age";
import { GlassCard } from "../../_components/glass-card";
import { StatusPill } from "../../_components/status-pill";
import {
  DiscountPercentInput,
  DiscountPriceSummary,
  DiscountPreviewProvider,
} from "./_components/discount-preview-controller";
import { completeReservation } from "../_actions";

type ReservationItem = {
  id: string;
  babyId: string | null;
  quantity: number;
  durationMinutes: number;
  unitPrice: { toNumber: () => number };
  treatment: { name: string };
};

type ReservationBaby = {
  id: string;
  name: string;
  birthDate: Date | null;
};

type ReservationAuditLogEntry = {
  id: string;
  action: string;
  fromStatus: string | null;
  toStatus: string | null;
  message: string | null;
  createdAt: Date;
  actor: { name: string | null; email: string | null } | null;
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
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

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

type Params = Promise<{ id: string }>;

export default async function ReservationDetailPage(props: {
  params: Params;
}) {
  const session = await auth();
  const params = await props.params;

  if (!session?.user) {
    redirect("/");
  }

  const [reservation, midwives] = await Promise.all([
    db.reservation.findUnique({
      where: { id: params.id },
      include: {
        customer: {
          include: {
            babies: {
              where: { deletedAt: null },
              orderBy: { createdAt: "desc" },
            },
          },
        },
        baby: true,
        midwife: true,
        items: {
          include: {
            treatment: true,
            baby: true,
          },
        } as any,
        auditLogs: {
          include: {
            actor: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 10,
        },
      },
    }),
    db.user.findMany({
      where: { role: "MIDWIFE" },
      orderBy: { name: "asc" },
      select: { id: true, name: true, email: true },
    }),
  ] as const);

  if (!reservation) {
    notFound();
  }

  const isAdmin = session.user.role === "ADMIN";
  const isMidwife = session.user.role === "MIDWIFE";
  const isOwnReservation = reservation.midwifeId === session.user.id;

  if (isMidwife && !isOwnReservation) {
    redirect("/dashboard");
  }

  const items = reservation.items as unknown as ReservationItem[];
  const auditLogs = reservation.auditLogs as unknown as ReservationAuditLogEntry[];

  const totalPrice = items.reduce(
    (sum: number, item: ReservationItem) =>
      sum + item.unitPrice.toNumber() * item.quantity,
    0,
  );

  const reservationBabies = (() => {
    const map = new Map<string, ReservationBaby>();
    for (const item of reservation.items as any[]) {
      if (item?.baby) {
        map.set(item.baby.id, item.baby as ReservationBaby);
      }
    }
    if ((reservation as any).baby) {
      map.set((reservation as any).baby.id, (reservation as any).baby as ReservationBaby);
    }
    return Array.from(map.values());
  })();

  const hasMultipleBabies = reservationBabies.length > 1;

  const storedSubtotal = reservation.subtotalPrice?.toNumber();
  const subtotalPrice = storedSubtotal ?? totalPrice;
  const discountPercent = reservation.discountPercent;

  const canComplete = isAdmin || (isMidwife && isOwnReservation);
  const canPrintReceipt = Boolean(reservation.completedAt);

  return (
    <DiscountPreviewProvider
      initialDiscountPercent={discountPercent}
      subtotal={subtotalPrice}
    >
      <section className="grid gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="text-sm text-slate-700/80 transition hover:text-slate-900"
            href={
              session.user.role === "ADMIN" ? "/reservation/list" : "/reservation"
            }
          >
            ← Kembali ke daftar
          </Link>
        </div>

        <GlassCard>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Reservasi #{reservation.id.slice(0, 8)}
              </h2>
              <p className="mt-1 text-sm text-slate-700/80">
                Dibuat {formatDate(reservation.createdAt)}
              </p>
            </div>
            <StatusPill status={reservation.status} />
          </div>
        </GlassCard>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">
            Informasi Customer
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <span className="font-medium text-slate-700">Nama Bunda:</span>
              <p className="mt-1 text-slate-900">
                {reservation.customer.motherName}
              </p>
            </div>
            <div>
              <span className="font-medium text-slate-700">No. WhatsApp:</span>
              <p className="mt-1 text-slate-900">
                {reservation.customer.motherPhone}
              </p>
            </div>
            {reservation.customer.motherEmail ? (
              <div>
                <span className="font-medium text-slate-700">Email:</span>
                <p className="mt-1 text-slate-900">
                  {reservation.customer.motherEmail}
                </p>
              </div>
            ) : null}
            {reservationBabies.length > 0 ? (
              <div>
                <span className="font-medium text-slate-700">Anak:</span>
                <div className="mt-1 space-y-1 text-slate-900">
                  {reservationBabies.map((baby: ReservationBaby) => (
                    <p key={baby.id}>
                      {baby.name}
                      {baby.birthDate ? (
                        <span className="ml-2 text-xs text-slate-600">
                          ({calculateAge(baby.birthDate)})
                        </span>
                      ) : null}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">
            Jadwal & Bidan
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <span className="font-medium text-slate-700">Tanggal:</span>
              <p className="mt-1 text-slate-900">
                {formatDate(reservation.startAt)}
              </p>
            </div>
            <div>
              <span className="font-medium text-slate-700">Waktu:</span>
              <p className="mt-1 text-slate-900">
                {formatTime(reservation.startAt)} - {formatTime(reservation.endAt)}
              </p>
            </div>
            {reservation.midwife ? (
              <div>
                <span className="font-medium text-slate-700">Bidan:</span>
                <p className="mt-1 text-slate-900">
                  {reservation.midwife.name ?? reservation.midwife.email}
                </p>
              </div>
            ) : (
              <div>
                <span className="font-medium text-slate-700">Bidan:</span>
                <p className="mt-1 text-slate-700/80">Belum di-assign</p>
              </div>
            )}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="text-base font-semibold text-slate-900">Treatment</h3>
        <div className="mt-4 space-y-2">
          {hasMultipleBabies
            ? reservationBabies.map((baby: ReservationBaby) => {
                const childItems = items.filter(
                  (item: ReservationItem) => item.babyId === baby.id,
                );
                if (childItems.length === 0) return null;

                return (
                  <div key={baby.id} className="rounded-2xl border border-white/55 bg-white/20 px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">{baby.name}</p>
                    <div className="mt-3 space-y-2">
                      {childItems.map((item: ReservationItem) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-4 py-3"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-slate-900">
                              {item.treatment.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-700/80">
                              {item.durationMinutes} menit •{" "}
                              {formatCurrency(item.unitPrice.toNumber())}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-slate-900">
                              x{item.quantity}
                            </p>
                            <p className="text-xs text-slate-700/80">
                              {formatCurrency(item.unitPrice.toNumber() * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            : items.map((item: ReservationItem) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-white/55 bg-white/25 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-slate-900">
                      {item.treatment.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-700/80">
                      {item.durationMinutes} menit •{" "}
                      {formatCurrency(item.unitPrice.toNumber())}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900">x{item.quantity}</p>
                    <p className="text-xs text-slate-700/80">
                      {formatCurrency(item.unitPrice.toNumber() * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
          <DiscountPriceSummary />
          {reservation.paymentMethod ? (
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">Metode Pembayaran</span>
              <span className="rounded-full border border-emerald-200/60 bg-emerald-50/50 px-3 py-1 text-xs font-medium text-emerald-700">
                {reservation.paymentMethod === "CASH" ? "Cash" : "Transfer"}
              </span>
            </div>
          ) : null}
        </div>
      </GlassCard>

      {reservation.notes ? (
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Catatan</h3>
          <p className="mt-3 text-sm text-slate-700/80">{reservation.notes}</p>
        </GlassCard>
      ) : null}

      {auditLogs.length > 0 ? (
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">
            Riwayat Perubahan
          </h3>
          <div className="mt-4 space-y-2">
            {auditLogs.map((log: ReservationAuditLogEntry) => (
              <div
                key={log.id}
                className="rounded-xl border border-white/55 bg-white/25 px-4 py-3 text-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-slate-900">{log.action}</p>
                    {log.fromStatus && log.toStatus ? (
                      <p className="mt-1 text-xs text-slate-700/80">
                        {log.fromStatus} → {log.toStatus}
                      </p>
                    ) : null}
                    {log.message ? (
                      <p className="mt-1 text-xs text-slate-700/80">
                        {log.message}
                      </p>
                    ) : null}
                  </div>
                  <div className="text-right text-xs text-slate-700/80">
                    <p>{formatDate(log.createdAt)}</p>
                    <p>{formatTime(log.createdAt)}</p>
                    {log.actor ? (
                      <p className="mt-1">
                        {log.actor.name ?? log.actor.email}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      ) : null}

      {canComplete ? (
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Kasir</h3>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {canPrintReceipt ? (
              <Link
                href={`/reservation/${reservation.id}/receipt`}
                className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
              >
                Cetak Struk
              </Link>
            ) : null}

            {!canPrintReceipt ? (
              <span className="text-xs text-slate-700/80">
                Lengkapi data baby dan bidan untuk menyelesaikan reservasi.
              </span>
            ) : null}
          </div>

          {!canPrintReceipt ? (
            <form
              action={completeReservation.bind(null, reservation.id)}
              className="mt-4 grid gap-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="complete-babyId"
                  >
                    {hasMultipleBabies ? (
                      "Anak"
                    ) : (
                      <>
                        Baby <span className="text-rose-600">*</span>
                      </>
                    )}
                  </label>
                  {hasMultipleBabies ? (
                    <>
                      <input
                        name="babyId"
                        type="hidden"
                        value={reservation.babyId ?? reservationBabies[0]?.id ?? ""}
                      />
                      <div className="mt-1.5 rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900">
                        {reservationBabies
                          .map((baby: ReservationBaby) => baby.name)
                          .join(", ")}
                      </div>
                    </>
                  ) : reservation.customer.babies.length > 0 ? (
                    <select
                      className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                      defaultValue={reservation.babyId ?? ""}
                      id="complete-babyId"
                      name="babyId"
                      required
                    >
                      <option value="">Pilih baby</option>
                      {reservation.customer.babies.map((baby: { id: string; name: string }) => (
                        <option key={baby.id} value={baby.id}>
                          {baby.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="mt-1.5 rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
                      Baby belum ada. Tambahkan baby dulu di halaman customer.
                    </div>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="complete-midwifeId"
                  >
                    Bidan <span className="text-rose-600">*</span>
                  </label>

                  {isMidwife ? (
                    <>
                      <input name="midwifeId" type="hidden" value={session.user.id} />
                      <div className="mt-1.5 rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900">
                        {session.user.name ?? session.user.email}
                      </div>
                    </>
                  ) : (
                    <select
                      className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                      defaultValue={reservation.midwifeId ?? ""}
                      id="complete-midwifeId"
                      name="midwifeId"
                      required
                    >
                      <option value="">Pilih bidan</option>
                      {midwives.map((midwife) => (
                        <option key={midwife.id} value={midwife.id}>
                          {midwife.name ?? midwife.email}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="complete-paymentMethod"
                >
                  Metode Pembayaran
                </label>
                <select
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  defaultValue={reservation.paymentMethod ?? ""}
                  id="complete-paymentMethod"
                  name="paymentMethod"
                >
                  <option value="">Belum dipilih</option>
                  <option value="CASH">Cash</option>
                  <option value="TRANSFER">Transfer</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="complete-discountPercent"
                >
                  Discount (%)
                </label>
                <DiscountPercentInput
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  id="complete-discountPercent"
                  inputMode="numeric"
                  max={100}
                  min={0}
                  name="discountPercent"
                  placeholder="0 - 100"
                  type="number"
                />
                <p className="mt-1 text-xs text-slate-600/80">Range diskon 0% - 100%</p>
              </div>

              <button
                className="rounded-2xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50/70 disabled:opacity-50"
                disabled={reservation.customer.babies.length === 0}
                type="submit"
              >
                Lengkapi &amp; Selesaikan
              </button>
            </form>
          ) : null}
        </GlassCard>
      ) : null}

      {isAdmin ? (
        <GlassCard>
          <h3 className="text-base font-semibold text-slate-900">Aksi</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
              type="button"
            >
              Update Status
            </button>
            <button
              className="rounded-2xl border border-violet-200/60 bg-violet-50/50 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50/70"
              type="button"
            >
              Assign Bidan
            </button>
            <button
              className="rounded-2xl border border-rose-200/60 bg-rose-50/50 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50/70"
              type="button"
            >
              Cancel
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-700/80">
            Fitur update status akan segera ditambahkan
          </p>
        </GlassCard>
      ) : null}
      </section>
    </DiscountPreviewProvider>
  );
}
