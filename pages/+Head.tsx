import { usePageContext } from "vike-react/usePageContext";

export function Head() {
  const pageContext = usePageContext();
  const title = (pageContext.config as { title?: string }).title ?? "Ali Cemalettin Kartal";
  const description =
    "Ali Cemalettin Kartal — Stratejist, girişimci ve lider. Sanayi, teknoloji ve yatırım alanlarında yirmi yılı aşkın köklü deneyim.";

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://alicemalettinkartal.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href="https://alicemalettinkartal.com" />
    </>
  );
}
