import { LangProvider, useLang } from "./lib/lang";
import { tools } from "./data/tools";
import { ui } from "./data/ui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedTool from "./components/FeaturedTool";
import ToolCard from "./components/ToolCard";
import Footer from "./components/Footer";

function Page() {
  const { lang } = useLang();
  const featured = tools.find((t) => t.featured);
  const rest = tools.filter((t) => !t.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        {featured && <FeaturedTool tool={featured} />}

        {rest.length > 0 && (
          <>
            <h2 className="mt-12 mb-3 font-mono text-[11px] uppercase tracking-[0.13em] font-medium text-slate-400">
              {ui.coming.heading[lang]}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </>
        )}

        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
