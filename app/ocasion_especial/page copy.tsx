import type { Metadata } from "next";
import PageClient from "@/app/PageClient";

export const metadata: Metadata = {
  title: "Regalos para Ocasiones Especiales | La Llama del Amor",
  description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
  openGraph: {
    title: "Regalos para Ocasiones Especiales | La Llama del Amor",
    description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
    url: "https://sv.lallamadelamor.pe/ocasion_especial",
    images: [{ url: "https://sv.lallamadelamor.pe/og-ocasion_especial.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regalos para Ocasiones Especiales | La Llama del Amor",
    description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
    images: ["https://sv.lallamadelamor.pe/og-ocasion_especial.jpg"],
  },
};

export default function Page() {
  return <PageClient initialOccasion="ocasion_especial" />;
}
