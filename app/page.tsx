import Image from "next/image";

const WHATSAPP_NUMBER = "51984096041"; // <-- cambia aquí (formato 51 + número)
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
    title: 'Choco brownie personalizado con pulseras rojas',
    price: "Desde S/ ---",
    tags: ["foto", "top ventas", "premium"],
    image: "/choco-brownie-con-pulseras-hilo-rojo-san-valentin.jpg",
    waText: 'Hola, quiero info de la Caja Retrato "Te Amo". ¿Tiempos y precio?',
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
    <main className="bg-magia min-h-screen">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-center rounded-full border border-white/30 h-16 w-16 sm:h-12 sm:w-12">
          <div className="flex items-center gap-3">
            {/* Logo real (public/logo.png => src="/logo.png") */}
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-llama-line bg-llama-panel ring-1 ring-[rgba(214,178,94,0.35)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <Image
                src="/logo.png"
                alt="La Llama del Amor"
                width={56}
                height={56}
                className="h-14 w-14 sm:h-10 sm:w-10"
                priority
              />
            </div>

            <div>
              <div className="uppercase text-llama-muted whitespace-nowrap leading-none tracking-[0.22em] text-[12px] sm:text-sm">
                LA LLAMA DEL AMOR
              </div>
              <div className="text-sm text-llama-muted">
                Edición San Valentín · Entrega en Lima
              </div>
            </div>
          </div>

          <a
            className="btn-secondary gold-border"
            href={waLink(
              "Hola, quiero hacer un pedido para San Valentín. ¿Me ayudas a elegir un regalo?"
            )}
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

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Botón principal dorado → Catálogo */}
              <a
                className="btn-primary gold-bg text-black shadow-[0_10px_30px_rgba(214,178,94,0.18)]"
                href="#catalogo"
              >
                Ver catálogo San Valentín
              </a>
            
              {/* Botón secundario → Recomendación (WhatsApp) */}
              <a
                className="btn-secondary gold-border"
                href={waLink(
                  "Hola, quiero recomendación. Presupuesto, para quién es y para cuándo lo necesito."
                )}
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

          {/* Imagen hero vertical (4:5 Instagram) sin cortar */}
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
                href={waLink(
                  "Hola, quiero un regalo con foto + dedicatoria. ¿Qué opciones tienes para hoy?"
                )}
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
              {/* Mantén 4:5 y NO cortes: object-contain */}
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
                className="btn-primary gold-bg mt-4 w-full text-black shadow-[0_10px_30px_rgba(214,178,94,0.16)]"
                href={waLink(p.waText)}
                target="_blank"
                rel="noreferrer"
              >
                Pedir este regalo
              </a>
            </article>
          ))}
        </div>

        {/* Sección extra recomendada */}
        <div className="mt-10 card p-6">
          <h3 className="text-xl font-semibold">Regalos para…</h3>
          <p className="mt-1 text-llama-muted">
            Dime para quién es y tu presupuesto, y te mando 3 opciones cerradas por WhatsApp.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="btn-secondary gold-border"
              href={waLink(
                "Hola, quiero 3 opciones para mi novia. Presupuesto: S/__. Para cuándo: __."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Para mi novia
            </a>
            <a
              className="btn-secondary gold-border"
              href={waLink(
                "Hola, quiero 3 opciones para mi enamorada. Presupuesto: S/__. Para cuándo: __."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Para mi enamorada
            </a>
            <a
              className="btn-secondary gold-border"
              href={waLink(
                "Hola, quiero 3 opciones para mi esposo/enamorado. Presupuesto: S/__. Para cuándo: __."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Para él
            </a>
            <a
              className="btn-primary gold-bg text-black shadow-[0_10px_30px_rgba(214,178,94,0.16)]"
              href={waLink(
                "Hola, quiero recomendación. Presupuesto: S/__. Para cuándo: __. Y qué incluye: foto/dedicatoria/otros."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Quiero recomendación
            </a>
          </div>
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <a
        href={waLink("Hola, quiero hacer un pedido. ¿Qué me recomiendas según mi presupuesto?")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black gold-bg shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:opacity-95"
        aria-label="Pedir por WhatsApp"
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
