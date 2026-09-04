import type { Bil } from "../lib/lang";

/** État du code d'un outil. Ouvrir un dépôt = passer `private` à `public`. */
export type Source =
  | { state: "public"; url: string }
  | { state: "private" }
  | { state: "planned" };

export type Availability = "live" | "coming";

export type Tool = {
  id: string;
  name: string;
  status: Availability;
  featured: boolean;
  href?: string;
  summary: Bil;
  stack: string[];
  source: Source;
  screenshot?: string;
};

export const tools: Tool[] = [
  {
    id: "linkedin-post-generator",
    name: "LinkedIn Post Generator",
    status: "live",
    featured: true,
    href: "https://tools.chevrollier.dev/linkedin-post-generator",
    summary: {
      en: "Turns text and a few images into a pixel-perfect LinkedIn post visual, rendered server-side as a PNG. Markdown, emoji, platform-native typography and image galleries included. Free to try, no account.",
      fr: "Transforme un texte et quelques images en visuel de post LinkedIn au pixel près, rendu côté serveur en PNG. Markdown, emoji, typographie native et galeries d'images compris. Libre d'essai, sans compte.",
    },
    stack: ["Next.js 15", "Satori", "resvg", "TypeScript"],
    source: {
      state: "public",
      url: "https://github.com/Wabfall/linkedin-post-generator",
    },
    screenshot: "/screenshots/linkedin-post-generator.png",
  },
  {
    id: "flat-hunter",
    name: "flat-hunter",
    status: "coming",
    featured: false,
    summary: {
      en: "Watches Barcelona rental listings: collects from several agencies, folds away re-postings of the same flat, rates how reliable the lister is, and pushes Telegram alerts. Built for a long, selective search.",
      fr: "Surveille les annonces de location à Barcelone : collecte chez plusieurs agences, replie les republications d'un même bien, note la fiabilité de l'acteur et pousse des alertes Telegram. Conçu pour une recherche longue et sélective.",
    },
    stack: ["Python", "SQLite", "Telegram"],
    source: { state: "private" },
  },
  {
    id: "job-hunter",
    name: "job-hunter",
    status: "coming",
    featured: false,
    summary: {
      en: "Watches Data Engineer openings on public ATS platforms, scores them with an LLM on growth, stack, passion and real disposable income, then delivers a daily digest and drafts the application file.",
      fr: "Surveille les offres Data Engineer sur les ATS publics, les note par LLM sur la croissance, la stack, la passion et le reste-à-vivre réel, puis livre un digest quotidien et rédige le dossier de candidature.",
    },
    stack: ["Python", "OpenRouter", "JobSpy"],
    source: { state: "private" },
  },
];
