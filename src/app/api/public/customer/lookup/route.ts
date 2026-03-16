import { NextResponse } from "next/server";
import { z } from "zod";

import { db } from "~/server/db";

const lookupSchema = z.object({
  motherPhone: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const validated = lookupSchema.parse(body);

    const motherPhone = validated.motherPhone.trim();

    if (motherPhone.length === 0) {
      return NextResponse.json({ customer: null }, { status: 200 });
    }

    const customer = await db.customer.findFirst({
      where: { motherPhone, deletedAt: null },
      select: {
        id: true,
        motherName: true,
        motherEmail: true,
        address: true,
        babies: {
          where: { deletedAt: null },
          select: { id: true, name: true },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Data tidak valid" }, { status: 400 });
    }

    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 });
  }
}
