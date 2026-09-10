import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import type { UserConfig } from "vite";

export default defineConfig((): UserConfig => {
  return {
    // Relative stier gjør at prosjekt-sider på GitHub Pages finner assets.
    base: "./",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
        "@tests": path.resolve(import.meta.dirname, "./__tests__"),
      },
    },
    server: {
      port: 3000,
      open: false,
      host: "0.0.0.0",
      strictPort: true,
      watch: {
        usePolling: true,
      },
    },
    preview: {
      port: 3001,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "esbuild",
      target: "ES2022",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
      },
    },
  };
});
