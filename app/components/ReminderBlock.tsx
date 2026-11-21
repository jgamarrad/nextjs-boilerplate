// app/components/ReminderBlock.tsx
// "Te recordamos la fecha": el cliente deja para quién, la ocasión y el día,
// y se abre WhatsApp con el mensaje listo. No se guarda nada en la web.
"use client";

import { useState } from "react";
import { waLink, waRecordatorioText } from "@/lib/site";

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];
const OCASIONES = ["Cumpleaños", "Aniversario", "Mesario", "Otra fecha especial"];

export default function ReminderBlock() {
  const [para, setPara] = useState("");
  const [ocasion, setOcasion] = useState(OCASIONES[0]);
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");

  const listo = para.trim().length > 0 && dia !== "" && mes !== "";
  const fecha = listo ? `${dia} de ${mes}` : "";

  const campo =
    "card w-full bg-transparent px-3 py-2.5 text-sm text-white/90 placeholder:text-white/40";

  return (
    <section
      id="recordatorio"
      className="mx-auto max-w-6xl px-6 pb-14"
      aria-labelledby="recordatorio-titulo"
    >
      <div className="card p-5 md:p-6">
        <h2 id="recordatorio-titulo" className="text-xl font-semibold">
          ¿No quieres olvidar su próxima fecha especial? 🗓️
        </h2>
        <p className="mt-1 text-sm text-white/70 leading-snug">
          Déjanos la fecha y te escribimos por WhatsApp una semana antes con ideas de regalo.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-[2fr_1.5fr_0.8fr_1.2fr_auto]">
          <label className="sr-only" htmlFor="rec-para">Para quién</label>
          <input
            id="rec-para"
            value={para}
            onChange={(e) => setPara(e.target.value)}
            placeholder="Para quién (ej. Ana, mi mamá)"
            maxLength={40}
            className={`${campo} col-span-2 md:col-span-1`}
          />

          <label className="sr-only" htmlFor="rec-ocasion">Ocasión</label>
          <select
            id="rec-ocasion"
            value={ocasion}
            onChange={(e) => setOcasion(e.target.value)}
            className={`${campo} col-span-2 md:col-span-1`}
          >
            {OCASIONES.map((o) => (
              <option key={o} value={o} className="text-black">{o}</option>
            ))}
          </select>

          <label className="sr-only" htmlFor="rec-dia">Día</label>
          <select
            id="rec-dia"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
            className={campo}
          >
            <option value="" className="text-black">Día</option>
            {Array.from({ length: 31 }, (_, i) => String(i + 1)).map((d) => (
              <option key={d} value={d} className="text-black">{d}</option>
            ))}
          </select>

          <label className="sr-only" htmlFor="rec-mes">Mes</label>
          <select
            id="rec-mes"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            className={campo}
          >
            <option value="" className="text-black">Mes</option>
            {MESES.map((m) => (
              <option key={m} value={m} className="text-black">
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </option>
            ))}
          </select>

          <a
            href={listo ? waLink(waRecordatorioText(para.trim(), ocasion, fecha)) : undefined}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!listo}
            data-origin="recordatorio"
            className={`btn-primary gold-bg text-black whitespace-nowrap col-span-2 md:col-span-1 ${
              listo ? "" : "pointer-events-none opacity-40"
            }`}
          >
            Recuérdamelo
          </a>
        </div>
      </div>
    </section>
  );
}
