import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import en from './locals/en';
import es from './locals/es';
import fr from './locals/fr';
import zh from './locals/zh';

i18n
  .use(XHR)
  .use(LngDetector)
  .init({
    debug: false,
    initImmediate: true,
    fallbackLng: 'en',

    // INITIALIZE RESOURCES
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      zh: { translation: zh },
    },

    interpolation: { escapeValue: false }, // REACT ALREADY DOES ESCAPING

    react: {
      useSuspense: false,
      wait: true,
    },
  });

export default i18n;
