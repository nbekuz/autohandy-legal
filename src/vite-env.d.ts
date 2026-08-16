/// <reference types="vite/client" />

export {}

declare module 'vue-router' {
  interface RouteMeta {
    qrVariant?: 'user' | 'team'
  }
}
