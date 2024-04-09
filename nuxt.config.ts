export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@vueuse/motion/nuxt', '@pinia/nuxt'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
    OPENAI_KEY: process.env.OPENAI_KEY,
    PINECONE_KEY: process.env.PINECONE_KEY
  }
});
