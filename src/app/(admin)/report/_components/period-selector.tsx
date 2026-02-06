"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  basePath?: string;
};

export function PeriodSelector({ basePath }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const period = searchParams.get("period") ?? "month";
  const hrefBase = basePath ?? "/report/overview";

  const handleChange = (value: string) => {
    router.push(`${hrefBase}?period=${value}`);
  };

  return (
    <select
      className="rounded-xl border border-white/60 bg-white/45 px-3 py-1.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
      defaultValue={period}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="today">Hari ini</option>
      <option value="week">7 hari terakhir</option>
      <option value="month">30 hari terakhir</option>
    </select>
  );
}
