"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

const idSchema = z.string().min(1, "ID wajib");

async function requireStaff() {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  if (session.user.role !== "ADMIN" && session.user.role !== "MIDWIFE") {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function completeReservation(reservationId: string, formData: FormData) {
  const session = await requireStaff();

  const parsed = idSchema.safeParse(reservationId);
  if (!parsed.success) {
    redirect("/reservation?error=invalid");
  }

  const babyIdValue = formData.get("babyId");
  const midwifeIdValue = formData.get("midwifeId");
  const paymentMethodValue = formData.get("paymentMethod");
  const discountPercentValue = formData.get("discountPercent");

  const discountPercentInput =
    typeof discountPercentValue === "string" && discountPercentValue.trim().length > 0
      ? Number(discountPercentValue)
      : undefined;

  const input = {
    babyId: typeof babyIdValue === "string" ? babyIdValue.trim() : "",
    midwifeId: typeof midwifeIdValue === "string" ? midwifeIdValue.trim() : "",
    paymentMethod:
      typeof paymentMethodValue === "string" && paymentMethodValue.length > 0
        ? paymentMethodValue
        : undefined,
    discountPercent: discountPercentInput,
  };

  const completionSchema = z.object({
    babyId: z.string().min(1, "Baby wajib dipilih"),
    midwifeId: z.string().min(1, "Bidan wajib dipilih"),
    paymentMethod: z.enum(["CASH", "TRANSFER"]).optional(),
    discountPercent: z.number().int().min(10).max(50).optional(),
  });

  const validated = completionSchema.safeParse(input);
  if (!validated.success) {
    redirect(`/reservation/${parsed.data}?error=invalid-complete`);
  }

  const existing = await db.reservation.findFirst({
    where: { id: parsed.data },
    select: {
      id: true,
      status: true,
      completedAt: true,
      babyId: true,
      midwifeId: true,
      items: {
        select: {
          quantity: true,
          unitPrice: true,
        },
      },
    },
  });

  if (!existing) {
    redirect("/reservation?error=not-found");
  }

  const now = new Date();
  const shouldComplete = existing.status !== "COMPLETED" || !existing.completedAt;

  if (shouldComplete) {
    const subtotalPrice = existing.items.reduce(
      (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
      0,
    );

    const discountPercent = validated.data.discountPercent;
    const discountAmountRaw = discountPercent
      ? (subtotalPrice * discountPercent) / 100
      : 0;
    const discountAmount = Math.round(discountAmountRaw * 100) / 100;
    const totalPrice = Math.round((subtotalPrice - discountAmount) * 100) / 100;

    await db.$transaction([
      db.reservation.update({
        where: { id: existing.id },
        data: {
          babyId: validated.data.babyId,
          midwifeId: validated.data.midwifeId,
          paymentMethod: validated.data.paymentMethod ?? null,
          subtotalPrice,
          discountPercent: discountPercent ?? null,
          discountAmount: discountPercent ? discountAmount : null,
          totalPrice,
          status: "COMPLETED",
          completedAt: now,
        },
      }),
      db.reservationAuditLog.create({
        data: {
          reservationId: existing.id,
          action: "COMPLETE",
          fromStatus: existing.status,
          toStatus: "COMPLETED",
          actorId: session.user.id,
          message: "Reservasi diselesaikan",
        },
      }),
    ]);
  }

  revalidatePath("/reservation");
  revalidatePath("/reservation/list");
  revalidatePath("/reservation/completed");
  revalidatePath(`/reservation/${existing.id}`);
  revalidatePath(`/reservation/${existing.id}/receipt`);
  redirect(`/reservation/${existing.id}/receipt`);
}
