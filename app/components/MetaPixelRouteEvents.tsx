// app/components/MetaPixelRouteEvents.tsx
// El script base del píxel registra el PageView de la primera carga.
// Al navegar dentro del sitio (de /cumpleanos a una ficha, por ejemplo) la página
// no se recarga, así que aquí se registra el PageView de cada cambio de ruta.
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixelRouteEvents() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}

// Evento ViewContent de una ficha de producto (id = código del catálogo de Meta)
export function MetaViewContent({
  id,
  name,
  value,
}: {
  id: string;
  name: string;
  value: number;
}) {
  useEffect(() => {
    // Espera a que el script del píxel haya cargado
    let tries = 0;
    const timer = setInterval(() => {
      tries++;
      if (window.fbq) {
        window.fbq("track", "ViewContent", {
          content_ids: [id],
          content_type: "product",
          content_name: name,
          value,
          currency: "PEN",
        });
        clearInterval(timer);
      } else if (tries > 20) {
        clearInterval(timer);
      }
    }, 250);
    return () => clearInterval(timer);
  }, [id, name, value]);

  return null;
}
