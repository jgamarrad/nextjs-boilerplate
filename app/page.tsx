// app/page.tsx
import type { Metadata } from "next";
import PageClient from "./PageClient";
import { OG_BY_OCCASION, normalizeOccasion } from "@/lib/og";
import type { OccasionKey } from "@/lib/types";

export const dynamic = "force-dynamic";

const SITE_URL = "https://sv.lallamadelamor.pe";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { ocasion?: string };
}): Promise<Metadata> {
  const occasion = normalizeOccasion(searchParams?.ocasion);
  const og = OG_BY_OCCASION[occasion];

  const pageUrl = `${SITE_URL}/?ocasion=${occasion}`;
  const imageUrl = og.imagePath.startsWith("http") ? og.imagePath : `${SITE_URL}${og.imagePath}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: og.title,
    description: og.description,
    alternates: { canonical: pageUrl },
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
  };
}

export default function Page({
  searchParams,
}: {
  searchParams: { ocasion?: string };
}) {
  const initialOccasion = normalizeOccasion(searchParams?.ocasion) as OccasionKey;
  return <PageClient initialOccasion={initialOccasion} />;
}
