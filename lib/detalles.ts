// lib/detalles.ts
// Detalle de cada producto para su ficha: qué incluye, qué se personaliza,
// medidas y adicionales con precio.
// Los productos se agrupan en "familias" que comparten los mismos textos; cada
// producto puede sumar o reemplazar datos con DETALLES_PRODUCTO.
// Fuente: hoja "Fichas de producto — datos por completar" (nov 2026).

export type Detalle = {
  incluye: string[];
  personaliza: string[];
  medidas?: string;
  adicionales?: string[]; // ej. "Ramo de flores secas: +S/25"
};

const TARJETA = "Tarjeta, bolsa de regalo y globo";
// El cliente elige 1 opción de relleno por producto
const RELLENO_ELEGIR = "Relleno: trocitos de Oreo, pecanas o almendras (eliges 1)";

const MISKI: Detalle = {
  incluye: [
    "Letras o números de chocolate rellenos",
    "Corazones de chocolate rellenos de manjar",
    TARJETA,
  ],
  personaliza: [
    "Tu mensaje: hasta 7 letras o números",
    RELLENO_ELEGIR,
    "Color de la caja: blanca o negra",
  ],
  medidas: "Caja de chocolates: 30 × 8 × 3.5 cm aprox.",
};

const CORREO: Detalle = {
  incluye: [
    "36 cuadraditos de chocolate (4 filas de 9) con tu mensaje y adornos",
    "Chocolates rellenos y otros rellenos de manjar",
    "Caja de tapa dura con empaque estilo correo postal antiguo",
    "Bolsa de regalo y globo",
  ],
  personaliza: [
    "Tu mensaje en chocolate: cada cuadradito es una letra o un adorno (torta, globo, rosa y más, según la ocasión); los adornos separan las palabras",
    RELLENO_ELEGIR,
    "Tapa interna con texto y/o foto",
  ],
  medidas: "Caja: 25 × 13 × 2.5 cm aprox.",
};

const BROWNIE: Detalle = {
  incluye: [
    "4 porciones de brownie",
    "4 tabletas de chocolate blanco personalizadas",
    "Caja negra de presentación",
    TARJETA,
  ],
  personaliza: [
    "Las 4 tabletas: tus fotos, imágenes o textos impresos con tinta comestible",
  ],
  medidas: "Caja: 29 × 8.5 × 4.8 cm aprox.",
};

const RETRATO: Detalle = {
  incluye: [
    "Letras o números de chocolate rellenos",
    "Tableta de chocolate con tu foto",
    "Porción de brownie",
    TARJETA,
  ],
  personaliza: [
    "Tu mensaje: hasta 5 letras o números",
    RELLENO_ELEGIR,
    "La foto o imagen, impresa con tinta comestible",
    "Color de la caja: blanca o negra",
  ],
  medidas: "Caja de chocolates: 30 × 8 × 3.5 cm aprox.",
};

const SWEET_LOVE: Detalle = {
  incluye: [
    "Caja de chocolates: letras o números rellenos y corazones rellenos de manjar",
    "Caja con al menos 20 rosas",
    TARJETA,
  ],
  personaliza: [
    "Tu mensaje: hasta 7 letras o números",
    RELLENO_ELEGIR,
    "Color de la caja de chocolates: blanca o negra",
    "Color de la caja de rosas: blanca o negra",
    "Color de las rosas: rojas, rosadas, blush, blancas o amarillas",
  ],
  medidas: "Caja de chocolates: 30 × 8 × 3.5 cm aprox.",
};

const OSO: Detalle = {
  incluye: [
    "Oso 3D de chocolate relleno de manjar",
    "Caja acrílica",
    TARJETA,
  ],
  personaliza: ["Las letras del cuello del oso", RELLENO_ELEGIR],
  medidas: "Caja acrílica: base de 11 × 11 cm y 9 cm de alto",
};

const TABLETA: Detalle = {
  incluye: [
    "Tableta de chocolate blanco rellena de manjar",
    "Caja blanca de presentación",
    TARJETA,
  ],
  personaliza: [
    "La foto o imagen, impresa con tinta comestible sobre la tableta",
    "Base de la tableta: trocitos de Oreo, pecanas o almendras (eliges 1)",
  ],
  medidas: "Tableta: 16 × 11.4 cm",
};

const LETRAS_PELUCHE = (peluche: string): Detalle => ({
  incluye: [
    "Letras o números de chocolate rellenos",
    "Corazones de chocolate rellenos de manjar",
    peluche,
    TARJETA,
  ],
  personaliza: ["Tu mensaje: hasta 7 letras o números", RELLENO_ELEGIR],
  medidas: "Caja de chocolates: 25 × 13 × 2.5 cm aprox.",
});

const RAMO = "Ramo de flores secas: +S/25";

const VIDEO_MEDIDAS = "Caja: 22 × 21 × 10 cm · Pantalla de video: 15 × 9 cm";

export const DETALLES_PRODUCTO: Record<string, Detalle> = {
  // Cajas Miski
  ...Object.fromEntries(
    ["LLA-001", "LLA-004", "LLA-013", "LLA-014", "LLA-015", "LLA-017", "LLA-019",
     "LLA-020", "LLA-021", "LLA-025", "LLA-027", "LLA-030", "LLA-033", "LLA-036",
     "LLA-040", "LLA-050", "LLA-058", "LLA-066", "LLA-068"].map((id) => [id, MISKI])
  ),

  // Correos postales
  ...Object.fromEntries(
    ["LLA-002", "LLA-007", "LLA-018", "LLA-037", "LLA-038", "LLA-049", "LLA-051",
     "LLA-052", "LLA-062", "LLA-063", "LLA-064", "LLA-072", "LLA-073", "LLA-074"].map((id) => [id, CORREO])
  ),

  // Choco brownies
  ...Object.fromEntries(
    ["LLA-009", "LLA-016", "LLA-024", "LLA-028", "LLA-034", "LLA-035", "LLA-039",
     "LLA-041", "LLA-059", "LLA-060", "LLA-069", "LLA-070"].map((id) => [id, BROWNIE])
  ),
  "LLA-003": { ...BROWNIE, adicionales: ["Pulseras rojas: +S/20"] },
  ...Object.fromEntries(
    ["LLA-047", "LLA-048", "LLA-053"].map((id) => [id, { ...BROWNIE, adicionales: [RAMO] }])
  ),
  ...Object.fromEntries(
    ["LLA-023", "LLA-071"].map((id) => [
      id,
      {
        ...BROWNIE,
        incluye: [
          "4 porciones de brownie",
          "4 tabletas de chocolate blanco personalizadas",
          "Peluche de llamita de 30 cm de alto",
          "Caja negra de presentación",
          TARJETA,
        ],
      },
    ])
  ),

  // Choco retratos
  ...Object.fromEntries(["LLA-005", "LLA-045", "LLA-056", "LLA-057"].map((id) => [id, RETRATO])),
  ...Object.fromEntries(
    ["LLA-031", "LLA-032"].map((id) => [
      id,
      { ...RETRATO, personaliza: RETRATO.personaliza.filter((x) => !x.startsWith("Color")) },
    ])
  ),

  // Rosas
  ...Object.fromEntries(["LLA-006", "LLA-011", "LLA-026"].map((id) => [id, SWEET_LOVE])),
  "LLA-044": {
    ...SWEET_LOVE,
    incluye: [
      SWEET_LOVE.incluye[0],
      "Porción de brownie y tableta de chocolate",
      "Caja con al menos 20 rosas",
      TARJETA,
    ],
  },
  "LLA-012": {
    incluye: ["9 rosas de chocolate rellenas", "Caja de presentación", TARJETA],
    personaliza: ["Mensaje de la tarjeta: hasta 25 palabras aprox."],
    medidas: "Caja: 29 × 21 × 2 cm",
  },

  // Oso 3D
  "LLA-008": OSO,
  "LLA-029": OSO,

  // Tabletas
  ...Object.fromEntries(["LLA-022", "LLA-046", "LLA-061", "LLA-065"].map((id) => [id, TABLETA])),
  "LLA-054": { ...TABLETA, adicionales: [RAMO] },

  // Letras + peluche
  "LLA-010": LETRAS_PELUCHE("Peluche de llamita de 30 cm de alto"),
  "LLA-042": LETRAS_PELUCHE("Peluche de osito de 22 cm de alto"),
  "LLA-067": LETRAS_PELUCHE("Peluche de osito de 22 cm de alto"),

  // Caja de rosas (también es complemento COMP-04)
  "LLA-075": {
    incluye: ["Entre 20 y 24 rosas frescas, según su tamaño", "Caja redonda con nuestro logo"],
    personaliza: [
      "Color de la caja: blanca o negra",
      "Color de las rosas: rojas, rosadas, blush, blancas o amarillas",
    ],
  },

  // Cajas con video
  "LLA-043": {
    incluye: [
      "Pantalla de video que se reproduce al abrir la caja",
      "Rosas frescas",
    ],
    personaliza: ["Las fotos y/o videos que se reproducen al abrir la caja"],
    medidas: VIDEO_MEDIDAS,
  },
  "LLA-055": {
    incluye: [
      "Pantalla de video que se reproduce al abrir la caja",
      "2 porciones de brownie",
      "2 tabletas de chocolate blanco personalizadas",
      "Ramo de flores secas",
      "Pulsera",
    ],
    personaliza: [
      "Las fotos y/o videos que se reproducen al abrir la caja",
      "Las 2 tabletas: imágenes o textos impresos con tinta comestible",
    ],
    medidas: VIDEO_MEDIDAS,
  },
};

export function getDetalle(id: string): Detalle | undefined {
  return DETALLES_PRODUCTO[id];
}
