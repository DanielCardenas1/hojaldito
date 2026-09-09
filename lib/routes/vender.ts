import { ESCENARIO_VENTA, formatoCOP } from "@/data/socioGanador";
import type { OptionChoice, RouteDefinition } from "./types";

const NEGOCIOS: OptionChoice[] = [
  { value: "panaderia", label: "Panadería" },
  { value: "cafeteria", label: "Cafetería" },
  { value: "tienda", label: "Tienda" },
  { value: "restaurante", label: "Restaurante" },
  { value: "hotel", label: "Hotel" },
  { value: "otro", label: "Otro" },
];

const NEGOCIO_LABEL: Record<string, string> = Object.fromEntries(
  NEGOCIOS.map((n) => [n.value, n.label])
);

function encajesPara(businessTypeRaw: string | undefined): OptionChoice[] {
  switch (businessTypeRaw) {
    case "cafeteria":
    case "restaurante":
      return [
        { value: "vitrina", label: "Vitrina de acompañamiento", hint: "Junto al café o la carta de onces." },
        { value: "horneo", label: "Horneo bajo pedido", hint: "Lo horneas fresco según la demanda del día." },
      ];
    case "panaderia":
      return [
        {
          value: "complemento",
          label: "Complemento a tu producción propia",
          hint: "Amplías variedad sin aumentar tu carga de producción.",
        },
        { value: "horneo", label: "Horneo bajo pedido", hint: "Lo horneas fresco según la demanda del día." },
      ];
    case "hotel":
      return [
        {
          value: "desayunos",
          label: "Buffet de desayunos",
          hint: "Producto congelado listo para hornear cada mañana.",
        },
      ];
    default:
      return [
        { value: "vitrina", label: "Vitrina de acompañamiento" },
        { value: "horneo", label: "Horneo bajo pedido" },
      ];
  }
}

const OBJETIVO_LABELS: Record<string, string> = {
  vender_directo: "Venderlo directamente",
  complementar: "Complementar lo que ya vendo",
  probar_primero: "Probarlo primero",
  no_estoy_seguro: "No está seguro todavía",
};

// Ruta VENDER HOJALDITO (documento 2 §4 y documento 3 §4, estados B1-B10): descubrir si
// existe una oportunidad real para el negocio del prospecto y llevarlo a una acción
// concreta (muestra o reunión), sin convertir la experiencia en un formulario comercial.
export const venderRoute: RouteDefinition = {
  id: "vender",
  label: "Vender Hojaldito",
  entryStep: "inicio",
  steps: {
    inicio: {
      id: "inicio",
      kind: "choice",
      title: "¿Quieres vender Hojaldito en tu negocio?",
      helper: "Te hago un par de preguntas cortas y te muestro cómo podría funcionar en tu caso.",
      allowUnsure: true,
      options: [
        { value: "conocer", label: "Quiero conocer cómo funciona" },
        { value: "probar", label: "Quiero probarlo" },
      ],
      onSelect: (ctx, value) => {
        const label =
          value === "probar"
            ? "Quiere probar directamente"
            : value === "conocer"
              ? "Quiere conocer cómo funciona"
              : "No está seguro todavía";
        return { patch: { answers: { intencionVender: label }, stage: "discover" }, next: "negocio" };
      },
    },

    negocio: {
      id: "negocio",
      kind: "choice",
      title: "¿Qué tipo de negocio tienes?",
      options: NEGOCIOS,
      onSelect: (ctx, value) => ({
        patch: {
          role: "negocio",
          answers: { businessType: NEGOCIO_LABEL[value ?? ""] ?? value ?? "", businessTypeRaw: value ?? "" },
        },
        next: "objetivo",
      }),
    },

    objetivo: {
      id: "objetivo",
      kind: "choice",
      title: "¿Qué quieres lograr?",
      allowUnsure: true,
      options: [
        { value: "vender_directo", label: "Venderlo directamente" },
        { value: "complementar", label: "Complementar lo que ya vendo" },
        { value: "probar_primero", label: "Probarlo primero" },
      ],
      onSelect: (ctx, value) => ({
        patch: { answers: { objective: OBJETIVO_LABELS[value ?? ""] ?? "" } },
        next: "interpretacion",
      }),
    },

    interpretacion: {
      id: "interpretacion",
      kind: "choice",
      title: "Por lo que me cuentas, esto podría funcionar así",
      helper: (ctx) => {
        const negocio = (ctx.state.answers.businessType ?? "tu negocio").toLowerCase();
        const objetivo = (ctx.state.answers.objective ?? "").toLowerCase();
        return `Para un${negocio.startsWith("hotel") ? "" : "a"} ${negocio} que busca ${objetivo || "vender más"}, Hojaldito suele encajar como un producto congelado que horneas según demanda, sin comprometerte con inventario que se vence.`;
      },
      transparency: () => ({
        we: "Te mostramos una muestra, observamos el contexto de venta y después decides.",
        weNot: "No te hacemos comprometerte antes de comprobar si encaja.",
      }),
      onSelect: () => ({ patch: {}, next: "encaje" }),
    },

    encaje: {
      id: "encaje",
      kind: "choice",
      title: "¿Cuál forma te hace más sentido?",
      options: (ctx) => encajesPara(ctx.state.answers.businessTypeRaw),
      onSelect: (ctx, value) => ({
        patch: { recommendation: value ?? null, answers: { encaje: value ?? "" } },
        next: "escenario",
      }),
    },

    escenario: {
      id: "escenario",
      kind: "choice",
      title: "Un ejemplo de cómo se vería",
      helper: `Ejemplo ilustrativo, sujeto a confirmación: costo aproximado ${formatoCOP(
        ESCENARIO_VENTA.costoPorPastel
      )} por unidad, precio sugerido de venta entre ${formatoCOP(
        ESCENARIO_VENTA.precioSugeridoMin
      )} y ${formatoCOP(ESCENARIO_VENTA.precioSugeridoMax)}, ganancia aproximada de ${formatoCOP(
        ESCENARIO_VENTA.gananciaMin
      )} a ${formatoCOP(ESCENARIO_VENTA.gananciaMax)} por unidad vendida.`,
      onSelect: () => ({ patch: {}, next: "prueba" }),
    },

    prueba: {
      id: "prueba",
      kind: "choice",
      title: "¿Quieres probarlo antes de decidir?",
      options: [
        { value: "si", label: "Sí, quiero probarlo" },
        { value: "hablar", label: "Prefiero hablar primero" },
      ],
      onSelect: (ctx, value) => ({
        patch: {
          answers: {
            quierePrueba: value === "si" ? "Quiere probar antes de decidir" : "Prefiere hablar primero",
          },
          stage: "sample",
        },
        next: value === "si" ? "agendaDia" : "continuidad",
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
        next: "continuidad",
      }),
    },

    continuidad: {
      id: "continuidad",
      kind: "handoff",
      title: "Coordinemos por WhatsApp",
      helper:
        "Ahí confirmamos la muestra o la reunión y seguimos con el siguiente paso: evaluación, decisión, compra y reposición.",
      whatsappMessage: (ctx) =>
        `Quiero vender Hojaldito en mi negocio (${ctx.state.answers.businessType ?? "negocio"}). Objetivo: ${
          ctx.state.answers.objective ?? ""
        }.`,
    },
  },
};
