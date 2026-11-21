// app/components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { ENVIO_DESDE, waLink, waProductText } from "@/lib/site";

export default function ProductCard({
  p,
  eager = false,
  origin = "catalogo",
}: {
  p: Product;
  eager?: boolean;
  // De dónde vino el clic, para GA4: catalogo | relacionado | seleccion
  origin?: string;
}) {
  return (
    <article className="card p-4">
      <Link
        href={`/regalo/${p.slug}`}
        className="relative block overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]"
        aria-label={`Ver detalle de ${p.title}`}
      >
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 360px"
          quality={75}
          loading={eager ? "eager" : "lazy"}
          priority={eager}
        />
      </Link>

      <div className="mt-4">
        <h3 className="text-lg font-semibold leading-snug">
          <Link href={`/regalo/${p.slug}`} className="hover:underline">
            {p.title}
          </Link>
        </h3>
        {p.subtitle && (
          <p className="mt-1 text-sm text-white/70 leading-snug">{p.subtitle}</p>
        )}
        <div className="mt-1">
          <div className="text-base font-semibold">{p.price}</div>
          <div className="text-xs text-white/70">
            {`Incluye personalización · Envío desde ${ENVIO_DESDE}`}
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
        data-product={p.id}
        data-origin={origin}
      >
        Pedir este regalo
      </a>
    </article>
  );
}
