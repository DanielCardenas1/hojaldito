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
            <div className="group relative overflow-hidden rounded-3xl border-4 border-white/20 bg-white p-8 shadow-2xl transition-all hover:scale-105 hover:border-white hover:shadow-amber-900/50 md:p-10">
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
                  scrollToContent();
                }}
                className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:from-amber-600 hover:to-orange-600 hover:shadow-xl"
              >
                Quiero ser redistribuidor →
              </button>
            </div>

            {/* TARJETA 2: Negocio */}
            <div className="group relative overflow-hidden rounded-3xl border-4 border-white/20 bg-white p-8 shadow-2xl transition-all hover:scale-105 hover:border-white hover:shadow-amber-900/50 md:p-10">
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
                  scrollToContent();
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
        {selectedOption === "distribuidor" && <DistribuidorFunnel />}
        {selectedOption === "negocio" && <NegocioFunnel />}
      </div>

      {/* ========================================
          FUNNEL PARA REDISTRIBUIDORES
      ======================================== */}
      {selectedOption === "distribuidor" && (
        <>
          {/* Cómo funciona - Redistribuidor */}
          <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Título de sección */}
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

          {/* Tres tarjetas de pasos */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Paso 1 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
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
            <div className="group relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
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
            <div className="group relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
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

      {/* ========================================
          3. BENEFICIOS PARA EL REDISTRIBUIDOR
      ======================================== */}
      <section className="border-y-4 border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-black text-gray-900 md:text-5xl">
              Lo mejor de todo 👇
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-700">
              Ideal si quieres un <strong className="text-amber-700">ingreso adicional</strong> sin dejar tu trabajo actual
            </p>
          </div>

          {/* Lista de beneficios en grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Beneficio 1 */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                ✅
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">No inviertes ni un peso</h4>
                <p className="text-sm text-gray-600">
                  Sin comprar producto, sin bodegas, sin riesgo financiero.
                </p>
              </div>
            </div>

            {/* Beneficio 2 */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🚗
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">No haces domicilios</h4>
                <p className="text-sm text-gray-600">
                  Nosotros nos encargamos de toda la logística y entregas.
                </p>
              </div>
            </div>

            {/* Beneficio 3 */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                📦
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Sin inventario</h4>
                <p className="text-sm text-gray-600">
                  No manejas producto congelado ni espacio de almacenamiento.
                </p>
              </div>
            </div>

            {/* Beneficio 4 */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                💵
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Ingresos semanales</h4>
                <p className="text-sm text-gray-600">
                  Bonificaciones recurrentes mientras el negocio siga activo.
                </p>
              </div>
            </div>

            {/* Beneficio 5 */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-2xl">
                🔥
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Bonificación alta inicial</h4>
                <p className="text-sm text-gray-600">
                  Por apertura de mercado: gana más en tus primeros meses.
                </p>
              </div>
            </div>

            {/* Beneficio 6 */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                📈
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Crece a líder de zona</h4>
                <p className="text-sm text-gray-600">
                  Si traes varios negocios, puedes escalar a mayores ingresos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          4. TESTIMONIO / CASO EJEMPLO
      ======================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-4xl">
              Esto ya funciona para gente como tú
            </h2>
            <p className="text-lg text-gray-600">
              Redistribuidores reales ganando dinero extra cada semana
            </p>
          </div>

          {/* Card de testimonio */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-white to-amber-50 p-8 shadow-2xl md:p-12">
            {/* Comillas decorativas */}
            <div className="absolute right-8 top-8 text-8xl font-serif text-amber-200 opacity-50">
              "
            </div>

            {/* Contenido del testimonio */}
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg"></div>
                <div>
                  <p className="font-bold text-gray-900">Carlos Rodríguez</p>
                  <p className="text-sm text-gray-600">Redistribuidor en Tunja</p>
                  <div className="mt-1 text-amber-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                "Con solo 2 cafeterías activas estoy ganando ingresos extra cada semana 
                <strong className="text-amber-700"> sin hacer esfuerzos</strong>. 
                Solo los conecté con Hojaldito y ellos se encargan de todo. 
                Es el mejor ingreso pasivo que he tenido."
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="rounded-xl bg-white px-4 py-2 shadow">
                  <p className="text-2xl font-black text-amber-600">2</p>
                  <p className="text-xs text-gray-600">Negocios activos</p>
                </div>
                <div className="rounded-xl bg-white px-4 py-2 shadow">
                  <p className="text-2xl font-black text-amber-600">3</p>
                  <p className="text-xs text-gray-600">Meses activo</p>
                </div>
                <div className="rounded-xl bg-white px-4 py-2 shadow">
                  <p className="text-2xl font-black text-green-600">💰</p>
                  <p className="text-xs text-gray-600">Ingresos semanales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          5. MODELO HONESTO Y TRANSPARENTE
      ======================================== */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Transparencia total
            </span>
            <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-4xl">
              Un modelo honesto y claro
            </h2>
          </div>

          {/* Tarjetas de explicación */}
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-blue-200 bg-white p-6 shadow-md">
              <div className="mb-3 flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Estamos en etapa de expansión
                  </h3>
                  <p className="text-gray-700">
                    Hojaldito está creciendo en Tunja y Boyacá. Necesitamos personas que 
                    nos ayuden a llegar a más negocios de forma rápida y eficiente.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-green-200 bg-white p-6 shadow-md">
              <div className="mb-3 flex items-start gap-3">
                <span className="text-3xl">💎</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Por eso las bonificaciones son altas al inicio
                  </h3>
                  <p className="text-gray-700">
                    Estamos en fase de apertura de mercado. Quienes entren ahora recibirán 
                    bonificaciones más generosas durante un tiempo definido.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 shadow-md">
              <div className="mb-3 flex items-start gap-3">
                <span className="text-3xl">📋</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Todo está claro desde el inicio
                  </h3>
                  <p className="text-gray-700">
                    Sin letras pequeñas. Te explicamos exactamente cuánto ganas, por cuánto 
                    tiempo y qué necesitas hacer. Transparencia al 100%.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-purple-200 bg-white p-6 shadow-md">
              <div className="mb-3 flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Las bonificaciones pueden extenderse
                  </h3>
                  <p className="text-gray-700">
                    Si sigues activo y traes nuevos negocios, tus beneficios pueden 
                    renovarse y crecer. Premiamos la constancia y el compromiso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          6. PREGUNTAS FRECUENTES (FAQ)
      ======================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas saber antes de aplicar
            </p>
          </div>

          {/* Acordeón de preguntas */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Tengo que invertir dinero?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                <strong>No.</strong> No compras producto, no tienes que almacenar nada, 
                no pagas por ser redistribuidor. Tu única inversión es el tiempo de 
                conectar negocios con nosotros.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Tengo que hacer domicilios o entregas?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                <strong>No.</strong> Hojaldito se encarga de la producción, distribución 
                y logística completa. Tu trabajo es solo conectar negocios interesados.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Cómo gano dinero exactamente?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                Refieres negocios (cafeterías, tiendas, restaurantes). Si el negocio 
                compra semanalmente, <strong>ganas una bonificación por cada pastel vendido</strong>, 
                según las condiciones del programa que se establecen al inicio.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Es un empleo?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                <strong>No.</strong> No es un empleo formal. Es un modelo de 
                <strong> ingresos extra por referir negocios</strong>. Puedes hacerlo 
                en tu tiempo libre sin dejar tu trabajo actual.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿En qué ciudades aplica?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                Actualmente estamos activos en <strong>Tunja y municipios cercanos de Boyacá</strong>. 
                Si estás en otra zona y crees que hay oportunidad, escríbenos y evaluamos 
                la posibilidad de expandirnos.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ========================================
          7. FORMULARIO DE REGISTRO
      ======================================== */}
      <section id="registro" className="border-t-4 border-amber-500 bg-gradient-to-br from-amber-600 to-orange-600 py-20">
        <div className="mx-auto max-w-2xl px-6">
          <div className="mb-12 text-center text-white">
            <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
              <span className="text-sm font-bold uppercase tracking-wider">
                ⚡ Últimos cupos disponibles
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              Aplica como Redistribuidor Oficial
            </h2>
            <p className="text-xl text-amber-100">
              Llena el formulario y nos comunicaremos contigo por WhatsApp
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-2xl md:p-10">
            {/* Campo: Nombre completo */}
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
                placeholder="Juan Pérez"
              />
            </div>

            {/* Campo: Ciudad/Municipio */}
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
                placeholder="Tunja, Boyacá"
              />
            </div>

            {/* Campo: Teléfono (WhatsApp) */}
            <div>
              <label htmlFor="telefono" className="mb-2 block text-sm font-bold text-gray-700">
                Teléfono (WhatsApp) *
              </label>
              <input
                type="tel"
                id="telefono"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="3001234567"
              />
            </div>

            {/* Campo: Negocios en mente */}
            <div>
              <label htmlFor="negocios" className="mb-2 block text-sm font-bold text-gray-700">
                ¿Tienes negocios en mente para referir?
              </label>
              <textarea
                id="negocios"
                rows={4}
                value={formData.negocios}
                onChange={(e) => setFormData({ ...formData, negocios: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Ej: Conozco 2 cafeterías en el centro y una panadería en el barrio..."
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-5 text-lg font-black text-white shadow-2xl transition hover:scale-105 hover:from-amber-600 hover:to-orange-600"
            >
              <span className="flex items-center justify-center gap-2">
                <span>📱</span>
                Quiero aplicar como redistribuidor
              </span>
            </button>

            {/* Mensaje de éxito */}
            {showSuccess && (
              <div className="rounded-2xl bg-green-100 p-6 text-center">
                <p className="text-lg font-bold text-green-800">
                  ✅ ¡Gracias! Te hemos redirigido a WhatsApp
                </p>
                <p className="mt-2 text-sm text-green-700">
                  Revisaremos tu solicitud y te contactaremos pronto.
                </p>
              </div>
            )}

            {/* Texto de privacidad */}
            <p className="text-center text-xs text-gray-500">
              Al enviar este formulario aceptas que Hojaldito® se comunique contigo 
              para validar tu solicitud como redistribuidor.
            </p>
          </form>
        </div>
      </section>

      {/* ========================================
          8. FOOTER
      ======================================== */}
      <footer className="border-t-2 border-amber-200 bg-amber-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-black text-amber-700">
              Hojaldito®
            </h3>
            <p className="text-gray-700">Tunja, Boyacá • Colombia</p>
          </div>

          {/* Texto legal */}
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 text-center shadow-md">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Nota legal:</strong> Este programa de redistribuidores ofrece 
              bonificaciones por referir negocios activos. Las condiciones, montos y 
              duración de las bonificaciones se establecen al momento de la aprobación 
              y pueden actualizarse según el crecimiento y operación de Hojaldito®. 
              No constituye un contrato laboral. Toda la información se comunica de 
              forma transparente antes de iniciar.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Hojaldito® • Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
