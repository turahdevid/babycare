import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { getSlotForTime, getHomecareSlotForTime, SLOT_CAPACITY } from "~/lib/time-slots";

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
      birthPlace: z.string().optional(),
      birthDate: z.string().min(1).optional(),
      allergy: z.string().optional(),
      ageAtTreatment: z.string().optional(),
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

const treatmentsByBabySchema = z.array(
  z.object({
    babyId: z.string().min(1),
    treatments: treatmentsSchema.min(1),
  }),
);

const createReservationSchema = z
  .object({
    customerId: z.string().optional(),
    babyId: z.string().optional(),
    babyIds: z.string().optional(),
    date: z.string().min(1),
    time: z.string().min(1),
    serviceType: z.enum(["OUTLET", "HOMECARE"]),
    midwifeId: z.string().optional(),
    paymentMethod: z.enum(["CASH", "TRANSFER"]).optional(),
    notes: z.string().optional(),
    treatments: z.string().optional(),
    treatmentsByBaby: z.string().optional(),
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

    const hasTreatments = typeof val.treatments === "string" && val.treatments.length > 0;
    const hasTreatmentsByBaby =
      typeof val.treatmentsByBaby === "string" && val.treatmentsByBaby.length > 0;
    if (!hasTreatments && !hasTreatmentsByBaby) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Minimal 1 treatment harus dipilih",
        path: ["treatments"],
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
    const babyIdsValue = formData.get("babyIds");
    const midwifeIdValue = formData.get("midwifeId");
    const notesValue = formData.get("notes");
    const newCustomerValue = formData.get("newCustomer");

    const treatmentsValue = formData.get("treatments");
    const treatmentsByBabyValue = formData.get("treatmentsByBaby");

    const paymentMethodValue = formData.get("paymentMethod");

    const data = {
      customerId: typeof customerIdValue === "string" ? customerIdValue : undefined,
      babyId: typeof babyIdValue === "string" ? babyIdValue : undefined,
      babyIds: typeof babyIdsValue === "string" ? babyIdsValue : undefined,
      date: formData.get("date"),
      time: formData.get("time"),
      serviceType: formData.get("serviceType"),
      midwifeId: typeof midwifeIdValue === "string" ? midwifeIdValue : undefined,
      paymentMethod:
        typeof paymentMethodValue === "string" && paymentMethodValue.length > 0
          ? paymentMethodValue
          : undefined,
      notes: typeof notesValue === "string" ? notesValue : undefined,
      treatments: typeof treatmentsValue === "string" ? treatmentsValue : undefined,
      treatmentsByBaby:
        typeof treatmentsByBabyValue === "string" ? treatmentsByBabyValue : undefined,
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

    let resolvedBabyIds: string[] = [];
    if (typeof validated.babyIds === "string" && validated.babyIds.length > 0) {
      const parsed: unknown = JSON.parse(validated.babyIds);
      if (Array.isArray(parsed)) {
        resolvedBabyIds = parsed.filter((v): v is string => typeof v === "string" && v.length > 0);
      }
    }

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
            birthPlace: newCustomerData.baby.birthPlace ?? null,
            birthDate: birthDateValue ? new Date(birthDateValue) : null,
            allergy: newCustomerData.baby.allergy ?? null,
            ageAtTreatment: newCustomerData.baby.ageAtTreatment ?? null,
            notes: newCustomerData.baby.notes ?? null,
          },
          select: { id: true },
        });

        resolvedBabyId ??= createdBaby.id;
        if (resolvedBabyIds.length === 0) {
          resolvedBabyIds = [createdBaby.id];
        }
      }
    }

    if (!customerId) {
      return NextResponse.json(
        { error: "Customer wajib dipilih atau dibuat" },
        { status: 400 },
      );
    }

    const slot =
      validated.serviceType === "HOMECARE"
        ? getHomecareSlotForTime(validated.time)
        : getSlotForTime(validated.time);

    if (!slot) {
      return NextResponse.json(
        {
          error:
            validated.serviceType === "HOMECARE"
              ? "Waktu tidak valid. Homecare hanya tersedia jam 10:00 dan 15:00"
              : "Waktu tidak valid. Pilih antara 09:00-17:00",
        },
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
        serviceType: validated.serviceType,
      },
      select: {
        serviceType: true,
      },
    });

    const count = existingReservations.length;
    const capacity = SLOT_CAPACITY[validated.serviceType];
    const isSlotAvailable = count < capacity;

    if (!isSlotAvailable) {
      return NextResponse.json(
        {
          error: `Slot ${slot.label} sudah penuh untuk ${validated.serviceType}. Pilih waktu lain.`,
        },
        { status: 400 },
      );
    }

    const shouldUseTreatmentsByBaby =
      typeof validated.treatmentsByBaby === "string" && validated.treatmentsByBaby.length > 0;

    const perBabySelections = shouldUseTreatmentsByBaby
      ? (() => {
          const parsed: unknown = JSON.parse(validated.treatmentsByBaby!);
          return treatmentsByBabySchema.parse(parsed);
        })()
      : null;

    const treatments = shouldUseTreatmentsByBaby
      ? perBabySelections!.flatMap((group) => group.treatments)
      : treatmentsSchema.parse(JSON.parse(validated.treatments ?? "[]") as unknown);

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

    if (perBabySelections) {
      const selectionBabyIds = perBabySelections.map((g) => g.babyId);
      const uniqueIds = Array.from(new Set(selectionBabyIds));

      const babies = await db.baby.findMany({
        where: {
          id: { in: uniqueIds },
          customerId,
          deletedAt: null,
        },
        select: { id: true },
      });

      if (babies.length !== uniqueIds.length) {
        return NextResponse.json(
          { error: "Baby tidak valid" },
          { status: 400 },
        );
      }

      resolvedBabyIds = uniqueIds;
    }

    const reservationPrimaryBabyId =
      resolvedBabyId ?? (resolvedBabyIds.length > 0 ? resolvedBabyIds[0] : null);

    const reservation = await db.reservation.create({
      data: {
        customerId,
        babyId: reservationPrimaryBabyId,
        midwifeId:
          validated.midwifeId && validated.midwifeId.length > 0
            ? validated.midwifeId
            : null,
        startAt: startDateTime,
        endAt: endDateTime,
        status: "PENDING",
        channel: "ADMIN",
        serviceType: validated.serviceType,
        paymentMethod: validated.paymentMethod ?? null,
        notes: validated.notes ?? null,
        items: {
          create: perBabySelections
            ? perBabySelections.flatMap((group) =>
                group.treatments.map((item) => {
                  const treatment = treatmentById.get(item.treatmentId);
                  return {
                    treatmentId: item.treatmentId,
                    babyId: group.babyId,
                    quantity: item.quantity,
                    unitPrice: treatment!.basePrice,
                    durationMinutes: treatment!.durationMinutes,
                  };
                }),
              )
            : treatments.map((item) => {
                const treatment = treatmentById.get(item.treatmentId);
                return {
                  treatmentId: item.treatmentId,
                  babyId: resolvedBabyId,
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
      } as any,
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
