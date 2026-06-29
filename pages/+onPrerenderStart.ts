import { PageContext, PrerenderContext } from "vike/types";
import { writeFileSync } from "fs";
import { join } from "path";

export { onPrerenderStart };

const baseUrl = "https://alicemalettinkartal.com";

function generateSitemap(urls: string[]): string {
  const currentDate = new Date().toISOString();
  const urlEntries = urls
    .filter((url) => !url.includes("404"))
    .map((url) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

async function onPrerenderStart(prerenderContext: PrerenderContext) {
  const pageContexts: PageContext[] = [];
  const allUrls: string[] = [];

  prerenderContext.pageContexts.forEach((pageContext) => {
    const { urlOriginal } = pageContext;
    allUrls.push(urlOriginal);
    pageContexts.push({ ...pageContext, locale: 'tr' });
  });

  try {
    const sitemapPath = join(process.cwd(), "dist", "client", "sitemap.xml");
    writeFileSync(sitemapPath, generateSitemap(allUrls), "utf-8");

    const robotsPath = join(process.cwd(), "dist", "client", "robots.txt");
    writeFileSync(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`, "utf-8");
  } catch {
    // sitemap generation is best-effort during dev
  }

  return { prerenderContext: { pageContexts } };
}
