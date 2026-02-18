"use client";
import React from "react";

const whatsappNumber = "573508823968"; // cambiar si hace falta
const city = "Tunja, Boyacá"; // cambiar si hace falta

function openWhatsApp(subject: string) {
  const mensaje = `${subject}\n\nMe interesa probar Hojaldito. Ciudad: ${city}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-12 shadow-xl border border-gray-200 print:shadow-none print:border-0">
        {/* 1. PORTADA (estilo PDF) */}
        <section className="py-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="text-3xl">🥐</span>
              <h1 className="text-3xl font-serif font-bold tracking-tight">HOJALDITO</h1>
            </div>

            <h2 className="mb-2 text-2xl font-serif font-semibold text-gray-900">Hojaldre congelado premium para negocios</h2>
            <p className="mb-6 text-sm text-gray-700">Aumenta tu ticket promedio sin aumentar tu riesgo.</p>

            <div className="mb-6 flex items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp("Quiero probar Hojaldito - Pedido inicial")}
                className="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm"
              >
                Contacto (WhatsApp)
              </button>
              <div className="text-sm text-gray-600">{city}</div>
            </div>

            <div className="mx-auto max-w-lg">
              <div className="h-64 overflow-hidden bg-gray-50">
                <img
                  src="/hojaldito-pastel-placeholder.jpg"
                  alt="Pastel congelado Hojaldito"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 2. PROBLEMA */}
        <section className="py-4">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">El problema que resolvemos</h3>
          <p className="mb-3 text-sm text-gray-700">Muchos negocios pierden dinero porque:</p>
          <ul className="mb-3 list-inside list-disc space-y-1 pl-5 text-gray-700">
            <li>Compran producto terminado y se vence</li>
            <li>Tienen merma diaria</li>
            <li>No controlan producción</li>
            <li>Trabajan con márgenes bajos</li>
          </ul>
          <p className="text-sm font-semibold text-gray-800">El resultado: rotación lenta y baja rentabilidad.</p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 3. SOLUCIÓN */}
        <section className="py-4">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">La solución</h3>
          <p className="mb-3 text-sm text-gray-700">HOJALDITO ofrece hojaldre congelado listo para hornear, que permite:</p>
          <ul className="mb-3 list-inside list-disc space-y-1 pl-5 text-gray-700">
            <li>Hornear solo lo que se vende</li>
            <li>Reducir desperdicio</li>
            <li>Controlar inventario</li>
            <li>Mantener producto fresco todo el día</li>
          </ul>
          <p className="text-sm font-semibold text-gray-800">Más control = Más utilidad.</p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 4. PRODUCTO */}
        <section className="py-4">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">El producto</h3>
          <p className="mb-2 text-sm text-gray-700">Media luna compacta (130–145g). Formato congelado listo para horno.</p>
          <ul className="mb-3 list-inside list-disc space-y-1 pl-5 text-gray-700">
            <li>Mantiene estructura</li>
            <li>Dorado uniforme</li>
            <li>Sellado firme</li>
          </ul>
          <p className="text-sm font-semibold text-gray-800">Diseñado para venta superior a $5.000 por unidad.</p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 5. SABORES */}
        <section className="py-4">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">Sabores premium</h3>
          <ul className="mb-3 grid gap-2 md:grid-cols-2 text-sm text-gray-700">
            <li>Costilla BBQ</li>
            <li>Pollo champiñón y tocineta</li>
            <li>Mazorcada</li>
            <li>Chorizo jalapeño con queso</li>
          </ul>
          <p className="text-sm font-semibold text-gray-800">Sabores diseñados para alto ticket y buena rotación.</p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 6. RENTABILIDAD */}
        <section className="py-4">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">Rentabilidad estimada</h3>
          <p className="mb-3 text-sm text-gray-700">Ejemplo simple:</p>
          <div className="mb-3 rounded border p-4 text-sm">
            <p className="mb-1">Venta sugerida: <strong>$6.000</strong></p>
            <p className="mb-1">Paquete mayorista: <strong>30 unidades</strong></p>
            <p className="font-bold">Ingreso bruto potencial: <strong>$180.000</strong></p>
          </div>
          <p className="text-sm font-semibold text-gray-800">No competimos por precio. Competimos por margen.</p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 7. MODELO DE TRABAJO */}
        <section className="py-4">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">Modelo de trabajo</h3>
          <ul className="mb-3 list-inside list-disc space-y-1 pl-5 text-gray-700">
            <li>Pedido mínimo mayorista</li>
            <li>Producción por lote</li>
            <li>Entrega programada</li>
            <li>Relación directa con el fabricante</li>
          </ul>
          <p className="text-sm font-semibold text-gray-800">No venta informal al público.</p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 8. PARA QUIÉN */}
        <section className="py-4">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">¿Para quién es ideal?</h3>
          <ul className="mb-3 grid gap-2 md:grid-cols-2 text-sm text-gray-700">
            <li>✔ Cafés</li>
            <li>✔ Restaurantes</li>
            <li>✔ Panaderías</li>
            <li>✔ Hoteles</li>
          </ul>
          <p className="text-sm font-semibold text-gray-800">Negocios que venden productos sobre $5.000.</p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* 9. CONTACTO */}
        <section className="py-6">
          <h3 className="mb-3 text-xl font-serif font-bold text-gray-900">Contacto</h3>
          <p className="mb-4 text-sm text-gray-700">¿Quieres probar el producto y evaluar su rotación? Escríbenos y agenda tu pedido inicial.</p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-start">
            <button
              onClick={() => openWhatsApp("Quiero probar Hojaldito - Solicitar prueba")}
              className="rounded border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
            >
              WhatsApp
            </button>
            <div className="text-sm text-gray-600">Ciudad: {city}</div>
          </div>

          <p className="mt-4 text-sm text-gray-600">Número: +57 350 882 3968</p>
        </section>
      </div>
    </main>
  );
}
