"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

const treatmentSchema = z.object({
  name: z.string().min(1, "Nama treatment wajib diisi"),
  description: z.string().optional(),
  durationMinutes: z.coerce
    .number()
    .int("Durasi wajib angka")
    .positive("Durasi minimal 1 menit")
    .max(24 * 60, "Durasi terlalu lama"),
  basePrice: z.coerce
    .number()
    .int("Harga wajib angka")
    .nonnegative("Harga tidak boleh negatif")
    .max(9_999_999_999, "Harga terlalu besar"),
  isActive: z.enum(["on"]).optional(),
});

function toNullableString(value: string | undefined): string | null {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

async function requireAdmin() {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function createTreatment(formData: FormData) {
  await requireAdmin();

  const parsed = treatmentSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    durationMinutes: formData.get("durationMinutes"),
    basePrice: formData.get("basePrice"),
    isActive: formData.get("isActive"),
  });

  if (!parsed.success) {
    redirect("/treatment/new?error=invalid");
  }

  await db.treatment.create({
    data: {
      name: parsed.data.name,
      description: toNullableString(parsed.data.description),
      durationMinutes: parsed.data.durationMinutes,
      basePrice: parsed.data.basePrice,
      isActive: parsed.data.isActive === "on",
    },
  });

  revalidatePath("/treatment");
  redirect("/treatment?success=created");
}

export async function updateTreatment(treatmentId: string, formData: FormData) {
  await requireAdmin();

  const parsed = treatmentSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    durationMinutes: formData.get("durationMinutes"),
    basePrice: formData.get("basePrice"),
    isActive: formData.get("isActive"),
  });

  if (!parsed.success) {
    redirect(`/treatment/${treatmentId}?error=invalid`);
  }

  const existing = await db.treatment.findFirst({
    where: { id: treatmentId, deletedAt: null },
    select: { id: true },
  });

  if (!existing) {
    redirect("/treatment?error=not-found");
  }

  await db.treatment.update({
    where: { id: treatmentId },
    data: {
      name: parsed.data.name,
      description: toNullableString(parsed.data.description),
      durationMinutes: parsed.data.durationMinutes,
      basePrice: parsed.data.basePrice,
      isActive: parsed.data.isActive === "on",
    },
  });

  revalidatePath("/treatment");
  redirect("/treatment?success=updated");
}

export async function toggleTreatmentActive(treatmentId: string) {
  await requireAdmin();

  const existing = await db.treatment.findFirst({
    where: { id: treatmentId, deletedAt: null },
    select: { isActive: true },
  });

  if (!existing) {
    redirect("/treatment?error=not-found");
  }

  await db.treatment.update({
    where: { id: treatmentId },
    data: { isActive: !existing.isActive },
  });

  revalidatePath("/treatment");
  redirect("/treatment?success=toggled");
}

export async function archiveTreatment(treatmentId: string) {
  await requireAdmin();

  const existing = await db.treatment.findFirst({
    where: { id: treatmentId, deletedAt: null },
    select: { id: true },
  });

  if (!existing) {
    redirect("/treatment?error=not-found");
  }

  await db.treatment.update({
    where: { id: treatmentId },
    data: { deletedAt: new Date(), isActive: false },
  });

  revalidatePath("/treatment");
  redirect("/treatment?success=archived");
}
