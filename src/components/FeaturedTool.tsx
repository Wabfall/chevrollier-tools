import { ArrowUpRight } from "lucide-react";
import type { Tool } from "../data/tools";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import SourceBadge from "./SourceBadge";

export default function FeaturedTool({ tool }: { tool: Tool }) {
  const { lang } = useLang();

  return (
    <section className="grid gap-6 rounded-xl border border-indigo-200 bg-white p-6 shadow-[0_2px_12px_rgba(99,102,241,0.09)] md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col">
        <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
          <h2 className="text-lg font-bold tracking-tight">{tool.name}</h2>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
            {ui.live.badge[lang]}
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-slate-500">{tool.summary[lang]}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
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
          <a
            href={tool.href}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-indigo-700"
          >
            {ui.featured.try[lang]}
            <ArrowUpRight size={14} />
          </a>
          <SourceBadge source={tool.source} />
        </div>
      </div>

      <a href={tool.href} className="block overflow-hidden rounded-lg border border-slate-200">
        <img
          src={tool.screenshot}
          alt={tool.name}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </a>
    </section>
  );
}
