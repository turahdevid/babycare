"use client";

import { useEffect, useRef } from "react";

function parseLocalDate(value: string): Date | null {
  const trimmed = value.trim();
  if (trimmed.length === 0) return null;
  const parts = trimmed.split("-");
  if (parts.length !== 3) return null;
  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null;
  if (month < 1 || month > 12) return null;
  if (day < 1 || day > 31) return null;
  return new Date(year, month - 1, day);
}

function calculateAgeAt(birthDate: Date, referenceDate: Date): string {
  const ref = new Date(referenceDate);
  const birth = new Date(birthDate);
  if (Number.isNaN(ref.getTime()) || Number.isNaN(birth.getTime())) return "";
  if (birth.getTime() > ref.getTime()) return "0 hari";

  let years = ref.getFullYear() - birth.getFullYear();
  let months = ref.getMonth() - birth.getMonth();
  let days = ref.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(ref.getFullYear(), ref.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} tahun`);
  }

  if (months > 0) {
    parts.push(`${months} bulan`);
  }

  if (years === 0 && months === 0) {
    parts.push(`${Math.max(0, days)} hari`);
  } else if (years === 0 && days > 0) {
    parts.push(`${days} hari`);
  }

  return parts.join(" ") || "0 hari";
}

type Props = {
  birthDateInputId: string;
  ageInputId: string;
};

export function BabyAgeAutofill({ birthDateInputId, ageInputId }: Props) {
  const isManualRef = useRef(false);

  useEffect(() => {
    const birthInput = document.getElementById(birthDateInputId) as HTMLInputElement | null;
    const ageInput = document.getElementById(ageInputId) as HTMLInputElement | null;

    if (!birthInput || !ageInput) return;

    const markManual = () => {
      if (ageInput.value.trim().length > 0) {
        isManualRef.current = true;
      }
    };

    const handleAgeTyping = () => {
      isManualRef.current = true;
    };

    const recompute = () => {
      if (isManualRef.current) return;
      const birth = parseLocalDate(birthInput.value);
      if (!birth) return;
      ageInput.value = calculateAgeAt(birth, new Date());

      const event = new Event("input", { bubbles: true });
      ageInput.dispatchEvent(event);
    };

    ageInput.addEventListener("focus", markManual);
    ageInput.addEventListener("input", handleAgeTyping);
    birthInput.addEventListener("input", recompute);
    birthInput.addEventListener("change", recompute);

    recompute();

    return () => {
      ageInput.removeEventListener("focus", markManual);
      ageInput.removeEventListener("input", handleAgeTyping);
      birthInput.removeEventListener("input", recompute);
      birthInput.removeEventListener("change", recompute);
    };
  }, [ageInputId, birthDateInputId]);

  return null;
}
