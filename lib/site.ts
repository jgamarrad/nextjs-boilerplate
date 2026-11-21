// lib/site.ts
// Datos y utilidades compartidas por todas las páginas del catálogo.

import type { Product } from "@/lib/catalog";

export const SITE_URL = "https://sv.lallamadelamor.pe";
export const LANDING_URL = "https://lallamadelamor.pe";
export const INSTAGRAM_URL = "https://instagram.com/lallamadelamor.pe";
export const WHATSAPP_NUMBER = "51984096041";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ===== Mensajes de WhatsApp =====
// Formato de WhatsApp: *texto* = negrita. Evitar "_" (WhatsApp lo usa para cursiva).

// "S/60" -> "S/60" · "Desde S/65" -> "desde S/65"
function priceLabel(price: string) {
  const p = price.trim();
  return /^desde/i.test(p) ? `desde ${p.replace(/^desde\s*/i, "")}` : p;
}

// Mensaje de un producto. Incluye el link a su ficha para que WhatsApp
// muestre la foto del producto en el chat.
export function waProductText(p: Pick<Product, "id" | "title" | "price" | "slug">) {
  return [
    "¡Hola! 🦙💛 Me encantó este regalo de su catálogo:",
    `*${p.title.trim()}* (${p.id} · ${priceLabel(p.price)})`,
    `${SITE_URL}/regalo/${p.slug}`,
    "",
    "📅 Lo necesito para el:",
    "📍 Distrito de entrega:",
  ].join("\n");
}

// Pedido general (botones "Pedir por WhatsApp"). ocasion = "de cumpleaños", "para mamá"...; null en /inicio
export function waGeneralText(ocasion: string | null) {
  return [
    `¡Hola! 🦙💛 Estoy buscando un regalo${ocasion ? ` ${ocasion}` : ""} y me gustaría que me ayuden a elegir.`,
    "",
    "📅 Lo necesito para el:",
    "📍 Distrito de entrega:",
  ].join("\n");
}

// Botón "Cotizar por WhatsApp"
export function waCotizarText(ocasion: string | null) {
  return [
    `¡Hola! 🦙💛 Quiero cotizar un regalo${ocasion ? ` ${ocasion}` : ""}.`,
    "",
    "💰 Mi presupuesto es de:",
    "📅 Lo necesito para el:",
  ].join("\n");
}

// Respuesta desde un link de selección
export function waSeleccionText(codigos: string) {
  return codigos
    ? `¡Hola! 🦙💛 Vi las opciones que me enviaron (${codigos}).\n\nMe gustó:`
    : waGeneralText(null);
}

// Recordatorio de fechas
export function waRecordatorioText(para: string, ocasion: string, fecha: string) {
  return [
    "¡Hola! 🦙💛 Quiero que me recuerden una fecha especial:",
    "",
    `👤 Para: ${para}`,
    `🎉 Ocasión: ${ocasion}`,
    `📅 Fecha: ${fecha}`,
    "",
    "Escríbanme una semana antes con ideas de regalo 🎁",
  ].join("\n");
}

// Precio numérico de "S/60", "Desde S/65", "S/320"
export function priceNumber(price: string): number {
  const m = price.match(/(\d+(?:[.,]\d+)?)/);
  return m ? Number(m[1].replace(",", ".")) : 0;
}

// ===== Filtros por precio =====
export type PriceFilterKey = "todos" | "hasta-70" | "70-120" | "premium";

export const PRICE_FILTERS: { key: PriceFilterKey; label: string; test: (n: number) => boolean }[] = [
  { key: "todos", label: "Todos", test: () => true },
  { key: "hasta-70", label: "Hasta S/70", test: (n) => n <= 70 },
  { key: "70-120", label: "S/71 – S/120", test: (n) => n > 70 && n <= 120 },
  { key: "premium", label: "Premium (más de S/120)", test: (n) => n > 120 },
];

// ===== Costos de envío =====
export const ENVIOS: { precio: string; distritos: string[] }[] = [
  { precio: "S/12", distritos: ["Miraflores", "San Isidro"] },
  {
    precio: "S/15",
    distritos: ["Jesús María", "Pueblo Libre", "San Miguel", "San Borja", "Surco", "Surquillo", "Barranco"],
  },
];
export const ENVIO_DESDE = "S/12";
export const WA_CONSULTA_ENVIO =
  "¡Hola! 🦙 Quisiera saber cuánto cuesta el envío a mi distrito.\n\n📍 Distrito:";

// ===== Cómo comprar =====
export const PASOS_COMPRA = [
  {
    titulo: "Elige tu regalo",
    texto: "Escríbenos por WhatsApp con el código del producto.",
  },
  {
    titulo: "Personalízalo",
    texto: "Nombre, mensaje, foto o colores. Te confirmamos el diseño antes de producir.",
  },
  {
    titulo: "Reserva con el 50%",
    texto: "El otro 50% se paga cuando tu regalo está listo, antes del envío.",
  },
  {
    titulo: "Recibe o recoge",
    texto: "Delivery a tu distrito o recojo en Miraflores, previa coordinación.",
  },
];

// ===== Preguntas frecuentes (visibles + schema FAQPage) =====
export const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Con cuánta anticipación debo pedir?",
    a: "Pide con al menos 1 día de anticipación. Si lo necesitas para hoy, escríbenos: hacemos entregas el mismo día según disponibilidad.",
  },
  {
    q: "¿Cómo reservo mi pedido?",
    a: "Con el 50% del total. El otro 50% se paga cuando tu regalo está listo, antes del envío.",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Yape, Plin, transferencia bancaria y tarjeta de crédito (te enviamos un link seguro de Mercado Pago). No trabajamos con pago contra entrega.",
  },
  {
    q: "¿Cuánto cuesta el envío?",
    a: "Miraflores y San Isidro: S/12. Jesús María, Pueblo Libre, San Miguel, San Borja, Surco, Surquillo y Barranco: S/15. Para otros distritos de Lima te cotizamos por WhatsApp según la dirección exacta.",
  },
  {
    q: "¿En qué horario entregan?",
    a: "De lunes a sábado, de 9:00 a. m. a 8:00 p. m. Domingos y feriados, según disponibilidad. Coordinamos la hora exacta contigo.",
  },
  {
    q: "¿Puedo recoger mi pedido?",
    a: "Sí, puedes recogerlo en Miraflores, previa coordinación por WhatsApp.",
  },
];

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
