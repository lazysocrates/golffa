// nuxt.config.ts
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'; // 이 임포트는 사실 불필요할 수 있습니다.

export default defineNuxtConfig({
  // GitHub Pages 배포를 위한 설정 (필수 수정: 'your-repository-name'을 실제 저장소 이름으로)
  app: {
    baseURL: process.env.NODE_ENV === 'production'
      ? '/golffa/' // **실제 GitHub 저장소 이름으로 변경하세요!**
      : '/',
    head: {
      title: 'GOLFFA - 골프랑 빠지다',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'GOLFFA' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Nuxt 앱을 정적 사이트로 빌드하도록 설정 (SSR 비활성화)
  ssr: false,

  // 개발 도구 활성화
  devtools: { enabled: true },

  // Vuetify 및 Material Design Icons CSS 추가
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/styles/main.scss' // 사용자 정의 전역 CSS 파일
  ],

  // 빌드 관련 설정
  build: {
    transpile: ['vuetify'],
  },

  // Nuxt 모듈 설정
  modules: [
    // Vuetify 모듈을 올바른 방식으로 등록합니다.
    // 이 모듈이 내부적으로 vite-plugin-vuetify 설정을 처리합니다.
    '@invictus.codes/nuxt-vuetify',

    // 다른 필요한 모듈들을 여기에 추가합니다.
    // 예를 들어, ESLint만 필요하다면:
    // '@nuxt/eslint',

    // `@nuxt/content`, `@nuxt/ui` 등은 일반적으로 제거하는 것을 권장합니다.
    // 만약 특정 기능 때문에 반드시 필요하다면, 각 모듈의 문서를 참조하여
    // Vuetify와의 호환성 및 설정 방법을 확인해야 합니다.
  ],

  // Vuetify 모듈의 추가 설정 (moduleOptions와 런타임 설정)
  vuetify: {
    moduleOptions: {
      ssr: false,
      styles: true,
      // customVariables, treeShake 등 필요한 옵션을 추가하세요.
    },
    styles: {
      configFile: '~/assets/settings.scss', // Vuetify 테마/설정 파일 (옵션)
    }
  },

  // 이전에 있었던 `compatibilityDate: '2025-05-15'`는 Nuxt 3.11 이상에서 기본값이므로 굳이 명시하지 않아도 됩니다.
  // 하지만 특정 호환성 버전을 고정하고 싶다면 유지해도 무방합니다.
});