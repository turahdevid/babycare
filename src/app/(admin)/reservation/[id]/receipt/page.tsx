import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db, type Prisma } from "~/server/db";
import { GlassCard } from "~/app/(admin)/_components/glass-card";
import { PrintReceiptButton } from "./_components/print-receipt-button";

const reservationReceiptInclude = {
  customer: true,
  baby: true,
  midwife: true,
  items: {
    include: {
      treatment: true,
      baby: true,
    },
  },
  auditLogs: {
    where: { action: "COMPLETE" },
    include: { actor: true },
    orderBy: { createdAt: "desc" },
    take: 1,
  },
} satisfies Prisma.ReservationInclude;

type ReservationReceipt = Prisma.ReservationGetPayload<{
  include: typeof reservationReceiptInclude;
}>;

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
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

type ReservationBaby = {
  id: string;
  name: string;
  birthDate?: Date | null;
};

export default async function ReservationReceiptPage(props: { params: Params }) {
  const session = await auth();
  const params = await props.params;

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN" && session.user.role !== "MIDWIFE") {
    redirect("/dashboard");
  }

  const reservation = await db.reservation.findUnique({
    where: { id: params.id },
    include: reservationReceiptInclude,
  });

  if (!reservation) {
    notFound();
  }

  const resolvedReservation = reservation as ReservationReceipt;

  const isMidwife = session.user.role === "MIDWIFE";
  const isOwnReservation = resolvedReservation.midwifeId === session.user.id;
  if (isMidwife && !isOwnReservation) {
    redirect("/dashboard");
  }

  const totalPrice = resolvedReservation.items.reduce(
    (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
    0,
  );

  const storedSubtotal = resolvedReservation.subtotalPrice?.toNumber();
  const storedDiscountAmount = resolvedReservation.discountAmount?.toNumber();
  const storedTotal = resolvedReservation.totalPrice?.toNumber();

  const subtotalPrice = storedSubtotal ?? totalPrice;
  const discountPercent = resolvedReservation.discountPercent;
  const discountAmount =
    storedDiscountAmount ??
    (typeof discountPercent === "number" && discountPercent > 0
      ? (subtotalPrice * discountPercent) / 100
      : 0);
  const hasDiscount =
    (typeof discountPercent === "number" && discountPercent > 0) ||
    discountAmount > 0;
  const finalTotal = storedTotal ?? Math.max(subtotalPrice - discountAmount, 0);

  const cashier = resolvedReservation.auditLogs[0]?.actor;
  const cashierText = cashier?.name ?? cashier?.email ?? "-";

  const reservationBabies = (() => {
    const map = new Map<string, ReservationBaby>();

    for (const item of resolvedReservation.items) {
      if (item.baby) {
        map.set(item.baby.id, {
          id: item.baby.id,
          name: item.baby.name,
          birthDate: item.baby.birthDate,
        });
      }
    }

    if (resolvedReservation.baby) {
      map.set(resolvedReservation.baby.id, {
        id: resolvedReservation.baby.id,
        name: resolvedReservation.baby.name,
        birthDate: resolvedReservation.baby.birthDate,
      });
    }

    return Array.from(map.values());
  })();

  const hasMultipleBabies = reservationBabies.length > 1;

  return (
    <section className="grid gap-6">
      <style>{`
        @media print {
          nav[aria-label='Bottom navigation'] { display: none !important; }
          header { display: none !important; }
          a { text-decoration: none !important; }
          .receipt-actions { display: none !important; }
          .receipt-shell { box-shadow: none !important; border: none !important; background: white !important; }
          .receipt-container { max-width: 360px !important; margin: 0 auto !important; }
        }
      `}</style>

      <div className="flex items-center justify-between gap-4 receipt-actions">
        <Link
          className="text-sm text-slate-700/80 transition hover:text-slate-900"
          href={`/reservation/${resolvedReservation.id}`}
        >
          ← Kembali
        </Link>
        <PrintReceiptButton />
      </div>

      <div className="receipt-container">
        <GlassCard className="receipt-shell">
          <div className="text-center">
            <h2 className="text-base font-semibold text-slate-900">Struk Pembayaran</h2>
            <p className="mt-1 text-xs text-slate-700/80">
              #{resolvedReservation.id.slice(0, 8)}
            </p>
          </div>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-700/80">Tanggal</span>
              <span className="text-right font-medium text-slate-900">
                {formatDateTime(reservation.startAt)}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-700/80">Customer</span>
              <span className="text-right font-medium text-slate-900">
                {reservation.customer.motherName}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-700/80">WhatsApp</span>
              <span className="text-right font-medium text-slate-900">
                {reservation.customer.motherPhone}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-700/80">Anak</span>
              <span className="text-right font-medium text-slate-900">
                {reservationBabies.length > 0
                  ? reservationBabies.map((baby) => baby.name).join(", ")
                  : "-"}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-700/80">Bidan</span>
              <span className="text-right font-medium text-slate-900">
                {resolvedReservation.midwife?.name ?? resolvedReservation.midwife?.email ?? "-"}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-700/80">Kasir</span>
              <span className="text-right font-medium text-slate-900">{cashierText}</span>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-200/60 pt-4">
            <h3 className="text-sm font-semibold text-slate-900">Rincian Treatment</h3>

            <div className="mt-3 space-y-2">
              {hasMultipleBabies
                ? reservationBabies.map((baby) => {
                    const items = resolvedReservation.items.filter(
                      (item) => item.babyId === baby.id,
                    );
                    if (items.length === 0) return null;

                    return (
                      <div key={baby.id} className="pt-2">
                        <p className="text-xs font-semibold text-slate-900">{baby.name}</p>
                        <div className="mt-2 space-y-2">
                          {items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-start justify-between gap-4 text-sm"
                            >
                              <div className="min-w-0 flex-1">
                                <p className="font-medium text-slate-900">
                                  {item.treatment.name}
                                </p>
                                <p className="mt-0.5 text-xs text-slate-700/80">
                                  {item.quantity} x {formatCurrency(item.unitPrice.toNumber())}
                                </p>
                              </div>
                              <p className="text-right font-medium text-slate-900">
                                {formatCurrency(item.unitPrice.toNumber() * item.quantity)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                : resolvedReservation.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-4 text-sm"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-slate-900">{item.treatment.name}</p>
                        <p className="mt-0.5 text-xs text-slate-700/80">
                          {item.quantity} x {formatCurrency(item.unitPrice.toNumber())}
                        </p>
                      </div>
                      <p className="text-right font-medium text-slate-900">
                        {formatCurrency(item.unitPrice.toNumber() * item.quantity)}
                      </p>
                    </div>
                  ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-200/60 pt-3">
              <span className="font-semibold text-slate-900">Subtotal</span>
              <span className="text-base font-semibold text-slate-900">{formatCurrency(subtotalPrice)}</span>
            </div>

            {hasDiscount ? (
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-slate-700/80">
                  Discount
                  {typeof discountPercent === "number" && discountPercent > 0
                    ? ` (${discountPercent}%)`
                    : ""}
                </span>
                <span className="font-medium text-slate-900">-{formatCurrency(discountAmount)}</span>
              </div>
            ) : null}

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="font-semibold text-slate-900">{formatCurrency(finalTotal)}</span>
            </div>

            {reservation.paymentMethod ? (
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-slate-700/80">Pembayaran</span>
                <span className="font-medium text-slate-900">
                  {reservation.paymentMethod === "CASH" ? "Cash" : "Transfer"}
                </span>
              </div>
            ) : null}
          </div>

          <div className="mt-6 text-center text-xs text-slate-700/80">
            <p>Terima kasih.</p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
