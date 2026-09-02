import { describe, it, expect, afterEach } from "vitest";
import { readStoredLang, storeLang } from "./langStorage";

describe("langStorage", () => {
  const original = globalThis.localStorage;

  afterEach(() => {
    globalThis.localStorage = original;
  });

  it("relit un \"fr\" enregistré", () => {
    globalThis.localStorage = {
      getItem: () => "fr",
    } as unknown as Storage;
    expect(readStoredLang()).toBe("fr");
  });

  it("relit un \"en\" enregistré", () => {
    globalThis.localStorage = {
      getItem: () => "en",
    } as unknown as Storage;
    expect(readStoredLang()).toBe("en");
  });

  it("renvoie null pour une valeur non reconnue", () => {
    globalThis.localStorage = {
      getItem: () => "de",
    } as unknown as Storage;
    expect(readStoredLang()).toBeNull();

    globalThis.localStorage = {
      getItem: () => "",
    } as unknown as Storage;
    expect(readStoredLang()).toBeNull();
  });

  it("renvoie null sans lever quand getItem lève", () => {
    globalThis.localStorage = {
      getItem: () => {
        throw new Error("blocked");
      },
    } as unknown as Storage;
    expect(() => readStoredLang()).not.toThrow();
    expect(readStoredLang()).toBeNull();
  });

  it("storeLang ne lève pas quand setItem lève", () => {
    globalThis.localStorage = {
      setItem: () => {
        throw new Error("blocked");
      },
    } as unknown as Storage;
    expect(() => storeLang("fr")).not.toThrow();
  });

  it("storeLang écrit la valeur quand le stockage fonctionne", () => {
    let written: [string, string] | null = null;
    globalThis.localStorage = {
      setItem: (key: string, value: string) => {
        written = [key, value];
      },
    } as unknown as Storage;
    storeLang("fr");
    expect(written).toEqual(["lang", "fr"]);
  });
});
