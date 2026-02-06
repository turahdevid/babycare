import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { getSlotForTime, SLOT_CAPACITY } from "~/lib/time-slots";

const newCustomerSchema = z.object({
  motherName: z.string().min(1),
  motherPhone: z.string().min(1),
  address: z.string().min(1),
  motherEmail: z.string().email().optional(),
  notes: z.string().optional(),
  baby: z
    .object({
      name: z.string().min(1),
      gender: z.enum(["MALE", "FEMALE"]).optional(),
      birthDate: z.string().min(1).optional(),
      notes: z.string().optional(),
    })
    .optional(),
});

const treatmentsSchema = z.array(
  z.object({
    treatmentId: z.string().min(1),
    quantity: z.number().int().positive(),
  }),
);

const createReservationSchema = z
  .object({
    customerId: z.string().optional(),
    babyId: z.string().optional(),
    date: z.string().min(1),
    time: z.string().min(1),
    serviceType: z.enum(["OUTLET", "HOMECARE"]),
    midwifeId: z.string().optional(),
    notes: z.string().optional(),
    treatments: z.string().min(1),
    newCustomer: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    const hasCustomerId =
      typeof val.customerId === "string" &&
      val.customerId.length > 0 &&
      val.customerId !== "new";

    if (!hasCustomerId && !val.newCustomer) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Customer wajib dipilih atau dibuat",
        path: ["customerId"],
      });
    }
  });

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const customerIdValue = formData.get("customerId");
    const babyIdValue = formData.get("babyId");
    const midwifeIdValue = formData.get("midwifeId");
    const notesValue = formData.get("notes");
    const newCustomerValue = formData.get("newCustomer");

    const data = {
      customerId: typeof customerIdValue === "string" ? customerIdValue : undefined,
      babyId: typeof babyIdValue === "string" ? babyIdValue : undefined,
      date: formData.get("date"),
      time: formData.get("time"),
      serviceType: formData.get("serviceType"),
      midwifeId: typeof midwifeIdValue === "string" ? midwifeIdValue : undefined,
      notes: typeof notesValue === "string" ? notesValue : undefined,
      treatments: formData.get("treatments"),
      newCustomer:
        typeof newCustomerValue === "string" ? newCustomerValue : undefined,
    };

    const validated = createReservationSchema.parse(data);

    let customerId =
      validated.customerId &&
      validated.customerId !== "new" &&
      validated.customerId.length > 0
        ? validated.customerId
        : null;

    let resolvedBabyId =
      typeof validated.babyId === "string" && validated.babyId.length > 0
        ? validated.babyId
        : null;

    if (validated.newCustomer) {
      const parsedNewCustomer: unknown = JSON.parse(validated.newCustomer);
      const newCustomerData = newCustomerSchema.parse(parsedNewCustomer);

      const existingCustomer = await db.customer.findFirst({
        where: { motherPhone: newCustomerData.motherPhone, deletedAt: null },
        select: {
          id: true,
          address: true,
          notes: true,
        },
      });

      if (existingCustomer) {
        customerId = existingCustomer.id;

        if (newCustomerData.address.length > 0) {
          const shouldUpdateAddress =
            typeof existingCustomer.address !== "string" ||
            existingCustomer.address.trim().length === 0;
          const shouldUpdateNotes =
            typeof existingCustomer.notes !== "string" ||
            existingCustomer.notes.trim().length === 0;

          if (shouldUpdateAddress || (shouldUpdateNotes && newCustomerData.notes)) {
            await db.customer.update({
              where: { id: existingCustomer.id },
              data: {
                address: shouldUpdateAddress ? newCustomerData.address : undefined,
                notes:
                  shouldUpdateNotes && newCustomerData.notes
                    ? newCustomerData.notes
                    : undefined,
              },
            });
          }
        }
      } else {
        const createdCustomer = await db.customer.create({
          data: {
            motherName: newCustomerData.motherName,
            motherPhone: newCustomerData.motherPhone,
            motherEmail: newCustomerData.motherEmail ?? null,
            address: newCustomerData.address,
            notes: newCustomerData.notes ?? null,
          },
        });
        customerId = createdCustomer.id;
      }

      if (!customerId) {
        return NextResponse.json(
          { error: "Customer wajib dipilih atau dibuat" },
          { status: 400 },
        );
      }

      if (newCustomerData.baby) {
        const birthDateValue =
          typeof newCustomerData.baby.birthDate === "string" &&
          newCustomerData.baby.birthDate.length > 0
            ? newCustomerData.baby.birthDate
            : null;

        const createdBaby = await db.baby.create({
          data: {
            customerId,
            name: newCustomerData.baby.name,
            gender: newCustomerData.baby.gender ?? null,
            birthDate: birthDateValue ? new Date(birthDateValue) : null,
            notes: newCustomerData.baby.notes ?? null,
          },
          select: { id: true },
        });

        resolvedBabyId ??= createdBaby.id;
      }
    }

    if (!customerId) {
      return NextResponse.json(
        { error: "Customer wajib dipilih atau dibuat" },
        { status: 400 },
      );
    }

    const slot = getSlotForTime(validated.time);
    if (!slot) {
      return NextResponse.json(
        { error: "Waktu tidak valid. Pilih antara 09:00-17:00" },
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

    const parsedTreatments: unknown = JSON.parse(validated.treatments);
    const treatments = treatmentsSchema.parse(parsedTreatments);

    if (treatments.length === 0) {
      return NextResponse.json(
        { error: "Minimal 1 treatment harus dipilih" },
        { status: 400 },
      );
    }

    const treatmentData = await db.treatment.findMany({
      where: {
        id: { in: treatments.map((t) => t.treatmentId) },
      },
    });

    const treatmentById = new Map(treatmentData.map((t) => [t.id, t] as const));

    for (const item of treatments) {
      if (!treatmentById.has(item.treatmentId)) {
        return NextResponse.json(
          { error: "Treatment tidak valid" },
          { status: 400 },
        );
      }
    }

    const totalDuration = treatments.reduce((sum, item) => {
      const treatment = treatmentById.get(item.treatmentId);
      return sum + (treatment?.durationMinutes ?? 0) * item.quantity;
    }, 0);

    const startDateTime = new Date(`${validated.date}T${validated.time}`);
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + totalDuration);

    const reservation = await db.reservation.create({
      data: {
        customerId,
        babyId: resolvedBabyId,
        midwifeId:
          validated.midwifeId && validated.midwifeId.length > 0
            ? validated.midwifeId
            : null,
        startAt: startDateTime,
        endAt: endDateTime,
        status: "PENDING",
        channel: "ADMIN",
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
            actorId: session.user.id,
            message: "Reservasi dibuat",
          },
        },
      },
    });

    return NextResponse.json({ reservationId: reservation.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Data tidak valid", details: error.errors },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Gagal membuat reservasi" },
      { status: 500 },
    );
  }
}
