"use client";

import type { StepConfig, StepContext } from "@/lib/routes/types";

interface Props {
  step: StepConfig;
  ctx: StepContext;
  routeLabel?: string;
  onBack?: () => void;
  onEdit: (stepId: string) => void;
  onContinue: () => void;
}

// Resumen editable (C7): nunca obliga a volver al catálogo, solo a la parte que se edita.
export default function SummaryCard({ step, ctx, routeLabel, onBack, onEdit, onContinue }: Props) {
  const fields = step.summaryFields ? step.summaryFields(ctx) : [];
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
      {helper && <p className="mb-6 text-muted">{helper}</p>}

      <div className="mb-8 divide-y divide-line rounded-2xl border border-line bg-paper">
        {fields.map((f) => (
          <div key={f.label} className="flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">{f.label}</p>
              <p className="font-bold text-ink">{f.value}</p>
            </div>
            {f.editStepId && (
              <button onClick={() => onEdit(f.editStepId!)} className="text-sm font-bold text-accent hover:underline">
                Editar
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onContinue}
        className="w-fit rounded-[13px] bg-ink px-8 py-4 text-lg font-bold text-paper transition hover:-translate-y-0.5"
      >
        Confirmar
      </button>
    </div>
  );
}
