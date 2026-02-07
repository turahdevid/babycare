export type ReportPeriod = "today" | "week" | "month";

export function parseReportPeriod(value: string | undefined): ReportPeriod {
  if (value === "today" || value === "week" || value === "month") {
    return value;
  }
  return "month";
}

export function getPeriodStartDate(period: ReportPeriod, now: Date): Date {
  if (period === "today") {
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    return start;
  }

  if (period === "week") {
    const start = new Date(now);
    start.setDate(now.getDate() - 7);
    return start;
  }

  const start = new Date(now);
  start.setMonth(now.getMonth() - 1);
  return start;
}

export function getPeriodEndDate(period: ReportPeriod, now: Date): Date {
  if (period === "today") {
    const end = new Date(now);
    end.setHours(0, 0, 0, 0);
    end.setDate(end.getDate() + 1);
    return end;
  }

  return now;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatShortDate(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(date);
}

export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}
