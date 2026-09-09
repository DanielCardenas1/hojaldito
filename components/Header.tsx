"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useExperience } from "@/lib/experience/context";
import { buildWhatsAppUrl } from "@/lib/experience/whatsapp";

export default function Header() {
  const pathname = usePathname();
  const { state } = useExperience();
  const isHome = pathname === "/";

  return (
    <header className="w-full border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="title-serif flex items-center gap-2 text-xl font-bold text-ink">
          <span className="text-2xl">🥐</span> HOJALDITO®
        </Link>

        <nav className="flex items-center gap-4">
          {!isHome && (
            <Link
              href="/"
              className="hidden text-sm font-semibold uppercase tracking-wide text-muted hover:text-ink md:inline"
            >
              Volver al inicio
            </Link>
          )}
          <a
            href={buildWhatsAppUrl(state, "Hola, tengo una pregunta antes de continuar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[13px] bg-ink px-4 py-2 text-sm font-bold text-paper shadow-sm transition hover:-translate-y-0.5"
          >
            Hablar con alguien
          </a>
        </nav>
      </div>
    </header>
  );
}
