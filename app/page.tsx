import Image from "next/image";

type Product = {
  name: string;
  price: string;
  desc: string;
  tags: string[];
  image: string; // ruta en /public
  waMessage: string;
};

const WHATSAPP_PHONE = "51999999999"; // TODO: cambia por tu número (sin +, sin espacios)
const INSTAGRAM_URL = "https://instagram.com/lallamadelamor.pe";

function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

const products: Product[] = [
  {
    name: "Miski “Feliz 14”",
    price: "Desde S/ ---",
    desc: "Caja premium con chocolates y detalle para sorprender con elegancia.",
    tags: ["premium", "chocolate", "romántico"],
    image: "/images/sv/caja-miski-feliz-14-san-valentin.jpg",
    waMessage: "Hola, quiero pedir la caja Miski “Feliz 14” para San Valentín. ¿Precio y opciones de personalización?",
  },
  {
    name: "Correo Postal + Chocolate",
    price: "Desde S/ ---",
    desc: "Mensaje tipo carta + chocolates personalizados. Se siente único.",
    tags: ["foto", "dedicatoria", "viral"],
    image: "/images/sv/correo-postal-feliz-dia-mi-amor.jpg",
    waMessage: "Hola, quiero el correo postal + chocolates para San Valentín. ¿Me explicas cómo envío la foto y el texto?",
  },
  {
    name: "Caja Retrato “Te Amo”",
    price: "Desde S/ ---",
    desc: "Chocolate con foto + detalle premium. Ideal para pareja.",
    tags: ["foto", "top ventas", "premium"],
    image: "/images/sv/caja-miski-choco-retrato-te-amo.jpg",
    waMessage: "Hola, quiero la caja retrato “Te Amo” para San Valentín. ¿Qué tamaño y tiempo de entrega manejan?",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen text-llama-ivory">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-llama-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Logo opcional (ponlo en /public/brand/logo.png) */}
            {/* <Image src="/brand/logo.png" alt="La Llama del Amor" width={140} height={36} /> */}
            <div className="leading-tight">
              <div className="text-xs tracking-[0.28em] text-white/70">LA LLAMA DEL AMOR</div>
              <div className="text-sm text-white/90">Edición San Valentín</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="hidden rounded-xl border border-white/15 px-3 py-2 text-sm text-white/80 hover:bg-white/5 md:inline"
              rel="noreferrer"
            >
              Ver Instagram
            </a>
            <a
              href={waLink("Hola, quiero recomendaciones para un regalo de San Valentín. ¿Qué me sugieren según mi presupuesto?")}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-llama-gold/35 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-llama-rose" />
              Entrega en Lima · Personalización real · Atención rápida
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Regalos personalizados que se sienten
              <span className="text-llama-gold"> premium</span>.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-white/75">
              Chocolates, detalles con foto y presentación elegante para sorprender en San Valentín.
              Compra rápido por WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={waLink("Hola, quiero hacer un pedido para San Valentín. ¿Qué opciones me recomiendan?")}
                className="rounded-2xl bg-llama-gold px-5 py-3 text-sm font-semibold text-black shadow-soft hover:bg-llama-gold/90"
              >
                Quiero recomendación
              </a>
              <a
                href="#catalogo"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5"
              >
                Ver catálogo
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Personalización (foto + dedicatoria)",
                "Entrega en Lima",
                "Presentación premium",
                "Atención por WhatsApp",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-llama-gold/15 text-llama-gold">
                    ✓
                  </span>
                  {x}
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/images/sv/caja-miski-feliz-14-san-valentin.jpg"
                  alt="Regalos San Valentín - La Llama del Amor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-white/75">Top ventas · San Valentín</div>
                <div className="text-xs text-white/55">Fotos reales (IG)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Catálogo San Valentín</h2>
            <p className="mt-1 text-sm text-white/70">
              Elige un regalo y te guiamos por WhatsApp para personalizar y coordinar entrega.
            </p>
          </div>
          <a
            href={waLink("Hola, quiero ver el catálogo completo de San Valentín. ¿Me ayudas a elegir?")}
            className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-white/85 hover:bg-white/5 md:inline"
          >
            Pedir catálogo completo
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft"
            >
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="rounded-full border border-llama-gold/35 bg-llama-gold/10 px-3 py-1 text-xs text-llama-gold">
                    {p.price}
                  </div>
                </div>

                <p className="mt-2 text-sm text-white/75">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={waLink(p.waMessage)}
                  className="mt-5 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
                >
                  Pedir este regalo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sección recomendada: “Regalos para…” */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Regalos para…</h2>
          <p className="mt-1 text-sm text-white/70">
            Dime para quién es y tu presupuesto, y te recomendamos opciones (rápido por WhatsApp).
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {[
              { title: "Para mi novia", msg: "Hola, busco un regalo para mi novia. Presupuesto: S/ ___. ¿Qué me recomiendan?" },
              { title: "Para mi novio", msg: "Hola, busco un regalo para mi novio. Presupuesto: S/ ___. ¿Qué me recomiendan?" },
              { title: "Para mi esposa", msg: "Hola, busco un regalo para mi esposa. Presupuesto: S/ ___. ¿Qué me recomiendan?" },
              { title: "Para mi esposo", msg: "Hola, busco un regalo para mi esposo. Presupuesto: S/ ___. ¿Qué me recomiendan?" },
            ].map((x) => (
              <a
                key={x.title}
                href={waLink(x.msg)}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/85 hover:bg-white/5"
              >
                <div className="font-semibold">{x.title}</div>
                <div className="mt-1 text-xs text-white/60">Recomendación + tiempos</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} La Llama del Amor · Lima, Perú
          </div>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href={waLink("Hola, quiero información de delivery, métodos de pago y personalización.")}
              className="rounded-xl bg-llama-gold px-4 py-2 text-sm font-semibold text-black hover:bg-llama-gold/90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

