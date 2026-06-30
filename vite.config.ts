import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";

import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    vike(),
    tailwindcss(),
    imagetools()
  ],
  resolve: {
    alias: {
      "@": new URL("./", import.meta.url).pathname,
    },
  },

  server: {
    port: 3456,
    strictPort: false,
  },
  preview: {
    port: 3456,
    strictPort: false,
  },

  publicDir: "public",
});
