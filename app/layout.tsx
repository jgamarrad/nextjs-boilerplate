import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regalos San Valentín - La Llama del Amor",
  description: "Chocolates, detalles con foto y presentación premium. Pedidos por WhatsApp. Entrega en Lima.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
