
export default onBeforeRoute

import { modifyUrl } from 'vike/modifyUrl';
import { PageContext } from 'vike/types';
import { extractLocale } from '../locales';

function onBeforeRoute(pageContext: PageContext) {
  const url = pageContext.urlParsed
  const { urlPathnameWithoutLocale, locale } = extractLocale(url.pathname)


  const urlLogical = modifyUrl(url.href, { pathname: urlPathnameWithoutLocale })
  
  // console.log('onBeforeRoute locale:', locale, urlLogical, pageContext.config);

  


  return {
    pageContext: {
      // Make `locale` available as pageContext.locale
      locale,
      // Vike's router will use pageContext.urlLogical instead of pageContext.urlOriginal
      urlLogical,
    },
  }
}
