# chevrollier-tools

The landing page behind **[tools.chevrollier.dev](https://tools.chevrollier.dev)** — a short, bilingual index of the side projects I run in production.

One of them can be tried right now, without an account. The others are announced, and each states plainly whether its source is open yet.

## Why it exists

The tools were scattered across a VPS, reachable only by IP and port, while my CV mentioned them without linking anywhere. This is the front door: it says what each tool does, what it is built on, and where its code stands.

## How it works

A plain static site. No server, no database, no authentication.

- **Vite + React + Tailwind**, sharing the palette and typography of [the portfolio](https://chevrollier.dev) so that moving between the two feels like one place.
- **Pre-rendered to static HTML** by `scripts/prerender.mjs`, which runs the app through `react-dom/server` and injects the result into `dist/index.html`. Without it the page would be an empty `<div>` to any crawler that does not execute JavaScript — and being read is the whole point of this page.
- **Bilingual (EN/FR)**, remembered in `localStorage` where the browser allows it. The pre-rendered HTML is the English version.
- **Deployed by `rsync`** to a VPS, where [Caddy](https://caddyserver.com) serves it with `file_server`. No container involved: it is one HTML file and a folder of assets.

## The one file that matters

[`src/data/tools.ts`](src/data/tools.ts) is the single source of truth. Each tool declares what it is, and the state of its code as data rather than as a guess:

```ts
type Source =
  | { state: "public";  url: string }   // the link is shown
  | { state: "private" }                // "source not public yet"
  | { state: "planned" }                // "opening planned"
```

Opening a repository later is a one-line change in that file. Nothing else knows about the three states except [`SourceBadge`](src/components/SourceBadge.tsx), which renders them. Adding a tool is one entry in the same array.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # invariants over the catalogue and the translations
npm run build    # type-check, bundle, then pre-render
```

The tests are deliberately narrow. They check that every user-facing string has both languages, that a tool claiming to be live carries a link, and that a public source carries a URL — the mistakes that would otherwise ship unnoticed. The markup is not tested; a test would not protect it usefully.

## A note on assets and routing

Screenshots live under `public/screenshots/`, not at the root. A file at `/linkedin-post-generator.png` gets swallowed by the reverse proxy's `handle /linkedin-post-generator*` rule and proxied to that tool, which answers 404 — the file is on disk and still unreachable. Every tool's id doubles as its route prefix, so hub assets stay in a namespace no tool can cover.
