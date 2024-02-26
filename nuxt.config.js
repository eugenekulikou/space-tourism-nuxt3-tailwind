// https://nuxt.com/docs/api/configuration/nuxt-config
import { routeRules, image, head, site } from './config';
import isDev from 'std-env';

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
  ignore: [!isDev ? '' : 'design-system/'],
  devtools: false,
  routeRules,
  image,
  head,
  site,
});
