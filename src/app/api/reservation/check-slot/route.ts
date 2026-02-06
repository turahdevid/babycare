import { NextResponse } from "next/server";
import { z } from "zod";

import { db } from "~/server/db";
import { SLOT_CAPACITY, getSlotForTime } from "~/lib/time-slots";

const checkSlotSchema = z.object({
  date: z.string().min(1),
  time: z.string().min(1),
  serviceType: z.enum(["OUTLET", "HOMECARE"]),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const validated = checkSlotSchema.parse(body);

    const slot = getSlotForTime(validated.time);
    
    if (!slot) {
      return NextResponse.json(
        { available: false, message: "Waktu tidak valid. Pilih antara 09:00-17:00" },
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

    const isAvailable =
      validated.serviceType === "OUTLET"
        ? outletCount < SLOT_CAPACITY.OUTLET
        : homecareCount < SLOT_CAPACITY.HOMECARE;

    return NextResponse.json({
      available: isAvailable,
      slot: slot.label,
      current: {
        outlet: outletCount,
        homecare: homecareCount,
      },
      capacity: SLOT_CAPACITY,
      message: isAvailable
        ? `Slot tersedia (${validated.serviceType}: ${validated.serviceType === "OUTLET" ? outletCount : homecareCount}/${validated.serviceType === "OUTLET" ? SLOT_CAPACITY.OUTLET : SLOT_CAPACITY.HOMECARE})`
        : `Slot penuh untuk ${validated.serviceType}`,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { available: false, message: "Data tidak valid" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { available: false, message: "Terjadi kesalahan" },
      { status: 500 },
    );
  }
}
