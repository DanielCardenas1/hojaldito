"use client";
import React from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "573508823968";

function openWhatsApp(subject: string) {
  const mensaje = `${subject}\n\nMe interesa probar Hojaldito.`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO full-bleed */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(3,3,3,0.6), rgba(3,3,3,0.6)), url('/hojaldito-hero.jpg')`,
          minHeight: "70vh",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-4 inline-block text-yellow-400 title-serif text-4xl">🥐</div>
          <h1 className="mb-4 text-6xl font-extrabold title-serif tracking-tight">HOJALDITO</h1>
          <p className="mb-6 text-xl">Hojaldre congelado premium para negocios</p>
          <p className="mb-8 text-2xl font-semibold text-yellow-300">Aumenta tu ticket promedio sin aumentar tu riesgo.</p>

          <div className="flex justify-center gap-6">
            <button onClick={() => openWhatsApp("Quiero probar Hojaldito - Pedido inicial")} className="rounded btn-accent px-6 py-4 text-lg font-semibold shadow-lg">
              Conocer Más
            </button>
            <button onClick={() => openWhatsApp("Contactar Hojaldito") } className="rounded btn-outline-accent px-6 py-4 text-lg font-semibold">
              Contactar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <section id="problema" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">2 EL PROBLEMA QUE RESOLVEMOS</h2>
          <p className="mb-4">Muchos negocios pierden dinero porque:</p>
          <ul className="space-y-3">
            <li className="rounded border-l-4 border-red-200 bg-red-50 p-4">Compran producto terminado y se vence</li>
            <li className="rounded border-l-4 border-red-200 bg-red-50 p-4">Tienen merma diaria</li>
            <li className="rounded border-l-4 border-red-200 bg-red-50 p-4">No controlan producción</li>
            <li className="rounded border-l-4 border-red-200 bg-red-50 p-4">Trabajan con márgenes bajos</li>
          </ul>
          <div className="mt-6 rounded bg-black p-4 text-white">El resultado: rotación lenta y baja rentabilidad.</div>
        </section>

        <section id="solucion" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">3 LA SOLUCIÓN</h2>
          <p className="mb-4">HOJALDITO ofrece hojaldre congelado listo para hornear.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded border p-4">Hornear solo lo que se vende</div>
            <div className="rounded border p-4">Reducir desperdicio</div>
            <div className="rounded border p-4">Controlar inventario</div>
            <div className="rounded border p-4">Mantener producto fresco todo el día</div>
          </div>
          <div className="mt-6 rounded bg-yellow-400 p-6 text-center font-semibold">Más control = Más utilidad.</div>
        </section>

        <section id="producto" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">4 EL PRODUCTO</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <img src="/hojaldito-pastel-placeholder.jpg" alt="Pastel" className="rounded shadow" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Media luna compacta (130–145g).</h3>
              <p className="mb-2">Formato congelado listo para horno.</p>
              <ul className="list-inside list-disc pl-5">
                <li>Mantiene estructura</li>
                <li>Dorado uniforme</li>
                <li>Sellado firme</li>
              </ul>
              <p className="mt-4 font-semibold">Diseñado para venta superior a $5.000 por unidad.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
