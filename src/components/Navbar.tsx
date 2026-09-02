import { ArrowLeft } from "lucide-react";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import LangToggle from "./LangToggle";

export default function Navbar() {
  const { lang } = useLang();

  return (
    <header className="bg-white border-b border-slate-200">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-extrabold text-base tracking-tight">
          Etienne Chevrollier <span className="text-indigo-600">/ tools</span>
        </span>

        <div className="flex items-center gap-5">
          <a
            href="https://chevrollier.dev"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
          >
            <ArrowLeft size={14} />
            {ui.nav.backToCv[lang]}
          </a>
          <LangToggle />
        </div>
      </nav>
    </header>
  );
}
