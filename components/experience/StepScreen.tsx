"use client";

import type { StepConfig, StepContext } from "@/lib/routes/types";

interface Props {
  step: StepConfig;
  ctx: StepContext;
  routeLabel?: string;
  onBack?: () => void;
  onSelect: (value?: string) => void;
}

export default function StepScreen({ step, ctx, routeLabel, onBack, onSelect }: Props) {
  const helper = typeof step.helper === "function" ? step.helper(ctx) : step.helper;
  const baseOptions = typeof step.options === "function" ? step.options(ctx) : (step.options ?? []);
  const options = step.allowUnsure
    ? [...baseOptions, { value: "no_estoy_seguro", label: step.unsureLabel ?? "No estoy seguro" }]
    : baseOptions;
  const transparency = step.transparency?.(ctx);
  const note = step.note?.(ctx);

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

      {transparency && (
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-cream p-5">
            <p className="mb-1 font-bold text-ink">¿Qué haríamos?</p>
            <p className="text-sm text-muted">{transparency.we}</p>
          </div>
          <div className="rounded-2xl border border-line bg-cream p-5">
            <p className="mb-1 font-bold text-ink">¿Qué no hacemos?</p>
            <p className="text-sm text-muted">{transparency.weNot}</p>
          </div>
        </div>
      )}

      {note && (
        <div className="mb-8 rounded-2xl border border-line bg-cream p-5">
          <p className="mb-1 font-bold text-ink">{note.title}</p>
          <p className="text-sm text-muted">{note.text}</p>
        </div>
      )}

      {options.length > 0 ? (
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`flex w-full items-center justify-between gap-4 rounded-2xl border bg-paper px-5 py-5 text-left transition hover:translate-x-1 hover:border-accent ${
                opt.value === "no_estoy_seguro" ? "border-dashed border-line text-muted" : "border-line text-ink"
              }`}
            >
              <span>
                <span className="block font-bold">{opt.label}</span>
                {opt.hint && <span className="mt-1 block text-sm text-muted">{opt.hint}</span>}
              </span>
              <strong className="shrink-0 text-xl text-accent">→</strong>
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={() => onSelect(undefined)}
          className="w-fit rounded-[13px] bg-ink px-8 py-4 text-lg font-bold text-paper transition hover:-translate-y-0.5"
        >
          Continuar
        </button>
      )}
    </div>
  );
}
