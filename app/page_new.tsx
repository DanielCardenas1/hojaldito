import Link from "next/link";

export default function Home() {
  const whatsappLink = "https://wa.me/573000000000?text=Hola%2C%20quiero%20más%20info%20de%20Punto%20Pastelero"; // cámbialo por tu número

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50/30">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-orange-200">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-100" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full border-2 border-orange-400 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Punto Pastelero®
            </span>

            <h1 className="text-3xl font-bold leading-tight md:text-5xl text-gray-900">
              Visibilidad real para negocios de comida,
              <span className="block text-orange-500">
                sin gastar en publicidad.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-gray-700 md:text-base">
              Punto Pastelero es un <strong>grupo cerrado de hasta 20 negocios</strong>
              —cafeterías, pastelerías y restaurantes— que se recomiendan entre sí
              con una estrategia de minis degustación y embudos digitales.
              Aumentas flujo de clientes sin pagar campañas ni anuncios.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={whatsappLink}
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                Quiero unirme al grupo
              </Link>
              <a
                href="#como-funciona"
                className="rounded-full border-2 border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition hover:border-orange-600 hover:text-white hover:bg-orange-600"
              >
                Ver cómo funciona
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 md:text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Más visibilidad sin riesgo
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <span>Máximo 20 negocios por zona</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-3xl border-2 border-orange-200 bg-white p-5 shadow-2xl shadow-orange-300/20">
              <div className="mb-3 flex items-center justify-between text-xs text-gray-600">
                <span className="font-semibold">Ejemplo de mini degustación</span>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-semibold text-orange-600">
                  Bajo costo / Alto impacto
                </span>
              </div>
              <div className="flex gap-4">
                <div className="h-20 w-20 flex-none rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg" />
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-gray-900">
                    Mini pastel de cortesía 🎁
                  </p>
                  <p className="text-xs text-gray-700">
                    El cliente pide su bebida favorita y recibe un mini gratis.
                    Prueba tu producto sin riesgo y recuerda tu marca.
                  </p>
                  <p className="text-[11px] font-semibold text-orange-600">
                    Gasto bajo para ti, experiencia inolvidable para el cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section
        id="como-funciona"
        className="mx-auto max-w-6xl px-6 py-14 md:py-20"
      >
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-2xl font-bold md:text-3xl text-gray-900">
            ¿Qué es Punto Pastelero y cómo funciona?
          </h2>
          <p className="text-sm text-gray-700 md:text-base">
            No somos una agencia de publicidad. No vendemos anuncios.
            Somos un sistema de <strong className="text-orange-600">visibilidad compartida</strong> que conecta
            negocios de comida entre sí para que ganen clientes de forma natural.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
            <p className="text-xs font-bold text-orange-600 mb-2">PASO 1</p>
            <h3 className="mb-2 text-sm font-bold text-gray-900">
              El cliente llega a tu negocio
            </h3>
            <p className="text-xs text-gray-700">
              Entra por su bebida, combo o producto estrella. Tú sigues vendiendo
              como siempre, sin campañas adicionales.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
            <p className="text-xs font-bold text-orange-600 mb-2">PASO 2</p>
            <h3 className="mb-2 text-sm font-bold text-gray-900">
              Recibe un mini gratis
            </h3>
            <p className="text-xs text-gray-700">
              Le entregas un mini degustación: bajo costo para ti, alto impacto
              emocional para el cliente. Se queda con tu marca en mente.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
            <p className="text-xs font-bold text-orange-600 mb-2">PASO 3</p>
            <h3 className="mb-2 text-sm font-bold text-gray-900">
              Visibilidad del grupo
            </h3>
            <p className="text-xs text-gray-700">
              Trabajamos con un grupo cerrado de hasta 20 negocios. Tus minis y
              tu marca se integran en una estrategia conjunta de visibilidad.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md hover:shadow-xl transition-shadow">
            <p className="text-xs font-bold text-orange-600 mb-2">PASO 4</p>
            <h3 className="mb-2 text-sm font-bold text-gray-900">
              Embudos y seguimiento
            </h3>
            <p className="text-xs text-gray-700">
              Usamos embudos, mensajes y cierres por WhatsApp para que los clientes
              prueben, vuelvan y recomienden sin que tú tengas que aprender marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué funciona */}
      <section className="border-y border-orange-200 bg-orange-50/30">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[2fr,3fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold md:text-3xl text-gray-900">
                ¿Por qué funciona mejor que pagar publicidad tradicional?
              </h2>
              <p className="text-sm text-gray-700 md:text-base">
                La mayoría de negocios gasta en anuncios que no sabe medir.
                Aquí la ecuación es distinta: <strong className="text-orange-600">no compras publicidad</strong>,
                compras visibilidad estructurada y prueba real de producto.
              </p>
              <p className="text-sm text-gray-700 md:text-base">
                Nuestro enfoque combina <strong className="text-orange-600">degustación inteligente</strong>,
                <strong className="text-orange-600"> comunidad cerrada</strong> y <strong className="text-orange-600">embudos digitales</strong>,
                para que cada cliente que llega tenga más motivos para volver.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md">
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  Bajo riesgo, alta rotación
                </h3>
                <p className="text-xs text-gray-700">
                  No necesitas grandes presupuestos. Los minis tienen un costo
                  controlado y se integran en una estrategia medible.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md">
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  No eres un anuncio más
                </h3>
                <p className="text-xs text-gray-700">
                  Tus productos llegan a través de experiencias, no de banners.
                  Eso genera recuerdo, fotos, historias y recomendaciones.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md">
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  Comunidad, no competencia
                </h3>
                <p className="text-xs text-gray-700">
                  Máximo 20 negocios por grupo. Diseñamos el ecosistema para que
                  todos ganen visibilidad, no para que compitan por clics.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-orange-200 bg-white p-5 shadow-md">
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  Embudos ya probados
                </h3>
                <p className="text-xs text-gray-700">
                  Usamos secuencias y cierres por WhatsApp pensados para negocios
                  de comida. No tienes que inventar nada: solo activas y mides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membresía / CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[3fr,2fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold md:text-3xl text-gray-900">
              Membresía Punto Pastelero
            </h2>
            <p className="text-sm text-gray-700 md:text-base">
              Trabajamos por grupos cerrados. Cuando se llenan los 20 cupos de una zona,
              se cierra el acceso para mantener la calidad del ecosistema.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Acceso al grupo cerrado de hasta 20 negocios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Diseño de estrategia de minis degustación</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Embudos y scripts de cierre por WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Material visual y mensajes listos para usar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Acompañamiento y ajustes según resultados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Reportes de visibilidad y flujo</span>
              </li>
            </ul>
            <p className="pt-2 text-sm font-semibold text-orange-600">
              Modelo sin riesgo: no inviertes en anuncios. Activamos visibilidad
              usando lo que ya vendes y minis estratégicos.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={whatsappLink}
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                Quiero aplicar a un cupo
              </Link>
              <a
                href="#faq"
                className="rounded-full border-2 border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition hover:border-orange-600 hover:text-white hover:bg-orange-600"
              >
                Ver dudas frecuentes
              </a>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-white p-6 shadow-xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Cupos limitados
            </p>
            <h3 className="mb-3 text-base font-bold text-gray-900">
              ¿Este modelo es para tu negocio?
            </h3>
            <p className="mb-3 text-sm text-gray-700">
              Ideal para cafeterías, panaderías, pastelerías, heladerías y restaurantes
              que ya venden a diario pero necesitan:
            </p>
            <ul className="mb-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Más flujo de personas en horas valle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Mayor rotación de vitrina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Clientes que vuelvan y recomienden</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Visibilidad sin quemar presupuesto en anuncios</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600">
              Si estás arrancando con 1 o 2 negocios, también podemos usar este modelo
              como piloto y escalarlo contigo.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-t border-orange-200 bg-orange-50/20"
      >
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl text-gray-900">
            Preguntas frecuentes
          </h2>
          <div className="space-y-6 text-sm">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-5 shadow-md">
              <p className="font-bold text-gray-900 mb-2">
                ¿Punto Pastelero es una agencia de publicidad?
              </p>
              <p className="text-gray-700">
                No. No gestionamos campañas ni anuncios. Diseñamos un ecosistema de
                visibilidad compartida y embudos para que tus productos se vendan
                más y mejor usando lo que ya tienes.
              </p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-5 shadow-md">
              <p className="font-bold text-gray-900 mb-2">
                ¿Tengo que pagar anuncios adicionales?
              </p>
              <p className="text-gray-700">
                No es obligatorio. El modelo está pensado para funcionar incluso
                sin ads, usando minis, comunidad y mensajes estructurados. Si más
                adelante quieres sumar anuncios, se pueden integrar.
              </p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-5 shadow-md">
              <p className="font-bold text-gray-900 mb-2">
                ¿Qué pasa si ya tengo poca clientela?
              </p>
              <p className="text-gray-700">
                El modelo ayuda a aumentar visibilidad y prueba de producto, pero
                requiere que haya al menos un flujo mínimo diario. Si estás muy
                en cero, podemos usar Punto Pastelero como piloto y adaptarlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-orange-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-gray-600 md:flex-row">
          <span>© {new Date().getFullYear()} Punto Pastelero®. Todos los derechos reservados.</span>
          <span className="text-center">Hecho para negocios de comida que quieren crecer sin quemar su presupuesto.</span>
        </div>
      </footer>
    </main>
  );
}
