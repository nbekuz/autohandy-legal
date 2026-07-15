<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { usePageSeo } from '@/composables/usePageSeo'
import { useSiteMode } from '@/composables/useSiteMode'
import AppLogo from '@/components/AppLogo.vue'

const route = useRoute()
const { isTeam, homeRoute, appName } = useSiteMode()

usePageSeo(
  computed(() => ({
    title: `${appName.value} — Page Not Found`,
    description: 'The page you are looking for does not exist or has been moved.',
  })),
)
</script>

<template>
  <section class="relative overflow-hidden bg-white">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,119,28,0.12),_transparent_55%)]"
    />
    <div class="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-8 sm:py-28">
      <div class="mb-8">
        <AppLogo size="md" show-text :team="isTeam" />
      </div>

      <p class="mb-3 text-6xl font-bold tracking-tight text-brand sm:text-7xl">404</p>
      <h1 class="mb-3 text-2xl font-bold text-ink-heading sm:text-3xl">
        Page not found
      </h1>
      <p class="mb-2 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
        The page you are looking for doesn’t exist or may have been moved.
      </p>
      <p
        v-if="route.fullPath && route.fullPath !== '/'"
        class="mb-8 max-w-lg truncate rounded-lg bg-slate-50 px-3 py-1.5 font-mono text-xs text-ink-muted"
      >
        {{ route.fullPath }}
      </p>
      <div v-else class="mb-8" />

      <div class="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
        <RouterLink
          :to="homeRoute"
          class="no-underline inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
        >
          Back to home
        </RouterLink>
        <RouterLink
          :to="isTeam ? { name: 'team-contact' } : { name: 'contact' }"
          class="no-underline inline-flex w-full items-center justify-center rounded-xl border border-brand/20 bg-white px-5 py-2.5 text-sm font-semibold text-ink-heading shadow-sm transition-all hover:border-brand hover:bg-brand-light hover:text-brand sm:w-auto"
        >
          Contact support
        </RouterLink>
      </div>
    </div>
  </section>
</template>
