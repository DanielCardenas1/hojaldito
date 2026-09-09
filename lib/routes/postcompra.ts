import { ROUTE_DONE } from "@/lib/experience/types";
import type { RouteDefinition } from "./types";

const PROBLEMA_LABELS: Record<string, string> = {
  incompleto: "Llegó incompleto",
  mal_estado: "Llegó en mal estado",
  tarde: "Llegó tarde",
  otro: "Otro problema",
};

// Ruta POSTCOMPRA (documento 2 §7 y documento 3 §6, estados P1-P6): un cliente que ya
// compró no vuelve a vivir la experiencia de un desconocido. Un problema nunca se convierte
// en un intento de venta; una recompra o un referido se redirige a la ruta correspondiente
// llevando el contexto ya reunido (ver `redirectTo` + lib/experience/entries.ts).
export const postcompraRoute: RouteDefinition = {
  id: "postcompra",
  label: "Postcompra",
  entryStep: "agradecimiento",
  steps: {
    agradecimiento: {
      id: "agradecimiento",
      kind: "choice",
      title: "Gracias por elegir Hojaldito. ¿Cómo estuvo?",
      options: [
        { value: "muy_bien", label: "Muy bien" },
        { value: "bien", label: "Bien" },
        { value: "problema", label: "Tuve un problema" },
      ],
      onSelect: (ctx, value) => {
        if (value === "problema") {
          return {
            patch: { answers: { satisfaccion: "Tuvo un problema" }, stage: "support" },
            next: "problema",
          };
        }
        return {
          patch: { answers: { satisfaccion: value === "muy_bien" ? "Muy bien" : "Bien" } },
          next: "satisfecho",
        };
      },
    },

    problema: {
      id: "problema",
      kind: "choice",
      title: "¿Qué tipo de problema tuviste?",
      helper: "Con esto ya podemos ayudarte sin que tengas que contarlo todo de nuevo por WhatsApp.",
      options: [
        { value: "incompleto", label: "Llegó incompleto" },
        { value: "mal_estado", label: "Llegó en mal estado" },
        { value: "tarde", label: "Llegó tarde" },
        { value: "otro", label: "Otro problema" },
      ],
      onSelect: (ctx, value) => ({
        patch: { answers: { problema: PROBLEMA_LABELS[value ?? ""] ?? "" } },
        next: "soporte",
      }),
    },

    soporte: {
      id: "soporte",
      kind: "handoff",
      title: "Vamos a resolverlo",
      helper: "Escríbenos por WhatsApp con este contexto ya listo; seguimos directo con la solución.",
      whatsappMessage: (ctx) => `Tuve un problema con mi pedido: ${ctx.state.answers.problema ?? ""}.`,
    },

    satisfecho: {
      id: "satisfecho",
      kind: "choice",
      title: "¿Quieres volver a pedir?",
      options: (ctx) => {
        const base = [
          { value: "repetir", label: "Sí, quiero repetir" },
          { value: "recomendar", label: "Quiero recomendar Hojaldito" },
          { value: "no_por_ahora", label: "Por ahora no, gracias" },
        ];
        if (ctx.state.role === "negocio") {
          base.splice(1, 0, { value: "reponer", label: "Ya necesito reponer para mi negocio" });
        }
        return base;
      },
      onSelect: (ctx, value) => {
        if (value === "repetir" || value === "reponer") {
          return {
            patch: {
              answers: { origenPostcompra: value === "reponer" ? "Reposición de negocio" : "Recompra" },
            },
            next: ROUTE_DONE,
            redirectTo: "/comprar?src=postcompra_recompra",
          };
        }
        if (value === "recomendar") return { patch: {}, next: "recomendar" };
        return { patch: {}, next: "cierre" };
      },
    },

    recomendar: {
      id: "recomendar",
      kind: "choice",
      title: "¿Quieres recomendar Hojaldito a alguien?",
      options: [
        { value: "si", label: "Sí, quiero recomendar" },
        { value: "no", label: "No, gracias" },
      ],
      onSelect: (ctx, value) => {
        if (value === "si") {
          return { patch: {}, next: ROUTE_DONE, redirectTo: "/socio-ganador?src=referido" };
        }
        return { patch: {}, next: "cierre" };
      },
    },

    cierre: {
      id: "cierre",
      kind: "handoff",
      title: "¡Gracias!",
      helper: "Cuando quieras volver a pedir o necesites ayuda, aquí seguimos.",
      whatsappMessage: () => "Hola, solo quería saludar después de mi última compra.",
    },
  },
};
