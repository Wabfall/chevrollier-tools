import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const ssrOutDir = path.join(root, "dist-ssr");

await build({
  root,
  logLevel: "warn",
  build: {
    ssr: path.join(root, "src", "entry-server.tsx"),
    outDir: ssrOutDir,
  },
});

try {
  const ssrEntry = path.join(ssrOutDir, "entry-server.js");
  const { render } = await import(pathToFileURL(ssrEntry).href);

  const templatePath = path.join(root, "dist", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

  fs.writeFileSync(templatePath, html, "utf-8");
  console.log("  ✓ / → dist/index.html");
} finally {
  fs.rmSync(ssrOutDir, { recursive: true, force: true });
}
