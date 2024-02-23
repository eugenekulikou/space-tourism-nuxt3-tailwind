// https://nuxt.com/docs/api/configuration/nuxt-config
import { routeRules, image } from './config';

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components'],
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image'],
  typescript: {
    typeCheck: true,
  },
  devtools: false,
  routeRules,
  image,
});
