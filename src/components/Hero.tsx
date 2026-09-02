import { useLang } from "../lib/lang";
import { ui } from "../data/ui";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="pt-14 pb-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-indigo-600 font-medium mb-2.5">
        {ui.hero.eyebrow[lang]}
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3">
        {ui.hero.title[lang]}
      </h1>
      <p className="text-slate-500 leading-relaxed max-w-2xl">{ui.hero.lede[lang]}</p>
    </section>
  );
}
