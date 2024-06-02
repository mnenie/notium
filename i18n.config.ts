import type { NuxtI18nOptions } from '@nuxtjs/i18n';

export default {
  locales: [
    { code: 'en-US', iso: 'en-US', file: 'en-US.json', name: 'English' },
    { code: 'ru-RU', iso: 'ru-RU', file: 'ru-RU.json', name: 'Русский' },
    { code: 'zh-CN', iso: 'zh-CN', file: 'zh-CN.json', name: 'Chinese' }
  ],
  langDir: 'locales',
  lazy: true,
  detectBrowserLanguage: false,
  defaultLocale: 'en-US',
  localeDetection: false,
  strategy: 'prefix_except_default'
} as NuxtI18nOptions;
