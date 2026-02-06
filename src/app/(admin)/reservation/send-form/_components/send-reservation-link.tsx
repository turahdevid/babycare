"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { GlassCard } from "../../../_components/glass-card";

type CopyState = "idle" | "copied" | "failed";

type NormalizedPhone = {
  raw: string;
  digits: string;
  waDigits: string;
};

function normalizePhone(raw: string): NormalizedPhone {
  const digits = raw.replace(/[^0-9]/g, "");

  if (digits.length === 0) {
    return { raw, digits, waDigits: "" };
  }

  if (digits.startsWith("62")) {
    return { raw, digits, waDigits: digits };
  }

  if (digits.startsWith("0")) {
    return { raw, digits, waDigits: `62${digits.slice(1)}` };
  }

  if (digits.startsWith("8")) {
    return { raw, digits, waDigits: `62${digits}` };
  }

  return { raw, digits, waDigits: digits };
}

function buildReservationMessage(link: string): string {
  return `Halo, silakan isi form reservasi melalui link berikut: ${link}`;
}

export function SendReservationLink() {
  const [origin, setOrigin] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [copyState, setCopyState] = useState<CopyState>("idle");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const normalized = useMemo(() => normalizePhone(phone), [phone]);

  const reservationPath = "/r";

  const reservationLink = useMemo(() => {
    if (!origin) return reservationPath;
    return `${origin}${reservationPath}`;
  }, [origin, reservationPath]);

  const whatsappHref = useMemo(() => {
    if (!normalized.waDigits) return "";

    const text = buildReservationMessage(reservationLink);
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${normalized.waDigits}?text=${encoded}`;
  }, [normalized.waDigits, reservationLink]);

  const onCopy = useCallback(() => {
    setCopyState("idle");

    void (async () => {
      try {
        await navigator.clipboard.writeText(reservationLink);
        setCopyState("copied");
      } catch {
        setCopyState("failed");
      }
    })();
  }, [reservationLink]);

  return (
    <GlassCard>
      <h3 className="text-base font-semibold text-slate-900">
        Kirim Link Form Reservasi
      </h3>
      <p className="mt-1 text-sm text-slate-700/80">
        Masukkan nomor WhatsApp customer, lalu klik Send untuk membuka WhatsApp
        dengan pesan berisi link.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="customerPhone"
          >
            Nomor WhatsApp Customer (untuk membuka WA)
          </label>
          <input
            className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
            id="customerPhone"
            inputMode="tel"
            onChange={(e) => {
              setPhone(e.target.value);
              setCopyState("idle");
            }}
            placeholder="Contoh: 08xxxxxxxxxx"
            type="tel"
            value={phone}
          />
          <p className="mt-1.5 text-xs text-slate-700/70">
            Format bebas. Sistem akan mengubah menjadi format WhatsApp (62...).
          </p>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700">
            Link Form
          </label>
          <div className="mt-1.5 rounded-2xl border border-white/60 bg-white/35 px-4 py-3 text-sm text-slate-900">
            <p className="break-all">{reservationLink}</p>
          </div>
          {copyState === "copied" ? (
            <p className="mt-2 text-xs text-emerald-700">
              Link berhasil disalin
            </p>
          ) : null}
          {copyState === "failed" ? (
            <p className="mt-2 text-xs text-rose-700">Gagal menyalin link</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-end md:gap-3 md:col-span-2">
          <button
            className="rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
            onClick={onCopy}
            type="button"
          >
            Copy Link
          </button>

          <a
            aria-disabled={!whatsappHref}
            className={`rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-center text-sm font-medium text-sky-700 transition hover:bg-sky-50/70 ${
              whatsappHref ? "" : "pointer-events-none opacity-50"
            }`}
            href={whatsappHref || "#"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Send via WhatsApp
          </a>

          <a
            className="rounded-2xl border border-violet-200/60 bg-violet-50/50 px-4 py-2.5 text-center text-sm font-medium text-violet-700 transition hover:bg-violet-50/70"
            href={reservationPath}
            rel="noopener noreferrer"
            target="_blank"
          >
            Preview Form
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
