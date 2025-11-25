import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Punto Pastelero - Visibilidad para negocios de comida",
  description: "Sistema de visibilidad compartida para cafeterías, pastelerías y restaurantes. Aumenta tu flujo de clientes sin pagar publicidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
