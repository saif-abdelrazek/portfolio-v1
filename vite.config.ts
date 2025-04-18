import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "favicon-32x32.png",
        "favicon-16x16.png",
      ],
      manifest: {
        name: "Saif Abdelrazek | Frontend Developer Portfolio",
        short_name: "Saif Abdelrazek portfolio",

        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "favicon.ico",
            sizes: "any",
            type: "image/ico",
          },
        ],
        theme_color: "#0a0a0a",
        background_color: "#0a0a0a",
        display: "standalone",
        scope: "/",
        start_url: "/",
      },
      workbox: {
        globPatterns: ["**/*.{js,ts,tsx,jsx,wasm,css,html}"],
        globIgnores: ["**/node_modules/**/*", "sw.ts", "workbox-*.ts"],
        swDest: "dev-dist/sw.ts",
      },
      srcDir: "src",
      filename: "sw.ts",
    }),
  ],
});
