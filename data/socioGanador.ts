// Cifras de ejemplo (tomadas del material comercial previo del proyecto). El documento 4
// exige explícitamente que todo escenario económico se muestre etiquetado como "ejemplo
// ilustrativo" hasta validar condiciones reales, y prohíbe inventar valores nuevos — por
// eso estas cifras nunca deben mostrarse sin esa etiqueta (ver lib/routes/vender.ts y
// lib/routes/socioGanador.ts).
export const ESCENARIO_VENTA = {
  costoPorPastel: 2200,
  precioSugeridoMin: 3000,
  precioSugeridoMax: 3500,
  gananciaMin: 800,
  gananciaMax: 1300,
};

export function formatoCOP(valor: number): string {
  return `$${valor.toLocaleString("es-CO")}`;
}
