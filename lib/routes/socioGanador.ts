import type { RouteDefinition } from "./types";

const CONTACTO_LABELS: Record<string, string> = {
  cafeterias: "Cafeterías",
  tiendas: "Tiendas o panaderías",
  restaurantes: "Restaurantes",
  otro: "Otro tipo de negocio",
};

const CONTACTO_PREFERIDO_LABELS: Record<string, string> = {
  llamada: "Llamada corta",
  whatsapp: "Explicación por WhatsApp",
};

// Ruta SOCIO GANADOR (documento 2 §5 y documento 3 §5, estados S1-S9): ayudar a descubrir
// si existe una oportunidad real de referir negocios, mostrando un escenario ilustrativo
// sin prometer ingresos no validados, con salida siempre disponible (no forzar conversión).
export const socioGanadorRoute: RouteDefinition = {
  id: "socio-ganador",
  label: "Socio Ganador",
  entryStep: "conocer",
  steps: {
    conocer: {
      id: "conocer",
      kind: "choice",
      title: "¿Quieres descubrir cómo funciona Socio Ganador?",
      helper:
        "Recomiendas negocios a Hojaldito y recibes una bonificación por cada pastel que compren y vendan. No manejas producto, no haces entregas ni cobros.",
      onSelect: () => ({ patch: { stage: "discover" }, next: "contexto" }),
    },

    contexto: {
      id: "contexto",
      kind: "choice",
      title: "¿Qué tipo de negocios conoces más?",
      options: [
        { value: "cafeterias", label: "Cafeterías" },
        { value: "tiendas", label: "Tiendas o panaderías" },
        { value: "restaurantes", label: "Restaurantes" },
        { value: "otro", label: "Otro tipo de negocio" },
      ],
      onSelect: (ctx, value) => ({
        patch: { role: "socio", answers: { tipoContactos: CONTACTO_LABELS[value ?? ""] ?? "" } },
        next: "potencial",
      }),
    },

    potencial: {
      id: "potencial",
      kind: "choice",
      title: "¿Hay negocios o personas a quienes naturalmente podrías presentarlo?",
      options: [
        { value: "si", label: "Sí, tengo en mente a quién" },
        { value: "tal_vez", label: "Tal vez, tengo que pensarlo" },
        { value: "no", label: "Por ahora no" },
      ],
      onSelect: (ctx, value) => {
        if (value === "no") {
          return {
            patch: { answers: { potencial: "Por ahora no tiene contactos en mente" } },
            next: "salida_suave",
          };
        }
        return {
          patch: {
            answers: { potencial: value === "si" ? "Ya tiene contactos en mente" : "Tal vez, lo está pensando" },
          },
          next: "ejemplo",
        };
      },
    },

    salida_suave: {
      id: "salida_suave",
      kind: "handoff",
      title: "No hay problema",
      helper:
        "Puedes volver cuando tengas contactos en mente. Si quieres, igual podemos resolver tus dudas por WhatsApp.",
      whatsappMessage: () => "Quiero saber más sobre Socio Ganador, aunque todavía no tengo contactos definidos.",
    },

    ejemplo: {
      id: "ejemplo",
      kind: "choice",
      title: "Así funciona una recomendación útil",
      helper: "No se trata de mandar un contacto. Se trata de abrir una oportunidad con contexto.",
      note: () => ({
        title: "¿Y la comisión?",
        text:
          "Si una oportunidad se concreta, aplican las condiciones comerciales vigentes del programa. Los valores se confirman antes de comprometerse.",
      }),
      onSelect: () => ({ patch: {}, next: "comprobar" }),
    },

    comprobar: {
      id: "comprobar",
      kind: "choice",
      title: "¿Quieres comprobar si esto puede funcionar para ti?",
      options: [
        { value: "si", label: "Sí, quiero comprobarlo" },
        { value: "pensar", label: "Quiero pensarlo primero" },
      ],
      onSelect: (ctx, value) => {
        if (value === "pensar") {
          return { patch: { answers: { decisionSocio: "Quiere pensarlo primero" } }, next: "salida_suave" };
        }
        return { patch: { answers: { decisionSocio: "Quiere comprobarlo" }, stage: "meeting" }, next: "accion" };
      },
    },

    accion: {
      id: "accion",
      kind: "choice",
      title: "¿Cómo prefieres que te expliquemos el proceso?",
      options: [
        { value: "llamada", label: "Con una llamada corta" },
        { value: "whatsapp", label: "Por WhatsApp" },
      ],
      onSelect: (ctx, value) => ({
        patch: { answers: { preferredContact: CONTACTO_PREFERIDO_LABELS[value ?? ""] ?? "" } },
        next: "agendaDia",
      }),
    },

    agendaDia: {
      id: "agendaDia",
      kind: "choice",
      title: "¿Cuándo te queda cómodo?",
      options: [
        { value: "esta_semana", label: "Esta semana" },
        { value: "proxima_semana", label: "La próxima semana" },
        { value: "no_seguro", label: "Aún no lo sé" },
      ],
      onSelect: (ctx, value) => ({
        patch: {
          answers: {
            agendaDia:
              value === "esta_semana" ? "Esta semana" : value === "proxima_semana" ? "Próxima semana" : "Por definir",
          },
        },
        next: "agendaMomento",
      }),
    },

    agendaMomento: {
      id: "agendaMomento",
      kind: "choice",
      title: "¿Mañana o tarde?",
      options: [
        { value: "manana", label: "Mañana" },
        { value: "tarde", label: "Tarde" },
      ],
      onSelect: (ctx, value) => ({
        patch: { answers: { agendaMomento: value === "manana" ? "Mañana" : "Tarde" }, stage: "meeting" },
        next: "activacion",
      }),
    },

    activacion: {
      id: "activacion",
      kind: "handoff",
      title: "Últimos pasos por WhatsApp",
      helper:
        "Ahí te compartimos las reglas del programa, materiales y cómo registrar a los negocios que refieras. Cuando vuelvas, seguimos desde aquí, sin repetir todo.",
      whatsappMessage: (ctx) =>
        `Quiero ser Socio Ganador. Conozco principalmente: ${ctx.state.answers.tipoContactos ?? ""}. Prefiero que me contacten por: ${
          ctx.state.answers.preferredContact ?? ""
        }.`,
    },
  },
};
