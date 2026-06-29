export { LocaleText };

  import { usePageContext } from 'vike-react/usePageContext';
  import { translate } from '../locales';

function LocaleText({ children }: { children: string }) {
  const pageContext = usePageContext()
  const { locale } = pageContext
  const text = children
  const textLocalized = translate(text, locale)
  return <>{textLocalized}</>
}
