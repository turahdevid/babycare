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

  const input = {
    babyId: typeof babyIdValue === "string" ? babyIdValue.trim() : "",
    midwifeId: typeof midwifeIdValue === "string" ? midwifeIdValue.trim() : "",
  };

  const completionSchema = z.object({
    babyId: z.string().min(1, "Baby wajib dipilih"),
    midwifeId: z.string().min(1, "Bidan wajib dipilih"),
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
    },
  });

  if (!existing) {
    redirect("/reservation?error=not-found");
  }

  const now = new Date();
  const shouldComplete = existing.status !== "COMPLETED" || !existing.completedAt;

  if (shouldComplete) {
    await db.$transaction([
      db.reservation.update({
        where: { id: existing.id },
        data: {
          babyId: validated.data.babyId,
          midwifeId: validated.data.midwifeId,
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
