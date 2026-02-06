import { NextResponse } from "next/server";
import { z } from "zod";

import { getSlotForTime, SLOT_CAPACITY } from "~/lib/time-slots";
import { db } from "~/server/db";

const treatmentsSchema = z.array(
  z.object({
    treatmentId: z.string().min(1),
    quantity: z.number().int().positive(),
  }),
);

const createPublicReservationSchema = z.object({
  motherName: z.string().min(1),
  motherPhone: z.string().min(1),
  motherEmail: z.string().email().optional(),
  date: z.string().min(1),
  time: z.string().min(1),
  serviceType: z.enum(["OUTLET", "HOMECARE"]),
  notes: z.string().optional(),
  treatments: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const motherEmailValue = formData.get("motherEmail");
    const notesValue = formData.get("notes");

    const validated = createPublicReservationSchema.parse({
      motherName: formData.get("motherName"),
      motherPhone: formData.get("motherPhone"),
      motherEmail: typeof motherEmailValue === "string" ? motherEmailValue : undefined,
      date: formData.get("date"),
      time: formData.get("time"),
      serviceType: formData.get("serviceType"),
      notes: typeof notesValue === "string" ? notesValue : undefined,
      treatments: formData.get("treatments"),
    });

    const slot = getSlotForTime(validated.time);
    if (!slot) {
      return NextResponse.json(
        { error: "Waktu tidak valid. Pilih antara 09:00-17:00" },
        { status: 400 },
      );
    }

    const parsedTreatments: unknown = JSON.parse(validated.treatments);
    const treatments = treatmentsSchema.parse(parsedTreatments);

    if (treatments.length === 0) {
      return NextResponse.json(
        { error: "Minimal 1 treatment harus dipilih" },
        { status: 400 },
      );
    }

    const dateStart = new Date(`${validated.date}T${slot.start}`);
    const dateEnd = new Date(`${validated.date}T${slot.end}`);

    const existingReservations = await db.reservation.findMany({
      where: {
        startAt: {
          gte: dateStart,
          lt: dateEnd,
        },
        status: {
          notIn: ["CANCELLED", "NO_SHOW"],
        },
      },
      select: {
        serviceType: true,
      },
    });

    const outletCount = existingReservations.filter(
      (r) => r.serviceType === "OUTLET",
    ).length;
    const homecareCount = existingReservations.filter(
      (r) => r.serviceType === "HOMECARE",
    ).length;

    const isSlotAvailable =
      validated.serviceType === "OUTLET"
        ? outletCount < SLOT_CAPACITY.OUTLET
        : homecareCount < SLOT_CAPACITY.HOMECARE;

    if (!isSlotAvailable) {
      return NextResponse.json(
        {
          error: `Slot ${slot.label} sudah penuh untuk ${validated.serviceType}. Pilih waktu lain.`,
        },
        { status: 400 },
      );
    }

    const treatmentData = await db.treatment.findMany({
      where: {
        id: { in: treatments.map((t) => t.treatmentId) },
        deletedAt: null,
        isActive: true,
      },
    });

    const treatmentById = new Map(treatmentData.map((t) => [t.id, t] as const));

    for (const item of treatments) {
      if (!treatmentById.has(item.treatmentId)) {
        return NextResponse.json({ error: "Treatment tidak valid" }, { status: 400 });
      }
    }

    const totalDuration = treatments.reduce((sum, item) => {
      const treatment = treatmentById.get(item.treatmentId);
      return sum + (treatment?.durationMinutes ?? 0) * item.quantity;
    }, 0);

    const startDateTime = new Date(`${validated.date}T${validated.time}`);
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + totalDuration);

    const motherPhone = validated.motherPhone.trim();

    const customer = await db.customer.findFirst({
      where: { motherPhone, deletedAt: null },
      select: { id: true },
    });

    const customerId = customer
      ? customer.id
      : (
          await db.customer.create({
            data: {
              motherName: validated.motherName.trim(),
              motherPhone,
              motherEmail: validated.motherEmail ?? null,
            },
            select: { id: true },
          })
        ).id;

    const reservation = await db.reservation.create({
      data: {
        customerId,
        startAt: startDateTime,
        endAt: endDateTime,
        status: "PENDING",
        channel: "CUSTOMER",
        serviceType: validated.serviceType,
        notes: validated.notes ?? null,
        items: {
          create: treatments.map((item) => {
            const treatment = treatmentById.get(item.treatmentId);
            return {
              treatmentId: item.treatmentId,
              quantity: item.quantity,
              unitPrice: treatment!.basePrice,
              durationMinutes: treatment!.durationMinutes,
            };
          }),
        },
        auditLogs: {
          create: {
            action: "CREATE",
            message: "Reservasi dibuat via form customer",
          },
        },
      },
      select: { id: true },
    });

    const adminUsers = await db.user.findMany({
      where: { role: "ADMIN" },
      select: { id: true },
    });

    if (adminUsers.length > 0) {
      const scheduleText = `${validated.date} ${validated.time}`;

      await db.notification.createMany({
        data: adminUsers.map((admin) => ({
          userId: admin.id,
          type: "RESERVATION_CREATED",
          status: "UNREAD",
          reservationId: reservation.id,
          title: "Reservasi baru",
          body: `${validated.motherName.trim()} (${motherPhone}) • ${validated.serviceType} • ${scheduleText}`,
        })),
      });
    }

    return NextResponse.json({ reservationId: reservation.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Data tidak valid" }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Gagal membuat reservasi" },
      { status: 500 },
    );
  }
}
