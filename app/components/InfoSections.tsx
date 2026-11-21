// app/components/InfoSections.tsx
// Bloques informativos compartidos: Cómo comprar, Preguntas frecuentes y pie de página.
import {
  FAQS,
  INSTAGRAM_URL,
  LANDING_URL,
  PASOS_COMPRA,
  buildFaqJsonLd,
} from "@/lib/site";

export function HowToBuy() {
  return (
    <section
      id="como-comprar"
      className="mx-auto max-w-6xl px-6 pb-14"
      aria-labelledby="como-comprar-titulo"
    >
      <h2 id="como-comprar-titulo" className="section-title gold-text">
        Cómo comprar
      </h2>

      <ol className="mt-6 grid gap-4 md:grid-cols-4">
        {PASOS_COMPRA.map((paso, i) => (
          <li key={paso.titulo} className="card p-4">
            <div className="text-xs tracking-[0.18em] uppercase text-llama-muted">
              Paso {i + 1}
            </div>
            <h3 className="mt-1 text-lg font-semibold leading-snug">{paso.titulo}</h3>
            <p className="mt-1 text-sm text-white/70 leading-snug">{paso.texto}</p>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h3 className="text-base font-semibold">Plazos</h3>
          <p className="mt-1 text-sm text-white/70 leading-snug">
            Pide con al menos 1 día de anticipación. ¿Lo necesitas hoy? Escríbenos:
            hacemos entregas el mismo día según disponibilidad.
          </p>
        </div>
        <div className="card p-4">
          <h3 className="text-base font-semibold">Medios de pago</h3>
          <p className="mt-1 text-sm text-white/70 leading-snug">
            Yape, Plin, transferencia bancaria o tarjeta de crédito (te enviamos un
            link seguro de Mercado Pago). No trabajamos con pago contra entrega. El
            costo de envío depende del distrito.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Faq({ withSchema = true }: { withSchema?: boolean }) {
  return (
    <section
      id="preguntas"
      className="mx-auto max-w-6xl px-6 pb-14"
      aria-labelledby="preguntas-titulo"
    >
      <h2 id="preguntas-titulo" className="section-title gold-text">
        Preguntas frecuentes
      </h2>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {FAQS.map((f) => (
          <details key={f.q} className="card p-4">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-2 text-sm text-white/70 leading-snug">{f.a}</p>
          </details>
        ))}
      </div>

      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
        />
      )}
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-28 pt-6 border-t border-llama-line">
      <div className="grid gap-6 md:grid-cols-3 text-sm text-white/70">
        <div>
          <div className="text-xs tracking-[0.22em] uppercase text-llama-muted">
            La Llama del Amor
          </div>
          <p className="mt-2 leading-snug">
            Regalos personalizados con chocolate. Delivery en Lima Metropolitana y
            recojo en Miraflores.
          </p>
        </div>

        <div>
          <div className="font-semibold text-white/90">Horario de entrega</div>
          <p className="mt-2 leading-snug">
            Lunes a sábado: 9:00 a. m. – 8:00 p. m.
            <br />
            Domingos y feriados: según disponibilidad.
          </p>
        </div>

        <nav aria-label="Enlaces" className="flex flex-col gap-1">
          <a className="hover:underline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram @lallamadelamor.pe
          </a>
          <a className="hover:underline" href={`${LANDING_URL}/entrega`}>
            Condiciones de entrega
          </a>
          <a className="hover:underline" href={`${LANDING_URL}/terminos`}>
            Términos y condiciones
          </a>
          <a className="hover:underline" href={LANDING_URL}>
            lallamadelamor.pe
          </a>
        </nav>
      </div>
    </footer>
  );
}
