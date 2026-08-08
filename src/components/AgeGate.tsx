import { useEffect, useState } from "react";

const STORAGE_KEY = "xxcited-age-confirmed";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== "1") setOpen(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const confirm = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-5 backdrop-blur-md"
    >
      <div className="lp-ambient pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative w-full max-w-[26rem] rounded-3xl border border-border/60 bg-card/90 p-7 text-center shadow-2xl shadow-black/50">
        <div className="lp-eyebrow mb-3">Verificación</div>
        <h2 id="age-gate-title" className="mb-3 text-2xl font-bold leading-tight">
          ¿Eres mayor de edad?
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Este sitio contiene contenido destinado únicamente a personas adultas. Confirma que
          tienes la mayoría de edad legal en tu país para continuar.
        </p>
        <button type="button" onClick={confirm} className="lp-cta w-full">
          Sí, soy mayor de edad
        </button>
        <a
          href="https://www.google.com"
          className="mt-3 inline-block w-full rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Salir
        </a>
        <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground/70">
          Al continuar aceptas nuestros términos de servicio y política de privacidad.
        </p>
      </div>
    </div>
  );
}
