// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app:{
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'me', href: 'https://catodon.social/@juxgd' },
        { rel: 'me', href: 'https://mastodon.social/@juxgd' }
      ],
    },
  }
})
