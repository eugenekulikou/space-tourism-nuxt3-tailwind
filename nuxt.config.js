// https://nuxt.com/docs/api/configuration/nuxt-config
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
});
