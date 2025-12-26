"use client";

import Image from "next/image";

type Product = {
  name: string;
  price: string; // Ej: "S/ 149"
  desc: string;
  tags: string[];
  image: string; // en /public
  waMessage: string;
};

const WHATSAPP_PHONE = "+51XXXXXXXXX"; // TODO: cambia esto (solo números también vale)
const INSTAGRAM_URL = "https://instagram.com/lallamadelamor.pe"; // opcional

function waLink(message: string) {
  const text = encodeURIComponent(message);
  const phone = WHATSAPP_PHONE.replace(/\D/g, ""); // solo números
  return `https://wa.me/${phone}?text=${text}`;
}

const svProducts: Product[] = [
  {
    name: "Caja Miski (Feliz 14)",
    price: "S/ ---",
    desc: "Detalle elegante, con presentación premium y personalización.",
    tags: ["premium", "elegante", "top ventas"],
    image: "/images/sv/caja-miski-feliz-14-san-valentin.jpg",
    waMessage: "Hola, quiero la Caja Miski (Feliz 14). ¿Precio y opciones de personalización?",
  },
  {
    name: "Correo Postal (con foto)",
    price: "S/ ---",
    desc: "Foto + dedicatoria + chocolates: el regalo que se recuerda.",
    tags: ["con foto", "emocional", "recomendado"],
    image: "/images/sv/correo-postal-feliz-dia-mi-amor.jpg",
    waMessage: "Hola, quiero el Correo Postal con foto. ¿Qué debo enviar y cuánto demora?",
  },
  {
    name: "Caja Miski (Te Amo + retrato)",
    price: "S/ ---",
    desc: "Chocolates con mensaje + retrato, ideal para sorprender.",
    tags: ["con foto", "romántico", "personalizado"],
    image: "/images/sv/caja-miski-choco-retrato-te-amo.jpg",
    waMessage: "Hola, quiero la Caja Miski (Te Amo + retrato). ¿Cómo envío la foto y el mensaje?",
  },
];

const giftFor = [
  { title: "Para ella", hint: "Romántico + elegante + con dedicatoria" },
  { title: "Para él", hint: "Mensaje directo + chocolates premium" },
  { title: "Para parejas", hint: "Nombres + fecha + frase especial" },
  { title: "Con foto", hint: "Recuerdo que se queda" },
];

const faqs = [
  {
    q: "¿Entregan en Lima el mismo día?",
    a: "Sí, según disponibilidad y distrito. Escríbenos por WhatsApp para confirmar horarios y costo de delivery.",
  },
  {
    q: "¿Se puede personalizar el mensaje?",
    a: "Sí. Envía texto, nombres, fecha y/o foto. También te ayudamos con ideas si lo necesitas.",
  },
  {
    q: "¿Cómo compro?",
    a: "Elige un producto y presiona “Pedir por WhatsApp”. Te respondemos con opciones, precios y coordinación.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      {/* Top bar */}
      <header className="mx-auto max-w-6xl px-5 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo simple (luego lo reemplazamos por tu logo real en blanco) */}
            <div className="relative h-10 w-10 rounded-2xl border border-border bg-card shadow-soft">
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
              rel="noreferrer"
              className="hidden sm:inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-fg/90 hover:opacity-90"
            >
              Ver Instagram
            </a>
            <a
              href={waLink("Hola, quiero catálogo de San Valentín. ¿Me ayudas?")}
              className="inline-flex rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90"
              style={{ color: "hsl(var(--bg))" }}
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
                  className="inline-flex items-center justify-center rounded-2xl bg-fg px-6 py-3 text-sm font-semibold hover:opacity-90"
                  style={{ color: "hsl(var(--bg))" }}
                >
                  Pedir ahora por WhatsApp
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 text-sm font-semibold text-fg/90 hover:opacity-90"
                >
                  Ver Top Regalos
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Personalización real", "Entrega en Lima", "Presentación premium", "Atención rápida por WhatsApp"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-fg/85"
                    >
                      ✓ {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Panel derecho */}
            <div className="rounded-2xl border border-border bg-white/5 p-6">
              <p className="text-sm font-semibold text-fg">Catálogo San Valentín</p>
              <p className="mt-2 text-sm text-fg/75">
                Te ayudamos a elegir según presupuesto, tiempo y tipo de sorpresa.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-border bg-black/30 p-4">
                  <p className="text-xs text-fg/70">Recomendado</p>
                  <p className="mt-1 text-sm font-semibold text-fg">Con foto + dedicatoria</p>
                  <p className="mt-1 text-sm text-fg/75">Se siente personal. Se comparte. Se recuerda.</p>
                </div>

                <a
                  href={waLink(
                    "Hola, quiero una recomendación para San Valentín (con foto o personalizado). Presupuesto: S/ ____. ¿Qué me sugieres?"
                  )}
                  className="block rounded-xl bg-gold px-4 py-3 text-center text-sm font-semibold hover:opacity-90"
                  style={{ color: "hsl(var(--bg))" }}
                >
                  Quiero recomendación
                </a>

                <p className="text-xs text-fg/60">Respuesta por WhatsApp. Coordinamos entrega y personalización.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top products */}
      <section id="top" className="mx-auto max-w-6xl px-5 pb-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Top Regalos San Valentín</h2>
          <p className="mt-1 text-sm text-fg/75">
            Arrancamos con lo más vendible. Luego agregas aniversario/cumpleaños sin rehacer la base.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {svProducts.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[4/5] w-full bg-black/30">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={p.name.includes("Correo Postal")}
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
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-fg/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={waLink(p.waMessage)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-fg px-5 py-3 text-sm font-semibold hover:opacity-90"
                  style={{ color: "hsl(var(--bg))" }}
                >
                  Pedir este producto
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Regalos para... */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="rounded-3xl border border-border bg-card shadow-soft p-7 md:p-10">
          <h3 className="text-2xl font-semibold tracking-tight">Regalos para…</h3>
          <p className="mt-2 text-sm text-fg/75">
            Elige “para quién” y te recomendamos 2–3 opciones por WhatsApp.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {giftFor.map((g) => (
              <a
                key={g.title}
                href={waLink(
                  `Hola, quiero un regalo de San Valentín ${g.title.toLowerCase()}. Presupuesto: S/ ____. ¿Qué me recomiendas?`
                )}
                className="rounded-2xl border border-border bg-white/5 p-5 hover:opacity-90"
              >
                <p className="text-sm font-semibold text-fg">{g.title}</p>
                <p className="mt-2 text-sm text-fg/75">{g.hint}</p>
                <p className="mt-4 text-xs text-gold/90">Pedir recomendación →</p>
              </a>
            ))}
          </div>
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
              className="inline-flex rounded-2xl bg-gold px-6 py-3 text-sm font-semibold hover:opacity-90"
              style={{ color: "hsl(var(--bg))" }}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-5 pb-10">
        <div className="flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-fg/60">© {new Date().getFullYear()} La Llama del Amor • San Valentín</p>
          <div className="flex gap-3">
            <a className="text-xs text-fg/70 hover:text-fg" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="text-xs text-fg/70 hover:text-fg" href={waLink("Hola, necesito ayuda para elegir un regalo.")}>
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
