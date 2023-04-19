import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import react from "@vitejs/plugin-react";
// import typescript from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
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
  plugins: [dts({ insertTypesEntry: true })],
});
