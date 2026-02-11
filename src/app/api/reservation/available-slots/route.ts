import { NextResponse } from "next/server";
import { z } from "zod";

import { db } from "~/server/db";
import { TIME_SLOTS, HOMECARE_TIME_SLOTS, SLOT_CAPACITY } from "~/lib/time-slots";

const availableSlotsSchema = z.object({
  date: z.string().min(1),
  serviceType: z.enum(["OUTLET", "HOMECARE"]),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const validated = availableSlotsSchema.parse(body);

    const slotsToCheck =
      validated.serviceType === "HOMECARE" ? HOMECARE_TIME_SLOTS : TIME_SLOTS;

    const availableSlots = await Promise.all(
      slotsToCheck.map(async (slot) => {
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
        const isAvailable = count < capacity;

        return {
          slot: slot.start,
          label: slot.label,
          available: isAvailable,
          current: {
            outlet: validated.serviceType === "OUTLET" ? count : 0,
            homecare: validated.serviceType === "HOMECARE" ? count : 0,
          },
        };
      }),
    );

    const onlyAvailable = availableSlots.filter((s) => s.available);

    return NextResponse.json({
      slots: onlyAvailable,
      allSlots: availableSlots,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Data tidak valid" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Terjadi kesalahan" },
      { status: 500 },
    );
  }
}
