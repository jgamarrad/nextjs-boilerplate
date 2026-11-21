// app/armar-seleccion/page.tsx
// Herramienta interna: marca productos y copia el link de /seleccion para
// enviarlo a un cliente. No se indexa ni se enlaza desde el catálogo.
import type { Metadata } from "next";
import ArmarSeleccionClient from "./ArmarSeleccionClient";

export const metadata: Metadata = {
  title: "Armar selección",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ArmarSeleccionClient />;
}
