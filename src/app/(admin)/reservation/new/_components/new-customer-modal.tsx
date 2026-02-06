"use client";

import { useState, type FormEvent } from "react";

export type NewCustomerPayload = {
  motherName: string;
  motherPhone: string;
  address: string;
  motherEmail?: string;
  notes?: string;
  baby?: {
    name: string;
    gender?: "MALE" | "FEMALE";
    birthDate?: string;
    notes?: string;
  };
};

type Props = {
  onSave: (customer: NewCustomerPayload) => void;
  onCancel: () => void;
};

export function NewCustomerModal({ onSave, onCancel }: Props) {
  const [motherName, setMotherName] = useState("");
  const [motherPhone, setMotherPhone] = useState("");
  const [motherEmail, setMotherEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [babyName, setBabyName] = useState("");
  const [babyGender, setBabyGender] = useState<"" | "MALE" | "FEMALE">("");
  const [babyBirthDate, setBabyBirthDate] = useState("");
  const [babyNotes, setBabyNotes] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const normalizedEmail = motherEmail.trim();
    const normalizedNotes = notes.trim();
    const normalizedBabyName = babyName.trim();
    const normalizedBabyBirthDate = babyBirthDate.trim();
    const normalizedBabyNotes = babyNotes.trim();

    const payload: NewCustomerPayload = {
      motherName: motherName.trim(),
      motherPhone: motherPhone.trim(),
      address: address.trim(),
    };

    if (normalizedEmail.length > 0) {
      payload.motherEmail = normalizedEmail;
    }

    if (normalizedNotes.length > 0) {
      payload.notes = normalizedNotes;
    }

    if (normalizedBabyName.length > 0) {
      const baby: NonNullable<NewCustomerPayload["baby"]> = {
        name: normalizedBabyName,
      };

      if (babyGender === "MALE" || babyGender === "FEMALE") {
        baby.gender = babyGender;
      }

      if (normalizedBabyBirthDate.length > 0) {
        baby.birthDate = normalizedBabyBirthDate;
      }

      if (normalizedBabyNotes.length > 0) {
        baby.notes = normalizedBabyNotes;
      }

      payload.baby = baby;
    }

    onSave(payload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-3 sm:p-4">
      <div className="flex w-full max-w-3xl flex-col rounded-3xl border border-white/60 bg-white/90 shadow-xl backdrop-blur-md" style={{ maxHeight: '85vh' }}>
        <div className="flex-shrink-0 border-b border-slate-200/50 px-5 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">
                Tambah Customer Baru
              </h3>
              <p className="mt-1 text-sm text-slate-700/80">
                Customer belum terdaftar, isi data berikut
              </p>
            </div>
            <button
              className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100/80 hover:text-slate-900"
              onClick={onCancel}
              type="button"
              aria-label="Tutup"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form className="flex flex-1 flex-col overflow-hidden" onSubmit={handleSubmit}>
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="modal-motherName"
                >
                  Nama Bunda <span className="text-rose-600">*</span>
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  id="modal-motherName"
                  onChange={(e) => setMotherName(e.target.value)}
                  placeholder="Masukkan nama bunda"
                  required
                  type="text"
                  value={motherName}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="modal-motherPhone"
                >
                  Nomor WhatsApp <span className="text-rose-600">*</span>
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  id="modal-motherPhone"
                  onChange={(e) => setMotherPhone(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  required
                  type="tel"
                  value={motherPhone}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="modal-address"
              >
                Alamat <span className="text-rose-600">*</span>
              </label>
              <textarea
                className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                id="modal-address"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Masukkan alamat lengkap"
                required
                rows={2}
                value={address}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="modal-motherEmail"
                >
                  Email (Opsional)
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  id="modal-motherEmail"
                  onChange={(e) => setMotherEmail(e.target.value)}
                  placeholder="email@example.com"
                  type="email"
                  value={motherEmail}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-700"
                  htmlFor="modal-notes"
                >
                  Catatan (Opsional)
                </label>
                <input
                  className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                  id="modal-notes"
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Catatan tambahan"
                  type="text"
                  value={notes}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3">
              <h4 className="text-sm font-semibold text-slate-900">
                Data Baby (Opsional)
              </h4>
              <p className="mt-1 text-xs text-slate-700/80">
                Isi jika ingin mencatat nama/usia/tanggal lahir baby.
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="modal-babyName"
                  >
                    Nama Baby
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="modal-babyName"
                    onChange={(e) => setBabyName(e.target.value)}
                    placeholder="Masukkan nama baby"
                    type="text"
                    value={babyName}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="modal-babyGender"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="modal-babyGender"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "MALE" || value === "FEMALE") {
                        setBabyGender(value);
                        return;
                      }
                      setBabyGender("");
                    }}
                    value={babyGender}
                  >
                    <option value="">-</option>
                    <option value="MALE">Laki-laki</option>
                    <option value="FEMALE">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="modal-babyBirthDate"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="modal-babyBirthDate"
                    onChange={(e) => setBabyBirthDate(e.target.value)}
                    type="date"
                    value={babyBirthDate}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="modal-babyNotes"
                  >
                    Usia Baby / Catatan (Opsional)
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60"
                    id="modal-babyNotes"
                    onChange={(e) => setBabyNotes(e.target.value)}
                    placeholder="Contoh: 1 bulan 2 minggu"
                    type="text"
                    value={babyNotes}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 border-t border-slate-200/50 bg-white/95 px-5 py-3">
            <div className="flex gap-3">
              <button
                className="flex-1 rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50/70"
                type="submit"
              >
                Simpan & Lanjutkan
              </button>
              <button
                className="rounded-2xl border border-slate-200/60 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50/70"
                onClick={onCancel}
                type="button"
              >
                Batal
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
