import "./globals.css";

export const metadata = {
  title: "San Valentín | La Llama del Amor",
  description: "Regalos personalizados premium en Lima. Pedido rápido por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
