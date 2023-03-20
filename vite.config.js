// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        billetter: resolve(__dirname, "src/billetter.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        om: resolve(__dirname, "src/om.html"),
        program: resolve(__dirname, "src/program.html"),
        samarbejde: resolve(__dirname, "src/samarbejde.html"),
        singleview: resolve(__dirname, "src/singleview.html"),
      },
    },
  },
});
