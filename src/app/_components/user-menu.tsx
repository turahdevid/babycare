"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m8 10 4 4 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
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
        d="M12 12.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 20.2c1.9-3.8 5-5.7 7.5-5.7s5.6 1.9 7.5 5.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconKey({ className }: { className?: string }) {
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
        d="M8.2 15.8a4.6 4.6 0 1 1 2.4-8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 12l9.2-9.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M16 6l2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M13.6 8.4l2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconLogout({ className }: { className?: string }) {
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
        d="M10 7V6a2.5 2.5 0 0 1 2.5-2.5H18A2.5 2.5 0 0 1 20.5 6v12A2.5 2.5 0 0 1 18 20.5h-5.5A2.5 2.5 0 0 1 10 18v-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M3.5 12h9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m6.5 9 3 3-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function getInitials(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "U";

  const parts = trimmed.split(/\s+/).filter(Boolean);

  const first = parts[0]?.[0] ?? "U";
  const second = parts.length > 1 ? parts[parts.length - 1]?.[0] : undefined;

  return `${first}${second ?? ""}`.toUpperCase();
}

export function UserMenu() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const label = useMemo(() => {
    const name = session?.user?.name;
    const email = session?.user?.email;

    if (typeof name === "string" && name.trim().length > 0) return name;
    if (typeof email === "string" && email.trim().length > 0) return email;
    return "User";
  }, [session?.user?.email, session?.user?.name]);

  const initials = useMemo(() => getInitials(label), [label]);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    close();
  }, [close, pathname]);

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

  const onLogout = useCallback(() => {
    close();
    void signOut({ callbackUrl: "/" });
  }, [close]);

  return (
    <div className="relative z-40" ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "inline-flex items-center gap-3 rounded-2xl border border-white/55 bg-white/25 px-3 py-2",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl",
          "transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        )}
        onClick={() => {
          setOpen((current) => !current);
        }}
        type="button"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(147,197,253,0.55),rgba(251,207,232,0.42),rgba(196,181,253,0.52))] text-sm font-semibold text-slate-900 shadow-[0_14px_32px_rgba(99,102,241,0.16)]">
          {initials}
        </span>
        <span className="hidden max-w-[200px] truncate text-sm font-semibold text-slate-900/90 sm:block">
          {label}
        </span>
        <IconChevron className={cn("h-4 w-4 text-slate-700/70", open && "rotate-180")} />
      </button>

      {open ? (
        <div
          aria-label="User menu"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[260px] rounded-[20px] border border-white/55 bg-white/55 p-2 shadow-[0_28px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl ring-1 ring-white/60"
          role="menu"
        >
          <Link
            className={cn(
              "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-slate-800",
              "transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            )}
            href="/account"
            role="menuitem"
          >
            <IconUser className="h-5 w-5 text-sky-700/70" />
            <span>Data user</span>
          </Link>

          <Link
            className={cn(
              "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-slate-800",
              "transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            )}
            href="/account/password"
            role="menuitem"
          >
            <IconKey className="h-5 w-5 text-violet-700/70" />
            <span>Ganti password</span>
          </Link>

          <div className="my-2 h-px bg-white/50" />

          <button
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold",
              "text-rose-700 transition hover:bg-rose-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            )}
            onClick={onLogout}
            role="menuitem"
            type="button"
          >
            <IconLogout className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
