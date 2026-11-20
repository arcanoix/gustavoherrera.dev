// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

import autoprefixer from "autoprefixer"
import tailwind from "tailwindcss"

// https://astro.build/config
export default defineConfig({
  site: "https://gustavoherrera.dev",
  integrations: [react()],
  vite: {
    css: {
      postcss: { plugins: [tailwind(), autoprefixer()] },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
})
