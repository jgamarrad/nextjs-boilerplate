// app/PageClient.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { OccasionKey } from "@/lib/types";

import {
  OCCASIONS,
  productos,
  sortByOccasionPriority,
  type Product,
} from "@/lib/catalog";

const WHATSAPP_NUMBER = "51984096041";
const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

function waLink(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

function waProductText(p: Pick<Product, "id" | "title" | "slug">) {
  return `Hola!
Quiero el producto ${p.id} – ${p.title}

Detalle del producto:
Presupuesto:
¿Se puede personalizar?:
¿Qué incluye el producto?:`;
}

export default function PageClient({
  initialOccasion,
}: {
  initialOccasion: OccasionKey;
}) {
  const router = useRouter();

  const [occasion, setOccasion] = useState<OccasionKey>(initialOccasion);
  const [visible, setVisible] = useState(12);

  const onSelectOccasion = (key: OccasionKey) => {
    setOccasion(key);
    setVisible(12);
    router.push(`/${key}`);
  };

  const current = OCCASIONS[occasion];

  const productosMostrar = useMemo(() => {
    const filtered = productos
      .filter((p) => p.occasions.includes(occasion))
      .slice()
      .sort((a, b) => sortByOccasionPriority(a, b, occasion));

    // Si quieres “sin fallback”, déjalo en 0
    const MIN_ITEMS = 0;
    if (filtered.length >= MIN_ITEMS) return filtered;

    const extras = productos
      .filter((p) => !filtered.some((f) => f.id === p.id))
      .slice()
      .sort((a, b) => sortByOccasionPriority(a, b, occasion))
      .slice(0, MIN_ITEMS - filtered.length);

    return [...filtered, ...extras];
  }, [occasion]);

  const productosVisibles = useMemo(
    () => productosMostrar.slice(0, visible),
    [productosMostrar, visible]
  );

  const chips = useMemo(
    () => Object.keys(OCCASIONS) as OccasionKey[],
    []
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 overflow-hidden rounded-full gold-border border bg-white/5 shrink-0">
              <Image
                src="/logo.png"
                alt="La Llama del Amor"
                fill
                className="object-contain p-1"
                priority
                sizes="56px"
              />
            </div>

            <div className="min-w-0">
              <div className="text-sm tracking-[0.22em] uppercase text-llama-muted whitespace-nowrap overflow-hidden text-ellipsis">
                LA LLAMA DEL AMOR
              </div>
              <div className="text-sm text-llama-muted whitespace-nowrap overflow-hidden text-ellipsis">
                Catálogo · Entrega en Lima
              </div>
            </div>
          </div>

          <a
            className="btn-secondary gold-border shrink-0 hidden sm:inline-flex"
            href={waLink(
              `Hola, quiero hacer un pedido para ${current.label}. ¿Me ayudas a elegir un regalo?`
            )}
            target="_blank"
            rel="noreferrer"
          >
            Pedir por WhatsApp
          </a>
        </div>

        <a
          className="btn-secondary gold-border mt-4 w-full sm:hidden"
          href={waLink(
            `Hola, quiero hacer un pedido para ${current.label}. ¿Me ayudas a elegir un regalo?`
          )}
          target="_blank"
          rel="noreferrer"
        >
          Pedir por WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-10 hero-gold">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Regalos personalizados{" "}
              <span className="block text-llama-muted">para todo el año.</span>
            </h1>

            <p className="mt-4 max-w-xl text-llama-muted">
              Chocolates, brownies y detalles premium para cumpleaños,
              aniversarios y ocasiones especiales. Compra rápida por WhatsApp.
              Entrega en Lima.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {chips.map((key) => (
                <button
                  key={key}
                  onClick={() => onSelectOccasion(key)}
                  className={`pill transition ${
                    occasion === key ? "gold-bg text-black" : ""
                  }`}
                >
                  {OCCASIONS[key].chip}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn-primary w-full sm:w-auto" href="#catalogo">
                Explorar regalos
              </a>

              <a
                className="btn-secondary gold-border w-full sm:w-auto"
                href={waLink(current.waText)}
                target="_blank"
                rel="noreferrer"
              >
                {current.ctaText}
              </a>
            </div>
          </div>

          <div className="card relative overflow-hidden p-4">
            <div className="relative w-full overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]">
              <Image
                src={current.heroImg}
                alt={`Regalo ${current.label} - La Llama del Amor`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title gold-text">
              Catálogo de {current.label}
            </h2>
            <p className="mt-1 text-llama-muted">
              Regalos seleccionados especialmente para{" "}
              {current.label.toLowerCase()}.
            </p>
          </div>

          <a
            className="btn-secondary gold-border w-full sm:w-auto"
            href={waLink(
              `Hola, quiero cotizar un regalo para ${current.label}. ¿Me ayudas con precios y opciones?`
            )}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {productosVisibles.map((p, idx) => (
            <article key={p.id} className="card p-4">
              <div className="relative overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 360px"
                  quality={75}
                  loading={idx < 3 ? "eager" : "lazy"}
                  priority={idx < 3}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <div className="mt-1">
                  <div className="text-base font-semibold">{p.price}</div>
                  <div className="text-xs text-white/70">
                    Incluye personalización · Delivery según zona
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="pill px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>

              <a
                className="btn-primary gold-bg mt-4 w-full text-black"
                href={waLink(waProductText(p))}
                target="_blank"
                rel="noreferrer"
              >
                Pedir este regalo
              </a>
            </article>
          ))}
        </div>

        {visible < productosMostrar.length && (
          <div className="mt-8">
            <button
              className="btn-secondary gold-border w-full"
              onClick={() => setVisible((v) => v + 12)}
            >
              Ver más
            </button>
            <div className="mt-2 text-center text-xs text-white/60">
              Mostrando {Math.min(visible, productosMostrar.length)} de{" "}
              {productosMostrar.length}
            </div>
          </div>
        )}
      </section>

      {/* Botón flotante */}
      <a
        href={waLink(
          `Hola, quiero hacer un pedido para ${current.label}. ¿Qué me recomiendas?`
        )}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 btn-primary gold-bg text-black shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:opacity-95"
      >
        Pedir por WhatsApp
      </a>
    </main>
  );
}
