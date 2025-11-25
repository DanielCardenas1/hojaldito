"use client";
import { useState } from "react";

type SelectedOption = null | "distribuidor" | "negocio";

export default function HojalditoLanding() {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
  
  // Estado para formulario de redistribuidor
  const [formDistribuidor, setFormDistribuidor] = useState({
    nombre: "",
    ciudad: "",
    telefono: "",
    negocios: "",
  });
  
  // Estado para formulario de negocio
  const [formNegocio, setFormNegocio] = useState({
    nombre: "",
    tipoNegocio: "",
    ubicacion: "",
    telefono: "",
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  // Número de WhatsApp de Hojaldito (cambiar por el real)
  const whatsappNumber = "573000000000";

  const handleDistribuidorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mensaje = `¡Hola! Quiero ser Redistribuidor Oficial Hojaldito®
    
📋 Mis datos:
• Nombre: ${formDistribuidor.nombre}
• Ciudad: ${formDistribuidor.ciudad}
• Teléfono: ${formDistribuidor.telefono}
• Negocios en mente: ${formDistribuidor.negocios || "Por definir"}

Estoy interesado en conocer más sobre el programa.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
    setShowSuccess(true);
    
    setTimeout(() => {
      setFormDistribuidor({ nombre: "", ciudad: "", telefono: "", negocios: "" });
      setShowSuccess(false);
    }, 3000);
  };

  const handleNegocioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mensaje = `¡Hola! Quiero vender pasteles Hojaldito® en mi negocio
    
📋 Mis datos:
• Nombre: ${formNegocio.nombre}
• Tipo de negocio: ${formNegocio.tipoNegocio}
• Ubicación: ${formNegocio.ubicacion}
• Teléfono: ${formNegocio.telefono}

Quiero conocer más sobre cómo comprar pastelería.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
    setShowSuccess(true);
    
    setTimeout(() => {
      setFormNegocio({ nombre: "", tipoNegocio: "", ubicacion: "", telefono: "" });
      setShowSuccess(false);
    }, 3000);
  };

  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* ========================================
          SECCIÓN INICIAL - SELECTOR DE CAMINO
      ======================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 py-20 md:py-32">
        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Logo/Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <span className="text-2xl">🥐</span>
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Hojaldito®
              </span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="mb-6 text-center text-4xl font-black leading-tight text-white md:text-6xl">
            ¿Cómo quieres ganar con Hojaldito®?
          </h1>

          {/* Subtítulo */}
          <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-amber-50 md:text-2xl">
            Elige tu camino y te mostramos solo la información que necesitas.
          </p>

          {/* Dos tarjetas de selección */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* TARJETA 1: Distribuidor */}
            <div className={`group relative overflow-hidden rounded-3xl border-4 bg-white p-8 shadow-2xl transition-all hover:scale-105 hover:border-white hover:shadow-amber-900/50 md:p-10 ${
              selectedOption === "distribuidor" ? "border-amber-500 ring-4 ring-amber-300" : "border-white/20"
            }`}>
              <div className="mb-6 text-center">
                <div className="mb-4 text-6xl">💼</div>
                <h2 className="mb-4 text-3xl font-black text-gray-900">
                  Quiero ser redistribuidor
                </h2>
                <p className="text-lg text-gray-700">
                  Recomiendo negocios y gano comisión cada semana sin invertir ni manejar producto.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedOption("distribuidor");
                  setTimeout(scrollToContent, 100);
                }}
                className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:from-amber-600 hover:to-orange-600 hover:shadow-xl"
              >
                Quiero ser redistribuidor →
              </button>
            </div>

            {/* TARJETA 2: Negocio */}
            <div className={`group relative overflow-hidden rounded-3xl border-4 bg-white p-8 shadow-2xl transition-all hover:scale-105 hover:border-white hover:shadow-amber-900/50 md:p-10 ${
              selectedOption === "negocio" ? "border-blue-500 ring-4 ring-blue-300" : "border-white/20"
            }`}>
              <div className="mb-6 text-center">
                <div className="mb-4 text-6xl">🏪</div>
                <h2 className="mb-4 text-3xl font-black text-gray-900">
                  Quiero vender pasteles en mi negocio
                </h2>
                <p className="text-lg text-gray-700">
                  Soy cafetería, tienda, restaurante o panadería y quiero ganar más vendiendo Hojalditos.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedOption("negocio");
                  setTimeout(scrollToContent, 100);
                }}
                className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl"
              >
                Quiero comprar pastelería →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CONTENIDO DINÁMICO SEGÚN SELECCIÓN
      ======================================== */}
      <div id="content">
        {/* FUNNEL PARA REDISTRIBUIDORES */}
        {selectedOption === "distribuidor" && (
          <>
            {/* Cómo funciona - Redistribuidor */}
            <section className="bg-white py-20">
              <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                  <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-amber-700">
                    Simple y rentable
                  </span>
                  <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-5xl">
                    ¿Cómo funciona?
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Tres pasos para empezar a generar ingresos extra cada semana
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  {/* Paso 1 */}
                  <div className="rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                      🏪
                    </div>
                    <div className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                      PASO 1
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      Recomiendas un negocio
                    </h3>
                    <p className="text-gray-700">
                      Conoces una cafetería, tienda, restaurante o panadería que podría vender nuestros pasteles. Los conectas con nosotros.
                    </p>
                  </div>

                  {/* Paso 2 */}
                  <div className="rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                      🤝
                    </div>
                    <div className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                      PASO 2
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      Hojaldito hace todo
                    </h3>
                    <p className="text-gray-700">
                      Nosotros visitamos el negocio, cerramos la venta, entregamos los pasteles y damos seguimiento. Tú no mueves un dedo.
                    </p>
                  </div>

                  {/* Paso 3 */}
                  <div className="rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                      💰
                    </div>
                    <div className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                      PASO 3
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      Ganas cada semana
                    </h3>
                    <p className="text-gray-700">
                      Cada vez que el negocio que trajiste vende pasteles, tú recibes una bonificación. Ingresos recurrentes sin esfuerzo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Beneficios Redistribuidor */}
            <section className="border-y-4 border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100 py-20">
              <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                  <h2 className="mb-6 text-3xl font-black text-gray-900 md:text-5xl">
                    Beneficios de ser redistribuidor 💼
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">✅</div>
                    <div>
                      <h4 className="mb-1 font-bold text-gray-900">No inviertes ni un peso</h4>
                      <p className="text-sm text-gray-600">Sin comprar producto, sin bodegas, sin riesgo financiero.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">🚗</div>
                    <div>
                      <h4 className="mb-1 font-bold text-gray-900">No haces domicilios</h4>
                      <p className="text-sm text-gray-600">Nosotros nos encargamos de toda la logística y entregas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-2xl">📦</div>
                    <div>
                      <h4 className="mb-1 font-bold text-gray-900">Sin inventario</h4>
                      <p className="text-sm text-gray-600">No manejas producto congelado ni espacio de almacenamiento.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">💵</div>
                    <div>
                      <h4 className="mb-1 font-bold text-gray-900">Ingresos semanales</h4>
                      <p className="text-sm text-gray-600">Bonificaciones recurrentes mientras el negocio siga activo.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-2xl">🔥</div>
                    <div>
                      <h4 className="mb-1 font-bold text-gray-900">Bonificación alta inicial</h4>
                      <p className="text-sm text-gray-600">Por apertura de mercado: gana más en tus primeros meses.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">📈</div>
                    <div>
                      <h4 className="mb-1 font-bold text-gray-900">Crece a líder de zona</h4>
                      <p className="text-sm text-gray-600">Si traes varios negocios, puedes escalar a mayores ingresos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Redistribuidor */}
            <section className="bg-gray-50 py-20">
              <div className="mx-auto max-w-4xl px-6">
                <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-4xl">
                  Preguntas frecuentes
                </h2>

                <div className="space-y-4">
                  <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
                    <summary className="cursor-pointer list-none font-bold text-gray-900">
                      <div className="flex items-center justify-between">
                        <span className="text-lg">¿Tengo que invertir dinero?</span>
                        <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                      </div>
                    </summary>
                    <p className="mt-4 text-gray-700">
                      <strong>No.</strong> No compras producto, no tienes que almacenar nada, no pagas por ser redistribuidor.
                    </p>
                  </details>

                  <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
                    <summary className="cursor-pointer list-none font-bold text-gray-900">
                      <div className="flex items-center justify-between">
                        <span className="text-lg">¿Cómo gano dinero exactamente?</span>
                        <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                      </div>
                    </summary>
                    <p className="mt-4 text-gray-700">
                      Refieres negocios. Si el negocio compra semanalmente, ganas una bonificación por cada pastel vendido.
                    </p>
                  </details>
                </div>
              </div>
            </section>

            {/* Formulario Redistribuidor */}
            <section className="border-t-4 border-amber-500 bg-gradient-to-br from-amber-600 to-orange-600 py-20">
              <div className="mx-auto max-w-2xl px-6">
                <div className="mb-12 text-center text-white">
                  <h2 className="mb-4 text-3xl font-black md:text-5xl">
                    Aplica como Redistribuidor
                  </h2>
                  <p className="text-xl text-amber-100">
                    Llena el formulario y nos comunicaremos contigo por WhatsApp
                  </p>
                </div>

                <form onSubmit={handleDistribuidorSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-2xl md:p-10">
                  <div>
                    <label htmlFor="nombre" className="mb-2 block text-sm font-bold text-gray-700">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formDistribuidor.nombre}
                      onChange={(e) => setFormDistribuidor({ ...formDistribuidor, nombre: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="ciudad" className="mb-2 block text-sm font-bold text-gray-700">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      required
                      value={formDistribuidor.ciudad}
                      onChange={(e) => setFormDistribuidor({ ...formDistribuidor, ciudad: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none"
                      placeholder="Tunja"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono-dist" className="mb-2 block text-sm font-bold text-gray-700">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono-dist"
                      required
                      value={formDistribuidor.telefono}
                      onChange={(e) => setFormDistribuidor({ ...formDistribuidor, telefono: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none"
                      placeholder="3001234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="negocios" className="mb-2 block text-sm font-bold text-gray-700">
                      ¿Tienes negocios en mente?
                    </label>
                    <textarea
                      id="negocios"
                      rows={4}
                      value={formDistribuidor.negocios}
                      onChange={(e) => setFormDistribuidor({ ...formDistribuidor, negocios: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none"
                      placeholder="Ej: 2 cafeterías en el centro..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-5 text-lg font-black text-white shadow-2xl transition hover:from-amber-600 hover:to-orange-600"
                  >
                    📱 Quiero aplicar como redistribuidor
                  </button>

                  {showSuccess && (
                    <div className="rounded-2xl bg-green-100 p-6 text-center">
                      <p className="text-lg font-bold text-green-800">
                        ✅ ¡Gracias! Te hemos redirigido a WhatsApp
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </section>
          </>
        )}

        {/* FUNNEL PARA NEGOCIOS */}
        {selectedOption === "negocio" && (
          <>
            {/* Hero interno para negocios */}
            <section className="bg-gradient-to-br from-blue-500 to-indigo-600 py-20 text-white">
              <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className="mb-6 text-4xl font-black md:text-6xl">
                  Gana más vendiendo pasteles frescos
                </h2>
                <p className="mb-8 text-xl md:text-2xl">
                  Sin invertir ni arriesgar tu dinero
                </p>
                <div className="text-6xl">🥐☕🍰</div>
              </div>
            </section>

            {/* Cómo funciona - Negocios */}
            <section className="bg-white py-20">
              <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                  <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-5xl">
                    ¿Cómo funciona?
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Tres pasos para empezar a vender pasteles en tu negocio
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-lg">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-4xl shadow-lg">
                      📦
                    </div>
                    <div className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                      PASO 1
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      Pides tu muestra o primer combo
                    </h3>
                    <p className="text-gray-700">
                      Te llevamos pasteles para probar en tu negocio. Sin compromiso.
                    </p>
                  </div>

                  <div className="rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-lg">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-4xl shadow-lg">
                      🪟
                    </div>
                    <div className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                      PASO 2
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      Los vendes en tu vitrina
                    </h3>
                    <p className="text-gray-700">
                      Te enseñamos a exhibirlos para máxima rotación y ventas.
                    </p>
                  </div>

                  <div className="rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-lg">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-4xl shadow-lg">
                      💵
                    </div>
                    <div className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                      PASO 3
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      Compras solo lo que mueves
                    </h3>
                    <p className="text-gray-700">
                      Sin merma ni inversión grande. Pides según tu demanda.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ganancias */}
            <section className="border-y-4 border-blue-300 bg-gradient-to-br from-blue-100 to-indigo-100 py-20">
              <div className="mx-auto max-w-4xl px-6">
                <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
                  Tus ganancias 💰
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                    <p className="mb-2 text-4xl font-black text-blue-600">$1.250</p>
                    <p className="text-sm text-gray-600">Costo por pastel</p>
                  </div>

                  <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                    <p className="mb-2 text-4xl font-black text-indigo-600">$2.000-$3.000</p>
                    <p className="text-sm text-gray-600">Venta sugerida</p>
                  </div>

                  <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                    <p className="mb-2 text-4xl font-black text-green-600">$750-$1.750</p>
                    <p className="text-sm text-gray-600">Ganancia por pastel</p>
                  </div>
                </div>

                <div className="mt-12 rounded-3xl border-2 border-blue-300 bg-white p-8 shadow-lg">
                  <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">
                    Estrategia pastelera 📊
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">🎯</span>
                      <span><strong>Exhibición:</strong> Vitrinas a la vista, cerca de la caja.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">☕</span>
                      <span><strong>Combos:</strong> Café + pastel = venta cruzada perfecta.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">⏰</span>
                      <span><strong>Horas valle:</strong> Impulsa ventas en momentos lentos.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Negocios */}
            <section className="bg-gray-50 py-20">
              <div className="mx-auto max-w-4xl px-6">
                <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-4xl">
                  Preguntas frecuentes
                </h2>

                <div className="space-y-4">
                  <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
                    <summary className="cursor-pointer list-none font-bold text-gray-900">
                      <div className="flex items-center justify-between">
                        <span className="text-lg">¿Cuánto tengo que comprar al inicio?</span>
                        <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                      </div>
                    </summary>
                    <p className="mt-4 text-gray-700">
                      Puedes empezar con una muestra o un combo pequeño. No hay pedido mínimo obligatorio.
                    </p>
                  </details>

                  <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
                    <summary className="cursor-pointer list-none font-bold text-gray-900">
                      <div className="flex items-center justify-between">
                        <span className="text-lg">¿Ustedes hacen las entregas?</span>
                        <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                      </div>
                    </summary>
                    <p className="mt-4 text-gray-700">
                      Sí. Entregamos en tu negocio, sin costo adicional en Tunja y municipios cercanos.
                    </p>
                  </details>

                  <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
                    <summary className="cursor-pointer list-none font-bold text-gray-900">
                      <div className="flex items-center justify-between">
                        <span className="text-lg">¿Qué pasa si no vendo todo?</span>
                        <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                      </div>
                    </summary>
                    <p className="mt-4 text-gray-700">
                      Los pasteles congelados duran meses. Además, te enseñamos estrategias para rotación rápida.
                    </p>
                  </details>
                </div>
              </div>
            </section>

            {/* Formulario Negocios */}
            <section className="border-t-4 border-blue-500 bg-gradient-to-br from-blue-600 to-indigo-600 py-20">
              <div className="mx-auto max-w-2xl px-6">
                <div className="mb-12 text-center text-white">
                  <h2 className="mb-4 text-3xl font-black md:text-5xl">
                    Solicita tu muestra
                  </h2>
                  <p className="text-xl text-blue-100">
                    Llena el formulario y te contactaremos por WhatsApp
                  </p>
                </div>

                <form onSubmit={handleNegocioSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-2xl md:p-10">
                  <div>
                    <label htmlFor="nombre-neg" className="mb-2 block text-sm font-bold text-gray-700">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre-neg"
                      required
                      value={formNegocio.nombre}
                      onChange={(e) => setFormNegocio({ ...formNegocio, nombre: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none"
                      placeholder="María González"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipo-negocio" className="mb-2 block text-sm font-bold text-gray-700">
                      Tipo de negocio *
                    </label>
                    <select
                      id="tipo-negocio"
                      required
                      value={formNegocio.tipoNegocio}
                      onChange={(e) => setFormNegocio({ ...formNegocio, tipoNegocio: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Selecciona...</option>
                      <option value="Cafetería">Cafetería</option>
                      <option value="Tienda">Tienda</option>
                      <option value="Restaurante">Restaurante</option>
                      <option value="Panadería">Panadería</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="ubicacion" className="mb-2 block text-sm font-bold text-gray-700">
                      Ubicación *
                    </label>
                    <input
                      type="text"
                      id="ubicacion"
                      required
                      value={formNegocio.ubicacion}
                      onChange={(e) => setFormNegocio({ ...formNegocio, ubicacion: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none"
                      placeholder="Tunja, Centro"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono-neg" className="mb-2 block text-sm font-bold text-gray-700">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono-neg"
                      required
                      value={formNegocio.telefono}
                      onChange={(e) => setFormNegocio({ ...formNegocio, telefono: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none"
                      placeholder="3001234567"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-5 text-lg font-black text-white shadow-2xl transition hover:from-blue-600 hover:to-indigo-600"
                  >
                    📱 Quiero recibir mi muestra
                  </button>

                  {showSuccess && (
                    <div className="rounded-2xl bg-green-100 p-6 text-center">
                      <p className="text-lg font-bold text-green-800">
                        ✅ ¡Gracias! Te hemos redirigido a WhatsApp
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </section>
          </>
        )}
      </div>

      {/* ========================================
          FOOTER
      ======================================== */}
      <footer className="border-t-2 border-amber-200 bg-amber-50 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="mb-2 text-2xl font-black text-amber-700">
            Hojaldito®
          </h3>
          <p className="mb-6 text-gray-700">Tunja, Boyacá • Colombia</p>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Hojaldito® • Todos los derechos reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
