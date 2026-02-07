"use client";

type Props = {
  pdfHref?: string;
  csvHref?: string;
  pdfLabel?: string;
  csvLabel?: string;
};

export function ReportActions({
  pdfHref,
  csvHref,
  pdfLabel,
  csvLabel,
}: Props) {
  return (
    <div className="flex items-center gap-2 print:hidden">
      {pdfHref ? (
        <a
          className="inline-flex items-center gap-2 rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
          href={pdfHref}
        >
          <PdfIcon className="h-4 w-4" />
          {pdfLabel ?? "PDF"}
        </a>
      ) : null}

      {csvHref ? (
        <a
          className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/35 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-white/45"
          href={csvHref}
        >
          <SheetIcon className="h-4 w-4" />
          {csvLabel ?? "Excel (CSV)"}
        </a>
      ) : null}
    </div>
  );
}

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 2v6h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8 13h2.5a1.5 1.5 0 0 1 0 3H8v-3Zm5 3v-3h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SheetIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 2v6h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8 12h8M8 16h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
