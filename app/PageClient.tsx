// app/PageClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { OccasionKey } from "@/lib/types";

import { OCCASIONS, productos, sortByOccasionPriority } from "@/lib/catalog";
import {
  PRICE_FILTERS,
  priceNumber,
  waLink,
  type PriceFilterKey,
} from "@/lib/site";
import ProductCard from "@/app/components/ProductCard";
import { Faq, HowToBuy, SiteFooter } from "@/app/components/InfoSections";

export default function PageClient({
  initialOccasion,
}: {
  initialOccasion: OccasionKey;
}) {
  // Cada ocasión es su propia página (/cumpleanos, /mama, ...), así que la
  // ocasión viene fija desde el servidor.
  const occasion = initialOccasion;
  const current = OCCASIONS[occasion];
  // En /inicio no se menciona la ocasión en los mensajes de WhatsApp
  const paraOcasion = occasion === "inicio" ? "" : ` para ${current.label}`;

  const [priceFilter, setPriceFilter] = useState<PriceFilterKey>("todos");

  // Todos los productos de la ocasión (sin "Ver más"). Google ve el catálogo
  // completo porque el filtro de precio solo actúa en el navegador.
  const productosOcasion = useMemo(
    () =>
      productos
        .filter((p) => p.occasions.includes(occasion))
        .slice()
        .sort((a, b) => sortByOccasionPriority(a, b, occasion)),
    [occasion]
  );

  // Solo se muestran los filtros que tienen productos en esta ocasión
  const filtrosDisponibles = useMemo(
    () =>
      PRICE_FILTERS.filter(
        (f) =>
          f.key === "todos" ||
          productosOcasion.some((p) => f.test(priceNumber(p.price)))
      ),
    [productosOcasion]
  );

  const filtroActivo =
    PRICE_FILTERS.find((f) => f.key === priceFilter) ?? PRICE_FILTERS[0];

  const productosMostrar = useMemo(
    () => productosOcasion.filter((p) => filtroActivo.test(priceNumber(p.price))),
    [productosOcasion, filtroActivo]
  );

  const chips = Object.keys(OCCASIONS) as OccasionKey[];

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
              `Hola, quiero hacer un pedido${paraOcasion}. ¿Me ayudas a elegir un regalo?`
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
            `Hola, quiero hacer un pedido${paraOcasion}. ¿Me ayudas a elegir un regalo?`
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
              {current.h1}{" "}
              <span className="block text-llama-muted">{current.h1Accent}</span>
            </h1>

            <p className="mt-4 max-w-xl text-llama-muted">
              {current.intro} Compra rápida por WhatsApp. Entrega en Lima.
            </p>

            {/* Enlaces reales entre ocasiones (Google puede seguirlos) */}
            <nav aria-label="Ocasiones" className="mt-6 flex flex-wrap gap-3">
              {chips.map((key) => (
                <Link
                  key={key}
                  href={`/${key}`}
                  aria-current={occasion === key ? "page" : undefined}
                  className={`pill transition ${
                    occasion === key ? "gold-bg text-black" : ""
                  }`}
                >
                  {OCCASIONS[key].chip}
                </Link>
              ))}
            </nav>

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
                alt={current.listTitle}
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
            <h2 className="section-title gold-text">{current.listTitle}</h2>
            <p className="mt-1 text-llama-muted">
              Todos se personalizan con nombre, mensaje o foto.
            </p>
          </div>

          <a
            className="btn-secondary gold-border w-full sm:w-auto"
            href={waLink(
              `Hola, quiero cotizar un regalo${paraOcasion}. ¿Me ayudas con precios y opciones?`
            )}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        {/* Filtro por precio */}
        {filtrosDisponibles.length > 2 && (
          <div
            className="mt-6 flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar por precio"
          >
            {filtrosDisponibles.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setPriceFilter(f.key)}
                aria-pressed={priceFilter === f.key}
                className={`pill px-4 py-1.5 text-sm transition ${
                  priceFilter === f.key ? "gold-bg text-black" : ""
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {productosMostrar.map((p, idx) => (
            <ProductCard key={p.id} p={p} eager={idx < 3} />
          ))}
        </div>

        {priceFilter !== "todos" && (
          <p className="mt-4 text-center text-xs text-white/60">
            Mostrando {productosMostrar.length} de {productosOcasion.length} regalos ·{" "}
            <button
              type="button"
              className="underline"
              onClick={() => setPriceFilter("todos")}
            >
              ver todos
            </button>
          </p>
        )}
      </section>

      <HowToBuy />
      <Faq />
      <SiteFooter />

      {/* Botón flotante */}
      <a
        href={waLink(`Hola, quiero hacer un pedido${paraOcasion}. ¿Qué me recomiendas?`)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 btn-primary gold-bg text-black shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:opacity-95"
      >
        Pedir por WhatsApp
      </a>
    </main>
  );
}
