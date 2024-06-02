import i18nConfig from './i18n.config';
import { vite as vidstack } from 'vidstack/plugins';

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: { ...i18nConfig },
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      API_BASE_URL: process.env.API_BASE_URL,
      BOT_URL: process.env.BOT_URL
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
  experimental: {
    renderJsonPayloads: false
  },
  vite: {
    plugins: [vidstack({ include: /player\// })]
  },
  //seo
  app: {
    head: {
      title: 'Notium - smart cloud app for your notes',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'title',
          content: 'Notium - smart cloud app for your notes'
        },
        {
          name: 'description',
          content:
            'Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI'
        },
        { name: 'keywords', content: 'Notium, AI, Notes, Thoughts, Future' },

        //open graph
        { property: 'og:site:name', content: 'Notium' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://notium.vercel.app/' },
        {
          property: 'og:title',
          content: 'Notium - smart cloud app for your notes'
        },
        {
          property: 'og:description',
          content:
            'Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI'
        },
        { property: 'og:image', content: 'https://notium.vercel.app/img/logo.svg' }
      ]
    }
  },
});
