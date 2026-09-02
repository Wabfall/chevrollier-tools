import { Code, Lock } from "lucide-react";
import type { Source } from "../data/tools";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";

export default function SourceBadge({ source }: { source: Source }) {
  const { lang } = useLang();

  if (source.state === "public") {
    return (
      <a
        href={source.url}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600"
      >
        <Code size={13} />
        {ui.source.public[lang]}
      </a>
    );
  }

  const label = source.state === "private" ? ui.source.private[lang] : ui.source.planned[lang];

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
      <Lock size={11} />
      {label}
    </span>
  );
}
