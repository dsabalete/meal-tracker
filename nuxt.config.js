export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-meal-tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/firebase.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
    ,
    // https://github.com/nuxt-community/svg-module#readme
    '@nuxtjs/svg',
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: 'meal-tracker-9b7e5.firebaseapp.com',
      databaseURL: 'https://meal-tracker-9b7e5.firebaseio.com',
      projectId: 'meal-tracker-9b7e5',
      storageBucket: 'meal-tracker-9b7e5.appspot.com',
      messagingSenderId: '1067596219075',
      appId: '1:1067596219075:web:714a13bc7227c4f33d5876',
      measurementId: 'G-MM5P1TRKHQ',
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      analytics: true,
      performance: true,
    },
  },

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  storybook: {
    // Options
    stories: ['~/stories/**/*.stories.js'],
  },
}
