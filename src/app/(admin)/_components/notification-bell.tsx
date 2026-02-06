"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { z } from "zod";

type NotificationItem = {
  id: string;
  type: string;
  status: "UNREAD" | "READ" | "ARCHIVED";
  title: string;
  body: string;
  reservationId: string | null;
  createdAt: string;
  readAt: string | null;
};

type BirthdayReminder = {
  babyId: string;
  babyName: string;
  customerId: string;
  motherName: string;
  motherPhone: string;
  birthDate: string;
};

const notificationListResponseSchema = z.object({
  unreadCount: z.number().int().nonnegative(),
  notifications: z.array(
    z.object({
      id: z.string().min(1),
      type: z.string().min(1),
      status: z.enum(["UNREAD", "READ", "ARCHIVED"]),
      title: z.string().min(1),
      body: z.string().min(1),
      reservationId: z.string().nullable(),
      createdAt: z.string().min(1),
      readAt: z.string().nullable(),
    }),
  ),
  birthdayReminders: z.array(
    z.object({
      babyId: z.string().min(1),
      babyName: z.string().min(1),
      customerId: z.string().min(1),
      motherName: z.string().min(1),
      motherPhone: z.string().min(1),
      birthDate: z.string().min(1),
    }),
  ),
});

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconBell({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M18 9a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function formatDateTime(value: string): string {
  const date = new Date(value);
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

type State = {
  unreadCount: number;
  notifications: NotificationItem[];
  birthdayReminders: BirthdayReminder[];
};

export function NotificationBell() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>({
    unreadCount: 0,
    notifications: [],
    birthdayReminders: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/notifications/list", {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        return;
      }

      const json: unknown = await response.json();
      const parsed = notificationListResponseSchema.safeParse(json);
      if (!parsed.success) {
        return;
      }

      setState({
        unreadCount: parsed.data.unreadCount,
        notifications: parsed.data.notifications,
        birthdayReminders: parsed.data.birthdayReminders,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    close();
  }, [close, pathname]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      const root = rootRef.current;
      if (!root) return;

      if (!root.contains(target)) {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [close, open]);

  useEffect(() => {
    eventSourceRef.current?.close();
    const eventSource = new EventSource("/api/notifications/stream");
    eventSourceRef.current = eventSource;

    const onUpdate = () => {
      void load();
    };

    eventSource.addEventListener("update", onUpdate);

    eventSource.onerror = () => {
      eventSource.close();
      eventSourceRef.current = null;
    };

    return () => {
      eventSource.removeEventListener("update", onUpdate);
      eventSource.close();
      eventSourceRef.current = null;
    };
  }, [load]);

  const markAllRead = useCallback(() => {
    void (async () => {
      await fetch("/api/notifications/mark-all-read", {
        method: "POST",
        headers: { Accept: "application/json" },
      });
      await load();
    })();
  }, [load]);

  const birthdayCount = state.birthdayReminders.length;
  const unreadCount = state.unreadCount;
  const badgeCount = unreadCount + birthdayCount;

  const badgeLabel = useMemo(() => {
    if (badgeCount <= 0) return "";
    return badgeCount > 99 ? "99+" : `${badgeCount}`;
  }, [badgeCount]);

  return (
    <div className="relative z-40" ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "relative inline-flex items-center justify-center rounded-2xl border border-white/55 bg-white/25 p-2",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl",
          "transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        )}
        onClick={() => {
          setOpen((current) => !current);
        }}
        type="button"
      >
        <IconBell className="h-5 w-5 text-slate-800/80" />
        {badgeCount > 0 ? (
          <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-rose-600 px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-[0_10px_24px_rgba(244,63,94,0.25)]">
            {badgeLabel}
          </span>
        ) : null}
      </button>

      {open ? (
        <div
          aria-label="Notifications"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[340px] rounded-[20px] border border-white/55 bg-white/55 p-2 shadow-[0_28px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl ring-1 ring-white/60"
          role="menu"
        >
          <div className="flex items-center justify-between gap-3 px-2 py-2">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Notifikasi
              </p>
              <p className="text-xs text-slate-700/70">
                {isLoading ? "Memuat..." : `${badgeCount} item`}
              </p>
            </div>

            {unreadCount > 0 ? (
              <button
                className="rounded-2xl border border-slate-200/60 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50/70"
                onClick={markAllRead}
                type="button"
              >
                Tandai semua dibaca
              </button>
            ) : null}
          </div>

          <div className="max-h-[360px] overflow-auto px-1 pb-1">
            {state.birthdayReminders.length > 0 ? (
              <div className="mb-2 rounded-2xl border border-amber-200/60 bg-amber-50/50 px-3 py-3">
                <p className="text-xs font-semibold text-amber-900">
                  Birthday reminder hari ini
                </p>
                <div className="mt-2 space-y-2">
                  {state.birthdayReminders.map((reminder) => (
                    <Link
                      key={reminder.babyId}
                      className="block rounded-xl border border-white/55 bg-white/40 px-3 py-2 text-xs text-slate-800 transition hover:bg-white/55"
                      href={`/customer/${reminder.customerId}`}
                      role="menuitem"
                    >
                      <p className="font-semibold text-slate-900">
                        {reminder.babyName}
                      </p>
                      <p className="mt-0.5 text-slate-700/80">
                        {reminder.motherName} • {reminder.motherPhone}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {state.notifications.length === 0 && state.birthdayReminders.length === 0 ? (
              <div className="px-2 py-8 text-center">
                <p className="text-sm text-slate-700/80">Belum ada notifikasi</p>
              </div>
            ) : (
              <div className="space-y-2">
                {state.notifications.map((item) => {
                  const href = item.reservationId
                    ? `/reservation/${item.reservationId}`
                    : undefined;

                  const content = (
                    <div
                      className={cn(
                        "rounded-2xl border border-white/55 bg-white/40 px-3 py-3 transition hover:bg-white/55",
                        item.status === "UNREAD" &&
                          "ring-1 ring-rose-200/70",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-700/80">
                            {item.body}
                          </p>
                        </div>
                        <span className="text-[10px] font-medium text-slate-600/70">
                          {formatDateTime(item.createdAt)}
                        </span>
                      </div>
                    </div>
                  );

                  return href ? (
                    <Link key={item.id} href={href} role="menuitem">
                      {content}
                    </Link>
                  ) : (
                    <div key={item.id} role="menuitem">
                      {content}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
