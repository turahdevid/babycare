import { NextResponse } from "next/server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

export async function POST() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  await db.notification.updateMany({
    where: {
      userId: session.user.id,
      status: "UNREAD",
    },
    data: {
      status: "READ",
      readAt: now,
    },
  });

  return NextResponse.json({ ok: true });
}
