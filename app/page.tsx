import Image from "next/image";

const WHATSAPP = "https://wa.me/51XXXXXXXXX?text=Hola%20La%20Llama%20del%20Amor%2C%20quiero%20un%20regalo%20para%20San%20Valent%C3%ADn.%20%C2%BFMe%20recomiendan%3F";

type Product = {
  title: string;
  subtitle: string;
  price: string;
  tags: string[];
  image: string;
  waText: string;
};

const products: Product[] = [
  {
    title: 'Miski "Feliz 14"',
    subtitle: "Chocolate con mensaje, elegante y directo.",
    price: "Desde S/ ---",
    tags: ["premium", "chocolate", "romántico"],
    image: "/productos/caja-miski-feliz-14-san-valentin.jpg",
    waText: "Hola! Quiero el Miski “Feliz 14” para San Valentín. ¿Precio y disponibilidad?"
  },
  {
    title: "Correo Postal + Chocolate",
    subtitle: "Foto + dedicatoria tipo carta (impacto asegurado).",
    price: "Desde S/ ---",
    tags: ["foto", "dedicatoria", "viral"],
    image: "/productos/correo-postal-feliz-dia-mi-amor.jpg",
    waText: "Hola! Quiero el Correo Postal + Chocolate. ¿Qué opciones de personalización hay?"
  },
  {
    title: 'Caja Retrato "Te Amo"',
    subtitle: "Foto en chocolate + presentación premium.",
    price: "Desde S/ ---",
    tags: ["foto", "top ventas", "premium"],
    image: "/productos/caja-miski-choco-retrato-te-amo.jpg",
    waText: "Hola! Quiero la Caja Retrato “Te Amo”. ¿Cuánto cuesta y cómo envío la foto?"
  }
];

function waLink(text: string) {
  return `https://wa.me/51XXXXXXXXX?text=${encodeURIComponent(text)}`;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-hero">
      {/* Top bar */}
      <header className="mx-auto max-w-6xl px-5 pt-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Si tienes logo en blanco, súbelo a /public/brand/logo-blanco.png */}
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-stroke bg-brand-card">
              <Image
                src="/brand/logo-blanco.png"
                alt="La Llama del Amor"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs tracking-[0.25em] text-white/70">LA LLAMA DEL AMOR</p>
              <p className="text-sm text-white/80">Edición San Valentín · Entrega en Lima</p>
            </div>
          </div>

          <a
            href={WHATSAPP}
            className="rounded-full border border-brand-stroke bg-white px-4 py-2 text-sm font-semibold text-black shadow-glow hover:opacity-90"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Regalos personalizados
              <span className="block text-white/90">que se sienten premium.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-white/80">
              Chocolates, detalles con foto y presentación premium para sorprender en San Valentín.
              Compra rápido por WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("Hola! Quiero recomendación para un regalo de San Valentín. Presupuesto: ___. ¿Qué me sugieren?")}
                className="rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Quiero recomendación
              </a>
              <a
                href="#catalogo"
                className="rounded-full border border-brand-stroke bg-brand-card px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver catálogo San Valentín
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-xl">
              {[
                "Personalización real",
                "Entrega en Lima",
                "Presentación premium",
                "Atención rápida"
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-brand-stroke bg-brand-card px-4 py-3 text-sm text-white/85 shadow-glow"
                >
                  <span className="mr-2 text-brand-gold">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image (vertical IG ratio 4:5) */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-brand-stroke bg-brand-card shadow-glow">
              <div className="relative aspect-[4/5] w-full">
                {/* Cambia por la foto que quieras destacar */}
                <Image
                  src="/productos/correo-postal-feliz-dia-mi-amor.jpg"
                  alt="Regalo San Valentín - La Llama del Amor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold">Top ventas · Foto + dedicatoria</p>
                <p className="mt-1 text-sm text-white/75">Se siente personal. Se comparte. Se recuerda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: regalos para... */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="rounded-3xl border border-brand-stroke bg-brand-card p-6 shadow-glow">
          <h2 className="text-xl font-semibold">Regalos para…</h2>
          <p className="mt-1 text-sm text-white/75">
            Elige rápido y te recomendamos por WhatsApp según tu presupuesto y tiempo.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { title: "Mi pareja", desc: "Romántico y premium", msg: "Hola! Busco un regalo para mi pareja por San Valentín. Presupuesto: ___. ¿Opciones?" },
              { title: "Con foto", desc: "Dedicatoria + recuerdo", msg: "Hola! Quiero un regalo CON FOTO para San Valentín. ¿Cómo envío la foto y qué modelos hay?" },
              { title: "Último minuto", desc: "Entrega rápida en Lima", msg: "Hola! Estoy contra el tiempo. Necesito un regalo para San Valentín con entrega rápida en Lima. ¿Qué tienen disponible hoy/mañana?" },
            ].map((x) => (
              <a
                key={x.title}
                href={waLink(x.msg)}
                className="group rounded-2xl border border-brand-stroke bg-black/20 p-5 hover:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold">{x.title}</p>
                  <span className="text-brand-gold group-hover:translate-x-0.5 transition">→</span>
                </div>
                <p className="mt-1 text-sm text-white/75">{x.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="mx-auto max-w-6xl px-5 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Catálogo San Valentín</h2>
            <p className="mt-1 text-sm text-white/75">
              Productos destacados. (Luego añadimos aniversario, cumpleaños, etc.)
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-3xl border border-brand-stroke bg-brand-card shadow-glow"
            >
              {/* Mantener formato IG: 4:5 sin recorte raro */}
              <div className="relative aspect-[4/5] w-full bg-black/30">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{p.subtitle}</p>
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-brand-stroke bg-black/20 px-3 py-1 text-xs text-white/80">
                    {p.price}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-brand-stroke bg-black/15 px-3 py-1 text-xs text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={waLink(p.waText)}
                  className="mt-5 block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
                >
                  Pedir este regalo
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-brand-stroke bg-black/20 p-6 shadow-glow">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold">¿No sabes cuál elegir?</p>
              <p className="text-sm text-white/75">Te guiamos por WhatsApp en 1 minuto.</p>
            </div>
            <a
              href={waLink("Hola! Quiero recomendación para San Valentín. ¿Qué opciones tienen según presupuesto y fecha de entrega?")}
              className="rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Quiero recomendación
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-white/60">
          <p>© {new Date().getFullYear()} La Llama del Amor · Entrega en Lima · Pedidos por WhatsApp</p>
        </div>
      </footer>
    </main>
  );
}
