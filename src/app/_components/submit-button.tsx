"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loadingText?: string;
  children: React.ReactNode;
}

export function SubmitButton({
  children,
  loadingText = "Memproses...",
  className = "",
  disabled,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const isDisabled = pending || disabled;

  return (
    <button
      {...props}
      className={`${className} ${pending ? "cursor-not-allowed opacity-75" : ""}`}
      disabled={isDisabled}
      type="submit"
    >
      <span className="inline-flex items-center justify-center gap-2">
        {pending ? (
          <>
            <span
              aria-hidden="true"
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            />
            <span>{loadingText}</span>
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
}
