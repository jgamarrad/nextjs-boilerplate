// lib/complementos.ts
// Complementos (adicionales) que se pueden sumar a cualquier regalo o pedir solos.
// Se muestran en /complementos y en la sección "Complementa tu regalo" de cada ficha.

import type { Foto } from "@/lib/fotos";

export type Complemento = {
  id: string; // código para el catálogo de Meta y WhatsApp
  slug: string;
  nombre: string;
  precio: number; // en soles
  descripcion: string;
  fotos: Foto[];
  // Si el regalo ya incluye esto, no se ofrece (se busca este texto en "Qué incluye")
  yaIncluidoSi?: RegExp;
};

export const COMPLEMENTOS: Complemento[] = [
  {
    id: "COMP-01",
    slug: "peluche-llamita",
    nombre: "Peluche de llamita",
    precio: 70,
    descripcion: "Llamita de peluche de 30 cm de alto, suave y con detalles de colores.",
    fotos: [{ src: "/complementos/peluche-llamita-v2.jpg", alt: "Peluche de llamita blanca con detalles de colores" }],
    yaIncluidoSi: /llamita/i,
  },
  {
    id: "COMP-02",
    slug: "peluche-osito-cumpleanos",
    nombre: "Peluche de osito Happy Birthday",
    precio: 60,
    descripcion: "Osito de peluche de 22 cm con gorrito de cumpleaños y torta.",
    fotos: [{ src: "/complementos/peluche-osito-cumpleanos-v2.jpg", alt: "Osito de peluche con gorro Happy Birthday y torta" }],
    yaIncluidoSi: /osito/i,
  },
  {
    id: "COMP-03",
    slug: "peluche-osito-love",
    nombre: "Peluche de osito Love Everyday",
    precio: 60,
    descripcion: "Osito de peluche de 22 cm con gorrito de corazón y flor.",
    fotos: [{ src: "/complementos/peluche-osito-aniversario-v2.jpg", alt: "Osito de peluche con gorro Love Everyday y flor roja" }],
    yaIncluidoSi: /osito/i,
  },
  {
    id: "COMP-04",
    slug: "caja-de-rosas",
    nombre: "Caja de rosas",
    precio: 170,
    descripcion:
      "Entre 20 y 24 rosas frescas (según su tamaño) en caja redonda con nuestro logo. Caja blanca o negra; rosas rojas, rosadas, blush, blancas o amarillas.",
    fotos: [
      { src: "/complementos/caja-rosas-blanca-v2.jpg", alt: "Caja blanca con rosas rosadas" },
      { src: "/complementos/caja-rosas-negra-v2.jpg", alt: "Caja negra con rosas blush" },
    ],
    yaIncluidoSi: /rosas/i,
  },
  {
    id: "COMP-05",
    slug: "pulseras-rojas",
    nombre: "Pulseras rojas",
    precio: 20,
    descripcion: "Dos pulseras rojas con corazón dorado, en tarjeta de amor.",
    fotos: [{ src: "/tarjeta-amor-pulseras-rojas-corazones-v2.jpg", alt: "Tarjeta de amor con dos pulseras rojas" }],
    yaIncluidoSi: /pulsera/i,
  },
];

// Devuelve objetos simples (sin RegExp) para poder pasarlos a componentes de cliente
export function getComplementosPara(incluye: string[]): Omit<Complemento, "yaIncluidoSi">[] {
  const texto = incluye.join(" ");
  return COMPLEMENTOS.filter((c) => !(c.yaIncluidoSi && c.yaIncluidoSi.test(texto))).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ yaIncluidoSi: _omit, ...resto }) => resto
  );
}
