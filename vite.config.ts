import { vitePlugin as remix, VitePluginConfig } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { vercelPreset } from '@vercel/remix/vite';
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();
const webConfig: VitePluginConfig = {
  presets: [vercelPreset()]
}


const extensionConfig: VitePluginConfig = {
  ignoredRouteFiles: ["*"],
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/_index.tsx");
      route("/edge", "routes/edge.tsx");
    })
  },
}
export default defineConfig({
  plugins: [
    remix(
      process.env.VITE_BUILD_MODE === "extension" ? extensionConfig : webConfig
    ), tsconfigPaths()],
});



