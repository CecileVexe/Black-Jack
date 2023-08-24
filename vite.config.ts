/* eslint-disable import/no-extraneous-dependencies */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    hmr: { overlay: false },
  },
  plugins: [
    react(),
    checker({
      terminal: false,
      enableBuild: false,
      eslint: {
        lintCommand: "eslint './src/**/*.{ts,tsx}'",
      },
    }),
  ],
});
