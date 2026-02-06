"use client";

import type { ChangeEvent } from "react";
import { useEffect, useId, useMemo, useState } from "react";

type RupiahInputProps = {
  id?: string;
  name: string;
  defaultValue?: number;
  required?: boolean;
  placeholder?: string;
  inputClassName?: string;
  min?: number;
};

function formatRupiahDisplay(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

export function RupiahInput(props: RupiahInputProps) {
  const reactId = useId();
  const inputId = props.id ?? `rupiah-${reactId}`;
  const [rawNumber, setRawNumber] = useState<number>(props.defaultValue ?? 0);
  const [display, setDisplay] = useState<string>(
    props.defaultValue !== undefined ? formatRupiahDisplay(props.defaultValue) : ""
  );

  const minValue = props.min ?? 0;

  useEffect(() => {
    if (props.defaultValue !== undefined) {
      setRawNumber(props.defaultValue);
      setDisplay(formatRupiahDisplay(props.defaultValue));
    }
  }, [props.defaultValue]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, "");
    if (digits.length === 0) {
      setRawNumber(0);
      setDisplay("");
      return;
    }
    const next = Number(digits);
    const clamped = Number.isNaN(next) ? 0 : Math.max(minValue, next);
    setRawNumber(clamped);
    setDisplay(formatRupiahDisplay(clamped));
  };

  const onFocus = () => {
    if (rawNumber === 0) {
      setDisplay("");
    }
  };

  const onBlur = () => {
    setDisplay(rawNumber > 0 ? formatRupiahDisplay(rawNumber) : "");
  };

  const inputClass = useMemo(
    () =>
      props.inputClassName ??
      "mt-1.5 w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-600/60 focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60",
    [props.inputClassName]
  );

  return (
    <>
      <input
        aria-label="Input harga dalam Rupiah"
        autoComplete="off"
        className={inputClass}
        id={inputId}
        inputMode="numeric"
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={props.placeholder}
        type="text"
        value={display}
      />
      <input id={`${inputId}-numeric`} name={props.name} required={props.required} type="hidden" value={rawNumber} />
    </>
  );
}
