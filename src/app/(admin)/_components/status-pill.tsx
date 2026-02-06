type ReservationStatus =
  | "PENDING"
  | "CONFIRMED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED"
  | "NO_SHOW";

const statusConfig: Record<
  ReservationStatus,
  { label: string; className: string }
> = {
  PENDING: {
    label: "Pending",
    className: "border-amber-200/60 bg-amber-50/50 text-amber-700",
  },
  CONFIRMED: {
    label: "Confirmed",
    className: "border-sky-200/60 bg-sky-50/50 text-sky-700",
  },
  IN_PROGRESS: {
    label: "In Progress",
    className: "border-violet-200/60 bg-violet-50/50 text-violet-700",
  },
  COMPLETED: {
    label: "Completed",
    className: "border-emerald-200/60 bg-emerald-50/50 text-emerald-700",
  },
  CANCELLED: {
    label: "Cancelled",
    className: "border-rose-200/60 bg-rose-50/50 text-rose-700",
  },
  NO_SHOW: {
    label: "No Show",
    className: "border-slate-200/60 bg-slate-50/50 text-slate-700",
  },
};

export function StatusPill({ status }: { status: ReservationStatus }) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
