import type { NuxtI18nOptions } from '@nuxtjs/i18n';

export default {
  locales: [
    { code: 'en-US', iso: 'en-US', file: 'en-US.json', name: 'English' },
    { code: 'ru-RU', iso: 'ru-RU', file: 'ru-RU.json', name: 'Русский' }
  ],
  langDir: 'locales',
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
  },
  defaultLocale: 'en-US',
  strategy: 'prefix_except_default'
} as NuxtI18nOptions;
