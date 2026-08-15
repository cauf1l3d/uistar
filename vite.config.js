import { defineConfig } from "vite";
import { readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

function findHtmlFiles(root) {
  const results = [];
  function walk(dir) {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        if (name === "node_modules" || name === ".v3" || name === "dist") continue;
        walk(full);
      } else if (name.endsWith(".html")) {
        results.push(full);
      }
    }
  }
  walk(root);
  return results;
}

const root = resolve(__dirname);
const htmlFiles = findHtmlFiles(root);
const input = {};
for (const f of htmlFiles) {
  const rel = relative(root, f).replace(/\.html$/, "").replace(/[/\\]/g, "-");
  input[rel === "index" ? "main" : rel] = f;
}

export default defineConfig({
  appType: "mpa",
  root,
  build: {
    rollupOptions: {
      input,
    },
  },
});
