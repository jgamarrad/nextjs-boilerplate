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

// "S/60" -> "de S/60" · "Desde S/65" -> "desde S/65"
function pricePhrase(price: string) {
  const p = price.trim();
  return /^desde/i.test(p) ? `desde ${p.replace(/^desde\s*/i, "")}` : `de ${p}`;
}

export function waProductText(p: Pick<Product, "id" | "title" | "price">) {
  return `Hola, me interesa el regalo ${p.title} (${p.id}) ${pricePhrase(
    p.price
  )}. ¿Está disponible para el día ___?`;
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
    q: "¿Hacen delivery a todo Lima?",
    a: "Entregamos en Lima Metropolitana. El costo de envío depende del distrito y te lo confirmamos al cotizar por WhatsApp.",
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
