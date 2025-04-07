import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.ts`),
    ),
  )
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'ru'],
    // lng: 'en',
    debug: process.env.NODE_ENV === 'development',
    // ToDo изучить
    fallbackLng: 'en',
    fallbackNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export * from 'react-i18next';
export default i18next;
