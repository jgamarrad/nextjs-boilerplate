import Image from "next/image";

type Product = {
  name: string;
  price: string; // Ej: "S/ 149"
  desc: string;
  tags: string[];
  image: string; // en /public
  waMessage: string;
};

const WHATSAPP_PHONE = "+51XXXXXXXXX"; // TODO: cambia esto
const INSTAGRAM_URL = "https://instagram.com/lallamadelamor.pe"; // opcional

function waLink(message: string) {
  const text = encodeURIComponent(message);
  const phone = WHATSAPP_PHONE.replace(/\D/g, ""); // solo números
  return `https://wa.me/${phone}?text=${text}`;
}

const svProducts: Product[] = [
  {
    name: "Box Amore",
    price: "S/ ---",
    desc: "Chocolates premium + detalle elegante, personalizable.",
    tags: ["pareja", "premium", "chocolate"],
    image: "/images/sv/box-amore.jpg", // TODO: reemplaza con tu foto
    waMessage: "Hola, quiero pedir el Box Amore para San Valentín. ¿Qué opciones de personalización tienen?",
  },
  {
    name: "Oscar de Chocolate",
    price: "S/ ---",
    desc: "El Oscar para la mejor novia / mejor enamorado / mejor papá.",
    tags: ["original", "personalizado", "viral"],
    image: "/images/sv/oscar-chocolate.jpg",
    waMessage: "Hola, quiero el Oscar de Chocolate para San Valentín. ¿Me ayudas con frases y entrega en Lima?",
  },
  {
    name: "Correo Postal (con foto)",
    price: "S/ ---",
    desc: "Un mensaje que emociona: foto + dedicatoria + chocolates.",
    tags: ["con foto", "emocional", "top ventas"],
    image: "/images/sv/correo-postal.jpg",
    waMessage: "Hola, quiero el Correo Postal con foto para San Valentín. ¿Qué necesito enviarte y cuánto demora?",
  },
];

const giftFor = [
  { title: "Para ella", hint: "Rosas + chocolates + detalles con foto" },
  { title: "Para él", hint: "Chocolates premium + mensaje directo" },
  { title: "Para parejas", hint: "Personalización de nombres y fechas" },
  { title: "Con foto", hint: "Recuerdo que se queda (no solo se come)" },
];

const faqs = [
  {
    q: "¿Entregan en Lima el mismo día?",
    a: "Sí, según disponibilidad y distrito. Escríbenos por WhatsApp para confirmar horarios y costos de delivery.",
  },
  {
    q: "¿Se puede personalizar el mensaje?",
    a: "Sí. Puedes enviarnos el texto, nombres, fecha y/o una foto. Te ayudamos con ideas si lo necesitas.",
  },
  {
    q: "¿Cómo compro?",
    a: "Elige un producto y presiona “Pedir por WhatsApp”. Te responderemos con opciones, precios y coordinación de entrega.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="mx-auto max-w-6xl px-5 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Si tienes logo en blanco, colócalo en public/images/logo-white.png */}
            <div className="relative h-9 w-9 rounded-xl border border-border bg-card shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center text-gold font-semibold">
                LA
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-xs tracking-[0.22em] text-fg/70">LA LLAMA DEL AMOR</p>
              <p className="text-sm text-fg/90">San Valentín</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="hidden sm:inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-fg/90 hover:bg-white/10"
              rel="noreferrer"
            >
              Ver Instagram
            </a>
            <a
              href={waLink("Hola, quiero catálogo de San Valentín. ¿Me ayudas?")}
              className="inline-flex rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-8">
        <div className="rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid gap-8 p-7 md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <p className="text-xs tracking-[0.22em] text-gold/90">EDICIÓN SAN VALENTÍN</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Regalos personalizados <span className="text-fg/80">que se sienten</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-fg/80">
                Chocolates, detalles con foto y presentación premium para sorprender en Lima.
                Compra rápido por WhatsApp.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Hola, quiero pedir para San Valentín. ¿Qué opciones tienen hoy?")}
                  className="inline-flex items-center justify-center rounded-2xl bg-fg px-6 py-3 text-sm font-semibold text-bg hover:opacity-90"
                >
                  Pedir ahora por WhatsApp
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 text-sm font-semibold text-fg/90 hover:bg-white/10"
                >
                  Ver Top Regalos
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Personalización real",
                  "Entrega en Lima",
                  "Presentación premium",
                  "Atención rápida por WhatsApp",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-fg/85"
                  >
                    ✓ {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Panel derecho: mini “urgencia” elegante */}
            <div className="rounded-2xl border border-border bg-white/5 p-6">
              <p className="text-sm font-semibold text-fg">Catálogo San Valentín</p>
              <p className="mt-2 text-sm text-fg/75">
                Te ayudamos a elegir según presupuesto, tiempo y tipo de sorpresa.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-border bg-black/30 p-4">
                  <p className="text-xs text-fg/70">Recomendado</p>
                  <p className="mt-1 text-sm font-semibold text-fg">Con foto + dedicatoria</p>
                  <p className="mt-1 text-sm text-fg/75">
                    Se siente personal. Se comparte. Se recuerda.
                  </p>
                </div>

                <a
                  href={waLink("Hola, quiero una recomendación para San Valentín (con foto o personalizado). ¿Qué me sugieres?")}
                  className="block rounded-xl bg-gold px-4 py-3 text-center text-sm font-semibold text-bg hover:opacity-90"
                >
                  Quiero recomendación
                </a>

                <p className="text-xs text-fg/60">
                  Respuesta por WhatsApp. Coordinamos entrega y personalización.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top products */}
      <section id="top" className="mx-auto max-w-6xl px-5 pb-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Top Regalos San Valentín</h2>
            <p className="mt-1 text-sm text-fg/75">
              Tus opciones más vendibles. Luego agregamos más sin cambiar la base.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {svProducts.map((p) => (
            <article key={p.name} className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
              <div className="relative aspect-[4/5] w-full bg-black/30">
                {/* Si aún no tienes fotos, igual compila. Luego reemplazas el archivo en /public/images/sv/ */}
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={p.name === "Box Amore"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="text-sm text-fg/80">{p.price}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-fg/80">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-fg/80">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={waLink(p.waMessage)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-fg px-5 py-3 text-sm font-semibold text-bg hover:opacity-90"
                >
                  Pedir este producto
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Regalos para... (SV edition) */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="rounded-3xl border border-border bg-card shadow-soft p-7 md:p-10">
          <h3 className="text-2xl font-semibold tracking-tight">Regalos para…</h3>
          <p className="mt-2 text-sm text-fg/75">
            Dime “para quién” y te recomiendo 2–3 opciones listas para coordinar por WhatsApp.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {giftFor.map((g) => (
              <a
                key={g.title}
                href={waLink(`Hola, quiero un regalo de San Valentín ${g.title.toLowerCase()}. Presupuesto aproximado: S/ ____. ¿Qué me recomiendas?`)}
                className="rounded-2xl border border-border bg-white/5 p-5 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-fg">{g.title}</p>
                <p className="mt-2 text-sm text-fg/75">{g.hint}</p>
                <p className="mt-4 text-xs text-gold/90">Pedir recomendación →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mini proof / testimonials */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              t: "“Se emocionó con la foto. Fue un éxito total.”",
              s: "Pedido por WhatsApp • Lima",
            },
            {
              t: "“La presentación es demasiado premium, parecía de lujo.”",
              s: "San Valentín",
            },
            {
              t: "“Rápidos y atentos. Me ayudaron con el mensaje.”",
              s: "Personalizado",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-border bg-card shadow-soft p-6">
              <p className="text-sm text-fg/85">{x.t}</p>
              <p className="mt-4 text-xs text-fg/60">{x.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="rounded-3xl border border-border bg-card shadow-soft p-7 md:p-10">
          <h3 className="text-2xl font-semibold tracking-tight">Preguntas frecuentes</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-white/5 p-5">
                <p className="text-sm font-semibold">{f.q}</p>
                <p className="mt-2 text-sm text-fg/75">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-black/30 p-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold">¿Listo para pedir?</p>
              <p className="mt-1 text-sm text-fg/75">Te respondemos y coordinamos personalización + entrega.</p>
            </div>
            <a
              href={waLink("Hola, quiero comprar para San Valentín. ¿Me compartes opciones y precios?")}
              className="inline-flex rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-bg hover:opacity-90"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-5 pb-10">
        <div className="flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-fg/60">
            © {new Date().getFullYear()} La Llama del Amor • San Valentín
          </p>
          <div className="flex gap-3">
            <a className="text-xs text-fg/70 hover:text-fg" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a
              className="text-xs text-fg/70 hover:text-fg"
              href={waLink("Hola, necesito ayuda para elegir un regalo.")}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
