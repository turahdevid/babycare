export const TIME_SLOTS = [
  { start: "09:00", end: "10:30", label: "09.00" },
  { start: "10:30", end: "12:00", label: "10.30" },
  { start: "12:00", end: "13:30", label: "12.00" },
  { start: "13:30", end: "15:00", label: "13.30" },
  { start: "15:00", end: "16:00", label: "15.00" },
  { start: "16:00", end: "17:00", label: "16.00" },
  { start: "17:00", end: "18:00", label: "17.00" },
] as const;

export const HOMECARE_TIME_SLOTS = [
  { start: "09:00", end: "10:30", label: "09.00 (Homecare)" },
  { start: "10:30", end: "12:00", label: "10.30 (Homecare)" },
  { start: "12:00", end: "13:30", label: "12.00 (Homecare)" },
  { start: "13:30", end: "15:00", label: "13.30 (Homecare)" },
  { start: "15:00", end: "16:00", label: "15.00 (Homecare)" },
  { start: "16:00", end: "17:00", label: "16.00 (Homecare)" },
  { start: "17:00", end: "18:00", label: "17.00 (Homecare)" },
] as const;

export const SLOT_CAPACITY = {
  OUTLET: 2,
  HOMECARE: 2,
} as const;

function toMinutes(time: string): number {
  const normalized = time.slice(0, 5);
  const [hoursRaw, minutesRaw] = normalized.split(":");
  const hours = Number(hoursRaw ?? "0");
  const minutes = Number(minutesRaw ?? "0");
  return hours * 60 + minutes;
}

export function getSlotForTime(time: string): typeof TIME_SLOTS[number] | null {
  const normalized = time.slice(0, 5);
  return TIME_SLOTS.find((s) => s.start === normalized) ?? null;
}

export function getHomecareSlotForTime(time: string): typeof HOMECARE_TIME_SLOTS[number] | null {
  const normalized = time.slice(0, 5);
  return HOMECARE_TIME_SLOTS.find((s) => s.start === normalized) ?? null;
}

export function isTimeInSlot(time: string, slot: typeof TIME_SLOTS[number]): boolean {
  const value = toMinutes(time);
  const slotStart = toMinutes(slot.start);
  const slotEnd = toMinutes(slot.end);

  return value >= slotStart && value < slotEnd;
}
