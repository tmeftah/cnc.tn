export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'CADCAM Tunsie: Le CNC Spécialist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cairo'
      },
      {
        rel: 'alternate',
        hreflang: 'fr',
        href: 'https://www.cadcam.tn'
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://www.cadcam.tn/en'
      },
      {
        rel: 'canonical',
        href: 'https://www.cadcam.tn'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0f3c6c' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        baseUrl: 'https://cadcam.tn/',
        seo: false, // see doc and layouts

        locales: [
          {
            name: 'Englisch',
            code: 'en',
            iso: 'en-EN',
            country: 'en',
            file: 'en-EN.json'
          },
          {
            name: 'Francais',
            code: 'fr',
            iso: 'fr-FR',
            country: 'fr',
            file: 'fr-FR.json'
          }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'lang'
        },
        strategy: 'prefix_except_default',
        vueI18n: {
          fallbackLocale: 'fr'
        },

        langDir: 'lang/',
        defaultLocale: 'fr',
        lazy: true
      }
    ],
    'nuxt-material-design-icons',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://cadcam.tn',
    gzip: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://cadcam.tn',
    proxyHeaders: false,
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
