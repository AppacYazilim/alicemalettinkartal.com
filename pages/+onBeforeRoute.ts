export default onBeforeRoute

import { PageContext } from 'vike/types';

function onBeforeRoute(pageContext: PageContext) {
  return {
    pageContext: {
      locale: 'tr',
    },
  }
}
