// app/armar-seleccion/ArmarSeleccionClient.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { OCCASIONS, productos } from "@/lib/catalog";
import type { OccasionKey } from "@/lib/types";
import { SITE_URL } from "@/lib/site";

export default function ArmarSeleccionClient() {
  const [elegidos, setElegidos] = useState<string[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [ocasion, setOcasion] = useState<OccasionKey | "todas">("todas");
  const [copiado, setCopiado] = useState(false);

  const lista = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return productos.filter(
      (p) =>
        (ocasion === "todas" || p.occasions.includes(ocasion)) &&
        (!q || p.title.toLowerCase().includes(q) || p.id.toLowerCase().includes(q))
    );
  }, [busqueda, ocasion]);

  const link = `${SITE_URL}/seleccion?p=${elegidos.join(",")}`;

  function toggle(id: string) {
    setCopiado(false);
    setElegidos((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(link);
      setCopiado(true);
    } catch {
      window.prompt("Copia este link:", link);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="text-3xl font-semibold">Armar selección para un cliente</h1>
      <p className="mt-2 text-llama-muted">
        Marca los productos en el orden en que quieres mostrarlos y copia el link.
      </p>

      {/* Barra fija con el link */}
      <div className="card sticky top-2 z-40 mt-6 p-4">
        <div className="text-sm text-white/70">
          {elegidos.length === 0
            ? "Aún no elegiste productos."
            : `${elegidos.length} elegidos: ${elegidos.join(", ")}`}
        </div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            disabled={elegidos.length === 0}
            onClick={copiar}
            className="btn-primary gold-bg text-black disabled:opacity-40"
          >
            {copiado ? "¡Link copiado!" : "Copiar link"}
          </button>
          <a
            href={elegidos.length ? `/seleccion?p=${elegidos.join(",")}` : undefined}
            target="_blank"
            rel="noreferrer"
            className={`btn-secondary gold-border ${elegidos.length ? "" : "pointer-events-none opacity-40"}`}
          >
            Ver cómo lo verá el cliente
          </a>
          <button
            type="button"
            onClick={() => {
              setElegidos([]);
              setCopiado(false);
            }}
            className="btn-secondary gold-border"
          >
            Limpiar
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o código"
          className="card w-full p-3 text-sm sm:max-w-sm bg-transparent"
        />
        <select
          value={ocasion}
          onChange={(e) => setOcasion(e.target.value as OccasionKey | "todas")}
          className="card p-3 text-sm bg-transparent"
        >
          <option value="todas">Todas las ocasiones</option>
          {(Object.keys(OCCASIONS) as OccasionKey[])
            .filter((k) => k !== "inicio")
            .map((k) => (
              <option key={k} value={k}>
                {OCCASIONS[k].label}
              </option>
            ))}
        </select>
      </div>

      <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-4">
        {lista.map((p) => {
          const orden = elegidos.indexOf(p.id);
          const activo = orden >= 0;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => toggle(p.id)}
              aria-pressed={activo}
              className={`card relative p-3 text-left transition ${
                activo ? "ring-2 ring-[var(--gold)]" : "opacity-90"
              }`}
            >
              {activo && (
                <span className="absolute right-2 top-2 z-10 rounded-full gold-bg px-2 text-sm font-bold text-black">
                  {orden + 1}
                </span>
              )}
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black/20">
                <Image src={p.image} alt={p.title} fill className="object-contain" sizes="200px" />
              </div>
              <div className="mt-2 text-xs text-llama-muted">{p.id}</div>
              <div className="text-sm font-semibold leading-snug">{p.title}</div>
              <div className="text-sm">{p.price}</div>
            </button>
          );
        })}
      </div>
    </main>
  );
}
