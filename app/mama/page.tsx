// app/mama/page.tsx
import type { Metadata } from "next";
import PageClient from "@/app/PageClient";

const SITE_URL = "https://sv.lallamadelamor.pe";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Regalos para Mamá | La Llama del Amor",
  description: "Detalles personalizados para mamá: chocolates con foto, correos postales y tabletas con dedicatoria. Sorpréndela con delivery en Lima.",

  alternates: {
    canonical: "/mama",
  },

  openGraph: {
    type: "website",
    title: "Regalos para Mamá | La Llama del Amor",
    description: "Detalles personalizados para mamá: chocolates con foto, correos postales y tabletas con dedicatoria. Sorpréndela con delivery en Lima.",
    url: "/mama",
    siteName: "La Llama del Amor",
    locale: "es_PE",
    images: [
      {
        url: "/og-mama.jpg",
        width: 1200,
        height: 630,
        alt: "Regalos para Mamá | La Llama del Amor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Regalos para Mamá | La Llama del Amor",
    description: "Detalles personalizados para mamá: chocolates con foto, correos postales y tabletas con dedicatoria. Sorpréndela con delivery en Lima.",
    images: ["/og-mama.jpg"],
  },

  // Opcional: elimina warnings de Meta si tienes App ID
  // other: {
  //   "fb:app_id": "TU_APP_ID",
  // },
};

export default function Page() {
  return <PageClient initialOccasion="mama" />;
}
