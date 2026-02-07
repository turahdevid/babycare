import Link from "next/link";

import { formatCurrency, formatDateTime } from "~/app/(admin)/report/_utils";

type TransactionRow = {
  id: string;
  customerName: string;
  babyName: string | null;
  midwifeName: string | null;
  startAt: Date;
  status: string;
  serviceType: string;
  treatments: string;
  totalPrice: number;
};

type Props = {
  rows: TransactionRow[];
};

export function TransactionDetailTable({ rows }: Props) {
  if (rows.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-slate-700/80">
        Belum ada data transaksi
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/60 text-xs text-slate-600">
            <th className="whitespace-nowrap px-3 py-3 font-medium">Tanggal</th>
            <th className="whitespace-nowrap px-3 py-3 font-medium">Customer</th>
            <th className="whitespace-nowrap px-3 py-3 font-medium">Bayi</th>
            <th className="whitespace-nowrap px-3 py-3 font-medium">Bidan</th>
            <th className="whitespace-nowrap px-3 py-3 font-medium">Layanan</th>
            <th className="whitespace-nowrap px-3 py-3 font-medium">Treatment</th>
            <th className="whitespace-nowrap px-3 py-3 font-medium">Status</th>
            <th className="whitespace-nowrap px-3 py-3 font-medium text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-white/50">
              <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">
                {formatDateTime(row.startAt)}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 font-medium text-slate-900">
                <Link
                  className="hover:underline"
                  href={`/reservation/${row.id}`}
                >
                  {row.customerName}
                </Link>
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">
                {row.babyName ?? "-"}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">
                {row.midwifeName ?? "-"}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">
                {row.serviceType}
              </td>
              <td className="max-w-[200px] truncate px-3 py-2.5 text-slate-700">
                {row.treatments}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5">
                <StatusBadge status={row.status} />
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-right font-medium text-slate-900">
                {formatCurrency(row.totalPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  let color = "bg-slate-100 text-slate-700";
  if (status === "COMPLETED") color = "bg-emerald-50 text-emerald-700";
  if (status === "CANCELLED" || status === "NO_SHOW")
    color = "bg-red-50 text-red-700";
  if (status === "CONFIRMED") color = "bg-sky-50 text-sky-700";
  if (status === "IN_PROGRESS") color = "bg-amber-50 text-amber-700";
  if (status === "PENDING") color = "bg-violet-50 text-violet-700";

  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${color}`}
    >
      {status}
    </span>
  );
}
