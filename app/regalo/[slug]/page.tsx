// app/regalo/[slug]/page.tsx
// Ficha de producto: una URL por regalo (ej. /regalo/oso-3d-chocolate).
// Se genera estática para cada producto del catálogo.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  OCCASIONS,
  getProductBySlug,
  getRelated,
  mainOccasion,
  productos,
} from "@/lib/catalog";
import {
  ENVIO_DESDE,
  SITE_URL,
  WA_CONSULTA_ENVIO,
  priceNumber,
  waLink,
  waProductText,
} from "@/lib/site";
import ProductCard from "@/app/components/ProductCard";
import { Faq, HowToBuy, SiteFooter } from "@/app/components/InfoSections";

export const dynamicParams = false;

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

// Quita emojis y comillas del título para usarlo en metadatos
function cleanTitle(t: string) {
  return t
    .replace(/[\p{Extended_Pictographic}‍️]/gu, "")
    .replace(/[“”"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};

  const name = cleanTitle(p.title);
  const occ = OCCASIONS[mainOccasion(p)];
  const description = `${name} (${p.price}). ${
    p.subtitle ? p.subtitle.replace(/\.?$/, ".") : ""
  } Regalo personalizado con delivery en Lima. Pide por WhatsApp.`
    .replace(/\s+/g, " ")
    .trim();

  return {
    title: `${name} · ${p.price}`,
    description,
    alternates: { canonical: `/regalo/${p.slug}` },
    openGraph: {
      type: "website",
      title: `${name} · ${p.price} | La Llama del Amor`,
      description,
      url: `/regalo/${p.slug}`,
      siteName: "La Llama del Amor",
      locale: "es_PE",
      images: [{ url: p.image, alt: `${name} — ${occ.listTitle}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} · ${p.price} | La Llama del Amor`,
      description,
      images: [p.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const occKey = mainOccasion(p);
  const occ = OCCASIONS[occKey];
  const name = cleanTitle(p.title);
  const related = getRelated(p, 3);
  const ocasiones = p.occasions.filter((o) => o !== "inicio");
  const price = priceNumber(p.price);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/regalo/${p.slug}`,
    name,
    description: p.subtitle ?? name,
    image: `${SITE_URL}${p.image}`,
    sku: p.id,
    brand: { "@type": "Brand", name: "La Llama del Amor" },
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            price: String(price),
            priceCurrency: "PEN",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/regalo/${p.slug}`,
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Catálogo", item: `${SITE_URL}/inicio` },
      { "@type": "ListItem", position: 2, name: occ.listTitle, item: `${SITE_URL}/${occKey}` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}/regalo/${p.slug}` },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <Link href="/inicio" className="flex items-center gap-3 w-fit">
          <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full gold-border border bg-white/5 shrink-0">
            <Image src="/logo.png" alt="La Llama del Amor" fill className="object-contain p-1" priority sizes="56px" />
          </div>
          <div>
            <div className="text-sm tracking-[0.22em] uppercase text-llama-muted">LA LLAMA DEL AMOR</div>
            <div className="text-sm text-llama-muted">Catálogo · Entrega en Lima</div>
          </div>
        </Link>

        {/* Migas de pan */}
        <nav aria-label="Ruta" className="mt-6 text-sm text-white/60">
          <Link href="/inicio" className="hover:underline">Catálogo</Link>
          <span className="mx-2">›</span>
          <Link href={`/${occKey}`} className="hover:underline">{occ.listTitle}</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">{name}</span>
        </nav>
      </header>

      {/* Ficha */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-4">
            <div className="relative overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]">
              <Image
                src={p.image}
                alt={name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 560px"
                priority
              />
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.18em] uppercase text-llama-muted">
              Código {p.id}
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {p.title}
            </h1>
            <div className="mt-3 text-2xl font-semibold gold-text">{p.price}</div>

            {p.subtitle && (
              <p className="mt-4 text-white/80 leading-relaxed">{p.subtitle}</p>
            )}

            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>✓ Personalizado con nombre, mensaje o foto</li>
              <li>✓ Te confirmamos el diseño antes de producir</li>
              <li>✓ Pide con al menos 1 día de anticipación (mismo día según disponibilidad)</li>
              <li>✓ Envío desde {ENVIO_DESDE} o recojo en Miraflores</li>
              <li>✓ Reserva con el 50% · Yape, Plin, transferencia o tarjeta</li>
            </ul>

            {ocasiones.length > 0 && (
              <div className="mt-5">
                <div className="text-sm text-white/60">Ideal para</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {ocasiones.map((o) => (
                    <Link key={o} href={`/${o}`} className="pill px-3 py-1 text-sm">
                      {OCCASIONS[o].chip}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3">
              <a
                className="btn-primary gold-bg w-full text-black"
                href={waLink(waProductText(p))}
                target="_blank"
                rel="noreferrer"
              >
                Pedir este regalo por WhatsApp
              </a>
              <a
                className="btn-secondary gold-border w-full"
                href={waLink(WA_CONSULTA_ENVIO)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar envío a mi distrito
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title gold-text">También te puede gustar</h2>
            <Link href={`/${occKey}`} className="text-sm underline text-white/80 shrink-0">
              Ver todo
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <ProductCard key={r.id} p={r} />
            ))}
          </div>
        </section>
      )}

      <HowToBuy />
      <Faq withSchema={false} />
      <SiteFooter />

      <a
        href={waLink(waProductText(p))}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 btn-primary gold-bg text-black shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:opacity-95"
      >
        Pedir por WhatsApp
      </a>
    </main>
  );
}
