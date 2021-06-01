import i18n from 'i18next';

// TRANSLATIONS
export const transUTL = (key: string) => i18n.t(key);
export const langUTL = (language: string) => i18n.changeLanguage(language);
