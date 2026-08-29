"use client";

import { useEffect, useRef, useState, useId } from "react";
import { createPortal } from "react-dom";

export type SearchableSelectOption = {
  value: string;
  label: string;
  sublabel?: string;
};

type Props = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  options: SearchableSelectOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
};

export function SearchableSelect({
  id,
  name,
  value,
  defaultValue = "",
  options,
  placeholder = "Pilih...",
  searchPlaceholder = "Ketik untuk mencari...",
  emptyMessage = "Tidak ada hasil ditemukan",
  required = false,
  disabled = false,
  onChange,
  className = "",
}: Props) {
  const generatedId = useId();
  const componentId = id ?? generatedId;
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string>(
    isControlled ? value : defaultValue,
  );

  const selectedValue = isControlled ? value : internalValue;

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [isControlled, value]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({ top: 0, left: 0, width: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const updatePosition = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
    }
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);

  // Focus input when opened (handles mobile/tablet focus)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  const filteredOptions = options.filter((opt) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesLabel = opt.label.toLowerCase().includes(q);
    const matchesSublabel = opt.sublabel?.toLowerCase().includes(q) ?? false;
    const matchesValue = opt.value.toLowerCase().includes(q);
    return matchesLabel || matchesSublabel || matchesValue;
  });

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (val: string) => {
    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
    setIsOpen(false);
  };

  const dropdownMenu = (
    <div
      className="fixed inset-0 z-[9999] flex flex-col justify-end bg-slate-900/40 backdrop-blur-xs sm:bg-transparent sm:backdrop-blur-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="w-full rounded-t-3xl border border-slate-200/90 bg-white p-4 shadow-2xl sm:absolute sm:rounded-2xl sm:p-2 sm:shadow-xl"
        style={{
          ...(typeof window !== "undefined" && window.innerWidth >= 640
            ? {
                top: `${dropdownPosition.top + 6}px`,
                left: `${dropdownPosition.left}px`,
                width: `${dropdownPosition.width}px`,
                position: "absolute",
              }
            : {}),
        }}
      >
        {/* Search Box Input - proper input element to trigger touch tablet/phone virtual keyboard */}
        <div className="sticky top-0 z-10 pb-2">
          <div className="relative">
            <input
              ref={searchInputRef}
              autoComplete="off"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              inputMode="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              type="text"
              value={searchQuery}
            />
            {searchQuery ? (
              <button
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-xs text-slate-400 hover:text-slate-600"
                onClick={() => setSearchQuery("")}
                type="button"
              >
                ✕
              </button>
            ) : null}
          </div>
        </div>

        {/* Options List with Scrolling */}
        <div
          className="max-h-60 overflow-y-auto overscroll-contain py-1 text-sm text-slate-700 sm:max-h-52"
          role="listbox"
          tabIndex={-1}
        >
          {/* Default empty option / reset option if not required */}
          {!required && (
            <div
              className={`cursor-pointer rounded-xl px-3 py-2.5 transition ${
                selectedValue === ""
                  ? "bg-sky-50 font-medium text-sky-700"
                  : "hover:bg-slate-100/70"
              }`}
              onClick={() => handleSelect("")}
              role="option"
              aria-selected={selectedValue === ""}
            >
              <div className="truncate">{placeholder}</div>
            </div>
          )}

          {filteredOptions.length === 0 ? (
            <div className="px-3 py-6 text-center text-xs text-slate-500">
              {emptyMessage}
            </div>
          ) : (
            filteredOptions.map((option) => {
              const isSelected = option.value === selectedValue;
              return (
                <div
                  key={option.value}
                  className={`cursor-pointer rounded-xl px-3 py-2.5 transition ${
                    isSelected
                      ? "bg-sky-50 font-medium text-sky-700"
                      : "hover:bg-slate-100/70"
                  }`}
                  onClick={() => handleSelect(option.value)}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="truncate text-slate-900 font-medium">
                    {option.label}
                  </div>
                  {option.sublabel ? (
                    <div className="truncate text-xs text-slate-500">
                      {option.sublabel}
                    </div>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Hidden input for form submission compatibility */}
      {name ? (
        <input
          id={componentId}
          name={name}
          required={required}
          type="hidden"
          value={selectedValue}
        />
      ) : null}

      {/* Trigger Button */}
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`flex w-full items-center justify-between rounded-2xl border border-white/60 bg-white/45 px-4 py-2.5 text-left text-sm outline-none transition focus-visible:border-white/80 focus-visible:ring-2 focus-visible:ring-violet-200/60 disabled:cursor-not-allowed disabled:opacity-50 ${
          selectedOption ? "text-slate-900" : "text-slate-500"
        }`}
        disabled={disabled}
        onClick={() => {
          updatePosition();
          setIsOpen((prev) => !prev);
        }}
        type="button"
      >
        <span className="block truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          aria-hidden="true"
          className={`ml-2 h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Dropdown Menu Portal */}
      {isOpen && isMounted ? createPortal(dropdownMenu, document.body) : null}
    </div>
  );
}
