import path from "path";
import { defineConfig } from "vite";

module.exports = defineConfig({
  root: path.resolve(__dirname, "./demo"),
  publicDir: path.resolve(__dirname, "./demo/public"),
  base: "./",
});
