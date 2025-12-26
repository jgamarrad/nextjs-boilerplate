import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Valentín | La Llama del Amor",
  description:
    "Regalos personalizados premium: chocolates, detalles con foto y sorpresas para San Valentín. Compra rápido por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#070707] text-[#F5F1E8] antialiased">
        {children}
      </body>
    </html>
  );
}
