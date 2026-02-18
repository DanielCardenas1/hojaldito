import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Hojaldito - Hojaldre congelado premium",
  description: "Hojaldito: hojaldre congelado premium listo para hornear. Aumenta ticket promedio sin riesgo.",
  openGraph: {
    title: "Hojaldito - Hojaldre congelado premium",
    description: "Hojaldito: hojaldre congelado premium listo para hornear.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
