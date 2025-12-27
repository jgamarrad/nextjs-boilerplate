import Image from "next/image";

const WHATSAPP_NUMBER = "51984096041";
const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

function waLink(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

const productos = [
  {
    title: 'Miski “Feliz 14”',
    price: "Desde S/ ---",
    tags: ["premium", "chocolate", "romántico"],
    image: "/caja-miski-feliz-14-san-valentin.jpg",
    waText: 'Hola, quiero info del regalo "Miski Feliz 14". ¿Opciones y precio?',
  },
  {
    title: "Correo Postal + Chocolate",
    price: "Desde S/ ---",
    tags: ["foto", "dedicatoria", "viral"],
    image: "/correo-postal-feliz-dia-mi-amor.jpg",
    waText: "Hola, quiero el Correo Postal + Chocolate. ¿Cómo envío foto y texto?",
  },
  {
    title: "Choco brownie personalizado con pulseras rojas",
    price: "Desde S/ ---",
    tags: ["top ventas", "premium"],
    image: "/choco-brownie-con-pulseras-hilo-rojo-san-valentin.jpg",
    waText: "Hola, quiero info del Choco brownie con pulseras rojas. ¿Tiempos y precio?",
  },
  {
    title: 'Caja Retrato “Te Amo”',
    price: "Desde S/ ---",
    tags: ["foto", "top ventas", "premium"],
    image: "/caja-miski-choco-retrato-te-amo.jpg",
    waText: 'Hola, quiero info de la Caja Retrato "Te Amo". ¿Tiempos y precio?',
  },
];

export default function Page() {
  const heroImg = "/correo-postal-feliz-dia-mi-amor.jpg";

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between gap-4">
          {/* Marca */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Logo: más grande en mobile, compacto en desktop */}
            <div className="relative h-14 w-14 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full border gold-border bg-white/5">
              <Image
                src="/logo.png"
                alt="La Llama del Amor"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="min-w-0">
              {/* 1 sola línea en mobile */}
              <div className="text-xs sm:text-sm tracking-[0.22em] uppercase text-llama-muted whitespace-nowrap overflow-hidden text-ellipsis">
                LA LLAMA DEL AMOR
              </div>
              <div className="text-xs sm:text-sm text-llama-muted whitespace-nowrap overflow-hidden text-ellipsis">
                Edición San Valentín · Entrega en Lima
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            className="btn-secondary gold-border shrink-0"
            href={waLink("Hola, quiero hacer un pedido para San Valentín. ¿Me ayudas a elegir un regalo?")}
            target="_blank"
            rel="noreferrer"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-10 hero-gold">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Regalos personalizados
              <br />
              <span className="text-llama-muted">que se sienten premium.</span>
            </h1>

            <p className="mt-4 max-w-xl text-llama-muted">
              Chocolates, detalles con foto y presentación premium para sorprender en San Valentín.
              Compra rápida por WhatsApp.
            </p>

            {/* Aquí: Ver catálogo como botón principal dorado */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn-primary gold-bg text-black w-full sm:w-auto" href="#catalogo">
                Ver catálogo San Valentín
              </a>

              <a
                className="btn-secondary gold-border w-full sm:w-auto"
                href={waLink("Hola, quiero recomendación. Presupuesto, para quién es y para cuándo lo necesito.")}
                target="_blank"
                rel="noreferrer"
              >
                Quiero recomendación
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="pill">
                <span className="gold-text">✓</span> Personalización real
              </div>
              <div className="pill">
                <span className="gold-text">✓</span> Entrega en Lima
              </div>
              <div className="pill">
                <span className="gold-text">✓</span> Presentación premium
              </div>
              <div className="pill">
                <span className="gold-text">✓</span> Atención rápida
              </div>
            </div>
          </div>

          {/* Imagen hero */}
          <div className="card relative overflow-hidden p-4">
            <div className="relative w-full overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]">
              <Image
                src={heroImg}
                alt="Regalo San Valentín - La Llama del Amor"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm text-llama-muted">Recomendado</div>
                <div className="font-semibold">Con foto + dedicatoria</div>
              </div>
              <a
                className="btn-ghost gold-border"
                href={waLink("Hola, quiero un regalo con foto + dedicatoria. ¿Qué opciones tienes para hoy?")}
                target="_blank"
                rel="noreferrer"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Catálogo San Valentín</h2>
            <p className="mt-1 text-llama-muted">
              Te ayudamos a elegir según presupuesto, tiempo y tipo de sorpresa.
            </p>
          </div>

          <a
            className="btn-secondary gold-border"
            href={waLink("Hola, quiero el catálogo San Valentín con precios y disponibilidad.")}
            target="_blank"
            rel="noreferrer"
          >
            Pedir catálogo por WhatsApp
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {productos.map((p) => (
            <article key={p.title} className="card p-4">
              <div className="relative overflow-hidden rounded-xl border border-llama-line bg-black/20 aspect-[4/5]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <span className="pill whitespace-nowrap">{p.price}</span>
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
                href={waLink(p.waText)}
                target="_blank"
                rel="noreferrer"
              >
                Pedir este regalo
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Botón flotante */}
      <a
        href={waLink("Hola, quiero hacer un pedido. ¿Qué me recomiendas según mi presupuesto?")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 btn-primary gold-bg text-black shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:opacity-95"
      >
        Pedir por WhatsApp
      </a>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-llama-muted">
        <div className="flex flex-col gap-2 border-t border-llama-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} La Llama del Amor</div>
          <div>Entrega en Lima · Atención por WhatsApp</div>
        </div>
      </footer>
    </main>
  );
}
