/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  test: {
    // browser: {
    //   enabled: true,
    //   name: "chromium",
    //   provider: "playwright",
    //   providerOptions: {
    //     devtools: true,
    //   },
    // },
  },
});
