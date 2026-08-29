import { DashboardBottomNav } from "./_components/bottom-nav";
import { DashboardHeader } from "./_components/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative h-[100dvh] overflow-hidden px-3 pt-10 text-slate-900 [--bottom-nav-overlay:calc(76px+1.5rem)] pb-[calc(var(--bottom-nav-overlay)+env(safe-area-inset-bottom))] sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-linear-to-br from-sky-200/70 via-pink-200/55 to-violet-200/65 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full bg-linear-to-tr from-sage-100/70 via-sage-200/45 to-sage-300/60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-white/35 to-white/0 blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full w-full min-w-0 max-w-[1024px] flex-col">
        <DashboardHeader />
        <div className="relative flex-1 min-w-0 w-full overflow-y-auto">{children}</div>
      </div>

      <DashboardBottomNav />
    </div>
  );
}
