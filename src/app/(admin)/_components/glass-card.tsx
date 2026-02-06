function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/55 bg-white/35 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
