// app/page.tsx
type Product = {
  id: string;
  name: string;
  price: string;
  short: string;
  tags: string[];
};

const WHATSAPP_NUMBER = "51984096041"; // <-- CAMBIA: 51 + tu número sin +, sin espacios

const PRODUCTS: Product[] = [
  {
    id: "box-amore",
    name: "Box Amore",
    price: "S/ ---",
    short: "Chocolates + detalle premium, personalizable.",
    tags: ["chocolate", "pareja", "premium"],
  },
  {
    id: "oscar-chocolate",
    name: "Oscar de Chocolate",
    price: "S/ ---",
    short: "El Oscar para la mejor novia / mejor enamorado / mejor papá.",
    tags: ["chocolate", "original", "personalizado"],
  },
  {
    id: "rosas-chocolate",
    name: "Rosas + Chocolates",
    price: "S/ ---",
    short: "Combinación clásica, elegante y lista para sorprender.",
    tags: ["flores", "chocolate", "romántico"],
  },
];

function waLink(productName: string) {
  const msg =
    `Hola, quiero el *${productName}*.\n` +
    `Ocasión: San Valentín\n` +
    `Dedicatoria: "..." \n` +
    `Fecha/Hora de entrega: ...\n` +
    `Distrito: ...\n` +
    `¿Qué opciones de personalización tienen?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0c",
        color: "white",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 20px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ letterSpacing: 3, opacity: 0.8, fontSize: 12 }}>LA LLAMA DEL AMOR</div>
            <h1 style={{ fontSize: 40, margin: "10px 0 8px" }}>
              Regalos personalizados que se sienten
            </h1>
            <p style={{ opacity: 0.85, maxWidth: 650, lineHeight: 1.5 }}>
              Chocolates, brownies y detalles premium para sorprender en San Valentín (y todo el año).
              Compra rápido por WhatsApp.
            </p>
          </div>

          <a
            href={waLink("Catálogo San Valentín")}
            style={{
              alignSelf: "center",
              background: "white",
              color: "#0b0b0c",
              padding: "12px 16px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Pedir por WhatsApp
          </a>
        </div>

        {/* Highlight strip */}
        <div
          style={{
            marginTop: 22,
            padding: 14,
            borderRadius: 14,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span style={{ opacity: 0.9 }}>✅ Personalización</span>
          <span style={{ opacity: 0.9 }}>✅ Entrega en Lima</span>
          <span style={{ opacity: 0.9 }}>✅ Presentación premium</span>
          <span style={{ opacity: 0.9 }}>✅ Atención rápida por WhatsApp</span>
        </div>

        {/* Products */}
        <h2 style={{ marginTop: 34, fontSize: 22 }}>Top Regalos</h2>
        <div
          style={{
            marginTop: 14,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 18,
                padding: 18,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{p.name}</div>
                  <div style={{ opacity: 0.9, marginTop: 4 }}>{p.price}</div>
                </div>
              </div>

              <p style={{ opacity: 0.85, marginTop: 10, lineHeight: 1.5 }}>{p.short}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      opacity: 0.9,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={waLink(p.name)}
                style={{
                  marginTop: 14,
                  display: "inline-block",
                  width: "100%",
                  textAlign: "center",
                  background: "white",
                  color: "#0b0b0c",
                  padding: "12px 14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                Pedir este producto
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 40, opacity: 0.8, fontSize: 13, lineHeight: 1.6 }}>
          <div>¿Quieres algo 100% a medida? Escríbenos y lo diseñamos contigo.</div>
          <div style={{ marginTop: 6 }}>
            <strong>Tip:</strong> guarda esta página como tu “catálogo digital” para enviarla por Instagram y WhatsApp.
          </div>
        </div>
      </div>
    </main>
  );
}
