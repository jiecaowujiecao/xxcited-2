import { createFileRoute } from "@tanstack/react-router";
import { logoUrl, downloadUrl, videos, images } from "@/config/landing";
import { AgeGate } from "@/components/AgeGate";


const SEO_TITLE = "XXcited — Tu estudio de vídeo con IA";
const SEO_DESC =
  "Sube tu material y genera vídeos verticales y portadas de alta calidad en minutos. Gratis para empezar.";

const VIDEO_META = [
  { badge: "NUEVO", title: "Modo noche", subtitle: "Plantilla urbana" },
  { badge: "4K", title: "Primer plano", subtitle: "Plantilla e-commerce" },
  { badge: "TOP", title: "Viaje al ritmo", subtitle: "Plantilla musical" },
  { badge: "NUEVO", title: "Gastronomía", subtitle: "Plantilla foodie" },
  { badge: "4K", title: "Estética neón", subtitle: "Plantilla cyber" },
  { badge: "PRO", title: "Subtítulos", subtitle: "Subtítulos automáticos" },
  { badge: "EN VIVO", title: "Clips de directo", subtitle: "Cortes automáticos" },
  { badge: "TOP", title: "Rutina fitness", subtitle: "Plantilla deportiva" },
];

const FEATURES = [
  {
    title: "Montaje en un clic",
    description:
      "Sube el material y la IA se encarga del corte, la música y las transiciones en minutos.",
  },
  {
    title: "Imágenes y vídeos generados",
    description: "Portadas y planos en cualquier estilo. Regenera las veces que quieras hasta acertar.",
  },
  {
    title: "Tus propias plantillas",
    description: "Guarda tus fuentes, colores y ritmo, y reutilízalos con un solo clic.",
  },
];

const FOOTER_LINKS = [
  { label: "Términos", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Contacto", href: "#" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESC },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

/** 把 {高亮词} 渲染成品牌色 */
function Highlight({ text, bold = false }: { text: string; bold?: boolean }) {
  const parts = text.split(/(\{[^}]*\})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{") && part.endsWith("}") ? (
          bold ? (
            <strong key={i} className="font-medium text-foreground">
              {part.slice(1, -1)}
            </strong>
          ) : (
            <span key={i} className="text-brand">
              {part.slice(1, -1)}
            </span>
          )
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function VideoTile({ src, meta }: { src: string; meta: (typeof VIDEO_META)[number] }) {
  return (
    <a
      href={downloadUrl}
      className="group/card relative aspect-[9/16] w-[184px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-xl shadow-black/40 sm:w-[212px]"
    >
      {src ? (
        <video
          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="lp-placeholder h-full w-full transition-transform duration-500 group-hover/card:scale-105" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/20" />
      <span className="absolute right-2.5 top-2.5 rounded-md bg-brand-strong/90 px-2 py-0.5 text-[11px] font-bold text-on-brand shadow">
        {meta.badge}
      </span>
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-sm font-bold text-foreground drop-shadow">{meta.title}</p>
        <p className="truncate text-xs text-muted-foreground">{meta.subtitle}</p>
      </div>
    </a>
  );
}

function GalleryTile({ src }: { src: string }) {
  return (
    <a
      href={downloadUrl}
      className="group/card relative aspect-[3/4] w-[184px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-xl shadow-black/40 sm:w-[212px]"
    >
      {src ? (
        <img
          src={src}
          alt="Portada generada con IA"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
      ) : (
        <div className="lp-placeholder h-full w-full transition-transform duration-500 group-hover/card:scale-105" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      <span className="absolute left-2.5 top-2.5 rounded-md bg-background/70 px-2 py-0.5 text-[11px] font-bold text-foreground backdrop-blur">
        IA
      </span>
    </a>
  );
}

function Landing() {
  const videoList = [...videos, ...videos];
  const imageList = [...images, ...images];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <AgeGate />
      <div aria-hidden="true" className="lp-ambient pointer-events-none fixed inset-0 -z-10" />


      {/* Nav */}
      <div className="lp-shell flex items-center justify-between py-4">
        {logoUrl ? (
          <img src={logoUrl} alt="XXcited" className="h-9 w-auto select-none" />
        ) : (
          <span className="text-lg font-bold tracking-tight">XXcited</span>
        )}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground sm:inline-block">
            Nueva versión · v2.0
          </span>
          <a href={downloadUrl} className="lp-cta-sm">
            Empieza gratis
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="pb-6 pt-4 text-center sm:pb-10">
        <div className="lp-shell max-w-[48rem]">
          <div className="lp-eyebrow mb-4">Sin experiencia en edición · Todo automático</div>
          <h1 className="mx-auto mb-4 max-w-[18ch] text-balance text-[clamp(32px,6vw,58px)] font-bold leading-[1.07] tracking-tight">
            <Highlight text="La IA hace {todo} el montaje de tus vídeos." />
          </h1>
          <p className="mx-auto mb-7 max-w-[46ch] text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
            <Highlight
              text="Sube tu material y crea {vídeos verticales}, portadas y textos — con cientos de plantillas. Gratis para empezar."
              bold
            />
          </p>
          <div className="flex flex-col items-center">
            <a href={downloadUrl} className="lp-cta group">
              Empieza gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <span className="mt-3 text-xs tracking-wide text-muted-foreground">
              Sin tarjeta · Listo en 30 segundos
            </span>
          </div>
        </div>
      </header>

      {/* Video marquee */}
      <section className="py-10 sm:py-14">
        <div className="lp-shell mb-6 flex items-end justify-between">
          <div>
            <div className="lp-eyebrow mb-2">Creaciones</div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ya lo están usando</h2>
          </div>
          <a href={downloadUrl} className="shrink-0 text-sm font-semibold text-brand hover:underline">
            Ver todo →
          </a>
        </div>
        <div className="lp-marquee-mask group relative overflow-hidden">
          <div className="lp-marquee-track">
            {videoList.map((src, i) => (
              <VideoTile key={i} src={src} meta={VIDEO_META[i % VIDEO_META.length]!} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery marquee */}
      <section className="border-y border-border/40 bg-card/30 py-10 sm:py-14">
        <div className="lp-shell mb-6">
          <div className="lp-eyebrow mb-2">Banco de portadas</div>
          <h2 className="text-2xl font-bold sm:text-3xl">Miles de portadas. Tu estilo, exacto.</h2>
        </div>
        <div className="lp-marquee-mask group relative overflow-hidden">
          <div className="lp-marquee-track lp-marquee-track-reverse">
            {imageList.map((src, i) => (
              <GalleryTile key={i} src={src} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16">
        <div className="lp-shell grid gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/50 bg-card/40 p-6">
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 pt-4 text-center">
        <h2 className="mx-auto mb-6 max-w-[20ch] text-balance text-[clamp(26px,3.6vw,44px)] font-bold leading-tight">
          <Highlight text="Empieza a {crear} ahora mismo." />
        </h2>
        <div className="flex flex-col items-center">
          <a href={downloadUrl} className="lp-cta group">
            Empieza gratis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <span className="mt-3 text-xs tracking-wide text-muted-foreground">
            Sin tarjeta · Cancela cuando quieras
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10">
        <div className="lp-shell flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {FOOTER_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
          <p className="max-w-[70ch] text-xs leading-relaxed text-muted-foreground/80">
            Todas las creaciones mostradas han sido generadas por usuarios con este producto y se
            muestran solo como demostración. Al continuar aceptas nuestros términos de servicio.
          </p>
        </div>
      </footer>
    </main>
  );
}
