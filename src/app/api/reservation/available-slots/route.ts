import { NextResponse } from "next/server";
import { z } from "zod";

import { db } from "~/server/db";
import { TIME_SLOTS, SLOT_CAPACITY } from "~/lib/time-slots";

const availableSlotsSchema = z.object({
  date: z.string().min(1),
  serviceType: z.enum(["OUTLET", "HOMECARE"]),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const validated = availableSlotsSchema.parse(body);

    const availableSlots = await Promise.all(
      TIME_SLOTS.map(async (slot) => {
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

        const isAvailable =
          validated.serviceType === "OUTLET"
            ? outletCount < SLOT_CAPACITY.OUTLET
            : homecareCount < SLOT_CAPACITY.HOMECARE;

        return {
          slot: slot.start,
          label: slot.label,
          available: isAvailable,
          current: {
            outlet: outletCount,
            homecare: homecareCount,
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
