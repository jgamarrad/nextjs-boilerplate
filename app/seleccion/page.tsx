// app/seleccion/page.tsx
// Selección personalizada para enviar a un cliente por WhatsApp.
// Ejemplo: /seleccion?p=LLA-008,LLA-029,LLA-022
// No se indexa en Google: es una página para compartir, no para buscar.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { productos } from "@/lib/catalog";
import { waLink } from "@/lib/site";
import ProductCard from "@/app/components/ProductCard";
import { HowToBuy, SiteFooter } from "@/app/components/InfoSections";

export const metadata: Metadata = {
  title: "Opciones de regalo seleccionadas para ti",
  description: "Una selección de regalos personalizados de La Llama del Amor, con delivery en Lima.",
  robots: { index: false, follow: false },
};

export default async function SeleccionPage({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}) {
  const { p } = await searchParams;
  const ids = (p ?? "")
    .split(",")
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean);

  // Respeta el orden en que se eligieron los productos
  const elegidos = ids
    .map((id) => productos.find((prod) => prod.id === id))
    .filter((prod): prod is (typeof productos)[number] => Boolean(prod));

  const codigos = elegidos.map((e) => e.id).join(", ");

  return (
    <main className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full gold-border border bg-white/5 shrink-0">
            <Image src="/logo.png" alt="La Llama del Amor" fill className="object-contain p-1" priority sizes="56px" />
          </div>
          <div>
            <div className="text-sm tracking-[0.22em] uppercase text-llama-muted">LA LLAMA DEL AMOR</div>
            <div className="text-sm text-llama-muted">Catálogo · Entrega en Lima</div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Opciones elegidas para ti
        </h1>
        <p className="mt-3 max-w-xl text-llama-muted">
          Todas se personalizan con nombre, mensaje o foto. Cuéntanos cuál te gusta
          por WhatsApp y te confirmamos disponibilidad.
        </p>

        {elegidos.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {elegidos.map((prod, idx) => (
              <ProductCard key={prod.id} p={prod} eager={idx < 3} origin="seleccion" />
            ))}
          </div>
        ) : (
          <div className="card mt-8 p-6">
            <p className="text-white/80">
              Este enlace no tiene productos. Mira nuestro catálogo completo:
            </p>
            <Link className="btn-primary gold-bg mt-4 inline-flex text-black" href="/inicio">
              Ver catálogo
            </Link>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="btn-secondary gold-border w-full sm:w-auto" href="/inicio">
            Ver todo el catálogo
          </Link>
        </div>
      </section>

      <HowToBuy />
      <SiteFooter />

      <a
        href={waLink(
          elegidos.length > 0
            ? `Hola, vi las opciones que me enviaron (${codigos}). Me interesa…`
            : "Hola, quiero ver opciones de regalo. ¿Me ayudas a elegir?"
        )}
        target="_blank"
        rel="noreferrer"
        data-product={codigos || undefined}
        data-origin="seleccion-responder"
        className="fixed bottom-6 right-6 z-50 btn-primary gold-bg text-black shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:opacity-95"
      >
        Responder por WhatsApp
      </a>
    </main>
  );
}
