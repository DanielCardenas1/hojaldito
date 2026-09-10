import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#211b17",
        muted: "#75675d",
        cream: "#f7f0e6",
        paper: "#fffdf9",
        line: "#e6d9cb",
        accent: "#9b6745",
        // Color de apetito/urgencia (psicología del color en marcas de comida), reservado
        // solo para el botón de acción final de cada paso — no para fondos ni tarjetas,
        // para no perder el posicionamiento premium de la paleta tierra.
        action: "#d2560f",
        "action-dark": "#b3480c",
      },
    },
  },
  plugins: [],
};
export default config;
