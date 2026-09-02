import { ArrowUpRight } from "lucide-react";
import type { Tool } from "../data/tools";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import SourceBadge from "./SourceBadge";

export default function ToolCard({ tool }: { tool: Tool }) {
  const { lang } = useLang();
  const isLive = tool.status === "live";

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-sm font-bold tracking-tight">{tool.name}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${
            isLive
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-amber-200 bg-amber-50 text-amber-700"
          }`}
        >
          {isLive ? ui.live.badge[lang] : ui.coming.badge[lang]}
        </span>
      </div>

      <p className="mb-4 text-[13px] leading-relaxed text-slate-500">{tool.summary[lang]}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {tool.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] text-slate-500"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2.5">
        {isLive && tool.href && (
          <a
            href={tool.href}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-indigo-700"
          >
            {ui.featured.try[lang]}
            <ArrowUpRight size={13} />
          </a>
        )}
        <SourceBadge source={tool.source} />
      </div>
    </article>
  );
}
