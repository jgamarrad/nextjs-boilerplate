// app/complementos/page.tsx
// Pestaña "Complementos": peluches, caja de rosas, pulseras... para sumar a un
// regalo o pedir solos.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { OCCASIONS } from "@/lib/catalog";
import type { OccasionKey } from "@/lib/types";
import { COMPLEMENTOS } from "@/lib/complementos";
import { SITE_URL, waLink } from "@/lib/site";
import ProductGallery from "@/app/components/ProductGallery";
import { Faq, HowToBuy, SiteFooter } from "@/app/components/InfoSections";

export const metadata: Metadata = {
  title: "Complementos para tu regalo: peluches, rosas y más",
  description:
    "Suma un peluche, una caja de rosas o pulseras a tu regalo personalizado. Delivery en Lima. Pide por WhatsApp.",
  alternates: { canonical: "/complementos" },
};

function waComplemento(nombre: string, precio: number) {
  return [
    `¡Hola! 🦙💛 Me interesa este complemento: *${nombre}* (S/${precio})`,
    "",
    "🎁 Lo quiero: solo / junto con el regalo:",
    "📅 Lo necesito para el:",
    "📍 Distrito de entrega:",
  ].join("\n");
}

export default function ComplementosPage() {
  const chips = Object.keys(OCCASIONS) as OccasionKey[];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Complementos para regalos",
    itemListElement: COMPLEMENTOS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        "@id": `${SITE_URL}/complementos#${c.slug}`,
        name: c.nombre,
        description: c.descripcion,
        sku: c.id,
        image: c.fotos.map((f) => `${SITE_URL}${f.src}`),
        brand: { "@type": "Brand", name: "La Llama del Amor" },
        offers: {
          "@type": "Offer",
          price: String(c.precio),
          priceCurrency: "PEN",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/complementos#${c.slug}`,
        },
      },
    })),
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

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
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-10">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Complementos{" "}
          <span className="block text-llama-muted">para tu regalo.</span>
        </h1>
        <p className="mt-4 max-w-xl text-llama-muted">
          Suma un peluche, una caja de rosas o pulseras a cualquier regalo, o pídelos solos.
        </p>

        <nav aria-label="Ocasiones" className="mt-6 flex flex-wrap gap-3">
          {chips.map((key) => (
            <Link key={key} href={`/${key}`} className="pill transition">
              {OCCASIONS[key].chip}
            </Link>
          ))}
        </nav>
      </section>

      <section id="catalogo" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {COMPLEMENTOS.map((c) => (
            <article key={c.id} id={c.slug} className="scroll-mt-6">
              <ProductGallery fotos={c.fotos} />
              <div className="mt-4 px-1">
                <div className="text-xs tracking-[0.18em] uppercase text-llama-muted">Código {c.id}</div>
                <h2 className="mt-1 text-lg font-semibold leading-snug">{c.nombre}</h2>
                <div className="mt-1 text-base font-semibold">S/{c.precio}</div>
                <p className="mt-2 text-sm text-white/70 leading-snug">{c.descripcion}</p>
                <a
                  className="btn-primary gold-bg mt-4 w-full text-black"
                  href={waLink(waComplemento(c.nombre, c.precio))}
                  target="_blank"
                  rel="noreferrer"
                  data-product={c.id}
                  data-origin="complementos"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-white/60">
          ¿Ya elegiste tu regalo? En la ficha de cada producto puedes sumar complementos y ver el total.
        </p>
      </section>

      <HowToBuy />
      <Faq withSchema={false} />
      <SiteFooter />
    </main>
  );
}
