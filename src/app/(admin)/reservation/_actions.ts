"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { auth } from "~/server/auth";
import { db, Prisma } from "~/server/db";

const reservationCompletionSelect = {
  id: true,
  status: true,
  completedAt: true,
  startAt: true,
  babyId: true,
  midwifeId: true,
  items: {
    select: {
      babyId: true,
      quantity: true,
      unitPrice: true,
    },
  },
} satisfies Prisma.ReservationSelect;

type ReservationForCompletion = Prisma.ReservationGetPayload<{
  select: typeof reservationCompletionSelect;
}>;

const idSchema = z.string().min(1, "ID wajib");

async function requireStaff() {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");
  if (session.user.role !== "ADMIN" && session.user.role !== "MIDWIFE") {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function cancelReservation(reservationId: string) {
  const session = await requireStaff();

  const parsed = idSchema.safeParse(reservationId);
  if (!parsed.success) {
    redirect("/reservation?error=invalid");
  }

  const existing = await db.reservation.findFirst({
    where: { id: parsed.data },
    select: {
      id: true,
      status: true,
      completedAt: true,
    },
  });

  if (!existing) {
    redirect("/reservation?error=not-found");
  }

  if (existing.status === "CANCELLED") {
    redirect(`/reservation/${existing.id}?success=cancelled`);
  }

  if (existing.status === "COMPLETED" || existing.completedAt) {
    redirect(`/reservation/${existing.id}?error=cannot-cancel`);
  }

  const now = new Date();
  await db.$transaction([
    db.reservation.update({
      where: { id: existing.id },
      data: {
        status: "CANCELLED",
        cancelledAt: now,
      },
    }),
    db.reservationAuditLog.create({
      data: {
        reservationId: existing.id,
        action: "CANCEL",
        fromStatus: existing.status,
        toStatus: "CANCELLED",
        actorId: session.user.id,
        message: "Reservasi dibatalkan",
      },
    }),
  ]);

  revalidatePath("/reservation");
  revalidatePath("/reservation/list");
  revalidatePath("/reservation/completed");
  revalidatePath(`/reservation/${existing.id}`);
  redirect(`/reservation/${existing.id}?success=cancelled`);
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
    babyId: z.string().optional(),
    midwifeId: z.string().min(1, "Bidan wajib dipilih"),
    paymentMethod: z.enum(["CASH", "TRANSFER"]).optional(),
    discountPercent: z.number().int().min(0).max(100).optional(),
  });

  const validated = completionSchema.safeParse(input);
  if (!validated.success) {
    redirect(`/reservation/${parsed.data}?error=invalid-complete`);
  }

  const existing: ReservationForCompletion | null = await db.reservation.findFirst({
    where: { id: parsed.data },
    select: reservationCompletionSelect,
  });

  if (!existing) {
    redirect("/reservation?error=not-found");
  }

  const now = new Date();
  const shouldComplete = existing.status !== "COMPLETED" || !existing.completedAt;

  const inputBabyId =
    typeof validated.data.babyId === "string" && validated.data.babyId.trim().length > 0
      ? validated.data.babyId.trim()
      : undefined;
  const hasItemBaby = existing.items.some(
    (item) => typeof item.babyId === "string" && item.babyId.length > 0,
  );
  const resolvedBabyId = inputBabyId ?? existing.babyId ?? undefined;
  const shouldRequireBaby = !resolvedBabyId && !hasItemBaby;

  if (shouldRequireBaby) {
    redirect(`/reservation/${parsed.data}?error=invalid-complete`);
  }

  const subtotalPrice = existing.items.reduce(
    (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
    0,
  );

  const discountPercent =
    typeof validated.data.discountPercent === "number" && validated.data.discountPercent > 0
      ? validated.data.discountPercent
      : undefined;
  const discountAmountRaw = discountPercent ? (subtotalPrice * discountPercent) / 100 : 0;
  const discountAmount = Math.round(discountAmountRaw * 100) / 100;
  const totalPrice = Math.round((subtotalPrice - discountAmount) * 100) / 100;

  try {
    if (shouldComplete) {
      await db.$transaction([
        db.reservation.update({
          where: { id: existing.id },
          data: {
            babyId: resolvedBabyId ?? null,
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
    } else {
      await db.reservation.update({
        where: { id: existing.id },
        data: {
          babyId: resolvedBabyId ?? null,
          midwifeId: validated.data.midwifeId,
          paymentMethod: validated.data.paymentMethod ?? null,
          subtotalPrice,
          discountPercent: discountPercent ?? null,
          discountAmount: discountPercent ? discountAmount : null,
          totalPrice,
        },
      });
    }
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      redirect(`/reservation/${parsed.data}?error=midwife-busy`);
    }
    throw error;
  }

  revalidatePath("/reservation");
  revalidatePath("/reservation/list");
  revalidatePath("/reservation/completed");
  revalidatePath(`/reservation/${existing.id}`);
  revalidatePath(`/reservation/${existing.id}/receipt`);
  redirect(`/reservation/${existing.id}/receipt`);
}
