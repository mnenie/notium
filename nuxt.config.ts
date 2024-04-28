import i18nConfig from './i18n.config';
import { vite as vidstack } from 'vidstack/plugins';
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {...i18nConfig},
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      API_BASE_URL: process.env.API_BASE_URL
    },
    YANDEX_API_KEY: process.env.YANDEX_API_KEY,
    YANDEX_FOLDER_ID: process.env.YANDEX_FOLDER_ID,
    YANDEX_OAUTH: process.env.YANDEX_OAUTH
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('media-')
    }
  },
  vite: {
    plugins: [vidstack({ include: /player\// })]
  }
});