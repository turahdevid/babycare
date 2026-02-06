"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { z } from "zod";

import { GlassCard } from "../../(admin)/_components/glass-card";

type TreatmentItem = {
  id: string;
  name: string;
  description: string | null;
  durationMinutes: number;
  basePrice: number;
};

type Props = {
  treatments: TreatmentItem[];
  defaultPhone?: string;
};

type SelectedTreatment = {
  treatmentId: string;
  quantity: number;
};

type AvailableSlot = {
  slot: string;
  label: string;
};

const availableSlotsResponseSchema = z.object({
  slots: z.array(
    z.object({
      slot: z.string().min(1),
      label: z.string().min(1),
      available: z.boolean().optional(),
    }),
  ),
});

const createReservationResponseSchema = z.object({
  reservationId: z.string().min(1),
});

const createReservationErrorSchema = z.object({
  error: z.string().optional(),
});

function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

export function PublicReservationForm({ treatments, defaultPhone }: Props) {
  const motherNameId = useId();
  const motherPhoneId = useId();
  const motherEmailId = useId();
  const dateId = useId();
  const timeId = useId();
  const serviceTypeId = useId();
  const notesId = useId();

  const todayIso = useMemo(() => {
    return new Date().toISOString().split("T")[0] ?? "";
  }, []);

  const [motherName, setMotherName] = useState<string>("");
  const [motherPhone, setMotherPhone] = useState<string>(defaultPhone ?? "");
  const [motherEmail, setMotherEmail] = useState<string>("");
  const [serviceType, setServiceType] = useState<"OUTLET" | "HOMECARE">(
    "OUTLET",
  );
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [selectedTreatments, setSelectedTreatments] = useState<
    SelectedTreatment[]
  >([]);
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [error, setError] = useState<string>("");
  const [successReservationId, setSuccessReservationId] = useState<string>("");

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setMotherPhone(defaultPhone ?? "");
  }, [defaultPhone]);

  const totalDuration = useMemo(() => {
    return selectedTreatments.reduce((sum, item) => {
      const treatment = treatments.find((t) => t.id === item.treatmentId);
      return sum + (treatment?.durationMinutes ?? 0) * item.quantity;
    }, 0);
  }, [selectedTreatments, treatments]);

  const totalPrice = useMemo(() => {
    return selectedTreatments.reduce((sum, item) => {
      const treatment = treatments.find((t) => t.id === item.treatmentId);
      return sum + (treatment?.basePrice ?? 0) * item.quantity;
    }, 0);
  }, [selectedTreatments, treatments]);

  const addTreatment = useCallback((treatmentId: string) => {
    setSelectedTreatments((current) => {
      const existing = current.find((t) => t.treatmentId === treatmentId);
      if (!existing) {
        return [...current, { treatmentId, quantity: 1 }];
      }
      return current.map((t) =>
        t.treatmentId === treatmentId ? { ...t, quantity: t.quantity + 1 } : t,
      );
    });
  }, []);

  const removeTreatment = useCallback((treatmentId: string) => {
    setSelectedTreatments((current) =>
      current.filter((t) => t.treatmentId !== treatmentId),
    );
  }, []);

  const fetchSlots = useCallback(async () => {
    if (!date) {
      setAvailableSlots([]);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoadingSlots(true);

    try {
      const response = await fetch("/api/reservation/available-slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, serviceType }),
        signal: controller.signal,
      });

      if (!response.ok) {
        setAvailableSlots([]);
        return;
      }

      const json: unknown = await response.json();
      const parsed = availableSlotsResponseSchema.safeParse(json);

      if (!parsed.success) {
        setAvailableSlots([]);
        return;
      }

      const normalized: AvailableSlot[] = parsed.data.slots
        .filter((s) => s.slot.length > 0)
        .map((s) => ({ slot: s.slot, label: s.label }));

      setAvailableSlots(normalized);

      if (time.length > 0 && !normalized.some((s) => s.slot === time)) {
        setTime("");
      }
    } catch (err) {
      const errorName = err instanceof Error ? err.name : "";
      if (errorName !== "AbortError") {
        setAvailableSlots([]);
      }
    } finally {
      setIsLoadingSlots(false);
    }
  }, [date, serviceType, time]);

  useEffect(() => {
    void fetchSlots();
  }, [fetchSlots]);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isSubmitting) return;

      setError("");
      setSuccessReservationId("");

      if (selectedTreatments.length === 0) {
        setError("Pilih minimal 1 treatment");
        return;
      }

      setIsSubmitting(true);

      try {
        const formData = new FormData();
        formData.set("motherName", motherName.trim());
        formData.set("motherPhone", motherPhone.trim());
        if (motherEmail.trim().length > 0) {
          formData.set("motherEmail", motherEmail.trim());
        }
        formData.set("serviceType", serviceType);
        formData.set("date", date);
        formData.set("time", time);
        if (notes.trim().length > 0) {
          formData.set("notes", notes.trim());
        }
        formData.set("treatments", JSON.stringify(selectedTreatments));

        const response = await fetch("/api/public/reservation/create", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorJson: unknown = await response.json();
          const parsedError = createReservationErrorSchema.safeParse(errorJson);

          throw new Error(
            parsedError.success
              ? (parsedError.data.error ?? "Gagal membuat reservasi")
              : "Gagal membuat reservasi",
          );
        }

        const json: unknown = await response.json();
        const parsed = createReservationResponseSchema.safeParse(json);

        if (!parsed.success) {
          throw new Error("Gagal membuat reservasi");
        }

        setSuccessReservationId(parsed.data.reservationId);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      date,
      isSubmitting,
      motherEmail,
      motherName,
      motherPhone,
      notes,
      selectedTreatments,
      serviceType,
      time,
    ],
  );

  const submitDisabled =
    isSubmitting ||
    motherName.trim().length === 0 ||
    motherPhone.trim().length === 0 ||
    date.length === 0 ||
    time.length === 0;

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-6">
        {error ? (
          <GlassCard>
            <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          </GlassCard>
        ) : null}

        {successReservationId ? (
          <GlassCard>
            <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-800">
              Reservasi berhasil dikirim. Kode: {successReservationId}
            </div>
          </GlassCard>
        ) : null}

        <GlassCard>
          <h2 className="text-base font-semibold text-slate-900">
            1. Data Customer
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor={motherNameId}
              >
                Nama Ibu <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id={motherNameId}
                name="motherName"
                onChange={(e) => setMotherName(e.target.value)}
                placeholder="Masukkan nama"
                required
                type="text"
                value={motherName}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor={motherPhoneId}
              >
                Nomor WhatsApp <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id={motherPhoneId}
                inputMode="tel"
                name="motherPhone"
                onChange={(e) => setMotherPhone(e.target.value)}
                placeholder="Contoh: 08xxxxxxxxxx"
                required
                type="tel"
                value={motherPhone}
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor={motherEmailId}
              >
                Email (Opsional)
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id={motherEmailId}
                inputMode="email"
                name="motherEmail"
                onChange={(e) => setMotherEmail(e.target.value)}
                placeholder="email@example.com"
                type="email"
                value={motherEmail}
              />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-base font-semibold text-slate-900">
            2. Jadwal
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor={serviceTypeId}
              >
                Jenis Layanan <span className="text-rose-600">*</span>
              </label>
              <select
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id={serviceTypeId}
                name="serviceType"
                onChange={(e) =>
                  setServiceType(
                    e.target.value === "HOMECARE" ? "HOMECARE" : "OUTLET",
                  )
                }
                value={serviceType}
              >
                <option value="OUTLET">Outlet</option>
                <option value="HOMECARE">Homecare</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor={dateId}
              >
                Tanggal <span className="text-rose-600">*</span>
              </label>
              <input
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id={dateId}
                min={todayIso}
                name="date"
                onChange={(e) => setDate(e.target.value)}
                required
                type="date"
                value={date}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor={timeId}
              >
                Jam <span className="text-rose-600">*</span>
              </label>
              <select
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60 disabled:opacity-60"
                disabled={!date || isLoadingSlots}
                id={timeId}
                name="time"
                onChange={(e) => setTime(e.target.value)}
                required
                value={time}
              >
                <option value="">
                  {isLoadingSlots
                    ? "Memuat slot..."
                    : !date
                      ? "Pilih tanggal dulu"
                      : "Pilih jam"}
                </option>
                {availableSlots.map((slot) => (
                  <option key={slot.slot} value={slot.slot}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {totalDuration > 0 ? (
            <div className="mt-4 rounded-xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm text-sky-700">
              Estimasi durasi: {totalDuration} menit
            </div>
          ) : null}
        </GlassCard>

        <GlassCard>
          <h2 className="text-base font-semibold text-slate-900">
            3. Pilih Treatment
          </h2>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {treatments.map((treatment) => {
              const selected = selectedTreatments.find(
                (t) => t.treatmentId === treatment.id,
              );

              return (
                <div
                  key={treatment.id}
                  className="rounded-xl border border-white/55 bg-white/25 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-slate-900">
                        {treatment.name}
                      </p>
                      {treatment.description ? (
                        <p className="mt-1 text-xs text-slate-700/80">
                          {treatment.description}
                        </p>
                      ) : null}
                      <p className="mt-1 text-xs text-slate-700/80">
                        {treatment.durationMinutes} menit • {" "}
                        {formatRupiah(treatment.basePrice)}
                      </p>
                    </div>

                    {selected ? (
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-900">
                          x{selected.quantity}
                        </span>
                        <button
                          className="rounded-lg border border-rose-200/60 bg-rose-50/50 px-2 py-1 text-xs font-medium text-rose-700 transition hover:bg-rose-50/70"
                          onClick={() => removeTreatment(treatment.id)}
                          type="button"
                        >
                          Hapus
                        </button>
                      </div>
                    ) : (
                      <button
                        className="rounded-lg border border-sky-200/60 bg-sky-50/50 px-3 py-1 text-xs font-medium text-sky-700 transition hover:bg-sky-50/70"
                        onClick={() => addTreatment(treatment.id)}
                        type="button"
                      >
                        Tambah
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedTreatments.length > 0 ? (
            <div className="mt-4 rounded-xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-emerald-900">Total Harga</span>
                <span className="text-lg font-semibold text-emerald-900">
                  {formatRupiah(totalPrice)}
                </span>
              </div>
            </div>
          ) : null}
        </GlassCard>

        <GlassCard>
          <h2 className="text-base font-semibold text-slate-900">
            4. Catatan (Opsional)
          </h2>
          <textarea
            className="mt-4 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
            id={notesId}
            name="notes"
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Catatan tambahan"
            rows={3}
            value={notes}
          />
        </GlassCard>

        <GlassCard>
          <button
            className="w-full rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70 disabled:opacity-50"
            disabled={submitDisabled}
            type="submit"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Reservasi"}
          </button>
          <p className="mt-3 text-xs text-slate-700/70">
            Setelah dikirim, tim kami akan menghubungi Anda untuk konfirmasi.
          </p>
        </GlassCard>
      </div>
    </form>
  );
}
