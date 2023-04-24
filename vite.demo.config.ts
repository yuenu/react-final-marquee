import path from "path";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

module.exports = defineConfig({
  root: path.resolve(__dirname, "./demo"),
  publicDir: path.resolve(__dirname, "./demo/public"),
  base: "./",
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
