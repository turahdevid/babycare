"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10.6 12 4l8 6.6V19a2.3 2.3 0 0 1-2.3 2.3H6.3A2.3 2.3 0 0 1 4 19v-8.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 21V14.8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3.8v2.6M17 3.8v2.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 8.4h15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M6.8 5.4h10.4A2.8 2.8 0 0 1 20 8.2v10A3.4 3.4 0 0 1 16.6 21.6H7.4A3.4 3.4 0 0 1 4 18.2v-10A2.8 2.8 0 0 1 6.8 5.4Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M8.3 12.2h.2M12 12.2h.2M15.7 12.2h.2M8.3 15.9h.2M12 15.9h.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function BabyIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.6c4.7 0 8.5-3.7 8.5-8.3 0-2.2-.9-4.2-2.3-5.7-1.2-1.2-2.8-2-4.5-2.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M12 21.6c-4.7 0-8.5-3.7-8.5-8.3 0-2.2.9-4.2 2.3-5.7 1.2-1.2 2.8-2 4.5-2.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9.2 13.1h.2M14.6 13.1h.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M10.2 16c.6.6 1.2.9 1.8.9s1.2-.3 1.8-.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M10.4 4.5c.2-1.2 1.3-2.1 2.6-2.1s2.4.9 2.6 2.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.2 20.2V10.6c0-.9.7-1.6 1.6-1.6h.5c.9 0 1.6.7 1.6 1.6v9.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M10.6 20.2V6.8c0-.9.7-1.6 1.6-1.6h.5c.9 0 1.6.7 1.6 1.6v13.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M16 20.2v-7c0-.9.7-1.6 1.6-1.6h.5c.9 0 1.6.7 1.6 1.6v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M4 20.2h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Home",
    icon: ({ className }) => <HomeIcon className={className} />,
  },
  {
    href: "/reservation",
    label: "Reservation",
    icon: ({ className }) => <CalendarIcon className={className} />,
  },
  {
    href: "/customer",
    label: "Customer",
    icon: ({ className }) => <BabyIcon className={className} />,
  },
  {
    href: "/report",
    label: "Report",
    icon: ({ className }) => <ChartIcon className={className} />,
  },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/dashboard") {
    return pathname === "/dashboard";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DashboardBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-[1024px] px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] print:hidden"
    >
      <div className="rounded-t-[26px] rounded-b-[26px] border border-white/55 bg-white/35 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
        <div className="grid h-[76px] grid-cols-4 items-center">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                aria-current={active ? "page" : undefined}
                aria-label={item.label}
                className="group flex h-full items-center justify-center outline-none"
                href={item.href}
              >
                <div
                  className={cn(
                    "relative flex h-12 w-12 items-center justify-center rounded-2xl transition duration-200",
                    "active:scale-[0.97]",
                    active &&
                      "bg-[linear-gradient(135deg,rgba(147,197,253,0.55),rgba(251,207,232,0.42),rgba(196,181,253,0.52))] shadow-[0_12px_28px_rgba(99,102,241,0.20)]",
                    !active && "hover:bg-white/35",
                  )}
                >
                  <span
                    className={cn(
                      "text-slate-600 transition duration-200",
                      active && "text-slate-900",
                      !active &&
                        "group-hover:text-slate-800 group-focus-visible:text-slate-800",
                    )}
                  >
                    {item.icon({
                      className: cn(
                        "h-8 w-8 transition duration-200",
                        active && "scale-110",
                      ),
                    })}
                  </span>

                  {active ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/60"
                    />
                  ) : null}
                </div>
                <span className="sr-only">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
