// lib/catalog.ts

export type OccasionKey = "san_valentin" | "cumpleanos" | "aniversario" | "ocasion_especial";

export const OCC_KEYS: OccasionKey[] = [
  "san_valentin",
  "cumpleanos",
  "aniversario",
  "ocasion_especial",
];

export function normalizeOccasion(v: unknown): OccasionKey {
  if (typeof v !== "string") return "san_valentin";
  return OCC_KEYS.includes(v as OccasionKey) ? (v as OccasionKey) : "san_valentin";
}

export const OCCASIONS: Record<
  OccasionKey,
  { label: string; chip: string; heroImg: string; waText: string; ctaText: string }
> = {
  san_valentin: {
    label: "San Valentín",
    chip: "❤️ San Valentín",
    heroImg: "/correo-postal-feliz-dia-mi-amor.jpg",
    ctaText: "Pedir por WhatsApp",
    waText: "Hola, quiero ver el catálogo de San Valentín y personalizar un regalo.",
  },
  cumpleanos: {
    label: "Cumpleaños",
    chip: "🎂 Cumpleaños",
    heroImg: "/caja-miski-cumple-hb-gamer.jpg",
    ctaText: "Pedir por WhatsApp",
    waText: "Hola, quiero ver opciones de regalos para Cumpleaños. ¿Me ayudas?",
  },
  aniversario: {
    label: "Aniversario",
    chip: "💍 Aniversario",
    heroImg: "/box-sweet-love-rosas-chocolate-te-amo.jpg",
    ctaText: "Pedir por WhatsApp",
    waText: "Hola, quiero ver opciones para Aniversario y personalizar un regalo.",
  },
  ocasion_especial: {
    label: "Ocasión especial",
    chip: "🎉 Ocasión especial",
    heroImg: "/box-chocolate-peluche-llamita.jpg",
    ctaText: "Pedir por WhatsApp",
    waText: "Hola, busco un regalo para una ocasión especial. ¿Qué opciones tienes?",
  },
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  price: string;
  tags: string[];
  image: string;
  waText: string;
  occasions: OccasionKey[];
  priority?: Partial<Record<OccasionKey, number>>;
};

export function getPriority(p: Product, occ: OccasionKey) {
  return p.priority?.[occ] ?? 0;
}

// Orden estable: prioridad desc, y si empatan por id
export function sortByOccasionPriority(a: Product, b: Product, occ: OccasionKey) {
  const pa = getPriority(a, occ);
  const pb = getPriority(b, occ);
  if (pb !== pa) return pb - pa;
  return a.id.localeCompare(b.id);
}

// ===== PRODUCTOS =====
// Pega aquí tu lista COMPLETA tal cual.
export const productos: Product[] = [
   {
    id: "LLA-001",
    slug: "caja-miski-feliz-14",
    title: 'Caja Miski “Feliz 14 ❤️”',
    price: "S/60",
    tags: ["premium", "chocolate", "romántico"],
    image: "/caja-miski-feliz-14-san-valentin.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski Feliz 14❤️". ¿Opciones y precio?',
    occasions: ["san_valentin", "aniversario"],
  },
  {
    id: "LLA-002",
    slug: "correo-postal-feliz-dia-mi-amor",
    title: "Correo Postal de Chocolate",
    price: "S/85",
    tags: ["foto", "chocolate", "dedicatoria", "viral"],
    image: "/correo-postal-feliz-dia-mi-amor.jpg",
    waText: "Hola, quiero el Correo Postal con el mensaje 'Feliz día mi amor'. ¿Me das más detalle del producto?",
    occasions: ["san_valentin", "cumpleanos", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-003",
    slug: "choco-brownie-con-pulseras",
    title: "Choco brownie personalizado con pulseras rojas",
    price: "Desde S/65",
    tags: ["top ventas", "premium", "brownie"],
    image: "/choco-brownie-con-pulseras-hilo-rojo-san-valentin.jpg",
    waText: "Hola, quiero info del Choco brownie con pulseras rojas. ¿Detalles y precio?",
    occasions: ["san_valentin", "aniversario"],
  },
  {
    id: "LLA-004",
    slug: "caja-miski-te-amo",
    title: 'Caja Miski “❤️Te Amo❤️”',
    price: "S/60",
    tags: ["top ventas", "chocolate", "premium"],
    image: "/caja-miski-chocolate-te-amo.jpg",
    waText: 'Hola, quiero info de la Caja Choco Retrato "❤️Te Amo❤️". ¿Detalles y precio?',
    occasions: ["san_valentin", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-005",
    slug: "caja-miski-choco-retrato",
    title: 'Choco retrato “Te Amo”',
    price: "S/70",
    tags: ["foto", "chocolate", "brownie", "premium"],
    image: "/caja-miski-chocolate-te-amo-brownie-retrato.jpg",
    waText: 'Hola, quiero info de la Caja Choco Retrato "Te Amo". ¿Detalles y precio?',
    occasions: ["san_valentin", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-006",
    slug: "box-sweet-love",
    title: "Box Sweet Love 🍫🌹",
    price: "S/197",
    tags: ["premium", "chocolate", "rosas"],
    image: "/box-sweet-love-rosas-chocolate-churra.jpg",
    waText: 'Hola, quiero info del regalo "Box Sweet Love 🍫🌹". ¿Opciones y precio?',
    occasions: ["san_valentin", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-007",
    slug: "correo-postal-diploma",
    title: "Correo Postal de Chocolate - Diploma",
    price: "S/85",
    tags: ["foto", "chocolate", "dedicatoria", "viral"],
    image: "/correo-postal-chocolate-la-mejor-enamorada-del-mundo.jpg",
    waText: "Hola, quiero el Correo Postal 'La mejor Enamorad@'. ¿Me das más detalle del producto?",
    occasions: ["san_valentin", "aniversario"],
  },
  {
    id: "LLA-008",
    slug: "caja-acrilica-oso-3d-chocolate-1",
    title: "Oso 3D de Chocolate",
    price: "S/85",
    tags: ["premium", "chocolate", "viral"],
    image: "/caja-acrilica-oso-3d-chocolate-te-amo.jpg",
    waText: "Hola, quiero la 'Caja Acrílica con el Oso 3D en chocolate'. ¿Me das más detalle del producto?",
    occasions: ["san_valentin", "cumpleanos", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-009",
    slug: "choco-brownie-san-valentin-capibara",
    title: "Choco brownie San Valentín",
    price: "S/65",
    tags: ["chocolate", "premium", "brownie"],
    image: "/choco-brownie-san-valentin-capibara.jpg",
    waText: "Hola, quiero info del 'Choco brownie Capibara'. ¿Detalles y precio?",
    occasions: ["san_valentin"],
  },
  {
    id: "LLA-010",
    slug: "box-chocolate-peluche-llamita",
    title: "Box Choco Llamita 🍫🦙 ",
    price: "S/125",
    tags: ["premium", "chocolate", "peluche"],
    image: "/box-chocolate-peluche-llamita.jpg",
    waText: 'Hola, quiero info del regalo "Box Choco Llamita 🍫🦙". ¿Opciones y precio?',
    occasions: ["san_valentin", "cumpleanos", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-011",
    slug: "box-sweet-love-1",
    title: "Box Sweet Love 1 🍫🌹",
    price: "S/197",
    tags: ["premium", "chocolate", "rosas"],
    image: "/box-sweet-love-rosas-chocolate-te-amo.jpg",
    waText: 'Hola, quiero info del regalo "Box Sweet Love 1 🍫🌹". ¿Opciones y precio?',
    occasions: ["san_valentin", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-012",
    slug: "choco-rosas-con-amor",
    title: "Choco rosas con amor”",
    price: "Desde S/50",
    tags: ["premium", "chocolate", "romántico"],
    image: "/Caja-rosas-de-chocolate-con-amor.jpg",
    waText: 'Hola, quiero info del regalo "Choco rosas con amor". ¿Opciones y precio?',
    occasions: ["san_valentin", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-013",
    slug: "caja-miski-te-quiero",
    title: 'Caja Miski “Te Quiero ❤️”',
    price: "S/60",
    tags: ["premium", "chocolate", "romántico"],
    image: "/caja-miski-chocolates-te-quiero.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski Te Quiero ❤️". ¿Opciones y precio?',
    occasions: ["san_valentin", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-014",
    slug: "caja-miski-te-amo-oso-corazon",
    title: "Caja Miski “Te Amo ❤️🧸”",
    price: "S/60",
    tags: ["premium", "chocolate", "romántico"],
    image: "/caja-miski-chocolate-te-amo-corazon-oso.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski Te Amo ❤️🧸". ¿Opciones y precio?',
    occasions: ["san_valentin", "aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-015",
    slug: "caja-miski-cumple-hb-gamer",
    title: 'Caja Miski “Cumple Gamer ❤️🕹️”',
    price: "S/60",
    tags: ["premium", "chocolate", "gamer"],
    image: "/caja-miski-cumple-hb-gamer.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski de Cumpleaños Gamer". ¿Opciones y precio?',
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 70 },
  },
  {
    id: "LLA-016",
    slug: "choco-brownie-cumpleaños",
    title: "Choco brownie Cumpleañero",
    price: "S/65",
    tags: ["chocolate", "premium", "brownie"],
    image: "/choco-brownie-personalizado-cumple.jpg",
    waText: "Hola, quiero info del 'Choco brownie de Cumpleaños'. ¿Detalles y precio?",
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 90 },
  },
  {
    id: "LLA-017",
    slug: "caja-miski-chocolate-cumple-hb-amor",
    title: "Caja Miski HB❤️AMOR",
    price: "S/60",
    tags: ["premium", "chocolate", "top-ventas"],
    image: "/caja-miski-chocolate-cumple-hb-amor.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski de Cumpleaños HB❤️AMOR". ¿Opciones y precio?',
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 80 },
  },
  {
    id: "LLA-018",
    slug: "correo-postal-feliz-cumple",
    title: "Correo Postal de Chocolate Feliz Cumple",
    price: "S/85",
    tags: ["foto", "chocolate", "dedicatoria", "viral"],
    image: "/correo-postal-chocolate-cumple.jpg",
    waText: "Hola, quiero el Correo Postal de 'Feliz Cumpleaños'. ¿Me das más detalle del producto?",
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 25 },
  },
  {
    id: "LLA-019",
    slug: "caja-miski-chocolate-cumple-hb-guapo",
    title: "Caja Miski HB❤️GUAPO",
    price: "S/60",
    tags: ["premium", "chocolate", "viral"],
    image: "/caja-miski-chocolate-cumple-hb-guapo.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski de Cumpleaños HB❤️GUAPO". ¿Opciones y precio?',
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 80 },
  },
  {
    id: "LLA-020",
    slug: "caja-miski-chocolate-feliz-aniversario",
    title: "Caja Miski Aniversario Mes",
    price: "S/60",
    tags: ["premium", "chocolate", "viral"],
    image: "/caja-miski-chocolate-feliz-aniversario-2m.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski de Aniversario - Mesario". ¿Opciones y precio?',
    occasions: ["aniversario"],
    priority: { aniversario: 80 },
  },
  {
    id: "LLA-021",
    slug: "caja-miski-chocolate-preciosa",
    title: "Caja Miski Preciosa",
    price: "S/60",
    tags: ["premium", "chocolate", "romántico"],
    image: "/caja-miski-chocolate-preciosa.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski con el mensaje Preciosa". ¿Opciones y precio?',
    occasions: ["ocasion_especial"],
    priority: { ocasion_especial: 70 },
  },
  {
    id: "LLA-022",
    slug: "tableta-chocolate-3d",
    title: "Tableta Chocolate Cumpleaños",
    price: "S/55",
    tags: ["premium", "chocolate"],
    image: "/tableta-chocolate-personalizada-cumple.jpg",
    waText: 'Hola, quiero info del regalo "Tableta de Chocolate Personalizada". ¿Opciones y precio?',
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 75 },
  },
  {
    id: "LLA-023",
    slug: "box-brownie-peluche-llamita",
    title: "Pack Choco Brownie y Llamita 🍫🦙 ",
    price: "S/130",
    tags: ["premium", "brownie", "peluche"],
    image: "/pack-choco-brownie-cumple-peluche-llamita.jpg",
    waText: 'Hola, quiero info del regalo "Pack Choco Brownie y peluche de Llamita 🍫🦙". ¿Opciones y precio?',
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 74 },
  },
  {
    id: "LLA-024",
    slug: "choco-brownie-aniversario-ocasion-especial",
    title: "Choco brownie Personalizado",
    price: "S/65",
    tags: ["chocolate", "premium", "brownie"],
    image: "/choco-brownie-personalizado-toto.jpg",
    waText: "Hola, quiero info del 'Choco brownie Personalizado'. ¿Detalles y precio?",
    occasions: ["aniversario", "ocasion_especial"],
    priority: { aniversario: 60, ocasion_especial: 70 },
  },
  {
    id: "LLA-025",
    slug: "caja-miski-chocolate-aniversario-4-años",
    title: "Caja Miski Aniversario Año",
    price: "S/60",
    tags: ["premium", "chocolate", "viral"],
    image: "/caja-miski-chocolate-aniversario-4a.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski de Aniversario - Años". ¿Opciones y precio?',
    occasions: ["aniversario"],
    priority: { aniversario: 60 },
  },
  {
    id: "LLA-026",
    slug: "box-sweet-love-2",
    title: "Box Sweet Love 2 🍫🌹",
    price: "S/197",
    tags: ["premium", "chocolate", "rosas"],
    image: "/caja-rosas-chocolate-cumple-miski-mama.jpg",
    waText: 'Hola, quiero info del regalo "Box Sweet Love 🍫🌹". ¿Opciones y precio?',
    occasions: ["cumpleanos", "ocasion_especial"],
    priority: { cumpleanos: 50, ocasion_especial: 50 },
  },
  {
    id: "LLA-027",
    slug: "caja-miski-chocolate-te-quiero-amor",
    title: "Caja Miski TKM AMOR",
    price: "S/60",
    tags: ["premium", "chocolate", "viral"],
    image: "/caja-miski-chocolate-tqm-amor.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski TKM AMOR". ¿Opciones y precio?',
    occasions: ["aniversario", "ocasion_especial"],
  },
  {
    id: "LLA-028",
    slug: "choco-brownie-cumple-pack",
    title: "Choco brownie Cumple Pack",
    price: "S/65",
    tags: ["viral", "premium", "brownie"],
    image: "/choco-brownie-personalizado-cumple-pack.jpg",
    waText: "Hola, quiero info del 'Choco brownie de Cumple Pack'. ¿Detalles y precio?",
    occasions: ["cumpleanos"],
  },
  {
    id: "LLA-029",
    slug: "caja-acrilica-oso-3d-chocolate",
    title: "Oso 3D de Chocolate con nombre",
    price: "S/85",
    tags: ["premium", "chocolate", "viral"],
    image: "/oso-3d-chocolate-personalizado-nombre.jpg",
    waText: "Hola, quiero la 'Caja Acrílica con el Oso 3D en chocolate'. ¿Me das más detalle del producto?",
    occasions: ["san_valentin", "cumpleanos", "aniversario", "ocasion_especial"],
    priority: { cumpleanos: 40, ocasion_especial: 40 },
  },
  {
    id: "LLA-030",
    slug: "caja-miski-chocolate-yo-amo-papa",
    title: "Caja Miski YO❤️PAPA",
    price: "S/60",
    tags: ["premium", "chocolate", "familia"],
    image: "/caja-miski-chocolate-yo-amo-papa.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski YO❤️PAPA". ¿Opciones y precio?',
    occasions: ["ocasion_especial"],
  },
  {
    id: "LLA-031",
    slug: "caja-miski-chocolate-futbol-universitario",
    title: "Caja Miski PAPA CREMA",
    price: "S/70",
    tags: ["premium", "chocolate", "YdaleU"],
    image: "/caja-miski-chocolate-papa-y-dale-u-crema-universitario-futbol.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski PAPA CREMA". ¿Opciones y precio?',
    occasions: ["ocasion_especial"],
  },
  {
    id: "LLA-032",
    slug: "caja-miski-chocolate-futbol-alianza-lima",
    title: "Caja Miski PAPA INTIMO",
    price: "S/70",
    tags: ["premium", "chocolate", "Intimo"],
    image: "/caja-miski-chocolate-papa-alianza-lima-intimo-futbol.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski PAPA INTIMO". ¿Opciones y precio?',
    occasions: ["ocasion_especial"],
  },
  {
    id: "LLA-033",
    slug: "caja-miski-chocolate-dia-especial-estrella",
    title: "Caja Miski Día Especial",
    price: "S/60",
    tags: ["premium", "chocolate", "especial"],
    image: "/caja-miski-chocolate-dia-especial-estrella.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski Día Especial". ¿Opciones y precio?',
    occasions: ["ocasion_especial"],
    priority: { ocasion_especial: 45 },
  },
  {
    id: "LLA-034",
    slug: "choco-brownie-aniversario-cumple-mes",
    title: "Choco brownie Aniversario Mes",
    price: "S/65",
    tags: ["chocolate", "premium", "brownie"],
    image: "/choco-brownie-anivesario-cumple-mes.jpg",
    waText: "Hola, quiero info del 'Choco brownie de Anivesario para Cumple Mes'. ¿Detalles y precio?",
    occasions: ["aniversario"],
    priority: { aniversario: 55 },
  },
  {
    id: "LLA-035",
    slug: "choco-brownie-aniversario-amor",
    title: "Choco brownie Aniversario Amor",
    price: "S/65",
    tags: ["chocolate", "premium", "brownie"],
    image: "/choco-brownie-aniversario-amor.jpg",
    waText: "Hola, quiero info del 'Choco brownie de Anivesario Amor'. ¿Detalles y precio?",
    occasions: ["aniversario"],
    priority: { aniversario: 25 },
  },
  {
    id: "LLA-036",
    slug: "caja-miski-chocolate-fecha-especial",
    title: "Caja Miski Fecha Especial",
    price: "S/60",
    tags: ["premium", "chocolate", "top-ventas"],
    image: "/caja-miski-chocolate-fecha-especial.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski Fecha Especial". ¿Opciones y precio?',
    occasions: ["aniversario", "ocasion_especial"],
    priority: { aniversario: 25, ocasion_especial: 25 },
  },
  {
    id: "LLA-037",
    slug: "correo-postal-chocolate-san-valentin",
    title: "Correo Postal de San Valentín",
    price: "S/85",
    tags: ["foto", "chocolate", "dedicatoria", "viral"],
    image: "/correo-postal-chocolate-san-valentin.jpg",
    waText: "Hola, quiero el Correo Postal de San Valentín. ¿Me das más detalle del producto?",
    occasions: ["san_valentin"],
  },
  {
    id: "LLA-038",
    slug: "correo-postal-chocolate-cumple",
    title: "Correo Postal de Cumpleaños 🎈",
    price: "S/85",
    tags: ["foto", "chocolate", "dedicatoria", "viral"],
    image: "/correo-postal-chocolate-personalizado-cumple.jpg",
    waText: "Hola, quiero el Correo Postal de Cumpleaños ¿Me das más detalle del producto?",
    occasions: ["cumpleanos"],
    priority: { cumpleanos: 60 },
  },
  {
    id: "LLA-039",
    slug: "choco-brownie-personalizado-san-valentin-1",
    title: "Choco brownie San Valentín ❤️",
    price: "S/65",
    tags: ["chocolate", "premium", "brownie"],
    image: "/choco-brownie-personalizado-san-valentin-1.jpg",
    waText: "Hola, quiero info del 'Choco brownie San Valentín ❤️'. ¿Detalles y precio?",
    occasions: ["san_valentin", "aniversario"],
  },
  {
    id: "LLA-040",
    slug: "caja-miski-chocolate-anivesario-meses",
    title: "Caja Miski Mesario",
    price: "S/60",
    tags: ["premium", "chocolate", "top-ventas"],
    image: "/caja-miski-chocolate-aniversario-14-meses.jpg",
    waText: 'Hola, quiero info del regalo "Caja Miski Cumple Mes". ¿Opciones y precio?',
    occasions: ["aniversario"],
    priority: { aniversario: 35 },
  },
 {
    id: "LLA-041",
    slug: "choco-brownie-personalizado-san-valentin",
    title: "Choco brownie San Valentín ❤️❤️",
    price: "S/65",
    tags: ["chocolate", "premium", "brownie"],
    image: "/choco-brownie-personalizado-san-valentin-2.jpg",
    waText: "Hola, quiero info del 'Choco brownie San Valentín ❤️'. ¿Detalles y precio?",
    occasions: ["san_valentin", "aniversario"],
  },
];

// ===== SANITY CHECK (solo en DEV) =====
if (process.env.NODE_ENV !== "production") {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  const dupIds: string[] = [];
  const dupSlugs: string[] = [];

  for (const p of productos) {
    if (ids.has(p.id)) dupIds.push(p.id);
    ids.add(p.id);

    if (slugs.has(p.slug)) dupSlugs.push(p.slug);
    slugs.add(p.slug);

    // Recomendación: evita espacios/mayúsculas en rutas
    if (/\s/.test(p.image)) {
      // eslint-disable-next-line no-console
      console.warn(`[catalog] Imagen con espacios: ${p.id} -> "${p.image}"`);
    }
  }

  if (dupIds.length) {
    // eslint-disable-next-line no-console
    console.warn("[catalog] IDs duplicados:", dupIds);
  }
  if (dupSlugs.length) {
    // eslint-disable-next-line no-console
    console.warn("[catalog] Slugs duplicados:", dupSlugs);
  }
}
