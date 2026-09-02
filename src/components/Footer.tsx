import { useLang } from "../lib/lang";
import { ui } from "../data/ui";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="mt-16 border-t border-slate-200 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <a href="https://chevrollier.dev" className="font-medium hover:text-slate-700">
          {ui.footer.backToCv[lang]}
        </a>
        <a href="https://github.com/Wabfall" className="font-medium hover:text-slate-700">
          github.com/Wabfall
        </a>
      </div>
    </footer>
  );
}
