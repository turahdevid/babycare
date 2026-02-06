"use client";

import { useCallback } from "react";

type Props = {
  label?: string;
};

export function PrintReceiptButton({ label }: Props) {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <button
      className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
      onClick={handlePrint}
      type="button"
    >
      {label ?? "Cetak Struk"}
    </button>
  );
}
