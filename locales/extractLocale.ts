export { extractLocale };

  import { localeDefault, locales } from './locales';
  import { translate } from './translate';

function extractLocale(urlPathname: string) {
  const path = urlPathname.split('/')

  let locale
  let urlPathnameWithoutLocale
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const first = path[1]
  if (locales.filter((locale) => locale !== localeDefault).includes(first)) {
    locale = first
    urlPathnameWithoutLocale = '/' + path.slice(2).join('/')
  } else {
    locale = localeDefault
    urlPathnameWithoutLocale = urlPathname
  }

  const translatedPath = translate(urlPathnameWithoutLocale, locale)
  // console.log('extractLocale:', { urlPathname, locale, urlPathnameWithoutLocale, translatedPath })
  return { locale, urlPathnameWithoutLocale: translatedPath }
}
