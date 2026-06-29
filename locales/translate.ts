export { translate };

  import { translations } from './translations';

function translate(text: string, locale: string) {
  
  const textTranslations = translations[text];

  // console.log('Translating:', { text, locale});
  if (!textTranslations) {
    return text;
    throw new Error('No translation found for: `' + text + '`')
  }
  return textTranslations[locale]
}
