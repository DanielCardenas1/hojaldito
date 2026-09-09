import { ROUTE_DONE } from "@/lib/experience/types";
import type { ExperienceState, RouteId } from "@/lib/experience/types";

export { ROUTE_DONE };

export interface OptionChoice {
  value: string;
  label: string;
  hint?: string;
}

export interface StepContext {
  state: ExperienceState;
}

export interface StepResult {
  patch: Partial<ExperienceState>;
  next: string;
  redirectTo?: string;
}

export type StepKind = "choice" | "quantity" | "summary" | "handoff" | "form";

export interface SummaryField {
  label: string;
  value: string;
  editStepId?: string;
}

export interface TransparencyBlock {
  we: string;
  weNot: string;
}

export interface NoteBlock {
  title: string;
  text: string;
}

export interface FormField {
  id: string;
  label: string;
  placeholder?: string;
}

/**
 * Un paso describe UNA decisión (regla de interfaz: "una decisión principal por pantalla").
 * `options` vacío/ausente + sin `onSelect` para un valor puntual significa "un solo camino":
 * la pantalla muestra un botón de continuar en vez de disfrazar un paso como elección.
 */
export interface StepConfig {
  id: string;
  kind: StepKind;
  title: string;
  helper?: string | ((ctx: StepContext) => string | undefined);
  options?: OptionChoice[] | ((ctx: StepContext) => OptionChoice[]);
  allowUnsure?: boolean;
  unsureLabel?: string;
  defaultQuantity?: (ctx: StepContext) => number;
  summaryFields?: (ctx: StepContext) => SummaryField[];
  whatsappMessage?: (ctx: StepContext) => string;
  // Bloque "¿qué haríamos? / ¿qué no hacemos?": genera confianza mostrando el límite,
  // no solo la promesa (patrón tomado del análisis de la experiencia v3).
  transparency?: (ctx: StepContext) => TransparencyBlock | undefined;
  // Callout de una sola caja, p. ej. disclaimers de condiciones comerciales por confirmar.
  note?: (ctx: StepContext) => NoteBlock | undefined;
  // Para kind 'form': campos mínimos (pensado para 1-2 campos, no formularios largos).
  fields?: FormField[];
  onSelect?: (ctx: StepContext, value?: string) => StepResult;
  onContinue?: (ctx: StepContext) => StepResult;
  onSubmit?: (ctx: StepContext, values: Record<string, string>) => StepResult;
}

export interface RouteDefinition {
  id: RouteId;
  label: string;
  entryStep: string;
  steps: Record<string, StepConfig>;
}
