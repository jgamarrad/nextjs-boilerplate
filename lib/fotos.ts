// lib/fotos.ts
// Fotos adicionales de cada producto (la principal está en lib/catalog.ts).
// Se muestran en la ficha como miniaturas que el cliente puede tocar.
// Las imágenes van en /public, optimizadas (máx. 1200 px, JPG).

export type Foto = { src: string; alt: string };

const EMPAQUE_CORREO: Foto = {
  src: "/caja-empaque-correo-de-chocolate-v2.jpg",
  alt: "Empaque del correo postal de chocolate: caja con tapa y sobre estilo correo antiguo",
};

const CORREOS_POSTALES = [
  "LLA-002", "LLA-007", "LLA-018", "LLA-037", "LLA-038", "LLA-049", "LLA-051",
  "LLA-052", "LLA-062", "LLA-063", "LLA-064", "LLA-072", "LLA-073", "LLA-074",
];

export const FOTOS_EXTRA: Record<string, Foto[]> = {
  ...Object.fromEntries(CORREOS_POSTALES.map((id) => [id, [EMPAQUE_CORREO]])),
  "LLA-003": [
    {
      src: "/tarjeta-amor-pulseras-rojas-corazones-v2.jpg",
      alt: "Tarjeta de amor con dos pulseras rojas con corazón dorado",
    },
  ],
};

export function getFotosExtra(id: string): Foto[] {
  return FOTOS_EXTRA[id] ?? [];
}
