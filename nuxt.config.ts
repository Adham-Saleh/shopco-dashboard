// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  elementPlus: {
    /** Options */
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.BASE_URL || "https://api.escuelajs.co/graphql", // overwritten by process.env.GQL_HOST
    },
  },
  "graphql-client": {
    documentPaths: ["./queries"],
  },
  googleFonts: {
    families: {
      "IBM+Plex+Sans": [400, 500, 600, 700],
    },
    display: "swap",
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    baseUrl: "https:localhost:3000",
    locales: [
      {
        name: "English",
        iso: "en-US",
        code: "en",
        file: "en.yaml",
        dir: "ltr",
      },
      {
        name: "العربيه",
        iso: "ar",
        code: "ar",
        file: "ar.yaml",
        dir: "rtl",
      },
    ],
    langDir: "../locales/",
    lazy: true,
  },
  css: [
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/scss/custom.scss",
  ],
});
