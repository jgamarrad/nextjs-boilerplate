// proxy.ts
// Protege con clave la herramienta interna /armar-seleccion.
// La clave NO está en el código: se define en Vercel como variable de entorno
// ARMAR_SELECCION_CLAVE (Settings → Environment Variables).
// Si la variable no existe, la página queda bloqueada para todos.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Comparación en tiempo constante, para no dar pistas por cuánto tarda
function sameText(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function pedirClave(mensaje: string) {
  return new NextResponse(mensaje, {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Armar seleccion", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export function proxy(request: NextRequest) {
  const clave = process.env.ARMAR_SELECCION_CLAVE;
  if (!clave) {
    return new NextResponse("Página no disponible.", { status: 403 });
  }

  const auth = request.headers.get("authorization") ?? "";
  if (!auth.startsWith("Basic ")) return pedirClave("Se necesita clave.");

  let usuario = "";
  let pass = "";
  try {
    const decoded = atob(auth.slice(6));
    const i = decoded.indexOf(":");
    usuario = decoded.slice(0, i);
    pass = decoded.slice(i + 1);
  } catch {
    return pedirClave("Clave incorrecta.");
  }

  // Usuario fijo "llama"; la clave es la de Vercel
  if (sameText(usuario, "llama") && sameText(pass, clave)) {
    const res = NextResponse.next();
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
  return pedirClave("Clave incorrecta.");
}

export const config = {
  matcher: ["/armar-seleccion", "/armar-seleccion/:path*"],
};
