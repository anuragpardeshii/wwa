// New (vite.config.mjs using ESM)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), compression()],
  assetsInclude: ["**/*.JPG"],
  build: {
    outDir: "dist", // Ensure Vite builds to "dist"
    minify: "esbuild",
  },
});
