import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css',
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-gtag',
    'nuxt-primevue',
    'nuxt-vuefire',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          href:'/apple-touch-icon-180x180.png',
        },
      ],
    },
  },
  gtag: {
    id: 'G-H7QX24DDC1',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'et',
        file: 'et.json',
        name: 'Eesti',
      },
      {
        code: 'ru',
        file: 'ru.json',
        name: 'Русский',
      },
      {
        code: 'zh',
        file: 'zh.json',
        name: '中文',
      },
    ],
    //lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
  },
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: {
      as: 'Lara',
      from: path.resolve(__dirname, './presets/lara/'),
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Dia Goals',
      short_name: 'DiaGoals',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      globPatterns: [
        '**/*.{js,css,html,png,svg,ico}',
      ],
      navigateFallback: null,
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  tailwindcss: {
    viewer: false,
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: 'AIzaSyCv3wmtfl5qy2fHckyvURjxLPzQknuPUzQ',
      authDomain: 'dia-goals.firebaseapp.com',
      projectId: 'dia-goals',
      storageBucket: 'dia-goals.appspot.com',
      messagingSenderId: '874840838668',
      appId: '1:874840838668:web:a5dd7e71ef59a255105429',
    },
  },
  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'asia-east1',
        maxInstances: 3,
      },
      nodeVersion: '20',
    },
    preset: 'firebase',
  },
  runtimeConfig: {
    public: {
      vapidKey: 'BHNx3ZTokAmsxQkGIAb1I0v8k16xcP0QXByrCj7SS5_tj8wtPpA7boVakNZIIGq1aRkfa-G1KrtIrL5Hd5mEchs',
      storageUrl: 'https://firebasestorage.googleapis.com/v0/b/dia-goals.appspot.com/o/',
    },
  },
  ssr: false,
  typescript: {
    strict: true,
  },
})
