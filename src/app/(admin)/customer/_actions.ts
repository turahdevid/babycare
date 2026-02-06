"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

const customerSchema = z.object({
  motherName: z.string().min(1, "Nama bunda wajib diisi"),
  motherPhone: z.string().min(1, "Nomor WhatsApp wajib diisi"),
  motherEmail: z.string().email("Email tidak valid").optional().or(z.literal("")),
  address: z.string().optional(),
  notes: z.string().optional(),
});

function toNullableString(value: string | undefined): string | null {
  if (typeof value !== "string" || value.length === 0) {
    return null;
  }

  return value;
}

export async function createCustomer(formData: FormData) {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const data = {
    motherName: formData.get("motherName"),
    motherPhone: formData.get("motherPhone"),
    motherEmail: formData.get("motherEmail"),
    address: formData.get("address"),
    notes: formData.get("notes"),
  };

  const validated = customerSchema.parse(data);

  const babyNameValue = formData.get("babyName");
  const babyGenderValue = formData.get("babyGender");
  const babyBirthDateValue = formData.get("babyBirthDate");
  const babyNotesValue = formData.get("babyNotes");

  const babyName = typeof babyNameValue === "string" ? babyNameValue.trim() : "";
  const babyGender =
    typeof babyGenderValue === "string" &&
    (babyGenderValue === "MALE" || babyGenderValue === "FEMALE")
      ? babyGenderValue
      : null;
  const babyBirthDate =
    typeof babyBirthDateValue === "string" && babyBirthDateValue.length > 0
      ? babyBirthDateValue
      : null;
  const babyNotes = typeof babyNotesValue === "string" ? babyNotesValue : "";

  const customer = await db.customer.create({
    data: {
      motherName: validated.motherName,
      motherPhone: validated.motherPhone,
      motherEmail: toNullableString(validated.motherEmail),
      address: toNullableString(validated.address),
      notes: toNullableString(validated.notes),
    },
  });

  if (babyName.length > 0) {
    await db.baby.create({
      data: {
        customerId: customer.id,
        name: babyName,
        gender: babyGender,
        birthDate: babyBirthDate ? new Date(babyBirthDate) : null,
        notes: toNullableString(babyNotes),
      },
    });
  }

  revalidatePath("/customer");
  redirect(`/customer/${customer.id}`);
}

export async function updateCustomer(customerId: string, formData: FormData) {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const data = {
    motherName: formData.get("motherName"),
    motherPhone: formData.get("motherPhone"),
    motherEmail: formData.get("motherEmail"),
    address: formData.get("address"),
    notes: formData.get("notes"),
  };

  const validated = customerSchema.parse(data);

  await db.customer.update({
    where: { id: customerId },
    data: {
      motherName: validated.motherName,
      motherPhone: validated.motherPhone,
      motherEmail: toNullableString(validated.motherEmail),
      address: toNullableString(validated.address),
      notes: toNullableString(validated.notes),
    },
  });

  revalidatePath("/customer");
  revalidatePath(`/customer/${customerId}`);
  redirect(`/customer/${customerId}`);
}

const babySchema = z.object({
  name: z.string().min(1, "Nama baby wajib diisi"),
  gender: z.enum(["MALE", "FEMALE"]).optional().or(z.literal("")),
  birthDate: z.string().optional().or(z.literal("")),
  notes: z.string().optional(),
});

export async function addBaby(customerId: string, formData: FormData) {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const data = {
    name: formData.get("name"),
    gender: formData.get("gender"),
    birthDate: formData.get("birthDate"),
    notes: formData.get("notes"),
  };

  const validated = babySchema.parse(data);

  const gender =
    validated.gender === "MALE" || validated.gender === "FEMALE"
      ? validated.gender
      : null;
  const birthDateValue =
    typeof validated.birthDate === "string" && validated.birthDate.length > 0
      ? validated.birthDate
      : null;

  await db.baby.create({
    data: {
      customerId,
      name: validated.name,
      gender,
      birthDate: birthDateValue ? new Date(birthDateValue) : null,
      notes: toNullableString(validated.notes),
    },
  });

  revalidatePath(`/customer/${customerId}`);
  redirect(`/customer/${customerId}`);
}
