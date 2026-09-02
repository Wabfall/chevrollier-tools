import type { Lang } from "./lang";

const STORAGE_KEY = "lang";

/**
 * Lit la langue retenue, ou `null`. L'acces a `localStorage` peut lever
 * (Safari qui bloque les cookies, stockage desactive par politique) : on
 * traite ce cas comme une absence de preference, jamais comme une erreur.
 */
export function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "fr" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Retient la langue si le navigateur l'autorise. En cas de refus, le choix
 * reste valable pour la session en cours mais ne survit pas au rechargement,
 * ce qui vaut mieux qu'une exception remontee depuis un gestionnaire de clic.
 */
export function storeLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Volontairement ignore : voir la doc ci-dessus.
  }
}
