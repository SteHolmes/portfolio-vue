const path = require('path')
const glob = require('glob')
const pkg = require('./package')

const getDynamicRoutes = function () {
  return [].concat(
    glob
      .sync('*.md', { cwd: 'posts/' })
      .map((filepath) => `/development/${path.basename(filepath, '.md')}`),
    glob
      .sync('*.md', { cwd: 'listings/' })
      .map((filepath) => `/experience/${path.basename(filepath, '.md')}`),
    glob
      .sync('*.md', { cwd: 'blog/' })
      .map((filepath) => `/blog/${path.basename(filepath, '.md')}`)
  )
}

const dynamicPaths = getDynamicRoutes()

module.exports = {
  generate: {
    routes: dynamicPaths,
  },
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'author', content: 'Stephen Holmes' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
      },
    ],
  },

  /*
   ** Configuration for @nuxtjs/pwa
   ** https://developer.mozilla.org/en-US/docs/Web/Manifest
   */
  manifest: {
    name: 'Steve Holmes - Front-end Developer Portfolio',
    short_name: 'Steve Holmes',
    description: 'Front-end web developer',
    theme_color: '#172b4d',
  },

  meta: {
    // apple-mobile-web-app-capable=yes
    // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
    mobileAppIOS: true,
    appleStatusBarStyle: '#172b4d',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~assets/argon/vendor/nucleo/css/nucleo.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~assets/argon/scss/argon.scss',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~assets/css/custom/main.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/argon/argon-kit'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    [
      'bootstrap-vue/nuxt',
      {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        componentPlugins: ['Carousel', 'Spinner'],
        directivePlugins: ['Tooltip', 'Popover'],
      },
    ],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: [
          path.resolve(__dirname, 'posts'),
          path.resolve(__dirname, 'listings'),
          path.resolve(__dirname, 'blog'),
        ],
        loader: 'frontmatter-markdown-loader',
      })
    },
  },
}
