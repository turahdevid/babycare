import { db, type Prisma, type ReservationStatus } from "~/server/db";

export type TransactionDetail = {
  id: string;
  customerName: string;
  babyName: string | null;
  midwifeName: string | null;
  startAt: Date;
  status: string;
  serviceType: string;
  treatments: string;
  totalPrice: number;
};

export async function fetchTransactionDetails(
  where: { gte: Date; lt: Date },
  extraWhere?: {
    status?: string;
    midwifeId?: string;
    treatmentId?: string;
  },
): Promise<TransactionDetail[]> {
  const statusFilter = extraWhere?.status
    ? { status: extraWhere.status as ReservationStatus }
    : {};
  const midwifeFilter = extraWhere?.midwifeId
    ? { midwifeId: extraWhere.midwifeId }
    : {};

  let reservationIds: string[] | undefined;

  if (extraWhere?.treatmentId) {
    const items = await db.reservationTreatment.findMany({
      where: {
        treatmentId: extraWhere.treatmentId,
        reservation: {
          startAt: { gte: where.gte, lt: where.lt },
        },
      },
      select: { reservationId: true },
      distinct: ["reservationId"],
    });
    reservationIds = items.map((i) => i.reservationId);
    if (reservationIds.length === 0) return [];
  }

  const reservationTransactionSelect = {
    id: true,
    startAt: true,
    status: true,
    serviceType: true,
    subtotalPrice: true,
    discountPercent: true,
    discountAmount: true,
    totalPrice: true,
    customer: { select: { motherName: true } },
    baby: { select: { id: true, name: true } },
    midwife: { select: { name: true, email: true } },
    items: {
      select: {
        quantity: true,
        unitPrice: true,
        treatment: { select: { name: true } },
        baby: { select: { id: true, name: true } },
      },
    },
  } satisfies Prisma.ReservationSelect;

  type ReservationTransactionRow = Prisma.ReservationGetPayload<{
    select: typeof reservationTransactionSelect;
  }>;

  const reservations: ReservationTransactionRow[] = await db.reservation.findMany({
    where: {
      startAt: { gte: where.gte, lt: where.lt },
      ...statusFilter,
      ...midwifeFilter,
      ...(reservationIds ? { id: { in: reservationIds } } : {}),
    },
    select: reservationTransactionSelect,
    orderBy: { startAt: "desc" },
    take: 200,
  });

  return reservations.map((r) => ({
    id: r.id,
    customerName: r.customer.motherName,
    babyName: (() => {
      const map = new Map<string, string>();
      for (const item of r.items) {
        if (item.baby) map.set(item.baby.id, item.baby.name);
      }
      if (r.baby) map.set(r.baby.id, r.baby.name);
      const names = Array.from(map.values());
      return names.length > 0 ? names.join(", ") : null;
    })(),
    midwifeName: r.midwife?.name ?? r.midwife?.email ?? null,
    startAt: r.startAt,
    status: r.status,
    serviceType: r.serviceType,
    treatments: (() => {
      const map = new Map<string, string[]>();
      for (const item of r.items) {
        const key = item.baby?.name ?? "-";
        const list = map.get(key) ?? [];
        list.push(`${item.treatment?.name ?? "-"} x${item.quantity}`);
        map.set(key, list);
      }
      if (map.size === 0) return "-";
      if (map.size === 1) {
        const only = map.values().next().value;
        return only ? only.join(", ") : "-";
      }
      return Array.from(map.entries())
        .map(([babyName, items]) => `${babyName}: ${items.join(", ")}`)
        .join(" | ");
    })(),
    totalPrice: (() => {
      const itemSubtotal = r.items.reduce(
        (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
        0,
      );
      const subtotal = r.subtotalPrice?.toNumber() ?? itemSubtotal;
      const discountAmount =
        r.discountAmount?.toNumber() ??
        (r.discountPercent ? (subtotal * r.discountPercent) / 100 : 0);
      const computedTotal = subtotal - discountAmount;

      return Math.max(r.totalPrice?.toNumber() ?? computedTotal, 0);
    })(),
  }));
}
