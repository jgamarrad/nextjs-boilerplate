"use client";

import Image from "next/image";

const WHATSAPP_NUMBER = "51TU_NUMERO"; // <-- cambia esto (ej: 51984058041)
const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

function waLink(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

const products = [
  {
    title: "Caja Miski + “FELIZ 14”",
    price: "Desde S/ ---",
    desc: "Detalle premium con presentación elegante. Personalizable.",
    tags: ["premium", "chocolate", "personalizado"],
    image: "/sv/caja-miski-feliz-14-san-valentin.jpg",
    waText: "Hola, quiero la Caja Miski + “FELIZ 14”. ¿Precio y disponibilidad para entrega en Lima?",
  },
  {
    title: "Correo Postal + Chocolates",
    price: "Desde S/ ---",
    desc: "Tu mensaje tipo carta + chocolates con diseño especial.",
    tags: ["romántico", "con foto", "dedicatoria"],
    image: "/sv/correo-postal-feliz-dia-mi-amor.jpg",
    waText: "Hola, quiero el Correo Postal + Chocolates. ¿Cómo envío la foto y el texto?",
  },
  {
    title: "Choco/Brownie + Pulseras",
    price: "Desde S/ ---",
    desc: "Combo dulce + detalle simbólico (hilo rojo).",
    tags: ["pareja", "combo", "original"],
    image: "/sv/choco-brownie-con-pulseras-hilo-rojo-san-valentin.jpg",
    waText: "Hola, me interesa Choco/Brownie + Pulseras. ¿Opciones y precio?",
  },
  {
    title: "Caja con Foto + “TE AMO”",
    price: "Desde S/ ---",
    desc: "Un clásico que impacta: letras + retrato en chocolate.",
    tags: ["top", "con foto", "premium"],
    image: "/sv/caja-miski-choco-retrato-te-amo.jpg",
    waText: "Hola, quiero la Caja con Foto + “TE AMO”. ¿Me indicas tiempos y cómo mando la foto?",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-brand-line bg-brand-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Si luego quieres logo imagen: reemplaza por <Image src="/logo.png" .../> */}
            <div className="text-[11px] tracking-[0.35em] text-brand-ivory/80">
              LA LLAMA DEL AMOR
            </div>
            <span className="hidden text-xs text-brand-ivory/50 md:inline">
              · Edición San Valentín
            </span>
          </div>

          <a
            href={waLink("Hola, quiero recomendación para un regalo de San Valentín. ¿Qué me sugieren según presupuesto?")}
            className="rounded-full bg-brand-ivory px-5 py-2 text-sm font-semibold text-black shadow-soft hover:opacity-90"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-10 md:pt-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-card/60 px-4 py-2 text-xs text-brand-ivory/80">
              <span className="text-brand-gold">●</span> Entrega en Lima · Personalización real
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Regalos personalizados{" "}
              <span className="text-brand-gold">que se sienten</span>
            </h1>

            <p className="mt-4 text-brand-ivory/80">
              Chocolates, detalles con foto y presentación premium para sorprender en San Valentín
              (y todo el año). Compra rápida por WhatsApp.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("Hola, quiero pedir para San Valentín. ¿Me comparten el catálogo y precios?")}
                className="rounded-xl bg-brand-gold px-5 py-3 text-sm font-semibold text-black shadow-soft hover:opacity-95"
              >
                Pedir ahora por WhatsApp
              </a>
              <a
                href="#catalogo"
                className="rounded-xl border border-brand-line bg-brand-card/40 px-5 py-3 text-sm font-semibold text-brand-ivory hover:bg-brand-card/60"
              >
                Ver catálogo San Valentín
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm text-brand-ivory/80 md:grid-cols-4">
              {[
                "Personalización",
                "Entrega en Lima",
                "Presentación premium",
                "Atención rápida",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-brand-line bg-brand-card/30 px-4 py-3"
                >
                  <span className="text-brand-gold">✓</span> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative overflow-hidden rounded-3xl border border-brand-line bg-brand-card/20 shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-wine/10 via-transparent to-brand-gold/10" />
            <div className="p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/sv/caja-miski-feliz-14-san-valentin.jpg"
                  alt="Regalo San Valentín - La Llama del Amor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Top recomendado</div>
                  <div className="text-xs text-brand-ivory/60">
                    Personalizable · Presentación premium
                  </div>
                </div>
                <a
                  href="#catalogo"
                  className="rounded-full border border-brand-line bg-black/20 px-4 py-2 text-xs font-semibold text-brand-ivory hover:bg-black/30"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección recomendación (nueva, muy útil para conversiones) */}
      <section className="mx-auto mt-14 max-w-6xl px-5">
        <div className="rounded-3xl border border-brand-line bg-brand-card/30 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold">
                ¿No sabes cuál elegir? Te recomendamos en 2 minutos
              </h2>
              <p className="mt-2 text-brand-ivory/75">
                Escríbenos tu presupuesto y para quién es (pareja, esposo/a, enamorado/a) y te proponemos
                opciones listas para pedir.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-brand-ivory/70">
                {["S/ 80–120", "S/ 120–180", "S/ 180+", "Con foto", "Entrega hoy"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-brand-line bg-black/20 px-3 py-2"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={waLink(
                "Hola, quiero recomendación para San Valentín. Presupuesto: S/ __. Es para: __. ¿Qué me sugieren?"
              )}
              className="h-fit rounded-2xl bg-brand-ivory px-6 py-4 text-center text-sm font-semibold text-black shadow-soft hover:opacity-90"
            >
              Quiero recomendación por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="mx-auto mt-14 max-w-6xl px-5 pb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.35em] text-brand-ivory/60">
              CATÁLOGO SAN VALENTÍN
            </div>
            <h2 className="mt-2 text-3xl font-semibold">Top regalos listos para pedir</h2>
            <p className="mt-2 text-brand-ivory/75">
              Selecciona un producto y te abrimos WhatsApp con el mensaje listo.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-3xl border border-brand-line bg-brand-card/25 shadow-soft"
            >
              <div className="relative aspect-[16/10]">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <div className="mt-1 text-sm text-brand-ivory/70">{p.desc}</div>
                  </div>
                  <div className="text-sm font-semibold text-brand-gold">{p.price}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-brand-line bg-black/20 px-3 py-1 text-xs text-brand-ivory/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={waLink(p.waText)}
                    className="w-full rounded-2xl bg-brand-gold px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-95 md:w-auto"
                  >
                    Pedir este producto
                  </a>
                  <a
                    href={waLink("Hola, ¿me confirmas disponibilidad y tiempos de entrega para San Valentín?")}
                    className="w-full rounded-2xl border border-brand-line bg-brand-card/40 px-5 py-3 text-center text-sm font-semibold text-brand-ivory hover:bg-brand-card/60 md:w-auto"
                  >
                    Consultar entrega
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 rounded-3xl border border-brand-line bg-black/20 p-6 text-sm text-brand-ivory/75">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-semibold text-brand-ivory">La Llama del Amor</div>
              <div className="text-brand-ivory/60">Entrega en Lima · Personalización · Atención por WhatsApp</div>
            </div>
            <a
              href={waLink("Hola, vengo desde la web sv.lallamadelamor.pe y quiero hacer un pedido.")}
              className="rounded-full bg-brand-ivory px-5 py-3 text-center font-semibold text-black hover:opacity-90"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
