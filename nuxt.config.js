// https://nuxt.com/docs/api/configuration/nuxt-config
import routeRules from './config';

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components'],
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  typescript: {
    typeCheck: true,
  },
  devtools: false,
  routeRules,
});
