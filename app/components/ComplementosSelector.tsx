// app/components/ComplementosSelector.tsx
// "Complementa tu regalo": el cliente marca complementos y el mensaje de
// WhatsApp los incluye con el total estimado.
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Complemento } from "@/lib/complementos";
import { waLink, waProductText, priceNumber } from "@/lib/site";
import type { Product } from "@/lib/catalog";

export default function ComplementosSelector({
  producto,
  complementos,
}: {
  producto: Pick<Product, "id" | "title" | "price" | "slug">;
  complementos: Omit<Complemento, "yaIncluidoSi">[];
}) {
  const [elegidos, setElegidos] = useState<string[]>([]);
  if (complementos.length === 0) return null;

  const sel = complementos.filter((c) => elegidos.includes(c.id));
  const base = priceNumber(producto.price);
  const desde = /^desde/i.test(producto.price.trim());
  const total = base + sel.reduce((s, c) => s + c.precio, 0);

  function toggle(id: string) {
    setElegidos((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  // Mensaje: el del producto + complementos + total
  const mensaje = sel.length
    ? waProductText(producto).replace(
        "\n\n📅",
        `\n\n${sel.map((c) => `➕ ${c.nombre} (+S/${c.precio})`).join("\n")}\n💰 Total estimado: ${desde ? "desde " : ""}S/${total} + envío\n\n📅`
      )
    : waProductText(producto);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-14" aria-labelledby="complementos-titulo">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 id="complementos-titulo" className="section-title gold-text">
            Complementa tu regalo
          </h2>
          <p className="mt-1 text-sm text-llama-muted">
            Marca lo que quieras sumar y lo agregamos a tu pedido.
          </p>
        </div>
        <Link href="/complementos" className="text-sm underline text-white/80 shrink-0">
          Ver todos
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        {complementos.map((c) => {
          const activo = elegidos.includes(c.id);
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => toggle(c.id)}
              aria-pressed={activo}
              className={`card p-3 text-left transition ${
                activo ? "ring-2 ring-[var(--gold)]" : "hover:opacity-100 opacity-90"
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-black/20">
                <Image
                  src={c.fotos[0].src}
                  alt={c.fotos[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 200px"
                />
              </div>
              <div className="mt-2 text-sm font-semibold leading-snug">{c.nombre}</div>
              <div className="text-sm text-white/80">+S/{c.precio}</div>
              <div
                className={`mt-2 rounded-full px-3 py-1 text-center text-xs font-semibold ${
                  activo ? "gold-bg text-black" : "border border-llama-line text-white/80"
                }`}
              >
                {activo ? "✓ Agregado" : "+ Agregar"}
              </div>
            </button>
          );
        })}
      </div>

      {sel.length > 0 && (
        <div className="card mt-5 flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/80">
            {producto.title} + {sel.map((c) => c.nombre).join(" + ")}
            <div className="mt-1 text-lg font-semibold text-white">
              Total estimado: {desde ? "desde " : ""}S/{total}{" "}
              <span className="text-sm font-normal text-white/60">+ envío</span>
            </div>
          </div>
          <a
            href={waLink(mensaje)}
            target="_blank"
            rel="noreferrer"
            data-product={[producto.id, ...sel.map((c) => c.id)].join(", ")}
            data-origin="ficha-complementos"
            className="btn-primary gold-bg text-black"
          >
            Pedir con complementos
          </a>
        </div>
      )}
    </section>
  );
}
