"use client";

import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/experience/whatsapp";
import { trackEvent } from "@/lib/experience/track";
import type { StepConfig, StepContext } from "@/lib/routes/types";

interface Props {
  step: StepConfig;
  ctx: StepContext;
  routeLabel?: string;
  onBack?: () => void;
  onRestart: () => void;
}

// Pantalla de continuidad (handoff): el contexto acumulado viaja en el mensaje de
// WhatsApp, nunca se reinicia la conversación (documento 4, sección 9).
export default function WhatsAppCTA({ step, ctx, routeLabel, onBack, onRestart }: Props) {
  const helper = typeof step.helper === "function" ? step.helper(ctx) : step.helper;
  const message = step.whatsappMessage ? step.whatsappMessage(ctx) : undefined;
  const url = buildWhatsAppUrl(ctx.state, message);
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

      {note && (
        <div className="mb-8 rounded-2xl border border-line bg-cream p-5">
          <p className="mb-1 font-bold text-ink">{note.title}</p>
          <p className="text-sm text-muted">{note.text}</p>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_handoff", { title: step.title })}
        className="w-fit rounded-[13px] bg-ink px-8 py-4 text-lg font-bold text-paper shadow-sm transition hover:-translate-y-0.5"
      >
        Continuar por WhatsApp →
      </a>

      <button onClick={onRestart} className="mt-6 w-fit text-sm font-semibold text-muted hover:text-ink">
        Empezar de nuevo
      </button>

      <Link href="/" className="mt-2 w-fit text-sm font-semibold text-muted hover:text-ink">
        Volver al inicio
      </Link>
    </div>
  );
}
