export type RouteId = "comprar" | "vender" | "socio-ganador" | "postcompra";

export type Source =
  | "qr_empaque"
  | "qr_punto_venta"
  | "social"
  | "tarjeta_presentacion"
  | "tarjeta_agradecimiento"
  | "referido"
  | "whatsapp"
  | "directo";

export type Role = "cliente" | "negocio" | "socio" | "desconocido";

export type Intent = "comprar" | "vender" | "socio" | "soporte" | "explorar";

export type Stage =
  | "discover"
  | "recommend"
  | "sample"
  | "meeting"
  | "customer"
  | "reorder"
  | "support";

// Marca el final de una ruta (ver documento 2, "no todos los caminos deben converger":
// una ruta termina cuando llega a un paso de entrega/handoff, no cuando se agotan pasos).
export const ROUTE_DONE = "__DONE__";

export interface RouteProgress {
  stepId: string;
  backStack: string[];
  completed: boolean;
}

/**
 * Estado mínimo recomendado por el documento 3 ("Mapa de Decisiones y Estados"):
 * source · role · intent · need · answers_relevant · availability · recommendation ·
 * stage · history · next_best_action · channel. `answers` guarda las respuestas
 * relevantes acumuladas (equivalente a answers_relevant), no un formulario completo.
 */
export interface ExperienceState {
  source: Source;
  role: Role;
  intent: Intent | null;
  need: string | null;
  availability: "unknown" | "available" | "unavailable";
  recommendation: string | null;
  stage: Stage;
  nextBestAction: string | null;
  channel: "web" | "whatsapp";
  history: string[];
  answers: Record<string, string>;
  routes: Partial<Record<RouteId, RouteProgress>>;
  lastInteractionAt: number;
}

export const initialExperienceState: ExperienceState = {
  source: "directo",
  role: "desconocido",
  intent: null,
  need: null,
  availability: "unknown",
  recommendation: null,
  stage: "discover",
  nextBestAction: null,
  channel: "web",
  history: [],
  answers: {},
  routes: {},
  lastInteractionAt: Date.now(),
};
