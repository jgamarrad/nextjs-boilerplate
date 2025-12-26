import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Valentín | La Llama del Amor",
  description:
    "Regalos personalizados premium: chocolates, detalles con foto y sorpresas para San Valentín. Compra rápido por WhatsApp.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
