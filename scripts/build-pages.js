// Build the static GitHub Pages bundle for the demo page.
// Copies the page and the two shared browser modules into docs/,
// so GitHub Pages can serve the UI with no server and no build step.
// The imports in app.js are relative (./config.js, ./encode.js),
// so the bundle works from any static host as long as the four
// files sit side by side. Re-run after editing config.js
// (e.g. after filling in ESCROW_ADDRESS post-deploy).
// Usage: npm run pages

import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const DOCS = path.join(ROOT, "docs");

const FILES = [
  ["public/index.html", "index.html"],
  ["public/app.js", "app.js"],
  ["src/config.js", "config.js"],
  ["src/encode.js", "encode.js"],
];

await mkdir(DOCS, { recursive: true });
for (const [src, dest] of FILES) {
  await copyFile(path.join(ROOT, src), path.join(DOCS, dest));
  console.log(`${src} -> docs/${dest}`);
}
console.log("Pages bundle ready in docs/. Enable GitHub Pages from the /docs folder.");
