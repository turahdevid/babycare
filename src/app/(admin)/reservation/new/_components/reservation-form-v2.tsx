"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import type { Customer, Baby, User } from "~/server/db";

import { GlassCard } from "../../../_components/glass-card";
import { NewCustomerModal, type NewCustomerPayload } from "./new-customer-modal";
import { SLOT_CAPACITY } from "~/lib/time-slots";

const availableSlotsResponseSchema = z.object({
  slots: z.array(
    z.object({
      slot: z.string().min(1),
      label: z.string().min(1),
      available: z.boolean(),
      current: z.object({
        outlet: z.number().int().nonnegative(),
        homecare: z.number().int().nonnegative(),
      }),
    }),
  ),
});

const createReservationResponseSchema = z.object({
  reservationId: z.string().min(1),
});

const createReservationErrorSchema = z.object({
  error: z.string().optional(),
});

type TreatmentItem = {
  id: string;
  name: string;
  description: string | null;
  durationMinutes: number;
  basePrice: number;
  isActive: boolean;
};

type Props = {
  customers: (Customer & { babies: Baby[] })[];
  treatments: TreatmentItem[];
  midwives: Pick<User, "id" | "name" | "email">[];
};

export function ReservationForm({ customers, treatments, midwives }: Props) {
  const router = useRouter();
  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [showNewCustomerModal, setShowNewCustomerModal] = useState(false);
  const [newCustomerData, setNewCustomerData] = useState<NewCustomerPayload | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedServiceType, setSelectedServiceType] = useState<"OUTLET" | "HOMECARE">("OUTLET");
  const [availableSlots, setAvailableSlots] = useState<
    Array<{
      slot: string;
      label: string;
      available: boolean;
      current: { outlet: number; homecare: number };
    }>
  >([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [selectedTreatments, setSelectedTreatments] = useState<
    { treatmentId: string; quantity: number }[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const selectedCustomer = customers.find((c) => c.id === selectedCustomerId);

  const handleNewCustomerClick = () => {
    setShowNewCustomerModal(true);
  };

  const handleNewCustomerSave = (customer: NewCustomerPayload) => {
    setNewCustomerData(customer);
    setSelectedCustomerId("new");
    setShowNewCustomerModal(false);
  };

  const loadAvailableSlots = async (args?: {
    date?: string;
    serviceType?: "OUTLET" | "HOMECARE";
  }) => {
    const date = args?.date ?? selectedDate;
    const serviceType = args?.serviceType ?? selectedServiceType;

    if (!date) {
      setAvailableSlots([]);
      return;
    }

    setIsLoadingSlots(true);
    try {
      const response = await fetch("/api/reservation/available-slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          serviceType,
        }),
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

      setAvailableSlots(parsed.data.slots);

      if (
        selectedTime.length > 0 &&
        !parsed.data.slots.some((s) => s.slot === selectedTime)
      ) {
        setSelectedTime("");
      }
    } catch {
      setAvailableSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleAddTreatment = (treatmentId: string) => {
    const existing = selectedTreatments.find((t) => t.treatmentId === treatmentId);
    if (existing) {
      setSelectedTreatments(
        selectedTreatments.map((t) =>
          t.treatmentId === treatmentId ? { ...t, quantity: t.quantity + 1 } : t,
        ),
      );
    } else {
      setSelectedTreatments([...selectedTreatments, { treatmentId, quantity: 1 }]);
    }
  };

  const handleRemoveTreatment = (treatmentId: string) => {
    setSelectedTreatments(
      selectedTreatments.filter((t) => t.treatmentId !== treatmentId),
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    if (selectedTreatments.length === 0) {
      setError("Pilih minimal 1 treatment");
      setIsSubmitting(false);
      return;
    }

    if (selectedCustomerId === "new" && newCustomerData) {
      formData.set("customerId", "");
      formData.append("newCustomer", JSON.stringify(newCustomerData));
    }

    formData.append("treatments", JSON.stringify(selectedTreatments));
    formData.append("serviceType", selectedServiceType);

    try {
      const response = await fetch("/api/reservation/create", {
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

      router.push(`/reservation/${parsed.data.reservationId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      setIsSubmitting(false);
    }
  };

  const totalDuration = selectedTreatments.reduce((sum, item) => {
    const treatment = treatments.find((t) => t.id === item.treatmentId);
    return sum + (treatment?.durationMinutes ?? 0) * item.quantity;
  }, 0);

  const totalPrice = selectedTreatments.reduce((sum, item) => {
    const treatment = treatments.find((t) => t.id === item.treatmentId);
    return sum + (treatment?.basePrice ?? 0) * item.quantity;
  }, 0);

  return (
    <>
      {showNewCustomerModal ? (
        <NewCustomerModal
          onCancel={() => setShowNewCustomerModal(false)}
          onSave={handleNewCustomerSave}
        />
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          {error ? (
            <GlassCard>
              <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            </GlassCard>
          ) : null}

          <GlassCard>
            <h3 className="text-base font-semibold text-slate-900">
              1. Pilih Customer & Baby
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="customerId"
                >
                  Customer <span className="text-rose-600">*</span>
                </label>
                <div className="mt-1.5 flex gap-2">
                  <select
                    className="flex-1 rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="customerId"
                    name="customerId"
                    onChange={(e) => setSelectedCustomerId(e.target.value)}
                    required={!newCustomerData}
                    value={selectedCustomerId}
                  >
                    <option value="">Pilih customer</option>
                    {newCustomerData ? (
                      <option value="new">
                        {newCustomerData.motherName} - {newCustomerData.motherPhone} (Baru)
                      </option>
                    ) : null}
                    {customers.map((customer) => (
                      <option key={customer.id} value={customer.id}>
                        {customer.motherName} - {customer.motherPhone}
                      </option>
                    ))}
                  </select>
                  <button
                    className="rounded-2xl border border-emerald-200/60 bg-emerald-50/50 px-4 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50/70"
                    onClick={handleNewCustomerClick}
                    type="button"
                  >
                    + Customer Baru
                  </button>
                </div>
              </div>

              {selectedCustomer && selectedCustomer.babies.length > 0 ? (
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="babyId"
                  >
                    Baby (Opsional)
                  </label>
                  <select
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="babyId"
                    name="babyId"
                  >
                    <option value="">Tidak ada baby</option>
                    {selectedCustomer.babies.map((baby: Baby) => (
                      <option key={baby.id} value={baby.id}>
                        {baby.name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-base font-semibold text-slate-900">
              2. Tipe Layanan & Jadwal
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Tipe Layanan <span className="text-rose-600">*</span>
                </label>
                <div className="mt-1.5 flex gap-3">
                  <button
                    className={
                      selectedServiceType === "OUTLET"
                        ? "flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/70 px-4 py-2.5 text-sm font-medium text-sky-700 transition"
                        : "flex-1 rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
                    }
                    onClick={() => {
                      const nextServiceType = "OUTLET" as const;
                      setSelectedServiceType(nextServiceType);
                      void loadAvailableSlots({ serviceType: nextServiceType });
                    }}
                    type="button"
                  >
                    🏪 Outlet (Kapasitas: 2/slot)
                  </button>
                  <button
                    className={
                      selectedServiceType === "HOMECARE"
                        ? "flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/70 px-4 py-2.5 text-sm font-medium text-sky-700 transition"
                        : "flex-1 rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
                    }
                    onClick={() => {
                      const nextServiceType = "HOMECARE" as const;
                      setSelectedServiceType(nextServiceType);
                      void loadAvailableSlots({ serviceType: nextServiceType });
                    }}
                    type="button"
                  >
                    🏠 Homecare (Kapasitas: 1/slot)
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="date"
                  >
                    Tanggal <span className="text-rose-600">*</span>
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="date"
                    min={new Date().toISOString().split("T")[0]}
                    name="date"
                    onChange={(e) => {
                      const nextDate = e.target.value;
                      setSelectedDate(nextDate);
                      void loadAvailableSlots({ date: nextDate });
                    }}
                    required
                    type="date"
                    value={selectedDate}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="time"
                  >
                    Pilih Slot Waktu <span className="text-rose-600">*</span>
                  </label>
                  <select
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60 disabled:opacity-50"
                    disabled={isLoadingSlots || !selectedDate}
                    id="time"
                    name="time"
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    value={selectedTime}
                  >
                    <option value="">
                      {isLoadingSlots
                        ? "Memuat slot..."
                        : !selectedDate
                          ? "Pilih tanggal dulu"
                          : availableSlots.length === 0
                            ? "Tidak ada slot tersedia"
                            : "Pilih slot"}
                    </option>
                    {availableSlots.map((slot) => (
                      <option key={slot.slot} value={slot.slot}>
                        {slot.label} ({selectedServiceType}: {selectedServiceType === "OUTLET" ? slot.current.outlet : slot.current.homecare}/{selectedServiceType === "OUTLET" ? SLOT_CAPACITY.OUTLET : SLOT_CAPACITY.HOMECARE})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedDate && availableSlots.length === 0 && !isLoadingSlots ? (
                <div className="rounded-xl border border-rose-200/60 bg-rose-50/50 px-4 py-3 text-sm text-rose-700">
                  <p className="font-medium">
                    Semua slot untuk {selectedServiceType} sudah penuh pada tanggal ini
                  </p>
                  <p className="mt-1 text-xs">Pilih tanggal lain atau ubah tipe layanan</p>
                </div>
              ) : null}

              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="midwifeId"
                >
                  Assign Bidan (Opsional)
                </label>
                <select
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  id="midwifeId"
                  name="midwifeId"
                >
                  <option value="">Belum di-assign</option>
                  {midwives.map((midwife) => (
                    <option key={midwife.id} value={midwife.id}>
                      {midwife.name ?? midwife.email}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {totalDuration > 0 ? (
              <div className="mt-4 rounded-xl border border-sky-200/60 bg-sky-50/50 px-4 py-2 text-sm text-sky-700">
                Estimasi durasi: {totalDuration} menit ({Math.floor(totalDuration / 60)}
                jam {totalDuration % 60} menit)
              </div>
            ) : null}
          </GlassCard>

          <GlassCard>
            <h3 className="text-base font-semibold text-slate-900">
              3. Pilih Treatment
            </h3>
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
                        <p className="font-medium text-slate-900">{treatment.name}</p>
                        <p className="mt-1 text-xs text-slate-700/80">
                          {treatment.durationMinutes} menit •{" "}
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(treatment.basePrice)}
                        </p>
                      </div>
                      {selected ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900">
                            x{selected.quantity}
                          </span>
                          <button
                            className="rounded-lg border border-rose-200/60 bg-rose-50/50 px-2 py-1 text-xs font-medium text-rose-700 transition hover:bg-rose-50/70"
                            onClick={() => handleRemoveTreatment(treatment.id)}
                            type="button"
                          >
                            Hapus
                          </button>
                        </div>
                      ) : (
                        <button
                          className="rounded-lg border border-sky-200/60 bg-sky-50/50 px-3 py-1 text-xs font-medium text-sky-700 transition hover:bg-sky-50/70"
                          onClick={() => handleAddTreatment(treatment.id)}
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
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(totalPrice)}
                  </span>
                </div>
              </div>
            ) : null}
          </GlassCard>

          <GlassCard>
            <h3 className="text-base font-semibold text-slate-900">
              4. Catatan (Opsional)
            </h3>
            <textarea
              className="mt-4 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
              name="notes"
              placeholder="Catatan tambahan untuk reservasi ini"
              rows={3}
            />
          </GlassCard>

          <GlassCard>
            <div className="flex gap-3">
              <button
                className="flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70 disabled:opacity-50"
                disabled={isSubmitting || !selectedTime}
                type="submit"
              >
                {isSubmitting ? "Menyimpan..." : "Buat Reservasi"}
              </button>
              <Link
                className="rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
                href="/reservation/list"
              >
                Batal
              </Link>
            </div>
          </GlassCard>
        </div>
      </form>
    </>
  );
}
