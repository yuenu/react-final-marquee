import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import autoprefixer from "autoprefixer";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "Marquee",
      fileName: (format) => `react-final-marquee.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  plugins: [dts({ insertTypesEntry: true }), cssInjectedByJsPlugin()],
});
