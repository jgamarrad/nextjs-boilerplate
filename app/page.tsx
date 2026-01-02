// app/page.tsx
import type { Metadata } from "next";
import PageClient from "./PageClient";

export const dynamic = "force-dynamic";

const SITE_URL = "https://sv.lallamadelamor.pe";

type OccasionKey = "san_valentin" | "cumpleanos" | "aniversario" | "ocasion_especial";

const OCC_KEYS: OccasionKey[] = ["san_valentin", "cumpleanos", "aniversario", "ocasion_especial"];

function normalizeOccasion(v: unknown): OccasionKey {
  if (typeof v !== "string") return "san_valentin";
  return OCC_KEYS.includes(v as OccasionKey) ? (v as OccasionKey) : "san_valentin";
}

const OG_BY_OCCASION: Record<
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

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { ocasion?: string };
}): Promise<Metadata> {
  const occasion = normalizeOccasion(searchParams?.ocasion);
  const og = OG_BY_OCCASION[occasion];

  return {
    metadataBase: new URL(SITE_URL),
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: `/?ocasion=${occasion}`,
      siteName: "La Llama del Amor",
      type: "website",
      images: [{ url: og.imagePath, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: og.description,
      images: [og.imagePath],
    },
  };
}

export default function Page() {
  return <PageClient />;
}
