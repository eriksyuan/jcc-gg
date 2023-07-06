// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-headlessui',
    'nuxt-scheduler',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  colorMode: {
    classSuffix: '',
  },
  headlessui: {
    prefix: 'Headless',
  },
  css: [
    '~/assets/global.css',
  ],
  nitro: {
    storage: {
      db: {
        driver: 'fs',
        base: './.data/db',
      },
    },
  },
})
