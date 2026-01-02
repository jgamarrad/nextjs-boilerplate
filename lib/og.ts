// lib/og.ts
import type { OccasionKey } from "./types";

export const OG_BY_OCCASION: Record<
  OccasionKey,
  { title: string; description: string; imagePath: string }
> = {
  san_valentin: {
    title: "Regalos San Valentín | La Llama del Amor",
    description: "Regalos personalizados premium. Entrega en Lima.",
    imagePath: "/og-san-valentin.jpg",
  },
  cumpleanos: {
    title: "Regalos de Cumpleaños | La Llama del Amor",
    description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
    imagePath: "/og-cumpleanos.jpg",
  },
  aniversario: {
    title: "Regalos de Aniversario | La Llama del Amor",
    description: "Celebra con regalos personalizados premium. Entrega en Lima.",
    imagePath: "/og-aniversario.jpg",
  },
  ocasion_especial: {
    title: "Regalos para Ocasiones Especiales | La Llama del Amor",
    description: "Detalles premium personalizados. Entrega en Lima.",
    imagePath: "/og-ocasion-especial.jpg",
  },
};

export const OCC_KEYS: OccasionKey[] = ["san_valentin", "cumpleanos", "aniversario", "ocasion_especial"];

export function normalizeOccasion(v: unknown): OccasionKey {
  if (typeof v !== "string") return "san_valentin";
  return (OCC_KEYS as string[]).includes(v) ? (v as OccasionKey) : "san_valentin";
}
