// app/cumpleanos/page.tsx
import type { Metadata } from "next";
import PageClient from "@/app/PageClient";

const SITE_URL = "https://sv.lallamadelamor.pe";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Regalos de Cumpleaños | La Llama del Amor",
  description: "Sorprende con regalos personalizados premium. Entrega en Lima.",

  alternates: {
    canonical: "/cumpleanos",
  },

  openGraph: {
    type: "website",
    title: "Regalos de Cumpleaños | La Llama del Amor",
    description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
    url: "/cumpleanos",
    siteName: "La Llama del Amor",
    locale: "es_PE",
    images: [
      {
        url: "/og-cumpleanos.jpg",
        width: 1200,
        height: 630,
        alt: "Regalos de Cumpleaños | La Llama del Amor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Regalos de Cumpleaños | La Llama del Amor",
    description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
    images: ["/og-cumpleanos.jpg"],
  },

  // Opcional: elimina warnings de Meta si tienes App ID
  // other: {
  //   "fb:app_id": "TU_APP_ID",
  // },
};

export default function Page() {
  return <PageClient initialOccasion="cumpleanos" />;
}
