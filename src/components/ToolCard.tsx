import type { Tool } from "../data/tools";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import SourceBadge from "./SourceBadge";

export default function ToolCard({ tool }: { tool: Tool }) {
  const { lang } = useLang();

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-sm font-bold tracking-tight">{tool.name}</h3>
        <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700">
          {ui.coming.badge[lang]}
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

      <div className="mt-auto">
        <SourceBadge source={tool.source} />
      </div>
    </article>
  );
}
