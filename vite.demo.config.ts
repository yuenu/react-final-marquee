const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  root: path.resolve(__dirname, "./demo"),
  publicDir: path.resolve(__dirname, "./demo/public"),
  base: './'
});
