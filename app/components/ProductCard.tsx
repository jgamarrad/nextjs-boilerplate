// app/components/ProductCard.tsx
import Image from "next/image";
import type { Product } from "@/lib/catalog";
import { waLink, waProductText } from "@/lib/site";

export default function ProductCard({
  p,
  eager = false,
}: {
  p: Product;
  eager?: boolean;
}) {
  return (
    <article className="card p-4">
      <div className="relative overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]">
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
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
        {p.subtitle && (
          <p className="mt-1 text-sm text-white/70 leading-snug">{p.subtitle}</p>
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
  );
}
