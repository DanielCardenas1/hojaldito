# Hojaldito — Motor de Experiencia

Experiencia guiada por estados para Hojaldito (Next.js 14 + Tailwind), construida a partir
de la especificación en `documentacion/` (4 documentos): Home orienta la intención del
cliente y lo lleva por una de tres rutas principales — Comprar, Vender Hojaldito, Socio
Ganador — más Postcompra, en vez de una landing con secciones fijas.

## Instrucciones

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000)

## Configuración

- Número de WhatsApp: variable de entorno `NEXT_PUBLIC_WHATSAPP` (fallback en
  `lib/experience/whatsapp.ts`).
- Catálogo y disponibilidad: `data/productos.ts` — hoy contiene datos de ejemplo, hay que
  reemplazarlos por el catálogo real antes de lanzar.
- Cifras económicas de la ruta Vender/Socio Ganador: `data/socioGanador.ts` — están
  etiquetadas como "ejemplo ilustrativo" en la interfaz; hay que confirmarlas con el
  equipo comercial.

## Estructura

- `lib/experience/` — estado global (tipos, reducer, contexto con persistencia en
  `localStorage`, entradas contextuales por `?src=`, construcción del link de WhatsApp,
  analítica).
- `lib/routes/` — cada ruta principal (`comprar.ts`, `vender.ts`, `socioGanador.ts`,
  `postcompra.ts`) como una tabla de pasos (pregunta, opciones, siguiente paso).
- `components/experience/` — motor genérico (`RouteRunner`) y las pantallas reutilizables
  (elección, cantidad, resumen editable, continuidad por WhatsApp).
- `app/` — una página de Next.js por ruta principal (`/comprar`, `/vender`,
  `/socio-ganador`, `/postcompra`) más `/` para Home.

Ver `documentacion/` para el diseño completo de la experiencia (reglas, mapas de decisión
y especificación de construcción).
