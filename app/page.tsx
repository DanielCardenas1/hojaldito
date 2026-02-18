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
    <main className="min-h-screen bg-white text-gray-900">
      {/* 1. PORTADA */}
      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/60 px-6 py-2">
            <span className="text-3xl">🥐</span>
            <h1 className="text-2xl font-extrabold tracking-tight">HOJALDITO</h1>
          </div>

          <h2 className="mb-4 text-4xl font-black">Hojaldre congelado premium para negocios</h2>
          <p className="mb-6 text-lg">Aumenta tu ticket promedio sin aumentar tu riesgo.</p>

          <div className="mb-6 flex items-center justify-center gap-4">
            <button
              onClick={() => openWhatsApp("Quiero probar Hojaldito - Pedido inicial")}
              className="rounded-full bg-amber-600 px-6 py-3 font-bold text-white shadow-md"
            >
              Contacto (WhatsApp)
            </button>
            <div className="text-sm text-gray-600">{city}</div>
          </div>

          <div className="mx-auto max-w-xl">
            <div className="h-56 overflow-hidden rounded-2xl bg-gray-100">
              {/* Imagen real del pastel congelado: reemplazar src cuando tengas la foto */}
              <img
                src="/hojaldito-pastel-placeholder.jpg"
                alt="Pastel congelado Hojaldito"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="border-t py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-4 text-2xl font-bold">El problema que resolvemos</h3>
          <p className="mb-4">Muchos negocios pierden dinero porque:</p>
          <ul className="mb-4 list-inside list-disc space-y-1 pl-4 text-gray-700">
            <li>Compran producto terminado y se vence</li>
            <li>Tienen merma diaria</li>
            <li>No controlan producción</li>
            <li>Trabajan con márgenes bajos</li>
          </ul>
          <p className="text-gray-800 font-semibold">El resultado: rotación lenta y baja rentabilidad.</p>
        </div>
      </section>

      {/* 3. SOLUCIÓN */}
      <section className="bg-green-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-4 text-2xl font-bold">La solución</h3>
          <p className="mb-4">HOJALDITO ofrece hojaldre congelado listo para hornear.</p>
          <ul className="mb-4 list-inside list-disc space-y-1 pl-4 text-gray-700">
            <li>Hornear solo lo que se vende</li>
            <li>Reducir desperdicio</li>
            <li>Controlar inventario</li>
            <li>Mantener producto fresco todo el día</li>
          </ul>
          <p className="text-gray-800 font-semibold">Más control = Más utilidad.</p>
        </div>
      </section>

      {/* 4. PRODUCTO */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-4 text-2xl font-bold">El producto</h3>
          <p className="mb-3">Media luna compacta (130–145g). Formato congelado listo para horno.</p>
          <ul className="mb-4 list-inside list-disc space-y-1 pl-4 text-gray-700">
            <li>Mantiene estructura</li>
            <li>Dorado uniforme</li>
            <li>Sellado firme</li>
          </ul>
          <p className="text-gray-800 font-semibold">Diseñado para venta superior a $5.000 por unidad.</p>
        </div>
      </section>

      {/* 5. SABORES */}
      <section className="bg-amber-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-4 text-2xl font-bold">Sabores premium</h3>
          <ul className="grid gap-2 md:grid-cols-2">
            <li>• Costilla BBQ</li>
            <li>• Pollo champiñón y tocineta</li>
            <li>• Mazorcada</li>
            <li>• Chorizo jalapeño con queso</li>
          </ul>
          <p className="mt-4 text-gray-800 font-semibold">Sabores diseñados para alto ticket y buena rotación.</p>
        </div>
      </section>

      {/* 6. RENTABILIDAD */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-4 text-2xl font-bold">Rentabilidad estimada</h3>
          <p className="mb-4">Ejemplo simple:</p>
          <div className="mb-4 rounded-lg border p-6">
            <p className="mb-2">Venta sugerida: <strong>$6.000</strong></p>
            <p className="mb-2">Paquete mayorista: <strong>30 unidades</strong></p>
            <p className="font-bold">Ingreso bruto potencial: <strong>$180.000</strong></p>
          </div>
          <p className="text-gray-800 font-semibold">No competimos por precio. Competimos por margen.</p>
        </div>
      </section>

      {/* 7. MODELO DE TRABAJO */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-4 text-2xl font-bold">Modelo de trabajo</h3>
          <ul className="mb-4 list-inside list-disc space-y-1 pl-4 text-gray-700">
            <li>Pedido mínimo mayorista</li>
            <li>Producción por lote</li>
            <li>Entrega programada</li>
            <li>Relación directa con el fabricante</li>
          </ul>
          <p className="text-gray-800 font-semibold">No venta informal al público.</p>
        </div>
      </section>

      {/* 8. PARA QUIÉN */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-4 text-2xl font-bold">¿Para quién es ideal?</h3>
          <ul className="mb-4 grid gap-2 md:grid-cols-2">
            <li>✔ Cafés</li>
            <li>✔ Restaurantes</li>
            <li>✔ Panaderías</li>
            <li>✔ Hoteles</li>
          </ul>
          <p className="text-gray-800 font-semibold">Negocios que venden productos sobre $5.000.</p>
        </div>
      </section>

      {/* 9. CONTACTO */}
      <section className="bg-amber-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-4 text-2xl font-bold">Contacto</h3>
          <p className="mb-6">¿Quieres probar el producto y evaluar su rotación? Escríbenos y agenda tu pedido inicial.</p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => openWhatsApp("Quiero probar Hojaldito - Solicitar prueba")}
              className="rounded-full bg-white px-6 py-3 font-bold text-amber-600 shadow-md"
            >
              WhatsApp
            </button>
            <div className="text-sm">Ciudad: {city}</div>
          </div>

          <p className="mt-6 text-sm opacity-90">Número: +57 350 882 3968</p>
        </div>
      </section>
    </main>
  );
}
