"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useExperience } from "@/lib/experience/context";
import { trackEvent } from "@/lib/experience/track";
import type { ExperienceState } from "@/lib/experience/types";
import type { RouteDefinition, StepContext } from "@/lib/routes/types";
import StepScreen from "./StepScreen";
import QuantityStep from "./QuantityStep";
import SummaryCard from "./SummaryCard";
import WhatsAppCTA from "./WhatsAppCTA";
import FormStep from "./FormStep";
import ResumeScreen from "./ResumeScreen";

// Motor genérico: recorre la tabla de pasos de una ruta (ver lib/routes/*.ts). Cada
// pantalla es consecuencia de la ruta, no al revés (documento 2, regla 1).
export default function RouteRunner({ route }: { route: RouteDefinition }) {
  const { state, dispatch } = useExperience();
  const router = useRouter();
  const progress = state.routes[route.id];
  const stepId = progress?.stepId ?? route.entryStep;
  const step = route.steps[stepId];
  const canGoBack = (progress?.backStack.length ?? 0) > 0;

  // Si ya había avance guardado antes de este montaje, se lo decimos explícitamente en
  // vez de retomar en silencio (patrón "resume" de la experiencia v3 analizada).
  // `hasPriorProgress` se recalcula en cada render (no se fija con un valor inicial de
  // useState) porque el estado persistido se carga de forma asíncrona desde localStorage
  // (ver ExperienceProvider): en el primer render, antes de esa hidratación, `progress`
  // todavía no existe. `resumeAcknowledged` sí es una decisión que debe "pegarse" una vez
  // el usuario la toma, así que ese es el único valor que vive en useState.
  const hasPriorProgress = !!progress && (progress.backStack.length > 0 || progress.completed);
  const [resumeAcknowledged, setResumeAcknowledged] = useState(false);
  const showResume = hasPriorProgress && !resumeAcknowledged;

  useEffect(() => {
    trackEvent("step_view", { route: route.id, step: stepId });
  }, [route.id, stepId]);

  const ctx: StepContext = { state };

  function commit(patch: Partial<ExperienceState> | undefined, next: string, redirectTo?: string) {
    dispatch({ type: "ADVANCE", routeId: route.id, fromStep: stepId, patch: patch ?? {}, next });
    trackEvent("step_advance", { route: route.id, from: stepId, to: next });
    if (redirectTo) router.push(redirectTo);
  }

  function goBack() {
    dispatch({ type: "GO_BACK", routeId: route.id });
  }

  function restart() {
    dispatch({ type: "RESET_ROUTE", routeId: route.id });
  }

  if (showResume) {
    return (
      <ResumeScreen
        routeLabel={route.label}
        onContinue={() => setResumeAcknowledged(true)}
        onRestart={() => {
          restart();
          setResumeAcknowledged(true);
        }}
      />
    );
  }

  if (!step) {
    return (
      <StepScreen
        step={{
          id: "error",
          kind: "choice",
          title: "Volvamos al inicio",
          helper: "Esa parte de la conversación no está disponible.",
        }}
        ctx={ctx}
        routeLabel={route.label}
        onSelect={() => router.push("/")}
      />
    );
  }

  switch (step.kind) {
    case "quantity":
      return (
        <QuantityStep
          step={step}
          ctx={ctx}
          routeLabel={route.label}
          onBack={canGoBack ? goBack : undefined}
          onContinue={(value) => {
            const result = step.onSelect?.(ctx, value);
            if (result) commit(result.patch, result.next, result.redirectTo);
          }}
        />
      );
    case "summary":
      return (
        <SummaryCard
          step={step}
          ctx={ctx}
          routeLabel={route.label}
          onBack={canGoBack ? goBack : undefined}
          onEdit={(targetStepId) => dispatch({ type: "GOTO_STEP", routeId: route.id, stepId: targetStepId })}
          onContinue={() => {
            const result = step.onContinue?.(ctx);
            if (result) commit(result.patch, result.next, result.redirectTo);
          }}
        />
      );
    case "handoff":
      return (
        <WhatsAppCTA
          step={step}
          ctx={ctx}
          routeLabel={route.label}
          onBack={canGoBack ? goBack : undefined}
          onRestart={restart}
        />
      );
    case "form":
      return (
        <FormStep
          step={step}
          ctx={ctx}
          routeLabel={route.label}
          onBack={canGoBack ? goBack : undefined}
          onSubmit={(values) => {
            const result = step.onSubmit?.(ctx, values);
            if (result) commit(result.patch, result.next, result.redirectTo);
          }}
        />
      );
    default:
      return (
        <StepScreen
          step={step}
          ctx={ctx}
          routeLabel={route.label}
          onBack={canGoBack ? goBack : undefined}
          onSelect={(value) => {
            const result = step.onSelect?.(ctx, value);
            if (result) commit(result.patch, result.next, result.redirectTo);
          }}
        />
      );
  }
}
