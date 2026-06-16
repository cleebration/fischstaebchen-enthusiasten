import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildFeed } from "./src/lib/rss.js";
import { site, posts } from "./src/data.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Schreibt public/feed.xml aus data.js – beim Build und im Dev-Server.
function rssPlugin() {
  const write = () => {
    const dir = path.join(__dirname, "public");
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "feed.xml"), buildFeed({ site, posts }), "utf8");
  };
  return {
    name: "knusperflotte-rss",
    buildStart() {
      write();
    },
    configureServer() {
      write();
    },
  };
}

export default defineConfig({
  plugins: [react(), rssPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.js"],
  },
});
