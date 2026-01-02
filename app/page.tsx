// app/page.tsx
import type { Metadata } from "next";
import PageClient from "./PageClient";

type OccasionKey =
  | "san_valentin"
  | "cumpleanos"
  | "aniversario"
  | "ocasion_especial";

const SITE_URL = "https://sv.lallamadelamor.pe";

const OG_BY_OCCASION: Record<
  OccasionKey,
  { title: string; description: string; image: string }
> = {
  san_valentin: {
    title: "Regalos para San Valentín – La Llama del Amor",
    description:
      "Sorprende este San Valentín con regalos personalizados premium. Entrega en Lima.",
    image: `${SITE_URL}/og/og-san-valentin.jpg`,
  },
  cumpleanos: {
    title: "Regalos de Cumpleaños – La Llama del Amor",
    description:
      "Regalos personalizados de cumpleaños: chocolates, brownies y detalles únicos. Entrega en Lima.",
    image: `${SITE_URL}/og/og-cumpleanos.jpg`,
  },
  aniversario: {
    title: "Regalos de Aniversario – La Llama del Amor",
    description:
      "Celebra tu aniversario con regalos personalizados premium. Entrega en Lima.",
    image: `${SITE_URL}/og/og-aniversario.jpg`,
  },
  ocasion_especial: {
    title: "Regalos para Ocasiones Especiales – La Llama del Amor",
    description:
      "Detalles únicos para fechas especiales. Regalos personalizados premium. Entrega en Lima.",
    image: `${SITE_URL}/og/og-ocasion-especial.jpg`,
  },
};

function isOccasionKey(v?: string): v is OccasionKey {
  return !!v && v in OG_BY_OCCASION;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { ocasion?: string };
}): Promise<Metadata> {
  const occasion = isOccasionKey(searchParams.ocasion)
    ? (searchParams.ocasion as OccasionKey)
    : undefined;

  const fallback = {
    title: "La Llama del Amor – Regalos personalizados premium",
    description:
      "Regalos personalizados premium para cumpleaños, aniversarios y ocasiones especiales. Entrega en Lima.",
    image: `${SITE_URL}/og/og-default.jpg`,
  };

  const og = occasion ? OG_BY_OCCASION[occasion] : fallback;

  const url = occasion
    ? `${SITE_URL}/?ocasion=${occasion}`
    : `${SITE_URL}/`;

  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url,
      siteName: "La Llama del Amor",
      images: [{ url: og.image, width: 1200, height: 630, alt: og.title }],
      locale: "es_PE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: og.description,
      images: [og.image],
    },
  };
}

export default function Page() {
  return <PageClient />;
}
