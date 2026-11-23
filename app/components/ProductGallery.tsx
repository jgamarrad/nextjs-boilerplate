// app/components/ProductGallery.tsx
// Foto principal del producto + miniaturas de las fotos adicionales.
"use client";

import Image from "next/image";
import { useState } from "react";
import type { Foto } from "@/lib/fotos";

export default function ProductGallery({ fotos }: { fotos: Foto[] }) {
  const [activa, setActiva] = useState(0);
  const foto = fotos[activa] ?? fotos[0];

  return (
    <div className="card p-4">
      <div className="relative overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]">
        <Image
          key={foto.src}
          src={foto.src}
          alt={foto.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) calc(100vw - 80px), 560px"
          priority={activa === 0}
        />
      </div>

      {fotos.length > 1 && (
        <div className="mt-3 flex gap-3" role="group" aria-label="Fotos del producto">
          {fotos.map((f, i) => (
            <button
              key={f.src}
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${i + 1}: ${f.alt}`}
              aria-pressed={activa === i}
              className={`relative h-20 w-16 overflow-hidden rounded-lg border bg-black/20 transition ${
                activa === i ? "border-[var(--gold)] ring-2 ring-[var(--gold)]" : "border-llama-line opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={f.src} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
