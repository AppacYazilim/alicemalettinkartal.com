import { PageContext, PrerenderContext } from "vike/types";
import { translate } from "../locales";
import { writeFileSync } from "fs";
import { join } from "path";

export { onPrerenderStart };

const locales = ["tr", "en", "ru"];
const localeDefault = "tr";
const baseUrl =
  process.env.VITE_BASE_URL ||
  process.env.BASE_URL ||
  "https://kartalimalat.com.tr";

function generateSitemap(urls: string[]): string {
  const currentDate = new Date().toISOString();

  const urlEntries = urls
    .filter((url) => !url.includes("404")) // Exclude 404 pages
    .map((url) => {
      const fullUrl = `${baseUrl}${url}`;
      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === "/" || url === "/en/" || url === "/ru/" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
}

async function onPrerenderStart(prerenderContext: PrerenderContext) {
  const pageContexts: PageContext[] = [];
  const allUrls: string[] = [];

  console.log("onPrerenderStart locales:", locales);
  prerenderContext.pageContexts.forEach((pageContext) => {
    // Duplicate pageContext for each locale
    locales.forEach((locale) => {
      // Localize URL
      let { urlOriginal } = pageContext;
      if (locale !== "tr") {
        urlOriginal = `/${locale}${translate(pageContext.urlOriginal, locale)}`;
      }
      console.log("onPrerenderStart locale:", { locale, urlOriginal });

      allUrls.push(urlOriginal);

      pageContexts.push({
        ...pageContext,
        urlOriginal,
        // Set pageContext.locale
        locale,
      });
    });
  });

  // Generate sitemap.xml
  const sitemapContent = generateSitemap(allUrls);
  const sitemapPath = join(process.cwd(), "dist", "client", "sitemap.xml");

  // Generate robots.txt
  const robotsContent = generateRobotsTxt();
  const robotsPath = join(process.cwd(), "dist", "client", "robots.txt");

  try {
    writeFileSync(sitemapPath, sitemapContent, "utf-8");
    console.log("✓ Generated sitemap.xml with", allUrls.length, "URLs");

    writeFileSync(robotsPath, robotsContent, "utf-8");
    console.log("✓ Generated robots.txt");
  } catch (error) {
    console.error("Error writing sitemap.xml or robots.txt:", error);
  }

  return {
    prerenderContext: {
      pageContexts,
    },
  };
}
