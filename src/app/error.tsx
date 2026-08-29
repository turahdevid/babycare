"use client";

import { useEffect } from "react";
import Link from "next/link";
import { GlassCard } from "~/app/(admin)/_components/glass-card";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for client debugging
    console.error("App Error Boundary caught error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md">
        <GlassCard>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            Terjadi Kendala
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {error.message || "Aplikasi mengalami kendala saat memproses halaman ini."}
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => reset()}
              type="button"
              className="flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/70 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50"
            >
              Coba Lagi
            </button>
            <Link
              href="/"
              className="flex-1 rounded-2xl border border-slate-200/60 bg-slate-50/60 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Halaman Utama
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
