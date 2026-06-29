// https://vike.dev/Head

import { usePageContext } from "vike-react/usePageContext";
import faviconUrl from "../assets/logo-upload/kbslogo.svg";
import { translate } from "../locales";

// URL to description translation key mapping
// Includes both Turkish (default) and English URL variants
const descriptionMap: Record<string, string> = {
  // Homepage
  "/": "meta.home.description",

  // Corporate / Kurumsal
  "/kurumsal": "meta.corporate.description",
  "/about-us": "meta.corporate.description",

  // Contact / İletişim
  "/iletisim": "meta.contact.description",
  "/contact": "meta.contact.description",

  // Team / Ekibimiz
  "/ekibimiz": "meta.team.description",
  "/our-team": "meta.team.description",

  // Promotional Video / Tanıtım Videosu
  "/tanitim-videosu": "meta.video.description",
  "/promotional-video": "meta.video.description",

  // Catalog / Katalog
  "/catalog": "meta.catalog.description",

  // Certificates / Sertifikalar
  "/sertifikalar": "meta.certificates.description",
  "/certificates": "meta.certificates.description",

  // Products / Ürünler
  "/urunler": "meta.products.description",
  "/products": "meta.products.description",

  // Product Series
  "/urunler/eev-v-serisi": "meta.eev-v.description",
  "/products/eev-v-series": "meta.eev-v.description",

  "/urunler/eev-vlm-serisi": "meta.eev-vlm.description",
  "/products/eev-vlm-series": "meta.eev-vlm.description",

  "/urunler/eev-hl-serisi": "meta.eev-hl.description",
  "/products/eev-hl-series": "meta.eev-hl.description",

  "/urunler/eev-ufl-serisi": "meta.eev-ufl.description",
  "/products/eev-ufl-series": "meta.eev-ufl.description",
};

// Get the base path (without locale prefix)
function getBasePath(urlOriginal: string): string {
  // Remove locale prefix if present
  const localePattern = /^\/(en|ru)(\/|$)/;
  return urlOriginal.replace(localePattern, "/").replace(/\/$/, "") || "/";
}

export function Head() {
  const pageContext = usePageContext();

  const basePath = getBasePath(pageContext.urlOriginal);
  const descriptionKey = descriptionMap[basePath] || "meta.defaultDescription";

  const title = translate(pageContext.config.title, pageContext.locale);
  const description = translate(descriptionKey, pageContext.locale);

  return (
    <>
      <link rel="icon" type="image/png" href={faviconUrl} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </>
  );
}
