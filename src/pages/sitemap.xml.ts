import type { APIRoute } from "astro"
import { localePaths } from "@/i18n/ui"

export const prerender = true

export const GET: APIRoute = ({ site }) => {
  const entries = Object.values(localePaths)
    .map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`)
    .join("\n")

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  )
}
