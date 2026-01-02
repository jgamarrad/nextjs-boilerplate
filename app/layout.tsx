import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sv.lallamadelamor.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Llama del Amor",
    template: "%s | La Llama del Amor",
  },
  description:
    "Regalos personalizados premium con chocolates, brownies y flores. Entrega en Lima. Pide por WhatsApp.",
  robots: { index: true, follow: true },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
