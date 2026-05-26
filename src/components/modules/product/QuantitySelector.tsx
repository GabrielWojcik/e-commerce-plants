"use client";

import { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdRemove } from "react-icons/md";

type QuantitySelectorProps = {
  max?: number;
  min?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
};

export function QuantitySelector({
  initialValue = 1,
  onChange,
}: QuantitySelectorProps) {
  const clampValue = (value: number) => Math.min(Math.max(value));
  const [quantity, setQuantity] = useState(() => clampValue(initialValue));

  const handleQuantityChange = (nextValue: number) => {
    const safeValue = clampValue(nextValue);

    setQuantity(safeValue);
    onChange?.(safeValue);
  };

  return (
    <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-1">
      <button
        type="button"
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={quantity === 0}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Diminuir quantidade"
      >
        <MdRemove size={18} cursor="pointer" />
      </button>

      <span className="w-4 text-center font-bold text-slate-800">
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => handleQuantityChange(quantity + 1)}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Aumentar quantidade"
      >
        <HiOutlinePlusSm size={18} cursor="pointer" />
      </button>
    </div>
  );
}
