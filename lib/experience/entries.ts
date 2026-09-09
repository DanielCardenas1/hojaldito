import type { ExperienceState } from "./types";

type EntryContext = Partial<
  Pick<ExperienceState, "source" | "role" | "intent" | "need" | "stage">
>;

/**
 * Tabla de entradas contextuales (documento 2, sección 6 y documento 3, sección 7):
 * cada punto de entrada (QR, tarjeta, referido...) trae contexto propio y no necesariamente
 * debería aterrizar en Home. El parámetro `?src=` en la URL selecciona la fila.
 */
export const ENTRY_SOURCES: Record<string, EntryContext> = {
  qr_empaque: { source: "qr_empaque", role: "cliente", intent: "soporte", stage: "reorder" },
  qr_punto_venta: { source: "qr_punto_venta", role: "cliente", intent: "comprar", stage: "recommend" },
  social: { source: "social", stage: "discover" },
  tarjeta_presentacion: {
    source: "tarjeta_presentacion",
    role: "negocio",
    intent: "vender",
    stage: "discover",
  },
  tarjeta_agradecimiento: {
    source: "tarjeta_agradecimiento",
    role: "cliente",
    intent: "soporte",
    stage: "reorder",
  },
  referido: { source: "referido", stage: "discover" },
  whatsapp: { source: "whatsapp" },
  directo: { source: "directo", stage: "discover" },
  // Continuidad interna entre rutas (ver postcompra -> comprar en lib/routes/postcompra.ts).
  postcompra_recompra: {
    source: "directo",
    role: "cliente",
    intent: "comprar",
    stage: "reorder",
  },
};

export function resolveEntryContext(src: string | null): EntryContext | null {
  if (!src) return null;
  return ENTRY_SOURCES[src] ?? null;
}
