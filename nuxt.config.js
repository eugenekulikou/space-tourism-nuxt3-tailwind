// https://nuxt.com/docs/api/configuration/nuxt-config
import { routeRules, image, head, site } from './config';

export default defineNuxtConfig({
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
  head,
  site,
});
