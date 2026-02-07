import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import { z } from "zod";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import {
  formatCurrency,
  getPeriodEndDate,
  getPeriodStartDate,
  parseReportPeriod,
} from "~/app/(admin)/report/_utils";

export const runtime = "nodejs";

type CsvRow = Record<string, string | number | null | undefined>;

type PdfDoc = jsPDF;

type PdfText = string | number;

type PdfTableColumn = {
  label: string;
  width: number;
  align?: "left" | "right" | "center";
};

type PdfTableRow = PdfText[];

function csvEscape(value: string): string {
  return `"${value.replaceAll('"', '""')}"`;
}

function csvValue(value: string | number | null | undefined): string {
  if (typeof value === "number") {
    return String(value);
  }

  if (typeof value === "string") {
    return csvEscape(value);
  }

  return "";
}

function toCsv(rows: CsvRow[]): string {
  if (rows.length === 0) {
    return "";
  }

  const headers: string[] = [];
  const seen = new Set<string>();

  for (const row of rows) {
    for (const key of Object.keys(row)) {
      if (!seen.has(key)) {
        seen.add(key);
        headers.push(key);
      }
    }
  }
  const lines = [headers.map(csvEscape).join(",")];

  for (const row of rows) {
    lines.push(headers.map((h) => csvValue(row[h])).join(","));
  }

  return lines.join("\r\n");
}

const exportSchema = z.object({
  type: z.enum(["today", "status", "midwives", "treatments", "revenue", "overview"]),
  period: z.string().optional(),
  format: z.enum(["csv", "pdf"]).optional(),
});

function formatDateForFilename(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateLabel(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function formatCurrencyNumber(amount: number): string {
  return formatCurrency(amount);
}

const PDF_MARGIN = 15;
const PDF_PAGE_WIDTH = 210;
const PDF_PAGE_HEIGHT = 297;
const PDF_CONTENT_WIDTH = PDF_PAGE_WIDTH - PDF_MARGIN * 2;

interface PdfCursor {
  y: number;
}

function renderPdf(render: (doc: PdfDoc, cursor: PdfCursor) => void): ArrayBuffer {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const cursor: PdfCursor = { y: PDF_MARGIN };
  render(doc, cursor);
  return doc.output("arraybuffer");
}

function ensurePdfSpace(doc: PdfDoc, cursor: PdfCursor, needed: number): void {
  if (cursor.y + needed > PDF_PAGE_HEIGHT - PDF_MARGIN) {
    doc.addPage();
    cursor.y = PDF_MARGIN;
  }
}

function drawPdfHeader(
  doc: PdfDoc,
  cursor: PdfCursor,
  title: string,
  subtitle: string,
): void {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text(title, PDF_MARGIN, cursor.y + 6);
  cursor.y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text(subtitle, PDF_MARGIN, cursor.y + 4);
  cursor.y += 7;

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(PDF_MARGIN, cursor.y, PDF_PAGE_WIDTH - PDF_MARGIN, cursor.y);
  cursor.y += 6;
}

function drawPdfSectionTitle(
  doc: PdfDoc,
  cursor: PdfCursor,
  title: string,
): void {
  ensurePdfSpace(doc, cursor, 10);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(title, PDF_MARGIN, cursor.y + 4);
  cursor.y += 8;
}

function formatPdfCell(value: PdfText): string {
  if (typeof value === "number") {
    return String(value);
  }
  return value;
}

function getReportTitle(
  type: "today" | "status" | "midwives" | "treatments" | "revenue" | "overview",
): string {
  if (type === "today") return "Ringkasan Hari Ini";
  if (type === "status") return "Status Reservasi";
  if (type === "midwives") return "Performa Bidan";
  if (type === "treatments") return "Treatment Populer";
  if (type === "revenue") return "Estimasi Omzet";
  return "Overview";
}

function drawPdfKeyValueGrid(
  doc: PdfDoc,
  cursor: PdfCursor,
  items: Array<{ label: string; value: string }>,
): void {
  const boxHeight = 7;
  const gap = 4;
  const colWidth = (PDF_CONTENT_WIDTH - gap) / 2;

  for (let i = 0; i < items.length; i += 2) {
    const left = items[i];
    const right = items[i + 1];
    ensurePdfSpace(doc, cursor, boxHeight + 4);

    const startY = cursor.y;

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(PDF_MARGIN, startY, colWidth, boxHeight, 1.5, 1.5, "F");
    doc.roundedRect(
      PDF_MARGIN + colWidth + gap,
      startY,
      colWidth,
      boxHeight,
      1.5,
      1.5,
      "F",
    );

    if (left?.label) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      doc.text(left.label, PDF_MARGIN + 2, startY + 4.5);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text(left.value, PDF_MARGIN + colWidth - 2, startY + 4.5, {
        align: "right",
      });
    }

    if (right?.label) {
      const rightX = PDF_MARGIN + colWidth + gap;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      doc.text(right.label, rightX + 2, startY + 4.5);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text(right.value, rightX + colWidth - 2, startY + 4.5, {
        align: "right",
      });
    }

    cursor.y = startY + boxHeight + 2;
  }
}

function drawPdfTable(
  doc: PdfDoc,
  cursor: PdfCursor,
  columns: PdfTableColumn[],
  rows: PdfTableRow[],
): void {
  const tableWidth = columns.reduce((sum, c) => sum + c.width, 0);
  const scale = PDF_CONTENT_WIDTH / tableWidth;
  const scaledCols = columns.map((c) => ({
    ...c,
    width: c.width * scale,
  }));

  const rowHeight = 6;
  const headerHeight = 7;

  ensurePdfSpace(doc, cursor, headerHeight + rowHeight);

  doc.setFillColor(241, 245, 249);
  doc.rect(PDF_MARGIN, cursor.y, PDF_CONTENT_WIDTH, headerHeight, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);

  let x = PDF_MARGIN;
  for (const col of scaledCols) {
    const textX =
      col.align === "right" ? x + col.width - 2 : x + 2;
    doc.text(col.label, textX, cursor.y + 4.5, {
      align: col.align ?? "left",
    });
    x += col.width;
  }

  cursor.y += headerHeight;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);

  for (const row of rows) {
    ensurePdfSpace(doc, cursor, rowHeight);

    let rowX = PDF_MARGIN;
    for (let i = 0; i < scaledCols.length; i += 1) {
      const col = scaledCols[i];
      if (!col) {
        continue;
      }
      const cell = row[i] ?? "";
      const textX =
        col.align === "right" ? rowX + col.width - 2 : rowX + 2;
      doc.text(formatPdfCell(cell), textX, cursor.y + 4, {
        align: col.align ?? "left",
      });
      rowX += col.width;
    }

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(
      PDF_MARGIN,
      cursor.y + rowHeight,
      PDF_MARGIN + PDF_CONTENT_WIDTH,
      cursor.y + rowHeight,
    );

    cursor.y += rowHeight;
  }
}

type PdfTransactionRow = {
  date: string;
  customer: string;
  baby: string;
  midwife: string;
  service: string;
  treatments: string;
  status: string;
  total: string;
};

type PdfPayloadBase = {
  periodLabel: string;
  createdAtLabel: string;
  transactions: PdfTransactionRow[];
};

type PdfPayload =
  | (PdfPayloadBase & {
      type: "today";
      totalReservations: number;
      completedReservations: number;
      revenue: number;
      statusBreakdown: Array<{ status: string; count: number }>;
    })
  | (PdfPayloadBase & {
      type: "status";
      statusBreakdown: Array<{ status: string; count: number }>;
      total: number;
    })
  | (PdfPayloadBase & {
      type: "midwives";
      rows: Array<{
        name: string;
        total: number;
        completed: number;
        rate: number;
      }>;
    })
  | (PdfPayloadBase & {
      type: "treatments";
      rows: Array<{ name: string; quantity: number }>;
    })
  | (PdfPayloadBase & {
      type: "revenue";
      revenue: number;
      rows: Array<{ name: string; revenue: number }>;
    })
  | (PdfPayloadBase & {
      type: "overview";
      totalReservations: number;
      completionRate: number;
      statusBreakdown: Array<{ status: string; count: number }>;
      midwives: Array<{ name: string; count: number }>;
      treatments: Array<{ name: string; quantity: number }>;
    });

function formatPeriodLabel(period: string): string {
  if (period === "today") return "Hari ini";
  if (period === "week") return "7 hari terakhir";
  if (period === "month") return "30 hari terakhir";
  return period;
}

function buildPdfSubtitle(payload: PdfPayload): string {
  return `Periode: ${payload.periodLabel} | Dibuat: ${payload.createdAtLabel}`;
}

async function fetchPdfTransactions(
  where: { gte: Date; lt: Date },
  statusFilter?: string,
): Promise<PdfTransactionRow[]> {
  const reservations = await db.reservation.findMany({
    where: {
      startAt: { gte: where.gte, lt: where.lt },
      ...(statusFilter ? { status: statusFilter as never } : {}),
    },
    select: {
      startAt: true,
      status: true,
      serviceType: true,
      customer: { select: { motherName: true } },
      baby: { select: { name: true } },
      midwife: { select: { name: true, email: true } },
      items: {
        select: {
          quantity: true,
          unitPrice: true,
          treatment: { select: { name: true } },
        },
      },
    },
    orderBy: { startAt: "desc" },
    take: 200,
  });

  return reservations.map((r) => ({
    date: formatDateLabel(r.startAt),
    customer: r.customer.motherName,
    baby: r.baby?.name ?? "-",
    midwife: r.midwife?.name ?? r.midwife?.email ?? "-",
    service: r.serviceType,
    treatments: r.items.map((i) => `${i.treatment.name} x${i.quantity}`).join(", "),
    status: r.status,
    total: formatCurrencyNumber(
      r.items.reduce((sum, i) => sum + i.unitPrice.toNumber() * i.quantity, 0),
    ),
  }));
}

async function fetchCsvTransactionRows(
  where: { gte: Date; lt: Date },
  statusFilter?: string,
): Promise<CsvRow[]> {
  const reservations = await db.reservation.findMany({
    where: {
      startAt: { gte: where.gte, lt: where.lt },
      ...(statusFilter ? { status: statusFilter as never } : {}),
    },
    select: {
      startAt: true,
      status: true,
      serviceType: true,
      customer: { select: { motherName: true } },
      baby: { select: { name: true } },
      midwife: { select: { name: true, email: true } },
      items: {
        select: {
          quantity: true,
          unitPrice: true,
          treatment: { select: { name: true } },
        },
      },
    },
    orderBy: { startAt: "desc" },
    take: 200,
  });

  return reservations.map((r) => ({
    section: "detail",
    tanggal: formatDateLabel(r.startAt),
    customer: r.customer.motherName,
    bayi: r.baby?.name ?? "-",
    bidan: r.midwife?.name ?? r.midwife?.email ?? "-",
    layanan: r.serviceType,
    treatment: r.items.map((i) => `${i.treatment.name} x${i.quantity}`).join(", "),
    status: r.status,
    total: r.items.reduce((sum, i) => sum + i.unitPrice.toNumber() * i.quantity, 0),
  }));
}

async function buildPdfPayload(args: {
  reportType: PdfPayload["type"];
  start: Date;
  end: Date;
  now: Date;
  periodLabel: string;
  createdAtLabel: string;
}): Promise<PdfPayload> {
  const { reportType, start, end, now, periodLabel, createdAtLabel } = args;

  if (reportType === "today") {
    const [totalReservations, completedCount, statusBreakdown, completedItems] =
      await Promise.all([
        db.reservation.count({ where: { startAt: { gte: start, lt: end } } }),
        db.reservation.count({
          where: {
            startAt: { gte: start, lt: end },
            status: "COMPLETED",
          },
        }),
        db.reservation.groupBy({
          by: ["status"],
          where: { startAt: { gte: start, lt: end } },
          _count: true,
          orderBy: { status: "asc" },
        }),
        db.reservationTreatment.findMany({
          where: {
            reservation: {
              startAt: { gte: start, lt: end },
              status: "COMPLETED",
            },
          },
          select: { quantity: true, unitPrice: true },
        }),
      ]);

    const revenue = completedItems.reduce(
      (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
      0,
    );

    const transactions = await fetchPdfTransactions({ gte: start, lt: end });

    return {
      type: "today",
      periodLabel: `${periodLabel} (${formatDateForFilename(now)})`,
      createdAtLabel,
      totalReservations,
      completedReservations: completedCount,
      revenue,
      statusBreakdown: statusBreakdown.map((s) => ({
        status: s.status,
        count: s._count,
      })),
      transactions,
    };
  }

  if (reportType === "status") {
    const breakdown = await db.reservation.groupBy({
      by: ["status"],
      where: { startAt: { gte: start, lt: end } },
      _count: true,
      orderBy: { status: "asc" },
    });
    const total = breakdown.reduce((sum, s) => sum + s._count, 0);

    const transactions = await fetchPdfTransactions({ gte: start, lt: end });

    return {
      type: "status",
      periodLabel,
      createdAtLabel,
      total,
      statusBreakdown: breakdown.map((s) => ({ status: s.status, count: s._count })),
      transactions,
    };
  }

  if (reportType === "midwives") {
    const [totalByMidwife, completedByMidwife] = await Promise.all([
      db.reservation.groupBy({
        by: ["midwifeId"],
        where: {
          startAt: { gte: start, lt: end },
          midwifeId: { not: null },
        },
        _count: true,
      }),
      db.reservation.groupBy({
        by: ["midwifeId"],
        where: {
          startAt: { gte: start, lt: end },
          midwifeId: { not: null },
          status: "COMPLETED",
        },
        _count: true,
      }),
    ]);

    const midwifeIds = totalByMidwife
      .map((m) => m.midwifeId)
      .filter((id): id is string => id !== null);

    const midwives = await db.user.findMany({
      where: { id: { in: midwifeIds } },
      select: { id: true, name: true, email: true },
      orderBy: { name: "asc" },
    });

    const midwifeMap = new Map<string, string>();
    for (const midwife of midwives) {
      midwifeMap.set(midwife.id, midwife.name ?? midwife.email ?? "-");
    }

    const completedMap = new Map(
      completedByMidwife
        .map((m) => (m.midwifeId ? [m.midwifeId, m._count] : null))
        .filter((v): v is [string, number] => v !== null),
    );

    const rows = totalByMidwife
      .filter(
        (m): m is { midwifeId: string; _count: number } => m.midwifeId !== null,
      )
      .map((m) => {
        const completedCount = completedMap.get(m.midwifeId) ?? 0;
        const rate =
          m._count > 0
            ? Math.round((completedCount / m._count) * 100)
            : 0;
        return {
          name: midwifeMap.get(m.midwifeId) ?? "-",
          total: m._count,
          completed: completedCount,
          rate,
        };
      })
      .sort((a, b) => b.completed - a.completed);

    const transactions = await fetchPdfTransactions({ gte: start, lt: end });

    return {
      type: "midwives",
      periodLabel,
      createdAtLabel,
      rows,
      transactions,
    };
  }

  if (reportType === "treatments") {
    const stats = await db.reservationTreatment.groupBy({
      by: ["treatmentId"],
      where: {
        reservation: {
          startAt: { gte: start, lt: end },
        },
      },
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: "desc" } },
      take: 50,
    });

    const treatmentIds = stats.map((t) => t.treatmentId);
    const treatments = await db.treatment.findMany({
      where: { id: { in: treatmentIds } },
      select: { id: true, name: true },
    });

    const nameMap = new Map<string, string>();
    for (const treatment of treatments) {
      nameMap.set(treatment.id, treatment.name);
    }

    const transactions = await fetchPdfTransactions({ gte: start, lt: end });

    return {
      type: "treatments",
      periodLabel,
      createdAtLabel,
      rows: stats.map((s) => ({
        name: nameMap.get(s.treatmentId) ?? "Unknown",
        quantity: s._sum.quantity ?? 0,
      })),
      transactions,
    };
  }

  if (reportType === "revenue") {
    const items = await db.reservationTreatment.findMany({
      where: {
        reservation: {
          startAt: { gte: start, lt: end },
          status: "COMPLETED",
        },
      },
      select: {
        quantity: true,
        unitPrice: true,
        treatment: { select: { name: true } },
      },
    });

    const revenue = items.reduce(
      (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
      0,
    );

    const byTreatment = new Map<string, number>();
    for (const item of items) {
      const current = byTreatment.get(item.treatment.name) ?? 0;
      byTreatment.set(
        item.treatment.name,
        current + item.unitPrice.toNumber() * item.quantity,
      );
    }

    const rows = Array.from(byTreatment.entries())
      .map(([name, value]) => ({ name, revenue: value }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 50);

    const transactions = await fetchPdfTransactions(
      { gte: start, lt: end },
      "COMPLETED",
    );

    return {
      type: "revenue",
      periodLabel,
      createdAtLabel,
      revenue,
      rows,
      transactions,
    };
  }

  const [totalReservations, statusBreakdown, midwifePerformance, treatmentStats] =
    await Promise.all([
      db.reservation.count({
        where: { startAt: { gte: start, lt: end } },
      }),
      db.reservation.groupBy({
        by: ["status"],
        where: { startAt: { gte: start, lt: end } },
        _count: true,
        orderBy: { status: "asc" },
      }),
      db.reservation.groupBy({
        by: ["midwifeId"],
        where: {
          startAt: { gte: start, lt: end },
          midwifeId: { not: null },
        },
        _count: true,
      }),
      db.reservationTreatment.groupBy({
        by: ["treatmentId"],
        where: {
          reservation: {
            startAt: { gte: start, lt: end },
          },
        },
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: "desc" } },
        take: 10,
      }),
    ]);

  const midwifeIds = midwifePerformance
    .map((m) => m.midwifeId)
    .filter((id): id is string => id !== null);

  const midwives = await db.user.findMany({
    where: { id: { in: midwifeIds } },
    select: { id: true, name: true, email: true },
  });

  const treatmentIds = treatmentStats.map((t) => t.treatmentId);
  const treatments = await db.treatment.findMany({
    where: { id: { in: treatmentIds } },
    select: { id: true, name: true },
  });

  const midwifeMap = new Map<string, string>();
  for (const midwife of midwives) {
    midwifeMap.set(midwife.id, midwife.name ?? midwife.email ?? "-");
  }

  const treatmentMap = new Map<string, string>();
  for (const treatment of treatments) {
    treatmentMap.set(treatment.id, treatment.name);
  }

  const completedCount =
    statusBreakdown.find((s) => s.status === "COMPLETED")?._count ?? 0;
  const completionRate =
    totalReservations > 0
      ? Math.round((completedCount / totalReservations) * 100)
      : 0;

  const transactions = await fetchPdfTransactions({ gte: start, lt: end });

  return {
    type: "overview",
    periodLabel,
    createdAtLabel,
    totalReservations,
    completionRate,
    statusBreakdown: statusBreakdown.map((s) => ({
      status: s.status,
      count: s._count,
    })),
    transactions,
    midwives: midwifePerformance
      .filter(
        (m): m is { midwifeId: string; _count: number } => m.midwifeId !== null,
      )
      .map((m) => ({
        name: midwifeMap.get(m.midwifeId) ?? "-",
        count: m._count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10),
    treatments: treatmentStats.map((t) => ({
      name: treatmentMap.get(t.treatmentId) ?? "Unknown",
      quantity: t._sum.quantity ?? 0,
    })),
  };
}

const txDetailColumns: PdfTableColumn[] = [
  { label: "Tanggal", width: 70 },
  { label: "Customer", width: 75 },
  { label: "Bayi", width: 50 },
  { label: "Bidan", width: 55 },
  { label: "Treatment", width: 90 },
  { label: "Status", width: 55 },
  { label: "Total", width: 65, align: "right" },
];

function drawPdfTransactionDetail(
  doc: PdfDoc,
  cursor: PdfCursor,
  transactions: PdfTransactionRow[],
): void {
  if (transactions.length === 0) return;

  cursor.y += 4;
  drawPdfSectionTitle(doc, cursor, "Detail Transaksi");
  drawPdfTable(
    doc,
    cursor,
    txDetailColumns,
    transactions.map((t) => [
      t.date,
      t.customer,
      t.baby,
      t.midwife,
      t.treatments,
      t.status,
      t.total,
    ]),
  );
}

function renderPdfFromPayload(
  doc: PdfDoc,
  cursor: PdfCursor,
  payload: PdfPayload,
): void {
  drawPdfHeader(doc, cursor, getReportTitle(payload.type), buildPdfSubtitle(payload));

  if (payload.type === "today") {
    drawPdfSectionTitle(doc, cursor, "Ringkasan");
    drawPdfKeyValueGrid(doc, cursor, [
      { label: "Total reservasi", value: String(payload.totalReservations) },
      { label: "Completed", value: String(payload.completedReservations) },
      { label: "Omzet", value: formatCurrencyNumber(payload.revenue) },
      { label: "", value: "" },
    ]);

    drawPdfSectionTitle(doc, cursor, "Breakdown status");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Status", width: 320 },
        { label: "Jumlah", width: 195, align: "right" },
      ],
      payload.statusBreakdown.map((s) => [s.status, s.count]),
    );
  } else if (payload.type === "status") {
    drawPdfSectionTitle(doc, cursor, "Ringkasan");
    drawPdfKeyValueGrid(doc, cursor, [
      { label: "Total", value: String(payload.total) },
      { label: "", value: "" },
    ]);

    drawPdfSectionTitle(doc, cursor, "Breakdown status");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Status", width: 320 },
        { label: "Jumlah", width: 195, align: "right" },
      ],
      payload.statusBreakdown.map((s) => [s.status, s.count]),
    );
  } else if (payload.type === "midwives") {
    drawPdfSectionTitle(doc, cursor, "Performa bidan");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Bidan", width: 245 },
        { label: "Total", width: 90, align: "right" },
        { label: "Completed", width: 90, align: "right" },
        { label: "Rate", width: 90, align: "right" },
      ],
      payload.rows.map((r) => [r.name, r.total, r.completed, `${r.rate}%`]),
    );
  } else if (payload.type === "treatments") {
    drawPdfSectionTitle(doc, cursor, "Treatment populer");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Treatment", width: 355 },
        { label: "Quantity", width: 160, align: "right" },
      ],
      payload.rows.map((r) => [r.name, r.quantity]),
    );
  } else if (payload.type === "revenue") {
    drawPdfSectionTitle(doc, cursor, "Ringkasan");
    drawPdfKeyValueGrid(doc, cursor, [
      { label: "Total omzet", value: formatCurrencyNumber(payload.revenue) },
      { label: "", value: "" },
    ]);

    drawPdfSectionTitle(doc, cursor, "Top treatment");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Treatment", width: 315 },
        { label: "Omzet", width: 200, align: "right" },
      ],
      payload.rows.map((r) => [r.name, formatCurrencyNumber(r.revenue)]),
    );
  } else {
    drawPdfSectionTitle(doc, cursor, "Ringkasan");
    drawPdfKeyValueGrid(doc, cursor, [
      { label: "Total reservasi", value: String(payload.totalReservations) },
      { label: "Completion rate", value: `${payload.completionRate}%` },
    ]);

    drawPdfSectionTitle(doc, cursor, "Status reservasi");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Status", width: 320 },
        { label: "Jumlah", width: 195, align: "right" },
      ],
      payload.statusBreakdown.map((s) => [s.status, s.count]),
    );

    cursor.y += 4;
    drawPdfSectionTitle(doc, cursor, "Top bidan");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Bidan", width: 320 },
        { label: "Jumlah", width: 195, align: "right" },
      ],
      payload.midwives.map((m) => [m.name, m.count]),
    );

    cursor.y += 4;
    drawPdfSectionTitle(doc, cursor, "Treatment populer");
    drawPdfTable(
      doc,
      cursor,
      [
        { label: "Treatment", width: 355 },
        { label: "Quantity", width: 160, align: "right" },
      ],
      payload.treatments.map((t) => [t.name, t.quantity]),
    );
  }

  drawPdfTransactionDetail(doc, cursor, payload.transactions);
}

export async function GET(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const url = new URL(request.url);
  const parsed = exportSchema.safeParse({
    type: url.searchParams.get("type"),
    period: url.searchParams.get("period") ?? undefined,
    format: url.searchParams.get("format") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const now = new Date();

  const format = parsed.data.format ?? "csv";

  if (format === "pdf") {
    const reportType = parsed.data.type;

    const createdAtLabel = formatDateLabel(now);

    const periodKey =
      reportType === "today" ? "today" : parseReportPeriod(parsed.data.period);

    const periodLabel = formatPeriodLabel(periodKey);

    const start =
      reportType === "today"
        ? (() => {
            const startDate = new Date(now);
            startDate.setHours(0, 0, 0, 0);
            return startDate;
          })()
        : getPeriodStartDate(periodKey, now);

    const end =
      reportType === "today"
        ? (() => {
            const startDate = new Date(now);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 1);
            return endDate;
          })()
        : getPeriodEndDate(periodKey, now);

    const payload = await buildPdfPayload({
      reportType,
      start,
      end,
      now,
      periodLabel,
      createdAtLabel,
    });

    const filename = `report-${reportType}-${periodKey}-${formatDateForFilename(now)}.pdf`;

    const pdf = renderPdf((doc, cursor) => {
      renderPdfFromPayload(doc, cursor, payload);
    });

    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=\"${filename}\"`,
        "Cache-Control": "no-store",
      },
    });
  }

  let csv: string;
  let filename = `report-${parsed.data.type}-${formatDateForFilename(now)}.csv`;

  if (parsed.data.type === "today") {
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);

    const [totalReservations, statusBreakdown, items] = await Promise.all([
      db.reservation.count({ where: { startAt: { gte: start, lt: end } } }),
      db.reservation.groupBy({
        by: ["status"],
        where: { startAt: { gte: start, lt: end } },
        _count: true,
      }),
      db.reservationTreatment.findMany({
        where: {
          reservation: {
            startAt: { gte: start, lt: end },
            status: "COMPLETED",
          },
        },
        select: { quantity: true, unitPrice: true },
      }),
    ]);

    const revenue = items.reduce(
      (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
      0,
    );

    const detailRows = await fetchCsvTransactionRows({ gte: start, lt: end });

    const rows: CsvRow[] = [
      {
        tanggal: formatDateForFilename(now),
        total_reservasi: totalReservations,
        omzet: revenue,
      },
      ...statusBreakdown.map((s) => ({
        tanggal: formatDateForFilename(now),
        status: s.status,
        jumlah: s._count,
      })),
      ...detailRows,
    ];

    csv = toCsv(rows);
    filename = `report-today-${formatDateForFilename(now)}.csv`;
  } else {
    const period = parseReportPeriod(parsed.data.period);
    const start = getPeriodStartDate(period, now);
    const end = getPeriodEndDate(period, now);

    if (parsed.data.type === "status") {
      const breakdown = await db.reservation.groupBy({
        by: ["status"],
        where: { startAt: { gte: start, lt: end } },
        _count: true,
        orderBy: { status: "asc" },
      });

      const detailRows = await fetchCsvTransactionRows({ gte: start, lt: end });

      csv = toCsv([
        ...breakdown.map((b) => ({
          period,
          status: b.status,
          jumlah: b._count,
        })),
        ...detailRows,
      ]);
    } else if (parsed.data.type === "midwives") {
      const [totals, completed] = await Promise.all([
        db.reservation.groupBy({
          by: ["midwifeId"],
          where: {
            startAt: { gte: start, lt: end },
            midwifeId: { not: null },
          },
          _count: true,
        }),
        db.reservation.groupBy({
          by: ["midwifeId"],
          where: {
            startAt: { gte: start, lt: end },
            midwifeId: { not: null },
            status: "COMPLETED",
          },
          _count: true,
        }),
      ]);

      const midwifeIds = totals
        .map((m) => m.midwifeId)
        .filter((id): id is string => id !== null);

      const midwives = await db.user.findMany({
        where: { id: { in: midwifeIds } },
        select: { id: true, name: true, email: true },
      });

      const midwifeMap = new Map<string, string>();
      for (const midwife of midwives) {
        midwifeMap.set(midwife.id, midwife.name ?? midwife.email ?? "-");
      }

      const completedMap = new Map(
        completed
          .map((m) => (m.midwifeId ? [m.midwifeId, m._count] : null))
          .filter((v): v is [string, number] => v !== null),
      );

      const rows = totals
        .filter((m): m is { midwifeId: string; _count: number } => m.midwifeId !== null)
        .map((m) => {
          const completedCount = completedMap.get(m.midwifeId) ?? 0;
          const rate = m._count > 0 ? Math.round((completedCount / m._count) * 100) : 0;
          return {
            period,
            midwife: midwifeMap.get(m.midwifeId) ?? "-",
            total_reservasi: m._count,
            completed: completedCount,
            completion_rate: rate,
          };
        })
        .sort((a, b) => b.completed - a.completed);

      const detailRows = await fetchCsvTransactionRows({ gte: start, lt: end });

      csv = toCsv([...rows, ...detailRows]);
    } else if (parsed.data.type === "treatments") {
      const stats = await db.reservationTreatment.groupBy({
        by: ["treatmentId"],
        where: {
          reservation: {
            startAt: { gte: start, lt: end },
          },
        },
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: "desc" } },
        take: 100,
      });

      const treatmentIds = stats.map((t) => t.treatmentId);
      const treatments = await db.treatment.findMany({
        where: { id: { in: treatmentIds } },
        select: { id: true, name: true },
      });

      const nameMap = new Map<string, string>();
      for (const treatment of treatments) {
        nameMap.set(treatment.id, treatment.name);
      }

      const detailRows = await fetchCsvTransactionRows({ gte: start, lt: end });

      csv = toCsv([
        ...stats.map((s) => ({
          period,
          treatment: nameMap.get(s.treatmentId) ?? "Unknown",
          quantity: s._sum.quantity ?? 0,
        })),
        ...detailRows,
      ]);
    } else if (parsed.data.type === "revenue") {
      const items = await db.reservationTreatment.findMany({
        where: {
          reservation: {
            startAt: { gte: start, lt: end },
            status: "COMPLETED",
          },
        },
        select: {
          quantity: true,
          unitPrice: true,
          treatment: { select: { name: true } },
        },
      });

      const revenue = items.reduce(
        (sum, item) => sum + item.unitPrice.toNumber() * item.quantity,
        0,
      );

      const byTreatment = new Map<string, number>();
      for (const item of items) {
        const current = byTreatment.get(item.treatment.name) ?? 0;
        byTreatment.set(
          item.treatment.name,
          current + item.unitPrice.toNumber() * item.quantity,
        );
      }

      const rows: CsvRow[] = [
        { period, total_omzet: revenue },
        ...Array.from(byTreatment.entries())
          .map(([name, total]) => ({ period, treatment: name, omzet: total }))
          .sort((a, b) => {
            const aValue = typeof a.omzet === "number" ? a.omzet : 0;
            const bValue = typeof b.omzet === "number" ? b.omzet : 0;
            return bValue - aValue;
          }),
      ];

      const detailRows = await fetchCsvTransactionRows(
        { gte: start, lt: end },
        "COMPLETED",
      );

      csv = toCsv([...rows, ...detailRows]);
    } else {
      const [totalReservations, statusBreakdown, midwifePerformance, treatmentStats] =
        await Promise.all([
          db.reservation.count({
            where: { startAt: { gte: start, lt: end } },
          }),
          db.reservation.groupBy({
            by: ["status"],
            where: { startAt: { gte: start, lt: end } },
            _count: true,
          }),
          db.reservation.groupBy({
            by: ["midwifeId"],
            where: {
              startAt: { gte: start, lt: end },
              midwifeId: { not: null },
            },
            _count: true,
          }),
          db.reservationTreatment.groupBy({
            by: ["treatmentId"],
            where: {
              reservation: {
                startAt: { gte: start, lt: end },
              },
            },
            _sum: { quantity: true },
            orderBy: { _sum: { quantity: "desc" } },
            take: 20,
          }),
        ]);

      const midwifeIds = midwifePerformance
        .map((m) => m.midwifeId)
        .filter((id): id is string => id !== null);
      const midwives = await db.user.findMany({
        where: { id: { in: midwifeIds } },
        select: { id: true, name: true, email: true },
      });

      const treatmentIds = treatmentStats.map((t) => t.treatmentId);
      const treatments = await db.treatment.findMany({
        where: { id: { in: treatmentIds } },
        select: { id: true, name: true },
      });

      const midwifeMap = new Map<string, string>();
      for (const midwife of midwives) {
        midwifeMap.set(midwife.id, midwife.name ?? midwife.email ?? "-");
      }

      const treatmentMap = new Map<string, string>();
      for (const treatment of treatments) {
        treatmentMap.set(treatment.id, treatment.name);
      }

      const completedCount =
        statusBreakdown.find((s) => s.status === "COMPLETED")?._count ?? 0;
      const completionRate =
        totalReservations > 0
          ? Math.round((completedCount / totalReservations) * 100)
          : 0;

      const rows: CsvRow[] = [
        {
          period,
          total_reservasi: totalReservations,
          completion_rate: completionRate,
        },
        ...statusBreakdown.map((s) => ({ period, section: "status", status: s.status, jumlah: s._count })),
        ...midwifePerformance
          .filter((m): m is { midwifeId: string; _count: number } => m.midwifeId !== null)
          .map((m) => ({
            period,
            section: "midwife",
            midwife: midwifeMap.get(m.midwifeId) ?? "-",
            jumlah: m._count,
          })),
        ...treatmentStats.map((t) => ({
          period,
          section: "treatment",
          treatment: treatmentMap.get(t.treatmentId) ?? "Unknown",
          quantity: t._sum.quantity ?? 0,
        })),
      ];

      const detailRows = await fetchCsvTransactionRows({ gte: start, lt: end });

      csv = toCsv([...rows, ...detailRows]);
    }

    filename = `report-${parsed.data.type}-${period}-${formatDateForFilename(now)}.csv`;
  }

  const body = `\ufeff${csv}`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=\"${filename}\"`,
      "Cache-Control": "no-store",
    },
  });
}
