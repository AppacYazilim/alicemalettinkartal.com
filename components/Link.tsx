import { usePageContext } from "vike-react/usePageContext";

import { localeDefault, translate } from '../locales';

export function Link({ 
  href, 
  children, 
  className,
  locale,
  ...props
}: { 
  href: string; 
  children: React.ReactNode;
  locale?: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const pageContext = usePageContext();

  

  const pageLocale = locale ?? pageContext.locale;

  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  
  const combinedClassName = [
    className,
    isActive ? "is-active" : undefined
  ].filter(Boolean).join(" ") || undefined;

  const localizedHref = (pageLocale && pageLocale !== localeDefault) ? `/${pageLocale}${translate(href, pageLocale)}` : translate(href, pageLocale);

  return (
    <a href={localizedHref} className={combinedClassName} {...props}>
      {children}
    </a>
  );
}
