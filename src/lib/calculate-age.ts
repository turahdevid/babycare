/**
 * Calculate a precise age string from a birth date relative to today.
 * Automatically updates every time the page is rendered (server-side).
 *
 * Examples:
 * - "5 hari"
 * - "2 bulan 10 hari"
 * - "1 tahun 3 bulan"
 * - "2 tahun"
 */
export function calculateAge(birthDate: Date): string {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
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
