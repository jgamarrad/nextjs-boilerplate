import type { Metadata } from "next";
import PageClient from "@/app/PageClient";

export const metadata: Metadata = {
  title: "Regalos de San Valentín | La Llama del Amor",
  description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
  openGraph: {
    title: "Regalos de San Valentín | La Llama del Amor",
    description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
    url: "https://sv.lallamadelamor.pe/san_valentin",
    images: [{ url: "https://sv.lallamadelamor.pe/og-san-valentin.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regalos de San Valentín | La Llama del Amor",
    description: "Sorprende con regalos personalizados premium. Entrega en Lima.",
    images: ["https://sv.lallamadelamor.pe/og-san-valentin.jpg"],
  },
};

export default function Page() {
  return <PageClient initialOccasion="san_valentin" />;
}
