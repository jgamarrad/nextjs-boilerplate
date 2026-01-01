import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sv.lallamadelamor.pe";
const ogImage = `${siteUrl}/og.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Regalos San Valentín - La Llama del Amor",
    template: "%s | La Llama del Amor",
  },
  description:
    "Regalos personalizados premium con chocolates, brownies y flores. Entrega en Lima. Pide por WhatsApp.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
    openGraph: {
    title: "La Llama del Amor – Regalos personalizados premium",
    description:
      "Sorprende con regalos personalizados premium. Entrega en Lima.",
    url: "https://sv.lallamadelamor.pe",
    siteName: "La Llama del Amor",
    images: [
      {
        url: "https://sv.lallamadelamor.pe/og.jpg",
        width: 1200,
        height: 630,
        alt: "La Llama del Amor – Regalos personalizados premium",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regalos San Valentín - La Llama del Amor",
    description:
      "Regalos personalizados premium con chocolates, brownies y flores. Entrega en Lima. Pide por WhatsApp.",
    images: ["https://sv.lallamadelamor.pe/og.jpg"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
