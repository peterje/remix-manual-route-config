import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { vercelPreset } from '@vercel/remix/vite';
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/_index.tsx");
          route("/edge", "routes/edge.tsx");
        })
      },
      presets: [vercelPreset()]
    }
    ), tsconfigPaths()],
});
