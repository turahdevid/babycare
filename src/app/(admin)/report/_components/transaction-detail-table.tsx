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
  paymentMethod: string | null;
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
    <>
      <div className="grid gap-3 xl:hidden">
        {rows.map((row) => (
          <div
            key={row.id}
            className="rounded-2xl border border-white/55 bg-white/25 px-4 py-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs text-slate-700/80">{formatDateTime(row.startAt)}</p>
                <Link
                  className="mt-1 block truncate text-sm font-semibold text-slate-900 hover:underline"
                  href={`/reservation/${row.id}`}
                  title={row.customerName}
                >
                  {row.customerName}
                </Link>
                <p className="mt-1 text-xs text-slate-700/80">
                  {row.babyName ?? "-"} • {row.midwifeName ?? "-"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">
                  {formatCurrency(row.totalPrice)}
                </p>
                <div className="mt-1 flex justify-end">
                  <StatusBadge status={row.status} />
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-1 text-xs text-slate-700/80">
              <p>
                <span className="font-medium text-slate-900">Layanan:</span> {row.serviceType}
              </p>
              <p>
                <span className="font-medium text-slate-900">Pembayaran:</span>{" "}
                {formatPaymentMethod(row.paymentMethod)}
              </p>
              <p className="break-words">
                <span className="font-medium text-slate-900">Treatment:</span> {row.treatments}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto xl:block">
        <table className="min-w-[1100px] w-full table-fixed text-left text-xs">
          <thead>
            <tr className="border-b border-white/60 text-xs text-slate-600">
              <th className="w-[140px] whitespace-nowrap px-3 py-3 font-medium">Tanggal</th>
              <th className="w-[160px] whitespace-nowrap px-3 py-3 font-medium">Customer</th>
              <th className="w-[140px] whitespace-nowrap px-3 py-3 font-medium">Bayi</th>
              <th className="w-[140px] whitespace-nowrap px-3 py-3 font-medium">Bidan</th>
              <th className="w-[110px] whitespace-nowrap px-3 py-3 font-medium">Layanan</th>
              <th className="w-[120px] whitespace-nowrap px-3 py-3 font-medium">Pembayaran</th>
              <th className="w-[320px] whitespace-nowrap px-3 py-3 font-medium">Treatment</th>
              <th className="w-[120px] whitespace-nowrap px-3 py-3 font-medium">Status</th>
              <th className="w-[130px] whitespace-nowrap px-3 py-3 font-medium text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-white/50">
                <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">
                  {formatDateTime(row.startAt)}
                </td>
                <td className="px-3 py-2.5 font-medium text-slate-900">
                  <Link
                    className="block truncate hover:underline"
                    href={`/reservation/${row.id}`}
                    title={row.customerName}
                  >
                    {row.customerName}
                  </Link>
                </td>
                <td className="px-3 py-2.5 text-slate-700">
                  <span className="block truncate" title={row.babyName ?? "-"}>
                    {row.babyName ?? "-"}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-slate-700">
                  <span
                    className="block truncate"
                    title={row.midwifeName ?? "-"}
                  >
                    {row.midwifeName ?? "-"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">
                  {row.serviceType}
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-slate-700">
                  {formatPaymentMethod(row.paymentMethod)}
                </td>
                <td className="px-3 py-2.5 text-slate-700">
                  <span className="block whitespace-normal break-words" title={row.treatments}>
                    {row.treatments}
                  </span>
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
    </>
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

function formatPaymentMethod(method: string | null): string {
  if (method === "CASH") return "Cash";
  if (method === "TRANSFER") return "Transfer";
  return "-";
}
