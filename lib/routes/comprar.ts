import { COMPLEMENTOS, PRODUCTOS, cantidadSugerida, getRecomendacion } from "@/data/productos";
import type { ExperienceState } from "@/lib/experience/types";
import type { RouteDefinition, StepResult } from "./types";

const NECESIDAD_LABELS: Record<string, string> = {
  negocio: "Para mi negocio",
  compartir: "Para compartir",
  personal: "Para mí",
};

function irARecomendacion(need: "negocio" | "compartir" | "personal"): StepResult {
  return {
    patch: {
      need,
      stage: "recommend",
      answers: { necesidad: NECESIDAD_LABELS[need] },
    },
    next: "recomendacion",
  };
}

// Ruta COMPRAR (documento 2 §3 y documento 3 §3): intención → orientación → recomendación →
// presentación → cantidad → complemento → confirmación → entrega. La despensa se recorre
// para el cliente, no al revés.
export const comprarRoute: RouteDefinition = {
  id: "comprar",
  label: "Comprar",
  entryStep: "intencion",
  steps: {
    intencion: {
      id: "intencion",
      kind: "choice",
      title: "¿Qué quieres llevar hoy?",
      helper: "Cuéntame para qué es y te muestro lo que tiene más sentido.",
      allowUnsure: true,
      options: [
        { value: "para_mi", label: "Para mí" },
        { value: "compartir", label: "Para compartir" },
        { value: "negocio", label: "Para mi negocio" },
        { value: "repetir", label: "Quiero repetir un pedido anterior" },
      ],
      onSelect: (ctx, value) => {
        if (value === "repetir") {
          if (ctx.state.answers.ultimoPedido) {
            return { patch: { stage: "reorder" }, next: "recompra_rapida" };
          }
          return {
            patch: {
              need: "personal",
              stage: "recommend",
              answers: { necesidad: "Repetir (sin pedido anterior registrado)" },
            },
            next: "recomendacion",
          };
        }
        if (value === "no_estoy_seguro") return { patch: {}, next: "orientacion" };
        if (value === "negocio") return irARecomendacion("negocio");
        if (value === "compartir") return irARecomendacion("compartir");
        return irARecomendacion("personal");
      },
    },

    orientacion: {
      id: "orientacion",
      kind: "choice",
      title: "No hay problema, lo vemos más simple",
      helper: "¿Esto es más para ti, para compartir con alguien, o para tu negocio?",
      options: [
        { value: "para_mi", label: "Para mí" },
        { value: "compartir", label: "Para compartir" },
        { value: "negocio", label: "Para mi negocio" },
      ],
      onSelect: (ctx, value) => {
        if (value === "negocio") return irARecomendacion("negocio");
        if (value === "compartir") return irARecomendacion("compartir");
        return irARecomendacion("personal");
      },
    },

    recompra_rapida: {
      id: "recompra_rapida",
      kind: "summary",
      title: "¿Repetimos tu último pedido?",
      helper: "Así quedó la última vez. Puedes confirmarlo igual o ajustarlo.",
      summaryFields: (ctx) => [
        { label: "Pedido anterior", value: ctx.state.answers.ultimoPedido ?? "—" },
      ],
      onContinue: () => ({ patch: { stage: "customer" }, next: "entrega_datos" }),
    },

    recomendacion: {
      id: "recomendacion",
      kind: "choice",
      title: "Para lo que buscas, te recomendamos esto",
      helper: (ctx) => {
        const producto = getRecomendacion(ctx.state.need);
        if (!producto) return "Por ahora no tenemos disponibilidad. Escríbenos y te avisamos apenas haya.";
        return `${producto.nombre} — ${producto.descripcion}`;
      },
      options: (ctx) => {
        const producto = getRecomendacion(ctx.state.need);
        if (!producto) return [];
        return [{ value: producto.id, label: `Sí, quiero ${producto.nombre}` }];
      },
      onSelect: (ctx, value) => {
        const producto = PRODUCTOS.find((p) => p.id === value) ?? getRecomendacion(ctx.state.need);
        const patch: Partial<ExperienceState> = {
          recommendation: producto?.id ?? null,
          answers: { producto: producto?.nombre ?? "" },
        };
        if (producto && producto.presentaciones.filter((p) => p.disponible).length > 1) {
          return { patch, next: "presentacion" };
        }
        return { patch, next: "cantidad" };
      },
    },

    presentacion: {
      id: "presentacion",
      kind: "choice",
      title: "¿Cuál presentación prefieres?",
      options: (ctx) => {
        const producto = PRODUCTOS.find((p) => p.id === ctx.state.recommendation);
        return (producto?.presentaciones ?? [])
          .filter((p) => p.disponible)
          .map((p) => ({ value: p.id, label: p.nombre }));
      },
      onSelect: (ctx, value) => ({
        patch: { answers: { presentacion: value ?? "" } },
        next: "cantidad",
      }),
    },

    cantidad: {
      id: "cantidad",
      kind: "quantity",
      title: "¿Cuántos quieres?",
      helper: "Te proponemos una cantidad de partida; puedes ajustarla.",
      defaultQuantity: (ctx) => cantidadSugerida(ctx.state.need),
      onSelect: (ctx, value) => {
        const hayComplementos = COMPLEMENTOS.some((c) => c.disponible);
        return {
          patch: { answers: { cantidad: value ?? "1" } },
          next: hayComplementos ? "complemento" : "confirmacion",
        };
      },
    },

    complemento: {
      id: "complemento",
      kind: "choice",
      title: "¿Quieres agregar algo más?",
      options: () => [
        ...COMPLEMENTOS.filter((c) => c.disponible).map((c) => ({ value: c.id, label: c.nombre })),
        { value: "omitir", label: "No, gracias" },
      ],
      onSelect: (ctx, value) => {
        const complemento = COMPLEMENTOS.find((c) => c.id === value);
        return {
          patch: { answers: { complemento: complemento?.nombre ?? "Sin complemento" } },
          next: "confirmacion",
        };
      },
    },

    confirmacion: {
      id: "confirmacion",
      kind: "summary",
      title: "Así queda tu pedido",
      helper: "Puedes editar cualquier parte antes de confirmar.",
      summaryFields: (ctx) => {
        const fields = [
          { label: "Producto", value: ctx.state.answers.producto ?? "—", editStepId: "recomendacion" },
          { label: "Cantidad", value: ctx.state.answers.cantidad ?? "—", editStepId: "cantidad" },
        ];
        if (ctx.state.answers.presentacion) {
          fields.splice(1, 0, {
            label: "Presentación",
            value: ctx.state.answers.presentacion,
            editStepId: "presentacion",
          });
        }
        if (ctx.state.answers.complemento && ctx.state.answers.complemento !== "Sin complemento") {
          fields.push({
            label: "Complemento",
            value: ctx.state.answers.complemento,
            editStepId: "complemento",
          });
        }
        return fields;
      },
      onContinue: (ctx) => {
        const resumen = `${ctx.state.answers.producto ?? ""} x${ctx.state.answers.cantidad ?? ""}`;
        return {
          patch: { stage: "customer", answers: { ultimoPedido: resumen } },
          next: "entrega_datos",
        };
      },
    },

    entrega_datos: {
      id: "entrega_datos",
      kind: "form",
      title: "Hagamos que llegue donde lo necesitas",
      helper: "Tu pedido ya está decidido. Ahora solo falta saber dónde y a nombre de quién.",
      fields: [
        { id: "direccion", label: "Dirección / punto de entrega", placeholder: "Ej. Calle 20 # 10-25" },
        { id: "nombreEntrega", label: "Nombre", placeholder: "¿A nombre de quién?" },
      ],
      onSubmit: (ctx, values) => ({
        patch: {
          answers: {
            direccion: values.direccion?.trim() || "Por confirmar",
            nombreEntrega: values.nombreEntrega?.trim() || "Por confirmar",
          },
        },
        next: "entrega",
      }),
    },

    entrega: {
      id: "entrega",
      kind: "handoff",
      title: "Coordinemos la entrega y el pago",
      helper:
        "Terminamos por WhatsApp: ahí confirmamos precio, forma de pago y entrega. La próxima vez este pedido será todavía más rápido.",
      whatsappMessage: (ctx) =>
        `Quiero confirmar mi pedido: ${ctx.state.answers.producto ?? ""} x${ctx.state.answers.cantidad ?? ""}` +
        (ctx.state.answers.complemento && ctx.state.answers.complemento !== "Sin complemento"
          ? ` + ${ctx.state.answers.complemento}`
          : "") +
        `. Entrega en: ${ctx.state.answers.direccion ?? "por confirmar"}, a nombre de ${
          ctx.state.answers.nombreEntrega ?? "por confirmar"
        }.`,
    },
  },
};
