import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { GlassCard } from "~/app/(admin)/_components/glass-card";
import { PrintReceiptButton } from "./_components/print-receipt-button";

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
    include: {
      customer: true,
      baby: true,
      midwife: true,
      items: {
        include: {
          treatment: true,
        },
      },
      auditLogs: {
        where: { action: "COMPLETE" },
        include: { actor: true },
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  if (!reservation) {
    notFound();
  }

  const isMidwife = session.user.role === "MIDWIFE";
  const isOwnReservation = reservation.midwifeId === session.user.id;
  if (isMidwife && !isOwnReservation) {
    redirect("/dashboard");
  }

  const totalPrice = reservation.items.reduce(
    (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
    0,
  );

  const cashier = reservation.auditLogs[0]?.actor;
  const cashierText = cashier?.name ?? cashier?.email ?? "-";

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
          href={`/reservation/${reservation.id}`}
        >
          ← Kembali
        </Link>
        <PrintReceiptButton />
      </div>

      <div className="receipt-container">
        <GlassCard className="receipt-shell">
          <div className="text-center">
            <h2 className="text-base font-semibold text-slate-900">Struk Pembayaran</h2>
            <p className="mt-1 text-xs text-slate-700/80">#{reservation.id.slice(0, 8)}</p>
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
              <span className="text-slate-700/80">Baby</span>
              <span className="text-right font-medium text-slate-900">
                {reservation.baby?.name ?? "-"}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-700/80">Bidan</span>
              <span className="text-right font-medium text-slate-900">
                {reservation.midwife?.name ?? reservation.midwife?.email ?? "-"}
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
              {reservation.items.map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4 text-sm">
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
              <span className="font-semibold text-slate-900">Total</span>
              <span className="text-base font-semibold text-slate-900">{formatCurrency(totalPrice)}</span>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-700/80">
            <p>Terima kasih.</p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
