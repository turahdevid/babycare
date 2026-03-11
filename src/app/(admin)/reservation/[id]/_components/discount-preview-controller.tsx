"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from "react";

type DiscountPreviewContextValue = {
  subtotal: number;
  discountPercentText: string;
  setDiscountPercentText: (value: string) => void;
};

const DiscountPreviewContext = createContext<DiscountPreviewContextValue | null>(null);

function useDiscountPreview() {
  const value = useContext(DiscountPreviewContext);
  if (!value) {
    throw new Error("DiscountPreviewProvider is missing");
  }
  return value;
}

type DiscountPreviewProviderProps = PropsWithChildren<{
  subtotal: number;
  initialDiscountPercent?: number | null;
}>;

export function DiscountPreviewProvider({
  subtotal,
  initialDiscountPercent,
  children,
}: DiscountPreviewProviderProps) {
  const [discountPercentText, setDiscountPercentText] = useState(
    typeof initialDiscountPercent === "number" && initialDiscountPercent > 0
      ? String(initialDiscountPercent)
      : "",
  );

  const value = useMemo(
    () => ({ subtotal, discountPercentText, setDiscountPercentText }),
    [subtotal, discountPercentText],
  );

  return (
    <DiscountPreviewContext.Provider value={value}>
      {children}
    </DiscountPreviewContext.Provider>
  );
}

type DiscountPercentInputProps = {
  className?: string;
  id: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  max?: number;
  min?: number;
  name: string;
  placeholder?: string;
  type?: string;
};

export function DiscountPercentInput({
  className,
  id,
  inputMode,
  max,
  min,
  name,
  placeholder,
  type = "number",
}: DiscountPercentInputProps) {
  const { discountPercentText, setDiscountPercentText } = useDiscountPreview();

  return (
    <input
      className={className}
      id={id}
      inputMode={inputMode}
      max={max}
      min={min}
      name={name}
      onChange={(e) => setDiscountPercentText(e.target.value)}
      placeholder={placeholder}
      type={type}
      value={discountPercentText}
    />
  );
}

export function DiscountPriceSummary() {
  const { subtotal, discountPercentText } = useDiscountPreview();

  const raw = Number(discountPercentText);
  const percent = Number.isFinite(raw) ? Math.min(100, Math.max(0, raw)) : 0;
  const discountRaw = percent > 0 ? (subtotal * percent) / 100 : 0;
  const discountAmount = Math.round(discountRaw * 100) / 100;
  const totalPrice = Math.round(Math.max(subtotal - discountAmount, 0) * 100) / 100;
  const hasDiscount = percent > 0;

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }),
    [],
  );

  return (
    <>
      <div className="flex items-center justify-between border-t border-white/55 pt-3">
        <span className="font-semibold text-slate-900">Subtotal</span>
        <span className="text-lg font-semibold text-slate-900">
          {formatter.format(subtotal)}
        </span>
      </div>
      {hasDiscount ? (
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">Discount ({percent}%)</span>
          <span className="font-medium text-slate-900">
            -{formatter.format(discountAmount)}
          </span>
        </div>
      ) : null}
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-900">Total</span>
        <span className="text-base font-semibold text-slate-900">
          {formatter.format(totalPrice)}
        </span>
      </div>
    </>
  );
}
