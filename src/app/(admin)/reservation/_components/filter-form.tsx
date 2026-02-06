"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function FilterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const statusFilter = searchParams.get("status") ?? "ALL";
  const dateFilter = searchParams.get("date") ?? new Date().toISOString().split("T")[0];

  const handleStatusChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "ALL") {
      params.delete("status");
    } else {
      params.set("status", value);
    }
    router.push(`/reservation/list?${params.toString()}`);
  };

  const handleDateChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("date", value);
    router.push(`/reservation/list?${params.toString()}`);
  };

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="status">
          Status:
        </label>
        <select
          className="rounded-xl border border-white/60 bg-white/45 px-3 py-1.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
          defaultValue={statusFilter}
          id="status"
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="ALL">Semua</option>
          <option value="PENDING">Pending</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
          <option value="NO_SHOW">No Show</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="date">
          Tanggal:
        </label>
        <input
          className="rounded-xl border border-white/60 bg-white/45 px-3 py-1.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
          defaultValue={dateFilter}
          id="date"
          onChange={(e) => handleDateChange(e.target.value)}
          type="date"
        />
      </div>
    </div>
  );
}
