import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Valentín | La Llama del Amor",
  description: "Regalos personalizados premium para San Valentín. Compra por WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
