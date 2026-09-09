export interface Presentacion {
  id: string;
  nombre: string;
  disponible: boolean;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  disponible: boolean;
  presentaciones: Presentacion[];
}

export interface Complemento {
  id: string;
  nombre: string;
  disponible: boolean;
}

// Catálogo de ejemplo (a partir de la descripción de producto ya usada en la web actual).
// Reemplazar con el catálogo real y su disponibilidad vigente antes de lanzar.
export const PRODUCTOS: Producto[] = [
  {
    id: "media-luna-clasica",
    nombre: "Media Luna Clásica Hojaldito",
    descripcion:
      "Hojaldre congelado, 130–145g, listo para hornear. Mantiene estructura, dorado uniforme y sellado firme.",
    disponible: true,
    presentaciones: [{ id: "unidad", nombre: "Unidad", disponible: true }],
  },
];

// Sin complementos disponibles todavía: se agregan aquí cuando exista un producto real que
// valga la pena sugerir junto a la media luna (regla: "complementos, sugerir solo si aportan").
export const COMPLEMENTOS: Complemento[] = [];

export function getRecomendacion(need: string | null): Producto | null {
  return PRODUCTOS.find((p) => p.disponible) ?? null;
}

// Propone una cantidad de partida (nunca le pide al cliente que calcule, solo ajustar).
export function cantidadSugerida(need: string | null): number {
  if (need === "negocio") return 24;
  if (need === "compartir") return 12;
  return 6;
}
