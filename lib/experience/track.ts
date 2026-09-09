type TrackPayload = Record<string, string | number | boolean | undefined>;

const STORAGE_KEY = "hojaldito_events_v1";

/**
 * Stub de analítica (documento 4, sección 10): registra los eventos que el documento pide
 * medir (entrada, intención, ruta, recomendación, abandono, handoff, pedido, recompra,
 * referido) en consola y en localStorage. Reemplazar por una integración real (GA4, Meta
 * Pixel, etc.) cuando se decida cuál usar; la firma de la función no debería cambiar.
 */
export function trackEvent(name: string, payload?: TrackPayload) {
  if (typeof window === "undefined") return;
  try {
    // eslint-disable-next-line no-console
    console.info(`[hojaldito] ${name}`, payload ?? {});
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const list = raw ? (JSON.parse(raw) as unknown[]) : [];
    list.push({ name, payload, at: Date.now() });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(-200)));
  } catch {
    // no debe interrumpir la experiencia si localStorage falla.
  }
}
