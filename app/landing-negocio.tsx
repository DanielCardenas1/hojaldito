"use client";
import { useState } from "react";

interface LandingNegocioProps {
  onBack?: () => void;
}

export default function LandingNegocio({ onBack }: LandingNegocioProps = {}) {
  const [formData, setFormData] = useState({
    nombre: "",
    nombreNegocio: "",
    tipoNegocio: "",
    direccion: "",
    ciudad: "",
    whatsapp: "",
    visitantes: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const mensaje = `¡Hola! Quiero vender Hojaldito® en mi negocio:\n\n` +
      `👤 Nombre: ${formData.nombre}\n` +
      `🏪 Negocio: ${formData.nombreNegocio}\n` +
      `📋 Tipo: ${formData.tipoNegocio}\n` +
      `📍 Dirección: ${formData.direccion}\n` +
      `🌆 Ciudad: ${formData.ciudad}\n` +
      `📱 WhatsApp: ${formData.whatsapp}\n` +
      `👥 Visitantes al día: ${formData.visitantes}`;
    
    // Número de WhatsApp de Hojaldito
    const whatsappNumber = "573508823968";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp
    window.open(url, "_blank");
    
    // Mostrar mensaje de éxito
    setShowSuccess(true);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setFormData({
        nombre: "",
        nombreNegocio: "",
        tipoNegocio: "",
        direccion: "",
        ciudad: "",
        whatsapp: "",
        visitantes: "",
      });
      setShowSuccess(false);
    }, 5000);
  };

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-neutral-50 to-amber-50">
      {/* Botón flotante para volver */}
      {onBack && (
        <button
          onClick={onBack}
          className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-lg transition hover:bg-gray-100"
        >
          <span>←</span> Volver
        </button>
      )}

      {/* ========================================
          1. HERO - Sección principal
      ======================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 py-20 md:py-32">
        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <span className="text-2xl">🥐</span>
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Hojaldito® para negocios
              </span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="mb-6 text-center text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Haz que tu negocio venda más
            <span className="block text-amber-100">sin invertir en publicidad</span>
            <span className="block">ni arriesgar tu dinero</span>
          </h1>

          {/* Subtítulo */}
          <p className="mx-auto mb-10 max-w-3xl text-center text-xl text-amber-50 md:text-2xl">
            Nosotros te ayudamos a aumentar clientes, rotación y ventas.
            <br />
            <strong className="text-white">Los pasteles solo son el vehículo.</strong>
          </p>

          {/* CTA principal */}
          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="group relative overflow-hidden rounded-full bg-white px-10 py-6 text-xl font-black text-amber-600 shadow-2xl transition-all hover:scale-105 hover:shadow-amber-900/50 md:px-12 md:text-2xl"
            >
              <span className="relative z-10">🚀 Quiero que mi negocio crezca</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-amber-100 to-yellow-100 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>

          {/* Escasez */}
          <p className="mt-8 text-center text-sm font-semibold text-amber-100">
            Cupos limitados por zona — Tunja y municipios cercanos
          </p>
        </div>
      </section>

      {/* ========================================
          2. SUB-HERO - Diferenciación
      ======================================== */}
      <section className="border-b-4 border-amber-300 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-black text-gray-900 md:text-5xl">
            No somos un proveedor.
            <span className="block text-amber-600">Somos un impulso para tu negocio.</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
            Te ayudamos a vender más, atraer clientes y mejorar tu vitrina. 
            Lo que vendes es tuyo, lo que logras es real. 
            <strong className="text-amber-700"> Los pasteles… vienen después.</strong>
          </p>
        </div>
      </section>

      {/* ========================================
          3. PRIMER PASO IRRESISTIBLE - Prueba sin riesgo
      ======================================== */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border-4 border-green-400 bg-white p-8 shadow-2xl md:p-12">
            <h2 className="mb-8 text-center text-3xl font-black text-gray-900 md:text-5xl">
              Empieza sin arriesgar: prueba con 20 pasteles
              <span className="block text-green-600">sin pago por adelantado</span>
            </h2>

            <div className="mb-10 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-green-50 p-6 shadow-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-800">
                  <strong>Te llevamos 20 pasteles de prueba</strong> a tu negocio.
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-green-50 p-6 shadow-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-800">
                  <strong>Tú los exhibes o los horneas.</strong>
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-green-50 p-6 shadow-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-800">
                  <strong>Si se venden, tú ganas.</strong>
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-green-50 p-6 shadow-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-800">
                  <strong>Si no se venden, no pierdes dinero.</strong>
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-green-50 p-6 shadow-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                  ✓
                </span>
                <p className="text-lg text-gray-800">
                  <strong>Cero inversión, cero miedo, cero merma.</strong>
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-5 text-xl font-black text-white shadow-xl transition hover:from-green-600 hover:to-emerald-700"
              >
                Quiero mi primera prueba
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          4. CÓMO FUNCIONA - 3 pasos
      ======================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-3xl font-black text-gray-900 md:text-5xl">
            ¿Cómo funciona?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Paso 1 */}
            <div className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                📦
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Paso 1
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Te llevamos 20 pasteles para probar
              </h3>
              <p className="text-gray-700">
                Sin costo adelantado. Tú solo los pones en la vitrina u horno.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                🎯
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Paso 2
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Los vendes con nuestra Estrategia Pastelera™
              </h3>
              <p className="text-gray-700">
                Te enseñamos cómo exhibir, qué combos hacer con bebidas y cómo lograr que se vendan solos.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                💰
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Paso 3
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Compras solo lo que realmente mueves
              </h3>
              <p className="text-gray-700">
                Sin compromisos ni mínimos exagerados. Pides por WhatsApp lo que necesitas cada semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          5. BENEFICIO CENTRAL - Más negocio
      ======================================== */}
      <section className="border-y-4 border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            Esto no va de pasteles.
            <span className="block text-blue-600">Va de que tu negocio venda más.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">🚪</span>
              <p className="text-lg text-gray-800">
                <strong>Más clientes entrando</strong> a tu local.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">☕</span>
              <p className="text-lg text-gray-800">
                <strong>Más ventas de café,</strong> bebidas y onces.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">✨</span>
              <p className="text-lg text-gray-800">
                <strong>Mejor vitrina,</strong> más atractiva.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">🔄</span>
              <p className="text-lg text-gray-800">
                Un producto que ayuda a <strong>mover lo que ya vendes.</strong>
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md md:col-span-2">
              <span className="text-3xl">🤝</span>
              <p className="text-lg text-gray-800">
                <strong>Acompañamiento real</strong> para que no se quede nada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          6. PROGRAMA SOCIO PASTELERO®
      ======================================== */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
              Programa exclusivo
            </span>
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Si tu negocio se mueve,
              <span className="block text-amber-100">entras al programa Socio Pastelero®</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-amber-50">
              Los socios no solo venden pasteles. 
              <strong className="text-white"> Se convierten en puntos recomendados de la ciudad.</strong>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="font-bold">Sello oficial &ldquo;Socio Pastelero Hojaldito®&rdquo;</p>
                <p className="text-sm text-amber-100">Para tu vitrina</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="text-3xl">📱</span>
              <div>
                <p className="font-bold">Publicación mensual en nuestras redes</p>
                <p className="text-sm text-amber-100">Más visibilidad</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="text-3xl">🎨</span>
              <div>
                <p className="font-bold">Acceso a sabores exclusivos</p>
                <p className="text-sm text-amber-100">Solo para socios</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="text-3xl">🪧</span>
              <div>
                <p className="font-bold">Material de exhibición</p>
                <p className="text-sm text-amber-100">Carteles, stickers, ideas de combos</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="text-3xl">🚚</span>
              <div>
                <p className="font-bold">Prioridad en entregas</p>
                <p className="text-sm text-amber-100">Siempre a tiempo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <span className="text-3xl">💡</span>
              <div>
                <p className="font-bold">Tips de venta y rotación</p>
                <p className="text-sm text-amber-100">Cada semana</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:col-span-2 lg:col-span-3">
              <span className="text-3xl">🎉</span>
              <div>
                <p className="font-bold">Invitación al Día Pastelero™ en tu negocio</p>
                <p className="text-sm text-amber-100">Un día para impulsar ventas y generar contenido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          7. DÍA PASTELERO™
      ======================================== */}
      <section className="bg-gradient-to-br from-purple-100 to-pink-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border-4 border-purple-400 bg-white p-8 shadow-2xl md:p-12">
            <div className="mb-8 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                Estrategia viral
              </span>
              <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-5xl">
                Un día al mes,
                <span className="block text-purple-600">tu negocio es protagonista</span>
              </h2>
            </div>

            <p className="mb-8 text-center text-xl leading-relaxed text-gray-700">
              Organizamos un <strong className="text-purple-600">Día Pastelero™</strong> en tu local: 
              anunciamos tu negocio en redes, hacemos mini degustaciones estratégicas, 
              generamos contenido (fotos y videos) y te ayudamos a mover más clientes ese día.
            </p>

            <div className="rounded-2xl bg-purple-50 p-8 text-center">
              <p className="text-2xl font-bold text-gray-900">
                Tú sigues trabajando normal; 
                <span className="text-purple-600"> nosotros te impulsamos.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          8. POR QUÉ FUNCIONA EN BOYACÁ
      ======================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            Pensado para la realidad de
            <span className="block text-amber-600">Tunja y Boyacá</span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl text-white">
                ✓
              </span>
              <p className="text-lg text-gray-800">
                <strong>No tienes que invertir en publicidad.</strong>
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl text-white">
                ✓
              </span>
              <p className="text-lg text-gray-800">
                <strong>No te llenas de inventario</strong> que no rota.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl text-white">
                ✓
              </span>
              <p className="text-lg text-gray-800">
                <strong>No necesitas un horno industrial</strong> (sirve uno pequeño o vitrina).
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl text-white">
                ✓
              </span>
              <p className="text-lg text-gray-800">
                <strong>No arriesgas tu dinero al inicio.</strong>
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl text-white">
                ✓
              </span>
              <p className="text-lg text-gray-800">
                Trabajamos con la <strong>clientela que ya tienes</strong> y la hacemos crecer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          9. GANANCIAS - Números reales
      ======================================== */}
      <section className="border-y-4 border-green-400 bg-gradient-to-br from-green-100 to-emerald-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-center text-3xl font-black text-gray-900 md:text-5xl">
            ¿Y cuánto ganas tú?
          </h2>
          <p className="mb-12 text-center text-2xl text-gray-700">
            Nuestros pasteles son el motor, <strong className="text-green-600">tú te quedas con la ganancia.</strong>
          </p>

          <div className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <p className="mb-2 text-4xl font-black text-blue-600">$2.200</p>
              <p className="text-sm text-gray-600">Costo por pastel</p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <p className="mb-2 text-4xl font-black text-indigo-600">$3.000-$3.500</p>
              <p className="text-sm text-gray-600">Precio sugerido de venta</p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <p className="mb-2 text-4xl font-black text-green-600">$800-$1.300</p>
              <p className="text-sm text-gray-600">Ganancia por pastel</p>
            </div>
          </div>

          <div className="rounded-3xl border-4 border-green-500 bg-white p-8 shadow-2xl md:p-10">
            <p className="mb-2 text-center text-xl font-bold text-gray-900">📊 Ejemplo real:</p>
            <p className="text-center text-lg text-gray-700">
              Vendes <strong className="text-blue-600">50 pasteles al día</strong> = 
              <strong className="text-green-600"> $40.000 – $65.000</strong> de ganancia diaria
            </p>
            <p className="mt-4 text-center text-2xl font-black text-green-600">
              Más lo que ganas en café y bebidas por los combos 💰
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          10. TESTIMONIOS
      ======================================== */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            Negocios que ya lo están haciendo
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonio 1 */}
            <div className="rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
                <div>
                  <p className="font-bold text-gray-900">Café La Esquina</p>
                  <p className="text-sm text-gray-600">Tunja</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                &ldquo;Empezamos con 20 pasteles de prueba y terminamos pidiendo 60 semanales. 
                Vendemos más café y la vitrina se ve mucho mejor.&rdquo;
              </p>
              <div className="text-amber-500">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonio 2 */}
            <div className="rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
                <div>
                  <p className="font-bold text-gray-900">Tienda Mary&apos;s</p>
                  <p className="text-sm text-gray-600">Cómbita</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                &ldquo;El Día Pastelero nos llenó el negocio. Ahora la gente viene preguntando por los Hojaldtios.&rdquo;
              </p>
              <div className="text-amber-500">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonio 3 */}
            <div className="rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
                <div>
                  <p className="font-bold text-gray-900">Panadería El Trigal</p>
                  <p className="text-sm text-gray-600">Duitama</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                &ldquo;Sin arriesgar nada probamos los pasteles. Ahora son nuestro producto estrella en las tardes.&rdquo;
              </p>
              <div className="text-amber-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          11. CTA FINAL + FORMULARIO
      ======================================== */}
      <section id="formulario" className="border-t-4 border-amber-500 bg-gradient-to-br from-amber-600 to-orange-600 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              ¿Quieres probar sin arriesgar tu dinero?
            </h2>
            <p className="text-xl text-amber-100 md:text-2xl">
              Déjanos tus datos y coordinamos tu primera prueba con 20 pasteles en tu negocio.
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-2xl md:p-10">
            {/* Nombre completo */}
            <div>
              <label htmlFor="nombre" className="mb-2 block text-sm font-bold text-gray-700">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="María González"
              />
            </div>

            {/* Nombre del negocio */}
            <div>
              <label htmlFor="nombreNegocio" className="mb-2 block text-sm font-bold text-gray-700">
                Nombre del negocio *
              </label>
              <input
                type="text"
                id="nombreNegocio"
                required
                value={formData.nombreNegocio}
                onChange={(e) => setFormData({ ...formData, nombreNegocio: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Café La Esquina"
              />
            </div>

            {/* Tipo de negocio */}
            <div>
              <label htmlFor="tipoNegocio" className="mb-2 block text-sm font-bold text-gray-700">
                Tipo de negocio *
              </label>
              <select
                id="tipoNegocio"
                required
                value={formData.tipoNegocio}
                onChange={(e) => setFormData({ ...formData, tipoNegocio: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                <option value="">Selecciona...</option>
                <option value="Cafetería">Cafetería</option>
                <option value="Tienda">Tienda</option>
                <option value="Restaurante">Restaurante</option>
                <option value="Panadería">Panadería</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Dirección */}
            <div>
              <label htmlFor="direccion" className="mb-2 block text-sm font-bold text-gray-700">
                Dirección *
              </label>
              <input
                type="text"
                id="direccion"
                required
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Calle 20 # 10-45"
              />
            </div>

            {/* Ciudad */}
            <div>
              <label htmlFor="ciudad" className="mb-2 block text-sm font-bold text-gray-700">
                Ciudad / Municipio *
              </label>
              <input
                type="text"
                id="ciudad"
                required
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Tunja"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="mb-2 block text-sm font-bold text-gray-700">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="3001234567"
              />
            </div>

            {/* Visitantes */}
            <div>
              <label htmlFor="visitantes" className="mb-2 block text-sm font-bold text-gray-700">
                ¿Cuántas personas te visitan al día (aprox)? *
              </label>
              <input
                type="text"
                id="visitantes"
                required
                value={formData.visitantes}
                onChange={(e) => setFormData({ ...formData, visitantes: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Ej: 50-100 personas"
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-5 text-xl font-black text-white shadow-2xl transition hover:from-amber-600 hover:to-orange-600 hover:shadow-amber-900/50"
            >
              🚀 Quiero mi prueba sin riesgo
            </button>

            {/* Mensaje de éxito */}
            {showSuccess && (
              <div className="rounded-2xl bg-green-100 p-6 text-center">
                <p className="text-lg font-bold text-green-800">
                  ✅ ¡Perfecto!
                </p>
                <p className="mt-2 text-sm text-green-700">
                  Se abrió WhatsApp para que puedas enviarnos tu información directamente. 📱
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

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
            © {new Date().getFullYear()} Hojaldito® • Impulsando negocios en Boyacá
          </p>
        </div>
      </footer>
    </main>
  );
}
