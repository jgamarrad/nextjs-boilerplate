// app/page.tsx
import type { Metadata } from "next";
import PageClient from "./PageClient";
import type { OccasionKey } from "@/lib/types";


export const dynamic = "force-dynamic";


const SITE_URL = "https://sv.lallamadelamor.pe";


const OG_BY_OCCASION: Record<OccasionKey, { title: string; description: string; imagePath: string }> = {
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

function normalizeOccasion(v: unknown): OccasionKey {
  if (v === "cumpleanos" || v === "aniversario" || v === "ocasion_especial" || v === "san_valentin") return v;
  return "san_valentin";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { ocasion?: string };
}): Promise<Metadata> {
  const occasion = normalizeOccasion(searchParams?.ocasion);
  const og = OG_BY_OCCASION[occasion];

  const pageUrl = `${SITE_URL}/?ocasion=${occasion}`;
  const imageUrl = `${SITE_URL}${og.imagePath}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: pageUrl,
      siteName: "La Llama del Amor",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: og.description,
      images: [imageUrl],
    },
    alternates: { canonical: pageUrl },
  };
}

export default function Page({
  searchParams,
}: {
  searchParams?: { ocasion?: string };
}) {
  const occasion = normalizeOccasion(searchParams?.ocasion);
  return <PageClient initialOccasion={occasion} />;
}
