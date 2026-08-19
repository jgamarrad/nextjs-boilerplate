// app/aniversario/page.tsx
import type { Metadata } from "next";
import PageClient from "@/app/PageClient";

const SITE_URL = "https://sv.lallamadelamor.pe";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Regalos de Aniversario | La Llama del Amor",
  description: "Regalos de aniversario personalizados: chocolates con foto, rosas y combos románticos. Ideal para celebrar meses o años juntos. Delivery en Lima.",

  alternates: {
    canonical: "/aniversario",
  },

  openGraph: {
    type: "website",
    title: "Regalos de Aniversario | La Llama del Amor",
    description: "Regalos de aniversario personalizados: chocolates con foto, rosas y combos románticos. Ideal para celebrar meses o años juntos. Delivery en Lima.",
    url: "/aniversario",
    siteName: "La Llama del Amor",
    locale: "es_PE",
    images: [
      {
        url: "/og-aniversario.jpg",
        width: 1200,
        height: 630,
        alt: "Regalos de Aniversario | La Llama del Amor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Regalos de Aniversario | La Llama del Amor",
    description: "Regalos de aniversario personalizados: chocolates con foto, rosas y combos románticos. Ideal para celebrar meses o años juntos. Delivery en Lima.",
    images: ["/og-aniversario.jpg"],
  },

  // Opcional: elimina warnings de Meta si tienes App ID
  // other: {
  //   "fb:app_id": "TU_APP_ID",
  // },
};

export default function Page() {
  return <PageClient initialOccasion="aniversario" />;
}
