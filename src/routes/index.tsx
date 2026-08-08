import { createFileRoute } from "@tanstack/react-router";
import { landingConfig, type GalleryItem, type VideoCard } from "@/config/landing";

const cfg = landingConfig;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: cfg.seo.title },
      { name: "description", content: cfg.seo.description },
      { property: "og:title", content: cfg.seo.title },
      { property: "og:description", content: cfg.seo.description },
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

function VideoTile({ item }: { item: VideoCard }) {
  return (
    <a
      href={item.href || cfg.downloadUrl}
      className="group/card relative aspect-[9/16] w-[184px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-xl shadow-black/40 sm:w-[212px]"
    >
      {item.videoUrl ? (
        <video
          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          src={item.videoUrl}
          poster={item.posterUrl}
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
      {item.badge ? (
        <span className="absolute right-2.5 top-2.5 rounded-md bg-brand-strong/90 px-2 py-0.5 text-[11px] font-bold text-on-brand shadow">
          {item.badge}
        </span>
      ) : null}
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-sm font-bold text-foreground drop-shadow">{item.title}</p>
        <p className="truncate text-xs text-muted-foreground">{item.subtitle}</p>
      </div>
    </a>
  );
}

function GalleryTile({ item }: { item: GalleryItem }) {
  return (
    <a
      href={item.href || cfg.downloadUrl}
      className="group/card relative aspect-[3/4] w-[184px] shrink-0 overflow-hidden rounded-2xl bg-card shadow-xl shadow-black/40 sm:w-[212px]"
    >
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
      ) : (
        <div className="lp-placeholder h-full w-full transition-transform duration-500 group-hover/card:scale-105" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      {item.badge ? (
        <span className="absolute left-2.5 top-2.5 rounded-md bg-background/70 px-2 py-0.5 text-[11px] font-bold text-foreground backdrop-blur">
          {item.badge}
        </span>
      ) : null}
    </a>
  );
}

function Landing() {
  const videos = [...cfg.videoSection.items, ...cfg.videoSection.items];
  const gallery = [...cfg.gallery.items, ...cfg.gallery.items];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div aria-hidden="true" className="lp-ambient pointer-events-none fixed inset-0 -z-10" />

      {/* Nav */}
      <div className="lp-shell flex items-center justify-between py-4">
        {cfg.brand.logoUrl ? (
          <img src={cfg.brand.logoUrl} alt={cfg.brand.name} className="h-9 w-auto select-none" />
        ) : (
          <span className="text-lg font-bold tracking-tight">{cfg.brand.name}</span>
        )}
        <div className="flex items-center gap-2 sm:gap-3">
          {cfg.brand.navBadge ? (
            <span className="hidden rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground sm:inline-block">
              {cfg.brand.navBadge}
            </span>
          ) : null}
          <a href={cfg.downloadUrl} className="lp-cta-sm">
            {cfg.brand.navCta}
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="pb-6 pt-4 text-center sm:pb-10">
        <div className="lp-shell max-w-[48rem]">
          <div className="lp-eyebrow mb-4">{cfg.hero.eyebrow}</div>
          <h1 className="mx-auto mb-4 max-w-[18ch] text-balance text-[clamp(32px,6vw,58px)] font-bold leading-[1.07] tracking-tight">
            <Highlight text={cfg.hero.title} />
          </h1>
          <p className="mx-auto mb-7 max-w-[46ch] text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
            <Highlight text={cfg.hero.subtitle} bold />
          </p>
          <div className="flex flex-col items-center">
            <a href={cfg.downloadUrl} className="lp-cta group">
              {cfg.hero.ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <span className="mt-3 text-xs tracking-wide text-muted-foreground">
              {cfg.hero.ctaNote}
            </span>
          </div>
        </div>
      </header>

      {/* Video marquee */}
      <section className="py-10 sm:py-14">
        <div className="lp-shell mb-6 flex items-end justify-between">
          <div>
            <div className="lp-eyebrow mb-2">{cfg.videoSection.eyebrow}</div>
            <h2 className="text-2xl font-bold sm:text-3xl">{cfg.videoSection.title}</h2>
          </div>
          <a
            href={cfg.downloadUrl}
            className="shrink-0 text-sm font-semibold text-brand hover:underline"
          >
            {cfg.videoSection.linkText}
          </a>
        </div>
        <div className="lp-marquee-mask group relative overflow-hidden">
          <div className="lp-marquee-track">
            {videos.map((item, i) => (
              <VideoTile key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery marquee */}
      <section className="border-y border-border/40 bg-card/30 py-10 sm:py-14">
        <div className="lp-shell mb-6">
          <div className="lp-eyebrow mb-2">{cfg.gallery.eyebrow}</div>
          <h2 className="text-2xl font-bold sm:text-3xl">{cfg.gallery.title}</h2>
        </div>
        <div className="lp-marquee-mask group relative overflow-hidden">
          <div className="lp-marquee-track lp-marquee-track-reverse">
            {gallery.map((item, i) => (
              <GalleryTile key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16">
        <div className="lp-shell grid gap-4 sm:grid-cols-3">
          {cfg.features.map((f) => (
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
          <Highlight text={cfg.cta.title} />
        </h2>
        <div className="flex flex-col items-center">
          <a href={cfg.downloadUrl} className="lp-cta group">
            {cfg.cta.buttonText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <span className="mt-3 text-xs tracking-wide text-muted-foreground">{cfg.cta.note}</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10">
        <div className="lp-shell flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {cfg.footer.links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
          <p className="max-w-[70ch] text-xs leading-relaxed text-muted-foreground/80">
            {cfg.footer.disclaimer}
          </p>
        </div>
      </footer>
    </main>
  );
}
