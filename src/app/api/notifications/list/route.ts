import { NextResponse } from "next/server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

type BirthdayReminder = {
  babyId: string;
  babyName: string;
  customerId: string;
  motherName: string;
  motherPhone: string;
  birthDate: string;
};

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [unreadCount, notifications] = await Promise.all([
    db.notification.count({
      where: { userId: session.user.id, status: "UNREAD" },
    }),
    db.notification.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 25,
      select: {
        id: true,
        type: true,
        status: true,
        title: true,
        body: true,
        reservationId: true,
        createdAt: true,
        readAt: true,
      },
    }),
  ]);

  const birthdayReminders: BirthdayReminder[] = [];

  if (session.user.role === "ADMIN") {
    const today = new Date();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();

    const babies = await db.baby.findMany({
      where: {
        deletedAt: null,
        birthDate: { not: null },
        customer: { deletedAt: null },
      },
      select: {
        id: true,
        customerId: true,
        name: true,
        birthDate: true,
        customer: {
          select: {
            motherName: true,
            motherPhone: true,
          },
        },
      },
    });

    for (const baby of babies) {
      const birthDate = baby.birthDate;
      if (!birthDate) continue;

      if (birthDate.getMonth() !== todayMonth) continue;
      if (birthDate.getDate() !== todayDate) continue;

      birthdayReminders.push({
        babyId: baby.id,
        babyName: baby.name,
        customerId: baby.customerId,
        motherName: baby.customer.motherName,
        motherPhone: baby.customer.motherPhone,
        birthDate: birthDate.toISOString(),
      });
    }
  }

  return NextResponse.json({
    unreadCount,
    notifications: notifications.map((n) => ({
      ...n,
      createdAt: n.createdAt.toISOString(),
      readAt: n.readAt ? n.readAt.toISOString() : null,
    })),
    birthdayReminders,
  });
}
