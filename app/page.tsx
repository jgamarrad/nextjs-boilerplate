// app/page.tsx
type Product = {
  id: string;
  name: string;
  price?: string;
  short: string;
  tags: string[];
  cta: string;
};

const WHATSAPP_NUMBER = "51999999999"; // <-- CAMBIA: 51 + tu número sin +, sin espacios

// Paleta (alineada a tu Instagram: negro + dorado + blanco)
const COLORS = {
  bg: "#0E0E0E", // fondo principal
  surface: "#151515", // cards / secciones
  surface2: "rgba(255,255,255,0.06)", // barra de beneficios
  border: "rgba(255,255,255,0.10)",
  border2: "rgba(255,255,255,0.14)",
  text: "#F5F5F5",
  text2: "#B5B5B5",
  gold: "#C9A24D",
  gold2: "#B8963E",
  wine: "#8C1D18",
  rose: "#C96C86",
  white: "#FFFFFF",
  black: "#0B0B0B",
};

const PRODUCTS: Product[] = [
  {
    id: "box-amore",
    name: "Box Amore",
    price: "S/ ---",
    short:
      "Chocolates premium con presentación elegante. Personalizable para parejas y ocasiones especiales.",
    tags: ["chocolate", "pareja", "premium"],
    cta: "Personalizar por WhatsApp",
  },
  {
    id: "oscar-chocolate",
    name: "Oscar de Chocolate",
    price: "S/ ---",
    short:
      "El premio perfecto para la mejor novia, el mejor enamorado o el mejor papá. Original, elegante y totalmente personalizable.",
    tags: ["original", "elegante", "personalizado"],
    cta: "Quiero sorprender",
  },
  {
    id: "rosas-chocolate",
    name: "Rosas + Chocolates",
    price: "S/ ---",
    short:
      "Una combinación clásica y elegante. Ideal para sorprender con un detalle que nunca falla.",
    tags: ["flores", "chocolate", "romántico"],
    cta: "Pedir este regalo",
  },
];

function waLink(productName: string) {
  const msg =
    `Hola, quiero *${productName}*.\n\n` +
    `Ocasión: San Valentín / Cumpleaños / Otra\n` +
    `Dedicatoria (texto corto): "..." \n` +
    `Fecha y hora de entrega: ...\n` +
    `Distrito: ...\n` +
    `¿Qué opciones de personalización tienen?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 20px 72px" }}>
        {/* HEADER / HERO */}
        <header>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  letterSpacing: 4,
                  fontSize: 12,
                  color: COLORS.text2,
                  textTransform: "uppercase",
                }}
              >
                La Llama del Amor
              </div>

              <h1 style={{ fontSize: 44, lineHeight: 1.08, margin: "12px 0 10px" }}>
                Regalos personalizados que se sienten
              </h1>

              <p style={{ color: COLORS.text2, maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
                Chocolates, brownies y detalles premium creados para sorprender de verdad.
                <br />
                Personalizados para esa persona especial, en cualquier ocasión.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={waLink("Catálogo La Llama del Amor")}
                style={{
                  background: COLORS.white,
                  color: COLORS.black,
                  padding: "12px 18px",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                  border: `1px solid ${COLORS.white}`,
                }}
              >
                Pedir por WhatsApp
              </a>

              <button
                onClick={() => scrollToId("catalogo")}
                style={{
                  background: "transparent",
                  color: COLORS.text,
                  padding: "12px 14px",
                  borderRadius: 14,
                  border: `1px solid ${COLORS.border2}`,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Ver catálogo
              </button>
            </div>
          </div>

          {/* Barra de beneficios */}
          <div
            style={{
              marginTop: 26,
              padding: 14,
              borderRadius: 16,
              background: COLORS.surface2,
              border: `1px solid ${COLORS.border}`,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Badge text="Personalización real" />
            <Badge text="Entrega en Lima" />
            <Badge text="Presentación premium" />
            <Badge text="Atención directa por WhatsApp" />
          </div>
        </header>

        {/* CATALOGO */}
        <section id="catalogo" style={{ marginTop: 38 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>Top Regalos</h2>
            <span style={{ color: COLORS.text2, fontSize: 13 }}>
              Selección destacada (puedes ampliarla a 50–100 productos luego).
            </span>
          </div>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                style={{
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 18,
                  padding: 18,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Borde sutil dorado arriba (detalle premium) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.gold2})`,
                    opacity: 0.75,
                  }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 850 }}>{p.name}</div>
                    {p.price ? <div style={{ color: COLORS.text2, marginTop: 4 }}>{p.price}</div> : null}
                  </div>
                </div>

                <p style={{ color: COLORS.text2, marginTop: 12, lineHeight: 1.6 }}>
                  {p.short}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.06)",
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text2,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={waLink(p.name)}
                  style={{
                    marginTop: 16,
                    display: "inline-block",
                    width: "100%",
                    textAlign: "center",
                    background: COLORS.white,
                    color: COLORS.black,
                    padding: "12px 14px",
                    borderRadius: 14,
                    textDecoration: "none",
                    fontWeight: 850,
                    border: `1px solid ${COLORS.white}`,
                  }}
                >
                  {p.cta}
                </a>

                <div style={{ marginTop: 10, textAlign: "center", fontSize: 12, color: COLORS.text2 }}>
                  Respuesta rápida por WhatsApp
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NUEVA SECCIÓN: DIFERENCIAL */}
        <section style={{ marginTop: 36 }}>
          <div
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 18,
              padding: 22,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
              <h2 style={{ margin: 0, fontSize: 22 }}>¿Por qué La Llama del Amor?</h2>
              <span style={{ color: COLORS.text2, fontSize: 13 }}>
                La diferencia entre “un regalo” y “un detalle inolvidable”.
              </span>
            </div>

            <p style={{ color: COLORS.text2, lineHeight: 1.7, marginTop: 12, maxWidth: 920 }}>
              No creemos en regalos genéricos. Cada detalle que hacemos tiene una intención, una historia y una
              persona en mente. Personalizamos chocolates, brownies y regalos premium para que no solo se vean
              bien, sino que se sientan especiales desde el primer momento.
            </p>

            <div
              style={{
                marginTop: 14,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 12,
              }}
            >
              <Feature
                title="Personalización real"
                text="Diseños creados para una persona específica (mensaje, nombre, estilo y ocasión)."
              />
              <Feature
                title="Presentación premium"
                text="Detalles cuidados: empaque elegante, acabados finos y estética coherente con tu marca."
              />
              <Feature
                title="Atención directa"
                text="Sin formularios eternos: coordinamos rápido por WhatsApp para cerrar la compra."
              />
              <Feature
                title="Entrega en Lima"
                text="Listos para sorprender: coordinamos horarios y distritos con precisión."
              />
            </div>

            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={waLink("Diseño a medida")}
                style={{
                  background: "transparent",
                  color: COLORS.text,
                  padding: "12px 14px",
                  borderRadius: 14,
                  border: `1px solid ${COLORS.border2}`,
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                Quiero un diseño a medida
              </a>

              <a
                href={waLink("Catálogo completo")}
                style={{
                  background: COLORS.white,
                  color: COLORS.black,
                  padding: "12px 16px",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 900,
                }}
              >
                Ver opciones por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ marginTop: 40, color: COLORS.text2, fontSize: 13, lineHeight: 1.7 }}>
          <div style={{ maxWidth: 920 }}>
            <strong style={{ color: COLORS.text }}>Tip:</strong> guarda este enlace como tu{" "}
            <span style={{ color: COLORS.gold, fontWeight: 800 }}>catálogo digital</span> para enviarlo por Instagram
            y WhatsApp. Aquí podrás actualizar productos sin reenviar PDFs.
          </div>
          <div style={{ marginTop: 10 }}>
            © {new Date().getFullYear()} La Llama del Amor — Lima, Perú
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ---------- Componentes simples ---------- */

function Badge({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        borderRadius: 999,
        border: `1px solid ${COLORS.border}`,
        background: "rgba(255,255,255,0.04)",
        color: COLORS.text,
        fontSize: 13,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          background: COLORS.gold,
          boxShadow: "0 0 0 3px rgba(201,162,77,0.18)",
        }}
      />
      {text}
    </span>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        borderRadius: 16,
        border: `1px solid ${COLORS.border}`,
        background: "rgba(255,255,255,0.04)",
        padding: 14,
      }}
    >
      <div style={{ fontWeight: 900, color: COLORS.text, marginBottom: 6 }}>
        <span style={{ color: COLORS.gold }}>•</span> {title}
      </div>
      <div style={{ color: COLORS.text2, lineHeight: 1.6, fontSize: 13 }}>{text}</div>
    </div>
  );
}

