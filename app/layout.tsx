import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://sv.lallamadelamor.pe";

// ID de medición de Google Analytics 4 (flujo "Catálogo")
const GA_MEASUREMENT_ID = "G-7CEPYFRF30";

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
      <body>
        {children}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            // Rastrea cualquier clic en un enlace de WhatsApp como evento "whatsapp_click"
            document.addEventListener('click', function (e) {
              var link = e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
              if (link) {
                gtag('event', 'whatsapp_click', {
                  link_url: link.href,
                  page_path: window.location.pathname,
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
