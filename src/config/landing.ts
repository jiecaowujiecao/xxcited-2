/**
 * ============================================================
 *  配置文件位置：src/config/landing.ts
 *  Archivo de configuración / Config file
 *  只需修改这个文件即可替换：Logo、图片、视频、下载链接。
 *  Edita solo este archivo: logo, imágenes, vídeos y enlaces.
 * ============================================================
 */

export type VideoCard = {
  /** 视频直链 (mp4/webm)，留空显示占位渐变 / URL del vídeo */
  videoUrl: string;
  /** 可选：视频封面图 / Póster opcional */
  posterUrl?: string;
  /** 角标 / Etiqueta: "HD" / "NEW" / "EN VIVO" */
  badge?: string;
  title: string;
  subtitle: string;
  /** 可选：单独跳转链接，留空用全局 downloadUrl */
  href?: string;
};

export type GalleryItem = {
  /** 图片直链，留空显示占位渐变 / URL de la imagen */
  imageUrl: string;
  badge?: string;
  href?: string;
};

export const landingConfig = {
  /** ---------- 品牌 / Marca ---------- */
  brand: {
    name: "XXcited",
    /** Logo 图片链接（png/svg）。留空显示文字 Logo。 */
    logoUrl: "",
    /** 顶部小徽章，留空则隐藏 */
    navBadge: "Nueva versión · v2.0",
    /** 顶部按钮文案 */
    navCta: "Empieza gratis",
  },

  /** ---------- 全局下载 / 跳转链接 ---------- */
  downloadUrl: "https://example.com/download",

  /** ---------- SEO ---------- */
  seo: {
    title: "XXcited — Tu estudio de vídeo con IA",
    description:
      "Sube tu material y genera vídeos verticales y portadas de alta calidad en minutos. Gratis para empezar.",
  },

  /** ---------- 首屏 Hero ---------- */
  hero: {
    eyebrow: "Sin experiencia en edición · Todo automático",
    /** 用 {} 包裹的词会高亮 / Las palabras entre {} se resaltan */
    title: "La IA hace {todo} el montaje de tus vídeos.",
    /** 用 {} 包裹的词会加粗 */
    subtitle:
      "Sube tu material y crea {vídeos verticales}, portadas y textos — con cientos de plantillas. Gratis para empezar.",
    ctaText: "Empieza gratis",
    ctaNote: "Sin tarjeta · Listo en 30 segundos",
  },

  /** ---------- 视频跑马灯 / Carrusel de vídeos ---------- */
  videoSection: {
    eyebrow: "Creaciones",
    title: "Ya lo están usando",
    linkText: "Ver todo →",
    items: [
      { videoUrl: "", badge: "NUEVO", title: "Modo noche", subtitle: "Plantilla urbana" },
      { videoUrl: "", badge: "4K", title: "Primer plano", subtitle: "Plantilla e-commerce" },
      { videoUrl: "", badge: "TOP", title: "Viaje al ritmo", subtitle: "Plantilla musical" },
      { videoUrl: "", badge: "NUEVO", title: "Gastronomía", subtitle: "Plantilla foodie" },
      { videoUrl: "", badge: "4K", title: "Estética neón", subtitle: "Plantilla cyber" },
      { videoUrl: "", badge: "PRO", title: "Subtítulos", subtitle: "Subtítulos automáticos" },
      { videoUrl: "", badge: "EN VIVO", title: "Clips de directo", subtitle: "Cortes automáticos" },
      { videoUrl: "", badge: "TOP", title: "Rutina fitness", subtitle: "Plantilla deportiva" },
    ] as VideoCard[],
  },

  /** ---------- 图片画廊 / Galería ---------- */
  gallery: {
    eyebrow: "Banco de portadas",
    title: "Miles de portadas. Tu estilo, exacto.",
    items: Array.from({ length: 10 }, () => ({
      imageUrl: "",
      badge: "IA",
    })) as GalleryItem[],
  },

  /** ---------- 三个卖点 / Ventajas ---------- */
  features: [
    {
      title: "Montaje en un clic",
      description:
        "Sube el material y la IA se encarga del corte, la música y las transiciones en minutos.",
    },
    {
      title: "Imágenes y vídeos generados",
      description:
        "Portadas y planos en cualquier estilo. Regenera las veces que quieras hasta acertar.",
    },
    {
      title: "Tus propias plantillas",
      description: "Guarda tus fuentes, colores y ritmo, y reutilízalos con un solo clic.",
    },
  ],

  /** ---------- 底部行动区 / CTA final ---------- */
  cta: {
    /** 用 {} 包裹的词会高亮 */
    title: "Empieza a {crear} ahora mismo.",
    buttonText: "Empieza gratis",
    note: "Sin tarjeta · Cancela cuando quieras",
  },

  /** ---------- 页脚 / Pie de página ---------- */
  footer: {
    links: [
      { label: "Términos", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Contacto", href: "#" },
    ],
    disclaimer:
      "Todas las creaciones mostradas han sido generadas por usuarios con este producto y se muestran solo como demostración. Al continuar aceptas nuestros términos de servicio.",
  },
};

export type LandingConfig = typeof landingConfig;
