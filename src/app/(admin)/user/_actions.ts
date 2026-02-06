"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { auth } from "~/server/auth";
import { hashPassword } from "~/server/auth/password";
import { db } from "~/server/db";

const idSchema = z.string().min(1, "ID wajib");

const userSchema = z.object({
  email: z.string().email("Email tidak valid"),
  name: z.string().min(1, "Nama wajib diisi"),
  role: z.enum(["ADMIN", "MIDWIFE"]),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

const updateUserSchema = z
  .object({
    email: z.string().email("Email tidak valid"),
    name: z.string().min(1, "Nama wajib diisi"),
    role: z.enum(["ADMIN", "MIDWIFE"]),
    password: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const pwd = typeof data.password === "string" ? data.password.trim() : "";
    if (pwd.length > 0 && pwd.length < 8) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 8,
        inclusive: true,
        type: "string",
        message: "Password minimal 8 karakter",
        path: ["password"],
      });
    }
  });

async function requireAdmin() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return session;
}

export async function createUser(formData: FormData) {
  await requireAdmin();

  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
    role: formData.get("role"),
    password: formData.get("password"),
  };

  const validated = userSchema.safeParse(data);

  if (!validated.success) {
    redirect("/user/new?error=invalid");
  }

  const existingUser = await db.user.findUnique({
    where: { email: validated.data.email },
    select: { id: true },
  });

  if (existingUser) {
    redirect("/user/new?error=email-exists");
  }

  const hashedPassword = await hashPassword(validated.data.password);

  await db.user.create({
    data: {
      email: validated.data.email,
      name: validated.data.name,
      role: validated.data.role,
      password: hashedPassword,
      emailVerified: new Date(),
    },
  });

  revalidatePath("/user");
  redirect("/user?success=created");
}

export async function updateUser(userId: string, formData: FormData) {
  await requireAdmin();

  const parsedId = idSchema.safeParse(userId);
  if (!parsedId.success) {
    redirect("/user?error=invalid");
  }

  const parsed = updateUserSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    role: formData.get("role"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    redirect(`/user/${parsedId.data}?error=invalid`);
  }

  const existing = await db.user.findUnique({
    where: { id: parsedId.data },
    select: { id: true, role: true },
  });

  if (!existing) {
    redirect("/user?error=not-found");
  }

  if (existing.role === "ADMIN" && parsed.data.role === "MIDWIFE") {
    const adminCount = await db.user.count({
      where: { role: "ADMIN" },
    });

    if (adminCount <= 1) {
      redirect(`/user/${existing.id}?error=last-admin`);
    }
  }

  const emailOwner = await db.user.findUnique({
    where: { email: parsed.data.email },
    select: { id: true },
  });

  if (emailOwner && emailOwner.id !== parsedId.data) {
    redirect(`/user/${parsedId.data}?error=email-exists`);
  }

  const passwordTrimmed =
    typeof parsed.data.password === "string" ? parsed.data.password.trim() : "";
  const nextPassword =
    passwordTrimmed.length > 0
      ? await hashPassword(passwordTrimmed)
      : undefined;

  await db.user.update({
    where: { id: parsedId.data },
    data: {
      email: parsed.data.email,
      name: parsed.data.name,
      role: parsed.data.role,
      ...(nextPassword ? { password: nextPassword } : {}),
    },
  });

  revalidatePath("/user");
  redirect("/user?success=updated");
}

export async function deleteUser(userId: string) {
  const session = await requireAdmin();

  const parsedId = idSchema.safeParse(userId);
  if (!parsedId.success) {
    redirect("/user?error=invalid");
  }

  if (session.user.id === parsedId.data) {
    redirect("/user?error=cannot-delete-self");
  }

  const userToDelete = await db.user.findUnique({
    where: { id: parsedId.data },
    select: { id: true, role: true },
  });

  if (!userToDelete) {
    redirect("/user?error=not-found");
  }

  if (userToDelete.role === "ADMIN") {
    const adminCount = await db.user.count({
      where: { role: "ADMIN" },
    });

    if (adminCount <= 1) {
      redirect("/user?error=last-admin");
    }
  }

  await db.user.delete({
    where: { id: userToDelete.id },
  });

  revalidatePath("/user");
  redirect("/user?success=deleted");
}
