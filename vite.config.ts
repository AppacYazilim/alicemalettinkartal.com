import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    vike(),
    react(),
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
