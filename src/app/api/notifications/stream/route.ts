import { auth } from "~/server/auth";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type UpdatePayload = {
  unreadCount: number;
  latestId: string | null;
};

export async function GET(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const encoder = new TextEncoder();

  let lastPayload: UpdatePayload | null = null;

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const sendEvent = (event: string, payload: UpdatePayload) => {
        controller.enqueue(encoder.encode(`event: ${event}\n`));
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(payload)}\n\n`),
        );
      };

      const sendPing = () => {
        controller.enqueue(encoder.encode(": ping\n\n"));
      };

      const tick = async () => {
        const [unreadCount, latest] = await Promise.all([
          db.notification.count({
            where: { userId: session.user.id, status: "UNREAD" },
          }),
          db.notification.findFirst({
            where: { userId: session.user.id },
            orderBy: { createdAt: "desc" },
            select: { id: true },
          }),
        ]);

        const payload: UpdatePayload = {
          unreadCount,
          latestId: latest?.id ?? null,
        };

        const changed =
          lastPayload?.unreadCount !== payload.unreadCount ||
          lastPayload?.latestId !== payload.latestId;

        if (changed) {
          lastPayload = payload;
          sendEvent("update", payload);
        } else {
          sendPing();
        }
      };

      void tick();

      const interval = setInterval(() => {
        void tick();
      }, 5000);

      const onAbort = () => {
        clearInterval(interval);
        controller.close();
      };

      request.signal.addEventListener("abort", onAbort);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
