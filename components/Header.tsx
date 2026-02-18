"use client";
import Link from "next/link";
import React from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "573508823968";

export default function Header() {
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero probar Hojaldito")}`;
    window.open(url, "_blank");
  };

  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-yellow-400 title-serif">HOJALDITO</div>
          <div className="hidden text-sm text-gray-300 md:block">Hojaldre congelado premium para negocios</div>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#problema" className="hidden text-sm uppercase tracking-wide text-gray-200 md:inline">Problema</a>
          <a href="#solucion" className="hidden text-sm uppercase tracking-wide text-gray-200 md:inline">Solución</a>
          <a href="#producto" className="hidden text-sm uppercase tracking-wide text-gray-200 md:inline">Producto</a>
          <button onClick={openWhatsApp} className="ml-2 rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-black">
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
}
