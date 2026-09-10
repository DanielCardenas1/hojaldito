"use client";

import { useState } from "react";
import type { StepConfig, StepContext } from "@/lib/routes/types";

interface Props {
  step: StepConfig;
  ctx: StepContext;
  routeLabel?: string;
  onBack?: () => void;
  onSubmit: (values: Record<string, string>) => void;
}

// Paso tipo formulario: solo para los 1-2 campos que de verdad hacen falta al final de
// una decisión ya tomada (p. ej. dirección/nombre de entrega). Nunca un formulario largo.
export default function FormStep({ step, ctx, routeLabel, onBack, onSubmit }: Props) {
  const helper = typeof step.helper === "function" ? step.helper(ctx) : step.helper;
  const fields = step.fields ?? [];
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.id, ""]))
  );

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

      <div className="mb-8 flex flex-col gap-5">
        {fields.map((f) => (
          <label key={f.id} className="flex flex-col gap-2 font-bold text-ink">
            {f.label}
            <input
              value={values[f.id] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
              placeholder={f.placeholder}
              className="rounded-xl border border-line bg-paper px-4 py-3 font-normal text-ink outline-none transition focus:border-accent"
            />
          </label>
        ))}
      </div>

      <button
        onClick={() => onSubmit(values)}
        className="w-fit rounded-[13px] bg-action px-8 py-4 text-lg font-bold text-paper shadow-sm transition hover:-translate-y-0.5 hover:bg-action-dark"
      >
        Confirmar y continuar →
      </button>
    </div>
  );
}
