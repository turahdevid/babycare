"use client";

import { usePathname } from "next/navigation";

import { UserMenu } from "~/app/_components/user-menu";
import { NotificationBell } from "./notification-bell";

function getDashboardTitle(pathname: string): string {
  if (pathname === "/" || pathname.startsWith("/dashboard")) return "Dashboard";
  if (pathname.startsWith("/reservation")) return "Reservation";
  if (pathname.startsWith("/customer")) return "Customer";
  if (pathname.startsWith("/treatment")) return "Treatment";
  if (pathname.startsWith("/report")) return "Report";
  if (pathname.startsWith("/account/password")) return "Ganti password";
  if (pathname.startsWith("/account")) return "Data user";
  if (pathname.startsWith("/user")) return "User";
  return "Dashboard";
}

export function DashboardHeader() {
  const pathname = usePathname();
  const title = getDashboardTitle(pathname);

  return (
    <header className="mb-8">
      <div className="relative z-50 rounded-[22px] border border-white/55 bg-white/30 px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          <div className="flex items-center gap-3">
            <NotificationBell />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
