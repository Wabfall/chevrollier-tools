import { createContext, useContext, useState } from "react";
import { readStoredLang, storeLang } from "./langStorage";

export type Lang = "en" | "fr";
export type Bil = { en: string; fr: string };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return readStoredLang() ?? (navigator.language.startsWith("fr") ? "fr" : "en");
  });

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang: (l) => {
          setLang(l);
          storeLang(l);
        },
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
