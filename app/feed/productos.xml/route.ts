// app/feed/productos.xml/route.ts
// Feed de productos (RSS 2.0 con campos g:) para el catálogo de Meta
// (Commerce Manager) y Google Merchant Center.
// URL: https://sv.lallamadelamor.pe/feed/productos.xml
// Se genera desde lib/catalog.ts, así que se actualiza solo con cada despliegue.
import { OCCASIONS, mainOccasion, productos } from "@/lib/catalog";
import { SITE_URL, priceNumber } from "@/lib/site";
import { getDetalle } from "@/lib/detalles";
import { getFotosExtra } from "@/lib/fotos";
import { COMPLEMENTOS } from "@/lib/complementos";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Sin emojis ni comillas tipográficas: Meta y Google los rechazan o los muestran mal
function clean(s: string) {
  return s
    .replace(/[\p{Extended_Pictographic}‍️]/gu, "")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export function GET() {
  const items = productos
    .map((p) => {
      const price = priceNumber(p.price);
      if (!price) return "";
      const title = clean(p.title);
      const det = getDetalle(p.id);
      const incluye = det ? ` Incluye: ${det.incluye.map((x) => x.charAt(0).toLowerCase() + x.slice(1)).join(", ")}.` : "";
      const desc = clean(
        `${p.subtitle ? p.subtitle.replace(/\.?$/, ".") : title + "."}${incluye} Regalo personalizado. Delivery en Lima.`
      );
      const occ = OCCASIONS[mainOccasion(p)].label;
      const ocasiones = p.occasions
        .filter((o) => o !== "inicio")
        .map((o) => OCCASIONS[o].label)
        .join(", ");
      return `    <item>
      <g:id>${esc(p.id)}</g:id>
      <g:title>${esc(title)}</g:title>
      <g:description>${esc(desc)}</g:description>
      <g:link>${SITE_URL}/regalo/${p.slug}</g:link>
      <g:image_link>${SITE_URL}${encodeURI(p.image)}</g:image_link>${getFotosExtra(p.id)
        .map((f) => `\n      <g:additional_image_link>${SITE_URL}${encodeURI(f.src)}</g:additional_image_link>`)
        .join("")}
      <g:availability>in stock</g:availability>
      <g:condition>new</g:condition>
      <g:price>${price.toFixed(2)} PEN</g:price>
      <g:brand>La Llama del Amor</g:brand>
      <g:google_product_category>Food, Beverages &amp; Tobacco &gt; Food Items &gt; Candy &amp; Chocolate</g:google_product_category>
      <g:product_type>${esc(occ)}</g:product_type>
      <g:custom_label_0>${esc(occ)}</g:custom_label_0>
      <g:custom_label_1>${esc(ocasiones)}</g:custom_label_1>
      <g:custom_label_2>${price <= 70 ? "Hasta S/70" : price <= 120 ? "S/71-120" : "Premium"}</g:custom_label_2>
    </item>`;
    })
    .filter(Boolean)
    .concat(
      COMPLEMENTOS.map(
        (c) => `    <item>
      <g:id>${esc(c.id)}</g:id>
      <g:title>${esc(c.nombre)}</g:title>
      <g:description>${esc(c.descripcion + " Complemento para tu regalo. Delivery en Lima.")}</g:description>
      <g:link>${SITE_URL}/complementos#${c.slug}</g:link>
      <g:image_link>${SITE_URL}${encodeURI(c.fotos[0].src)}</g:image_link>${c.fotos
        .slice(1)
        .map((f) => `\n      <g:additional_image_link>${SITE_URL}${encodeURI(f.src)}</g:additional_image_link>`)
        .join("")}
      <g:availability>in stock</g:availability>
      <g:condition>new</g:condition>
      <g:price>${c.precio.toFixed(2)} PEN</g:price>
      <g:brand>La Llama del Amor</g:brand>
      <g:product_type>Complementos</g:product_type>
      <g:custom_label_0>Complementos</g:custom_label_0>
    </item>`
      )
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>La Llama del Amor — Catálogo</title>
    <link>${SITE_URL}</link>
    <description>Regalos personalizados con chocolate. Delivery en Lima.</description>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
