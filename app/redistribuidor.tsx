"use client";
import { useState } from "react";

export default function LandingDistribuidor() {
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    whatsapp: "",
    negocios: "",
    experiencia: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mostrar mensaje de éxito
    setShowSuccess(true);
    
    // Resetear formulario después de 5 segundos
    setTimeout(() => {
      setFormData({
        nombre: "",
        ciudad: "",
        whatsapp: "",
        negocios: "",
        experiencia: "",
      });
      setShowSuccess(false);
    }, 5000);
  };

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-neutral-50 to-amber-50">
      {/* ========================================
          1. HERO - Sección principal
      ======================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 py-20 md:py-32">
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
              <span className="text-2xl">💼</span>
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Programa Redistribuidor
              </span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="mb-6 text-center text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Gana dinero cada semana
            <span className="block text-amber-100">sin invertir</span>
            <span className="block">ni manejar producto</span>
          </h1>

          {/* Subtítulo */}
          <p className="mx-auto mb-10 max-w-3xl text-center text-xl text-amber-50 md:text-2xl">
            Conviértete en <strong className="text-white">Redistribuidor Oficial Hojaldito®</strong>: 
            recomiendas negocios y recibes una bonificación por cada pastel que vendan. 
            <span className="block mt-2">Nosotros hacemos todo lo demás.</span>
          </p>

          {/* CTA principal */}
          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="group relative overflow-hidden rounded-full bg-white px-10 py-6 text-xl font-black text-amber-600 shadow-2xl transition-all hover:scale-105 hover:shadow-amber-900/50 md:px-12 md:text-2xl"
            >
              <span className="relative z-10">💰 Quiero ser redistribuidor</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-amber-100 to-yellow-100 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>

          {/* Escasez */}
          <p className="mt-8 text-center text-sm font-semibold text-amber-100">
            Ideal para Tunja y municipios cercanos • Oportunidad de ingreso extra sin dejar tu trabajo
          </p>
        </div>
      </section>

      {/* ========================================
          2. SUB-HERO - Aclarar el modelo
      ======================================== */}
      <section className="border-b-4 border-amber-300 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-black text-gray-900 md:text-5xl">
            No es un empleo.
            <span className="block text-amber-600">Es un ingreso extra por conectar negocios.</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
            Como redistribuidor <strong>no manejas producto, no haces domicilios, no cobras</strong>. 
            Solo conectas cafeterías, tiendas o restaurantes con Hojaldito®. 
            <span className="mt-2 block text-amber-700">
              Si el negocio compra y vende pasteles, <strong>tú ganas comisión</strong>.
            </span>
          </p>
        </div>
      </section>

      {/* ========================================
          3. ¿QUÉ HACE UN REDISTRIBUIDOR?
      ======================================== */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            Tu trabajo es simple:
            <span className="block text-blue-600">acercarnos a los negocios correctos</span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
                1
              </span>
              <p className="text-lg text-gray-800">
                <strong>Hablas con dueños</strong> de cafeterías, tiendas, panaderías o restaurantes.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
                2
              </span>
              <p className="text-lg text-gray-800">
                Les cuentas que <strong>Hojaldito puede surtirles pastelería sin riesgo</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
                3
              </span>
              <p className="text-lg text-gray-800">
                Si se interesan, <strong>nos pasas el contacto</strong> y algunos datos del negocio.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
                4
              </span>
              <p className="text-lg text-gray-800">
                <strong>Nosotros visitamos, cerramos la venta</strong> y hacemos las entregas.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                ✓
              </span>
              <p className="text-lg text-gray-800">
                <strong className="text-green-600">Cada semana que ese negocio compra y vende, tú recibes dinero.</strong>
              </p>
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
                🤝
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Paso 1
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Recomiendas un negocio
              </h3>
              <p className="text-gray-700">
                Hablas con una cafetería, tienda o restaurante, le cuentas del modelo y, si le interesa, nos envías su contacto.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                🚚
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Paso 2
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Hojaldito hace el resto
              </h3>
              <p className="text-gray-700">
                Nosotros visitamos el negocio, llevamos la muestra, explicamos todo y cerramos la venta. Tú no haces domicilios ni cobros.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-4xl shadow-lg">
                💸
              </div>
              <div className="mb-3 inline-block rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Paso 3
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Ganas cada semana
              </h3>
              <p className="text-gray-700">
                Cada vez que el negocio que referiste compra y vende pasteles, recibes tu bonificación semanal. Ingreso constante sin volver a hacer nada con ese negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          5. BENEFICIOS DEL REDISTRIBUIDOR
      ======================================== */}
      <section className="border-y-4 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            Beneficios de ser
            <span className="block text-green-600">Redistribuidor Oficial Hojaldito®</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold text-gray-900">No inviertes dinero</p>
                <p className="text-sm text-gray-600">Cero riesgo financiero</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">📦</span>
              <div>
                <p className="font-bold text-gray-900">No compras producto</p>
                <p className="text-sm text-gray-600">Ni guardas inventario</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">🚗</span>
              <div>
                <p className="font-bold text-gray-900">No haces entregas</p>
                <p className="text-sm text-gray-600">Ni te encargas de logística</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">💰</span>
              <div>
                <p className="font-bold text-gray-900">Bonificación por venta</p>
                <p className="text-sm text-gray-600">Por cada pastel vendido</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">🎁</span>
              <div>
                <p className="font-bold text-gray-900">Bonificación especial</p>
                <p className="text-sm text-gray-600">De apertura los primeros meses</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-3xl">📈</span>
              <div>
                <p className="font-bold text-gray-900">Varios negocios activos</p>
                <p className="text-sm text-gray-600">Gana con todos al tiempo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md md:col-span-2 lg:col-span-3">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="font-bold text-gray-900">Ingreso extra ideal</p>
                <p className="text-sm text-gray-600">Si ya conoces muchos negocios o trabajas en el sector</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          6. BONIFICACIÓN IRRESISTIBLE
      ======================================== */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
              Fase de expansión
            </span>
            <h2 className="mb-6 text-3xl font-black md:text-5xl">
              Bonificación alta de apertura.
              <span className="block text-amber-100">Luego bonificación estable.</span>
            </h2>
          </div>

          <div className="mb-10 rounded-3xl border-2 border-white/30 bg-white/10 p-8 backdrop-blur-sm md:p-10">
            <p className="mb-6 text-xl leading-relaxed">
              Hojaldito está en <strong>fase de expansión</strong>. Por eso, durante los primeros meses 
              ofrecemos una <strong className="text-amber-100">bonificación más alta</strong> por los 
              pasteles vendidos en los negocios que tú consigas.
            </p>
            <p className="text-lg text-amber-100">
              Después, la bonificación se estabiliza, y se mantiene para los redistribuidores que 
              sigan trayendo nuevos clientes.
            </p>
          </div>

          <div className="rounded-3xl border-4 border-white bg-white p-8 text-gray-900 shadow-2xl md:p-10">
            <h3 className="mb-6 text-center text-2xl font-bold">📊 Ejemplo simple:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-4">
                <span className="text-2xl">💵</span>
                <p className="text-lg">
                  <strong>1 negocio que vende bien</strong> puede darte un ingreso extra semanal.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <span className="text-2xl">💰</span>
                <p className="text-lg">
                  <strong>3-4 negocios activos</strong> pueden convertirse en un ingreso mensual 
                  muy interesante, sin que tengas que estar encima todo el tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          7. POR QUÉ FUNCIONA EN BOYACÁ
      ======================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            Pensado para la realidad de
            <span className="block text-amber-600">Tunja y Boyacá</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="text-3xl">🏪</span>
              <p className="text-lg text-gray-800">
                Muchos negocios quieren vender más, pero <strong>no se arriesgan a comprar producto que no conocen</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="text-3xl">🤝</span>
              <p className="text-lg text-gray-800">
                Tú eres el <strong>puente de confianza</strong> entre ellos y Hojaldito®.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="text-3xl">✅</span>
              <p className="text-lg text-gray-800">
                <strong>Ellos no arriesgan mucho, tú no arriesgas nada</strong> y todos ganan.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="text-3xl">💬</span>
              <p className="text-lg text-gray-800">
                El sistema se basa en <strong>relaciones, voz a voz y negocios de barrio</strong>: 
                justo como se mueve la región.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          8. TESTIMONIOS / CASOS EJEMPLO
      ======================================== */}
      <section className="border-y-4 border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            Redistribuidores que ya están ganando
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonio 1 */}
            <div className="rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                <div>
                  <p className="font-bold text-gray-900">Carlos</p>
                  <p className="text-sm text-gray-600">Redistribuidor en Tunja</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                "Recomendé dos cafeterías que conocía y ahora recibo dinero cada semana sin hacer nada más. 
                Solo los conecté con Hojaldito."
              </p>
              <div className="text-amber-500">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonio 2 */}
            <div className="rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                <div>
                  <p className="font-bold text-gray-900">Laura</p>
                  <p className="text-sm text-gray-600">Duitama</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                "Trabajo tiempo completo, pero como redistribuidora traje 3 negocios y ahora tengo un 
                ingreso extra mensual sin cambiar mi rutina."
              </p>
              <div className="text-amber-500">⭐⭐⭐⭐⭐</div>
            </div>

            {/* Testimonio 3 */}
            <div className="rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                <div>
                  <p className="font-bold text-gray-900">Andrés</p>
                  <p className="text-sm text-gray-600">Sogamoso</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                "Es perfecto para quien conoce gente en el sector. Yo conseguí 4 negocios en un mes 
                y los ingresos son constantes."
              </p>
              <div className="text-amber-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          9. FAQ - Preguntas frecuentes
      ======================================== */}
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
                <strong>No.</strong> No compras producto, no guardas inventario ni haces domicilios. 
                Solo conectas negocios y ganas si ellos compran y venden.
              </p>
            </details>

            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Cuánto puedo ganar?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                Depende de cuántos negocios consigas y cuánto vendan. Un solo negocio puede darte 
                un ingreso extra semanal. Con varios negocios activos el ingreso se vuelve muy interesante.
              </p>
            </details>

            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Es un empleo?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                No es un empleo. Es una forma de generar <strong>ingresos extra por referir negocios</strong> a Hojaldito®.
              </p>
            </details>

            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿En qué zonas aplica?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                Principalmente <strong>Tunja y municipios cercanos en Boyacá</strong>.
              </p>
            </details>

            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Qué tengo que hacer exactamente?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                Conocer negocios, explicarles el modelo y pasarnos su contacto. 
                <strong> Hojaldito se encarga del resto.</strong>
              </p>
            </details>

            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md">
              <summary className="cursor-pointer list-none font-bold text-gray-900">
                <div className="flex items-center justify-between">
                  <span className="text-lg">¿Cuánto tiempo me toma?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 text-gray-700">
                El tiempo que quieras dedicarle. Puedes hacerlo en tu tiempo libre, 
                sin dejar tu trabajo actual. <strong>Es 100% flexible.</strong>
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ========================================
          10. CTA FINAL + FORMULARIO
      ======================================== */}
      <section id="formulario" className="border-t-4 border-amber-500 bg-gradient-to-br from-amber-600 to-orange-600 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-black md:text-5xl">
              ¿Quieres empezar a ganar como redistribuidor sin invertir?
            </h2>
            <p className="text-xl text-amber-100 md:text-2xl">
              Déjanos tus datos y te explicamos paso a paso cómo funciona el programa en tu zona.
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
                placeholder="Juan Pérez"
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

            {/* Negocios */}
            <div>
              <label htmlFor="negocios" className="mb-2 block text-sm font-bold text-gray-700">
                ¿Con cuántos negocios crees que podrías hablar al inicio? *
              </label>
              <select
                id="negocios"
                required
                value={formData.negocios}
                onChange={(e) => setFormData({ ...formData, negocios: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                <option value="">Selecciona...</option>
                <option value="1-2">1-2 negocios</option>
                <option value="3-5">3-5 negocios</option>
                <option value="6-10">6-10 negocios</option>
                <option value="10+">Más de 10 negocios</option>
              </select>
            </div>

            {/* Experiencia */}
            <div>
              <label htmlFor="experiencia" className="mb-2 block text-sm font-bold text-gray-700">
                ¿Tienes experiencia en ventas o conoces dueños de negocios? (opcional)
              </label>
              <textarea
                id="experiencia"
                rows={4}
                value={formData.experiencia}
                onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Ej: Trabajo en un restaurante y conozco varios dueños de cafeterías..."
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-5 text-xl font-black text-white shadow-2xl transition hover:from-amber-600 hover:to-orange-600 hover:shadow-amber-900/50"
            >
              💼 Quiero ser redistribuidor
            </button>

            {/* Mensaje de éxito */}
            {showSuccess && (
              <div className="rounded-2xl bg-green-100 p-6 text-center">
                <p className="text-lg font-bold text-green-800">
                  ✅ ¡Gracias!
                </p>
                <p className="mt-2 text-sm text-green-700">
                  Revisaremos tu información y te contactaremos por WhatsApp para contarte cómo empezar.
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
          <p className="mb-6 text-gray-700">Programa Redistribuidor Oficial • Tunja, Boyacá</p>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Hojaldito® • Oportunidades de ingreso en Boyacá
          </p>
        </div>
      </footer>
    </main>
  );
}
