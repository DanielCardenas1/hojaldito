"use client";

import { useRouter } from "next/navigation";
import { useExperience } from "@/lib/experience/context";
import { trackEvent } from "@/lib/experience/track";
import { PRODUCTOS } from "@/data/productos";

const PROBLEMA_ITEMS = [
  { icon: "📦", text: "Compran producto terminado y se vence" },
  { icon: "📉", text: "Tienen merma diaria" },
  { icon: "🎛️", text: "No controlan su producción" },
  { icon: "💸", text: "Trabajan con márgenes bajos" },
];

const SOLUCION_ITEMS = [
  { icon: "🔥", text: "Hornear solo lo que se vende" },
  { icon: "♻️", text: "Reducir desperdicio" },
  { icon: "📋", text: "Controlar inventario" },
  { icon: "✨", text: "Producto fresco todo el día" },
];

const COMO_FUNCIONA_STEPS = [
  {
    icon: "📦",
    label: "Paso 1",
    title: "Te llevamos pasteles de prueba",
    text: "Sin costo adelantado. Tú solo los exhibes u horneas.",
  },
  {
    icon: "🎯",
    label: "Paso 2",
    title: "Los vendes con nuestra estrategia",
    text: "Te enseñamos cómo exhibir y qué combos hacer con bebidas.",
  },
  {
    icon: "💰",
    label: "Paso 3",
    title: "Compras solo lo que mueves",
    text: "Sin compromisos ni mínimos. Pides por WhatsApp lo que necesitas.",
  },
];

const CONFIANZA_ITEMS = [
  { icon: "🥐", title: "Producto premium", text: "Pasteles frescos y con sabores únicos que se venden solos." },
  { icon: "🤝", title: "Sin riesgo", text: "Modelo pensado para que negocios, socios y clientes ganen." },
  { icon: "📈", title: "Crecimiento real", text: "Acompañamiento y estrategia constante para vender más." },
];

const MAIN_OPTIONS = [
  {
    value: "comprar",
    icon: "🥐",
    label: "Es para mi casa",
    hint: "Quiero probar Hojaldito para mí o para compartir.",
  },
  {
    value: "vender",
    icon: "🏪",
    label: "Es para mi negocio",
    hint: "Cafetería, tienda, restaurante o panadería.",
  },
  {
    value: "socio",
    icon: "💼",
    label: "Quiero vender Hojaldito y ganar comisión",
    hint: "Recomiendo negocios como Socio Ganador.",
  },
  {
    value: "postcompra",
    icon: "✅",
    label: "Ya compré / me hablaron de Hojaldito",
    hint: "Recompra, soporte, referido o feedback.",
  },
];

// Home: manifestación visual de la arquitectura de las Partes 1-4, no un selector de
// botones. Bifurca temprano (Descubrir Hojaldito / Ya sé qué quiero), cuenta la historia
// del problema → solución → producto → diferenciador → cada ruta, y cierra con el
// selector de intención — la demostración explícita de "no tienes que saber qué
// necesitas, te ayudamos a encontrarlo".
export default function Home() {
  const router = useRouter();
  const { dispatch } = useExperience();
  const producto = PRODUCTOS[0];

  function choose(value: string) {
    trackEvent("home_choice", { value });
    if (value === "comprar") {
      dispatch({ type: "SET_ENTRY_CONTEXT", payload: { intent: "comprar" } });
      router.push("/comprar");
      return;
    }
    if (value === "vender") {
      dispatch({ type: "SET_ENTRY_CONTEXT", payload: { intent: "vender", role: "negocio" } });
      router.push("/vender");
      return;
    }
    if (value === "socio") {
      dispatch({ type: "SET_ENTRY_CONTEXT", payload: { intent: "socio", role: "socio" } });
      router.push("/socio-ganador");
      return;
    }
    dispatch({ type: "SET_ENTRY_CONTEXT", payload: { intent: "soporte" } });
    router.push("/postcompra");
  }

  return (
    <>
      {/* ============ 1. HERO — bifurcación ============ */}
      <section className="border-b border-line bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3">
              <span className="text-2xl">🥐</span>
              <span className="text-sm font-bold uppercase tracking-wider text-accent">HOJALDITO®</span>
            </div>
          </div>
          <h1 className="title-serif mb-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
            Hojaldre congelado premium, pensado para hacer crecer tu negocio
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl">
            Vendemos, ayudamos a vender y ayudamos a recomendar. Tú eliges cómo quieres ganar con Hojaldito®.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#descubrir"
              className="rounded-[13px] border border-ink px-8 py-4 text-lg font-bold text-ink transition hover:-translate-y-0.5"
            >
              🔎 Descubrir Hojaldito
            </a>
            <a
              href="#elegir"
              className="rounded-[13px] bg-ink px-8 py-4 text-lg font-bold text-paper shadow-md transition hover:-translate-y-0.5"
            >
              ⚡ Ya sé qué quiero
            </a>
          </div>
        </div>
      </section>

      {/* ============ 2. EL PROBLEMA ============ */}
      <section id="descubrir" className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="title-serif mb-3 text-center text-3xl font-bold text-ink md:text-4xl">
            El problema que resolvemos
          </h2>
          <p className="mb-10 text-center text-muted">Muchos negocios de comida pierden dinero sin darse cuenta:</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROBLEMA_ITEMS.map((item) => (
              <div key={item.text} className="flex items-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-5">
                <span className="text-2xl">{item.icon}</span>
                <p className="font-semibold text-ink">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-ink p-5 text-center font-bold text-paper">
            El resultado: rotación lenta y baja rentabilidad.
          </p>
        </div>
      </section>

      {/* ============ 3. LA SOLUCIÓN ============ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="title-serif mb-3 text-center text-3xl font-bold text-ink md:text-4xl">
            Hojaldre congelado, listo para hornear
          </h2>
          <p className="mb-10 text-center text-muted">Hojaldito te da control total: horneas solo lo que se vende.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SOLUCION_ITEMS.map((item) => (
              <div key={item.text} className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-5">
                <span className="text-2xl">{item.icon}</span>
                <p className="font-semibold text-ink">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-accent p-5 text-center text-lg font-bold text-paper shadow-md">
            Más control = más utilidad.
          </p>
        </div>
      </section>

      {/* ============ 4. EL PRODUCTO ============ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="title-serif mb-8 text-3xl font-bold text-ink md:text-4xl">El producto</h2>
          <div className="rounded-3xl border border-line bg-cream p-10">
            <div className="mb-4 text-7xl">🥐</div>
            <h3 className="title-serif mb-3 text-2xl font-bold text-ink">{producto.nombre}</h3>
            <p className="mx-auto max-w-xl text-muted">{producto.descripcion}</p>
          </div>
        </div>
      </section>

      {/* ============ 5. POR QUÉ SOMOS DIFERENTES ============ */}
      <section className="bg-ink py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="title-serif mb-4 text-3xl font-bold text-paper md:text-4xl">
            No somos un proveedor.
            <span className="block">Somos un impulso para tu negocio.</span>
          </h2>
          <p className="text-lg text-cream/80">
            Te ayudamos a vender más, atraer clientes y mejorar tu vitrina. Los pasteles son el vehículo — lo que
            logras es real.
          </p>
        </div>
      </section>

      {/* ============ 6. CÓMO FUNCIONA PARA TU NEGOCIO ============ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="title-serif mb-10 text-center text-3xl font-bold text-ink md:text-4xl">
            ¿Cómo funciona para tu negocio?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {COMO_FUNCIONA_STEPS.map((step) => (
              <div key={step.label} className="rounded-3xl border border-line bg-cream p-6">
                <div className="mb-4 text-4xl">{step.icon}</div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">{step.label}</p>
                <h3 className="title-serif mb-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="text-sm text-muted">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => choose("vender")}
              className="rounded-[13px] bg-ink px-8 py-4 text-lg font-bold text-paper shadow-md transition hover:-translate-y-0.5"
            >
              Quiero vender Hojaldito en mi negocio →
            </button>
          </div>
        </div>
      </section>

      {/* ============ 7. SOCIO GANADOR ============ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-line bg-paper px-5 py-2 text-xs font-bold uppercase tracking-wider text-accent">
            Programa exclusivo
          </span>
          <h2 className="title-serif mb-4 text-3xl font-bold text-ink md:text-4xl">
            ¿Prefieres ganar sin vender producto?
          </h2>
          <p className="mb-8 text-lg text-muted">
            Como Socio Ganador recomiendas negocios a Hojaldito y recibes una bonificación cada semana por lo que
            compren y vendan. No manejas producto, no haces entregas ni cobros.
          </p>
          <button
            onClick={() => choose("socio")}
            className="rounded-[13px] bg-ink px-8 py-4 text-lg font-bold text-paper shadow-md transition hover:-translate-y-0.5"
          >
            Quiero ser Socio Ganador →
          </button>
        </div>
      </section>

      {/* ============ 8. ¿ES PARA TI? (COMPRA) ============ */}
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="title-serif mb-3 text-2xl font-bold text-ink md:text-3xl">¿Solo quieres probarlo?</h2>
          <p className="mb-6 text-muted">También puedes pedir Hojaldito para ti o para compartir.</p>
          <button
            onClick={() => choose("comprar")}
            className="rounded-[13px] border border-ink px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5"
          >
            Quiero comprar Hojaldito →
          </button>
        </div>
      </section>

      {/* ============ 9. CONFIANZA ============ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="title-serif mb-10 text-center text-3xl font-bold text-ink md:text-4xl">¿Por qué Hojaldito®?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CONFIANZA_ITEMS.map((item) => (
              <div key={item.title} className="rounded-3xl border border-line bg-paper p-6 text-center">
                <div className="mb-3 text-4xl">{item.icon}</div>
                <h3 className="title-serif mb-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. SELECTOR DE INTENCIÓN ============ */}
      <section id="elegir" className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="title-serif mb-4 text-center text-4xl font-bold leading-tight text-paper md:text-5xl">
            ¿Qué necesitas hoy?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-cream/80 md:text-xl">
            No tienes que saber cuál Hojaldito elegir. Te ayudamos a encontrarlo.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {MAIN_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => choose(opt.value)}
                className="group rounded-3xl border border-line bg-paper p-6 text-left shadow-md transition hover:-translate-y-1 hover:border-accent md:p-8"
              >
                <div className="mb-3 text-5xl">{opt.icon}</div>
                <h3 className="title-serif mb-2 text-xl font-bold text-ink md:text-2xl">{opt.label}</h3>
                <p className="text-sm text-muted md:text-base">{opt.hint}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent">
                  Ver cómo funciona <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="#descubrir" className="text-sm font-semibold text-cream/80 hover:text-paper">
              No sé, quiero conocer más
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
