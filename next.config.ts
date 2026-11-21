import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF pesa ~30-50% menos que WebP; el navegador que no lo soporte recibe WebP
    formats: ["image/avif", "image/webp"],
    // Las fotos no cambian a menudo: se guardan en caché 30 días
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
