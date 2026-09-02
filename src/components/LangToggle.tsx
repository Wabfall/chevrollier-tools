import { useLang } from "../lib/lang";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-lg p-1"
    >
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
            lang === l ? "bg-indigo-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
