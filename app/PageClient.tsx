// app/PageClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
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

// "S/60" -> "de S/60" · "Desde S/65" -> "desde S/65"
function pricePhrase(price: string) {
  const p = price.trim();
  return /^desde/i.test(p) ? `desde ${p.replace(/^desde\s*/i, "")}` : `de ${p}`;
}

function waProductText(p: Pick<Product, "id" | "title" | "price">) {
  return `Hola, me interesa el regalo ${p.title} (${p.id}) ${pricePhrase(
    p.price
  )}. ¿Está disponible para el día ___?`;
}

const PASOS_COMPRA = [
  {
    titulo: "Elige tu regalo",
    texto: "Escríbenos por WhatsApp con el código del producto.",
  },
  {
    titulo: "Personalízalo",
    texto: "Nombre, mensaje, foto o colores. Te confirmamos el diseño antes de producir.",
  },
  {
    titulo: "Reserva con el 50%",
    texto: "El otro 50% se paga cuando tu regalo está listo, antes del envío.",
  },
  {
    titulo: "Recibe o recoge",
    texto: "Delivery a tu distrito o recojo en Miraflores, previa coordinación.",
  },
];

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

  // Se muestran todos los productos de la ocasión (sin "Ver más"), para que
  // Google y el cliente vean el catálogo completo. Las imágenes después de las
  // 3 primeras se cargan a medida que se hace scroll.
  const productosMostrar = useMemo(
    () =>
      productos
        .filter((p) => p.occasions.includes(occasion))
        .slice()
        .sort((a, b) => sortByOccasionPriority(a, b, occasion)),
    [occasion]
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

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {productosMostrar.map((p, idx) => (
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
                  {p.subtitle && (
                    <p className="mt-1 text-sm text-white/70 leading-snug">
                      {p.subtitle}
                    </p>
                  )}
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
      </section>

      {/* Cómo comprar */}
      <section
        id="como-comprar"
        className="mx-auto max-w-6xl px-6 pb-24"
        aria-labelledby="como-comprar-titulo"
      >
        <h2 id="como-comprar-titulo" className="section-title gold-text">
          Cómo comprar
        </h2>

        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {PASOS_COMPRA.map((paso, i) => (
            <li key={paso.titulo} className="card p-4">
              <div className="text-xs tracking-[0.18em] uppercase text-llama-muted">
                Paso {i + 1}
              </div>
              <h3 className="mt-1 text-lg font-semibold leading-snug">
                {paso.titulo}
              </h3>
              <p className="mt-1 text-sm text-white/70 leading-snug">
                {paso.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-4">
            <h3 className="text-base font-semibold">Plazos</h3>
            <p className="mt-1 text-sm text-white/70 leading-snug">
              Pide con al menos 1 día de anticipación. ¿Lo necesitas hoy?
              Escríbenos: hacemos entregas el mismo día según disponibilidad.
            </p>
          </div>
          <div className="card p-4">
            <h3 className="text-base font-semibold">Medios de pago</h3>
            <p className="mt-1 text-sm text-white/70 leading-snug">
              Yape, Plin, transferencia bancaria o tarjeta de crédito (te
              enviamos un link seguro de Mercado Pago). No trabajamos con pago
              contra entrega. El costo de envío depende del distrito.
            </p>
          </div>
        </div>
      </section>

      {/* Botón flotante */}
      <a
        href={waLink(
          `Hola, quiero hacer un pedido${paraOcasion}. ¿Qué me recomiendas?`
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
