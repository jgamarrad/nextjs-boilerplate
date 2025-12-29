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
    "Regalos personalizados premium con foto, chocolates y dedicatoria. Entrega en Lima. Pide por WhatsApp.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    title: "Regalos San Valentín - La Llama del Amor",
    description:
      "Regalos personalizados premium con foto, chocolates y dedicatoria. Entrega en Lima. Pide por WhatsApp.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "La Llama del Amor" }],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regalos San Valentín - La Llama del Amor",
    description:
      "Regalos personalizados premium con foto, chocolates y dedicatoria. Entrega en Lima. Pide por WhatsApp.",
    images: [ogImage],
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
