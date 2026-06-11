"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  placeholder?: string;
  initialQuery?: string;
};

export function CustomerSearch({ placeholder, initialQuery }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string>(initialQuery ?? "");

  useEffect(() => {
    const currentQ = searchParams?.get("q") ?? "";
    if (value.trim() === currentQ.trim()) {
      return;
    }

    const handle = setTimeout(() => {
      const params = new URLSearchParams(searchParams?.toString());
      if (value.trim().length > 0) {
        params.set("q", value.trim());
      } else {
        params.delete("q");
      }
      // Reset page when searching
      params.delete("page");
      const qs = params.toString();
      router.replace(`${pathname}${qs ? `?${qs}` : ""}`);
    }, 350);

    return () => clearTimeout(handle);
  }, [value, searchParams, pathname, router]);

  return (
    <input
      className="flex-1 rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder ?? "Cari nama bunda, nomor WA, atau email..."}
      type="search"
      aria-label="Cari customer"
    />
  );
}
