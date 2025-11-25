"use client";
import { useState } from "react";
import LandingNegocio from "./landing-negocio";
import LandingDistribuidor from "./redistribuidor";

type SelectedOption = null | "negocio" | "distribuidor";

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);

  const scrollToContent = () => {
    setTimeout(() => {
      document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Si ya seleccionó una opción, mostrar el componente correspondiente
  if (selectedOption === "negocio") {
    return <LandingNegocio />;
  }

  if (selectedOption === "distribuidor") {
    return <LandingDistribuidor />;
  }

  // Selector inicial
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* ========================================
          SECCIÓN INICIAL - SELECTOR DE CAMINO
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
          <h1 className="mb-6 text-center text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            ¿Cómo quieres ganar con Hojaldito®?
          </h1>

          {/* Subtítulo */}
          <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-amber-50 md:text-2xl">
            Elige tu camino y te mostramos solo la información que necesitas.
          </p>

          {/* Dos tarjetas de selección */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* TARJETA 1: Negocio */}
            <button
              onClick={() => {
                setSelectedOption("negocio");
                scrollToContent();
              }}
              className="group relative overflow-hidden rounded-3xl border-4 border-white/20 bg-white p-8 text-left shadow-2xl transition-all hover:scale-105 hover:border-white hover:shadow-amber-900/50 md:p-10"
            >
              <div className="mb-6 text-center">
                <div className="mb-4 text-6xl">🏪</div>
                <h2 className="mb-4 text-3xl font-black text-gray-900">
                  Quiero vender pasteles
                  <span className="block text-2xl">en mi negocio</span>
                </h2>
                <p className="text-lg text-gray-700">
                  Soy cafetería, tienda, restaurante o panadería y quiero ganar más vendiendo Hojalditos.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-lg font-bold text-white transition group-hover:from-blue-600 group-hover:to-indigo-600">
                Ver cómo funciona
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </button>

            {/* TARJETA 2: Socio Ganador */}
            <button
              onClick={() => {
                setSelectedOption("distribuidor");
                scrollToContent();
              }}
              className="group relative overflow-hidden rounded-3xl border-4 border-white/20 bg-white p-8 text-left shadow-2xl transition-all hover:scale-105 hover:border-white hover:shadow-amber-900/50 md:p-10"
            >
              <div className="mb-6 text-center">
                <div className="mb-4 text-6xl">💼</div>
                <h2 className="mb-4 text-3xl font-black text-gray-900">
                  Quiero ser Socio Ganador
                  <span className="block text-2xl">y ganar comisiones</span>
                </h2>
                <p className="text-lg text-gray-700">
                  Recomiendo negocios y gano dinero cada semana directo en mi Nequi, Daviplata o donde yo quiera.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-lg font-bold text-white transition group-hover:from-amber-600 group-hover:to-orange-600">
                Ver cómo funciona
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </button>
          </div>

          {/* Texto de apoyo */}
          <p className="mt-12 text-center text-sm text-amber-100">
            📍 Tunja, Boyacá y municipios cercanos
          </p>
        </div>
      </section>

      {/* Sección de beneficios generales */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-black text-gray-900 md:text-5xl">
            ¿Por qué Hojaldito®?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8 text-center shadow-md">
              <div className="mb-4 text-5xl">🥐</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Producto premium</h3>
              <p className="text-gray-700">
                Pasteles grandes, frescos y con sabores únicos que se venden solos.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8 text-center shadow-md">
              <div className="mb-4 text-5xl">🤝</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Sin riesgo</h3>
              <p className="text-gray-700">
                Modelo pensado para que todos ganen: negocios, redistribuidores y clientes.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8 text-center shadow-md">
              <div className="mb-4 text-5xl">📈</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Crecimiento real</h3>
              <p className="text-gray-700">
                Acompañamiento, estrategias y apoyo constante para que vendas más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-amber-200 bg-amber-50 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="mb-2 text-2xl font-black text-amber-700">Hojaldito®</h3>
          <p className="mb-6 text-gray-700">Tunja, Boyacá • Colombia</p>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Hojaldito® • Todos los derechos reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
