import { db } from "~/server/db";

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
  const statusFilter = extraWhere?.status ? { status: extraWhere.status as never } : {};
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

  const reservations = await db.reservation.findMany({
    where: {
      startAt: { gte: where.gte, lt: where.lt },
      ...statusFilter,
      ...midwifeFilter,
      ...(reservationIds ? { id: { in: reservationIds } } : {}),
    },
    select: {
      id: true,
      startAt: true,
      status: true,
      serviceType: true,
      customer: { select: { motherName: true } },
      baby: { select: { name: true } },
      midwife: { select: { name: true, email: true } },
      items: {
        select: {
          quantity: true,
          unitPrice: true,
          treatment: { select: { name: true } },
        },
      },
    },
    orderBy: { startAt: "desc" },
    take: 200,
  });

  return reservations.map((r) => ({
    id: r.id,
    customerName: r.customer.motherName,
    babyName: r.baby?.name ?? null,
    midwifeName: r.midwife?.name ?? r.midwife?.email ?? null,
    startAt: r.startAt,
    status: r.status,
    serviceType: r.serviceType,
    treatments: r.items.map((i) => `${i.treatment.name} x${i.quantity}`).join(", "),
    totalPrice: r.items.reduce(
      (sum, i) => sum + i.unitPrice.toNumber() * i.quantity,
      0,
    ),
  }));
}
