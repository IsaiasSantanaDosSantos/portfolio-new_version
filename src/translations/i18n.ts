import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ptBR from './pt-BR/common.json';
import en from './en/common.json';
import es from './es/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        common: ptBR,
      },
      en: {
        common: en,
      },
      es: {
        common: es,
      },
    },

    lng: 'pt-BR',

    fallbackLng: 'pt-BR',

    supportedLngs: ['pt-BR', 'en', 'es'],

    defaultNS: 'common',

    ns: ['common'],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
