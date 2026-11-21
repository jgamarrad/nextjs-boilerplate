import type { NextConfig } from "next";

// Política de contenido: el navegador solo carga scripts, imágenes y conexiones
// de este sitio y de Google Analytics / Meta. Si algún día agregas otro servicio
// externo (un chat, un mapa, un video), hay que sumarlo aquí.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'" +
    (process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "") +
    " https://www.googletagmanager.com https://connect.facebook.net https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.facebook.com https://*.google-analytics.com https://www.googletagmanager.com https://vercel.live https://vercel.com",
  "font-src 'self' data: https://vercel.live",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net https://vercel.live wss://ws-us3.pusher.com",
  "frame-src 'self' https://vercel.live",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

// Cabeceras de seguridad para todas las páginas
const securityHeaders = [
  // Evita que otra web muestre esta página dentro de un iframe (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // El navegador no "adivina" tipos de archivo
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Al salir hacia otra web solo se comparte el dominio, no la URL completa
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // La web no usa cámara, micrófono ni ubicación
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Fuerza HTTPS durante 2 años
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
    // AVIF pesa ~30-50% menos que WebP; el navegador que no lo soporte recibe WebP
    formats: ["image/avif", "image/webp"],
    // Las fotos no cambian a menudo: se guardan en caché 30 días
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
