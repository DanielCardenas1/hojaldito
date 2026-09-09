import type { ExperienceState } from "./types";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "573508823968";

const ROLE_LABELS: Record<ExperienceState["role"], string> = {
  cliente: "Cliente",
  negocio: "Negocio",
  socio: "Socio Ganador",
  desconocido: "Visitante",
};

// Solo estas claves de `answers` se muestran en el mensaje: si un paso guarda algo interno
// (p. ej. un valor "raw" para lógica) y no aparece aquí, no llega a WhatsApp.
const FIELD_LABELS: Record<string, string> = {
  businessType: "Tipo de negocio",
  objective: "Objetivo",
  encaje: "Cómo podría integrarse",
  producto: "Producto",
  presentacion: "Presentación",
  cantidad: "Cantidad",
  complemento: "Complemento",
  agendaDia: "Día preferido",
  agendaMomento: "Momento del día",
  tipoContactos: "Tipo de negocios que conoce",
  preferredContact: "Cómo prefiere que lo contacten",
  problema: "Tipo de problema",
  potencial: "Contactos potenciales",
  direccion: "Dirección de entrega",
  nombreEntrega: "A nombre de",
};

/**
 * Arma el link de WhatsApp con el contexto acumulado por la experiencia, para que el
 * humano que retome la conversación no tenga que pedirle al cliente que repita todo
 * (documento 4, sección 9: "el contexto debe viajar con ella").
 */
export function buildWhatsAppUrl(state: ExperienceState, extraLine?: string): string {
  const lines: string[] = ["Hola, vengo de la experiencia web de Hojaldito."];
  lines.push(`Vengo como: ${ROLE_LABELS[state.role]}`);

  const relevantKeys = Object.keys(state.answers).filter((key) => FIELD_LABELS[key]);
  if (relevantKeys.length > 0) {
    lines.push("");
    for (const key of relevantKeys) {
      lines.push(`${FIELD_LABELS[key]}: ${state.answers[key]}`);
    }
  }

  if (extraLine) {
    lines.push("");
    lines.push(extraLine);
  }

  const message = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
