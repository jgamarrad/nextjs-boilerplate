import Image from "next/image";

type Product = {
  title: string;
  priceFrom: string;
  tags: string[];
  imageSrc: string; // ruta en /public
  waText: string;
  badge?: string;
};

const WHATSAPP_NUMBER = "51999999999"; // <-- CAMBIA ESTO (formato: 51 + número, sin + ni espacios)

function waLink(message: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

const products: Product[] = [
  {
    title: 'Miski “Feliz 14”',
    priceFrom: "Desde S/ ---",
    tags: ["premium", "chocolate", "romántico"],
    imageSrc: "/sv/miski-feliz-14-san-valentin.jpg",
    waText: "Hola, quiero el Miski “Feliz 14”. ¿Precio y disponibilidad para entrega en Lima?",
    badge: "Top ventas",
  },
  {
    title: "Correo Postal + Chocolate",
    priceFrom: "Desde S/ ---",
    tags: ["foto", "dedicatoria", "viral"],
    imageSrc: "/sv/correo-postal-feliz-dia-mi-amor.jpg",
    waText: "Hola, quiero el Correo Postal + Chocolate. ¿Opciones de personalización y precio?",
    badge: "Recomendado",
  },
  {
    title: 'Caja Retrato “Te Amo”',
    priceFrom: "Desde S/ ---",
    tags: ["foto", "premium", "personalizado"],
    imageSrc: "/sv/caja-miski-choco-retrato-te-amo.jpg",
    waText: "Hola, quiero la Caja Retrato “Te Amo”. ¿Qué foto debo enviar y cuál es el precio?",
  },
];

export default function Page() {
  return (
    <main className="relative">
      {/* Fondo “magia”: gradientes suaves para que NO sea negro plano */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(214,178,94,0.20), rgba(214,178,94,0) 60%)" }} />
        <div className="absolute top-48 -left-40 h-[520px] w-[520px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(255,59,92,0.16), rgba(255,59,92,0) 60%)" }} />
        <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(255,209,220,0.12), rgba(255,209,220,0) 60%)" }} />
      </div>

      {/* Header */}
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          {/* Si aún no tienes logo en /public/logo.svg, deja el texto */}
          <div className="text-xs tracking-[0.35em] text-[#BFB7AA]">
            LA LLAMA DEL AMOR
          </div>
        </div>

        <a
          href={waLink("Hola, quiero hacer un pedido para San Valentín. ¿Qué opciones me recomiendas?")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F5F1E8] backdrop-blur hover:bg-white/10"
        >
          Pedir por WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#BFB7AA]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "rgba(214,178,94,0.95)" }} />
              Edición San Valentín · Entrega en Lima
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Regalos personalizados
              <span className="block text-[#F5F1E8]/90">que se sienten premium.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#BFB7AA] md:text-lg">
              Chocolates, detalles con foto y presentación premium para sorprender en San Valentín.
              Compra rápido por WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink("Hola, quiero pedir para San Valentín. ¿Me recomiendas 3 opciones según presupuesto?")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#D6B25E] px-5 py-3 text-sm font-bold text-black hover:opacity-95"
              >
                Quiero recomendación
              </a>

              <a
                href="#catalogo"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F5F1E8] backdrop-blur hover:bg-white/10"
              >
                Ver catálogo San Valentín
              </a>
            </div>

            {/* Beneficios */}
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {[
                "Personalización real",
                "Entrega en Lima",
                "Presentación premium",
                "Atención rápida",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F5F1E8] backdrop-blur"
                >
                  <span className="mr-2 text-[#D6B25E]">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
              {/* Ajusta esta imagen a la que más represente tu campaña */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/sv/correo-postal-feliz-dia-mi-amor.jpg"
                  alt="Regalo San Valentín - La Llama del Amor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Top de temporada</div>
                <div className="text-xs text-[#BFB7AA]">
                  Foto + dedicatoria + chocolate premium
                </div>
              </div>

              <a
                href={waLink("Hola, quiero el producto top de temporada (Correo Postal + Chocolate). ¿Precio y tiempos de entrega?")}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Pedir ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Catálogo San Valentín
            </h2>
            <p className="mt-2 text-sm text-[#BFB7AA] md:text-base">
              Te ayudamos a elegir según presupuesto, tiempo y tipo de sorpresa.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
            >
              {/* Imagen 4:5 (Instagram) */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <div className="mt-1 text-sm text-[#BFB7AA]">{p.priceFrom}</div>
                </div>

                {p.badge ? (
                  <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-[#D6B25E]">
                    {p.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#BFB7AA]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={waLink(p.waText)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#D6B25E] px-4 py-3 text-sm font-bold text-black hover:opacity-95"
              >
                Pedir este regalo
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-base font-semibold">
              ¿No sabes cuál elegir?
            </div>
            <div className="text-sm text-[#BFB7AA]">
              Te recomendamos 3 opciones según tu presupuesto y fecha de entrega.
            </div>
          </div>

          <a
            href={waLink("Hola, quiero que me recomienden 3 opciones para San Valentín. Presupuesto: S/ ___. Entrega: ___.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
          >
            Quiero recomendación por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

