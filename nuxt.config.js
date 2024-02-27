// https://nuxt.com/docs/api/configuration/nuxt-config
import { routeRules, image, head, site } from './config';
import isDev from 'std-env';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],
  typescript: {
    typeCheck: true,
  },
  seo: {
    automaticDefaults: false,
  },
  devtools: false,
  routeRules,
  image,
  site,
});
