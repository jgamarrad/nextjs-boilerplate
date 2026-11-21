import type { NextConfig } from "next";

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
