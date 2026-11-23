import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import MetaPixelRouteEvents from "@/app/components/MetaPixelRouteEvents";

const siteUrl = "https://sv.lallamadelamor.pe";

// ID de medición de Google Analytics 4 (flujo "Catálogo")
const GA_MEASUREMENT_ID = "G-7CEPYFRF30";

// ID del Píxel de Meta ("Píxel de La llama del amor"), conectado al catálogo de Meta
const META_PIXEL_ID = "282420846070621";

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
                  // Código del producto (ej. LLA-029) y de dónde vino el clic
                  // (catalogo, ficha, relacionado, seleccion...). Sin producto: "general".
                  product_id: link.dataset.product || 'general',
                  click_origin: link.dataset.origin || 'general',
                });
              }
            });
          `}
        </Script>
        {/* Píxel de Meta (Píxel de La llama del amor) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');

            // Clic en WhatsApp = evento "Contact". Si el botón es de un producto,
            // se envía su código (LLA-xxx), que coincide con el id del catálogo de Meta.
            document.addEventListener('click', function (e) {
              var link = e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
              if (!link || !window.fbq) return;
              var ids = (link.dataset.product || '').split(/,\\s*/).filter(function (x) {
                return /^(LLA|COMP)-\\d+$/.test(x);
              });
              if (ids.length) {
                fbq('track', 'Contact', { content_ids: ids, content_type: 'product' });
              } else {
                fbq('track', 'Contact');
              }
            });
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} />
        </noscript>
        <MetaPixelRouteEvents />
      </body>
    </html>
  );
}
