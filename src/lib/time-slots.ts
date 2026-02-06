export const TIME_SLOTS = [
  { start: "09:00", end: "11:00", label: "09:00 - 11:00" },
  { start: "11:00", end: "13:00", label: "11:00 - 13:00" },
  { start: "13:00", end: "15:00", label: "13:00 - 15:00" },
  { start: "15:00", end: "17:00", label: "15:00 - 17:00" },
] as const;

export const SLOT_CAPACITY = {
  OUTLET: 2,
  HOMECARE: 1,
} as const;

export function getSlotForTime(time: string): typeof TIME_SLOTS[number] | null {
  const hour = parseInt(time.split(":")[0] ?? "0");
  
  if (hour >= 9 && hour < 11) return TIME_SLOTS[0];
  if (hour >= 11 && hour < 13) return TIME_SLOTS[1];
  if (hour >= 13 && hour < 15) return TIME_SLOTS[2];
  if (hour >= 15 && hour < 17) return TIME_SLOTS[3];
  
  return null;
}

export function isTimeInSlot(time: string, slot: typeof TIME_SLOTS[number]): boolean {
  const hour = parseInt(time.split(":")[0] ?? "0");
  const slotStartHour = parseInt(slot.start.split(":")[0] ?? "0");
  const slotEndHour = parseInt(slot.end.split(":")[0] ?? "0");
  
  return hour >= slotStartHour && hour < slotEndHour;
}
