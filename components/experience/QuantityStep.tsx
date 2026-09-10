"use client";

import { useState } from "react";
import type { StepConfig, StepContext } from "@/lib/routes/types";

interface Props {
  step: StepConfig;
  ctx: StepContext;
  routeLabel?: string;
  onBack?: () => void;
  onContinue: (value: string) => void;
}

// Paso tipo "cantidad" (C5): propone y permite ajustar, nunca pide que el cliente calcule.
export default function QuantityStep({ step, ctx, routeLabel, onBack, onContinue }: Props) {
  const suggested = step.defaultQuantity ? step.defaultQuantity(ctx) : 6;
  const [qty, setQty] = useState(suggested);
  const helper = typeof step.helper === "function" ? step.helper(ctx) : step.helper;

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-xl flex-col justify-center px-6 py-12">
      {onBack && (
        <button onClick={onBack} className="mb-6 self-start text-sm font-semibold text-muted hover:text-ink">
          ← Atrás
        </button>
      )}
      {routeLabel && <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">{routeLabel}</p>}
      <h1 className="title-serif mb-3 text-2xl font-bold text-ink md:text-3xl">{step.title}</h1>
      {helper && <p className="mb-8 text-muted">{helper}</p>}

      <div className="mb-8 flex items-center justify-center gap-6 rounded-2xl border border-line bg-cream p-8">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="h-11 w-11 rounded-full border border-line bg-paper text-2xl font-bold text-ink transition hover:border-accent"
          aria-label="Reducir cantidad"
        >
          −
        </button>
        <span className="w-20 text-center text-4xl font-bold text-ink">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="h-11 w-11 rounded-full border border-line bg-paper text-2xl font-bold text-ink transition hover:border-accent"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onContinue(String(qty))}
        className="w-fit rounded-[13px] bg-action px-8 py-4 text-lg font-bold text-paper shadow-sm transition hover:-translate-y-0.5 hover:bg-action-dark"
      >
        Confirmar cantidad
      </button>
    </div>
  );
}
