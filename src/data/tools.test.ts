import { describe, it, expect } from "vitest";
import { tools } from "./tools";
import { ui } from "./ui";

describe("catalogue d'outils", () => {
  it("donne les deux langues de chaque résumé", () => {
    for (const t of tools) {
      expect(t.summary.en.trim(), `${t.id} en`).not.toBe("");
      expect(t.summary.fr.trim(), `${t.id} fr`).not.toBe("");
    }
  });

  it("accompagne toute source publique d'une URL", () => {
    for (const t of tools) {
      if (t.source.state === "public") {
        expect(t.source.url, `${t.id}`).toMatch(/^https:\/\//);
      }
    }
  });

  it("donne un lien à tout outil annoncé en ligne", () => {
    for (const t of tools) {
      if (t.status === "live") {
        expect(t.href, `${t.id}`).toMatch(/^https:\/\//);
      }
    }
  });

  it("donne une capture à la vedette", () => {
    for (const t of tools) {
      if (t.featured) expect(t.screenshot, `${t.id}`).toBeTruthy();
    }
  });

  it("ne met en vedette qu'un seul outil", () => {
    expect(tools.filter((t) => t.featured)).toHaveLength(1);
  });

  it("n'a pas d'identifiant en double", () => {
    const ids = tools.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("chaînes d'interface", () => {
  it("donne les deux langues partout", () => {
    const walk = (node: unknown, path: string) => {
      if (node && typeof node === "object") {
        const o = node as Record<string, unknown>;
        if (typeof o.en === "string" || typeof o.fr === "string") {
          expect(typeof o.en === "string" && o.en.trim(), path).toBeTruthy();
          expect(typeof o.fr === "string" && o.fr.trim(), path).toBeTruthy();
          return;
        }
        for (const [k, v] of Object.entries(o)) walk(v, `${path}.${k}`);
      }
    };
    walk(ui, "ui");
  });
});
