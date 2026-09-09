import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { ExperienceProvider } from "@/lib/experience/context";

export const metadata: Metadata = {
  title: "Hojaldito",
  description:
    "Hojaldito: hojaldre congelado premium. Te ayudamos a comprar, vender en tu negocio o ser Socio Ganador.",
  openGraph: {
    title: "Hojaldito",
    description: "Hojaldito: hojaldre congelado premium listo para hornear.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ExperienceProvider>
          <div className="min-h-screen bg-paper">
            <Header />
            {children}
          </div>
        </ExperienceProvider>
      </body>
    </html>
  );
}
