<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteMode } from '@/composables/useSiteMode'
import AppLogo from './AppLogo.vue'
import StoreBadges from './StoreBadges.vue'

const year = new Date().getFullYear()
const { isTeam, homeRoute, pageRoute } = useSiteMode()

const footerLinks = computed(() => [
  {
    label: 'Report a bug',
    to: pageRoute('contact', { topic: 'bug' }),
  },
  {
    label: 'Privacy Policy',
    to: pageRoute('privacy'),
  },
  {
    label: 'Terms of Use',
    to: pageRoute('security'),
  },
])
</script>

<template>
  <footer class="mt-auto border-t border-brand/10 bg-white">
    <div class="mx-auto max-w-5xl px-4 py-8 sm:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <RouterLink :to="homeRoute" class="no-underline shrink-0 transition-opacity hover:opacity-80">
          <AppLogo size="md" :team="isTeam" />
        </RouterLink>
        <StoreBadges :variant="isTeam ? 'team' : 'user'" size="sm" />
      </div>

      <div class="my-6 border-t border-brand/10" />

      <div class="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p class="font-medium text-brand">
          AutoHandy © {{ year }}. All rights reserved.
        </p>

        <nav
          class="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1 sm:gap-y-2"
          aria-label="Legal documents"
        >
          <template v-for="(link, index) in footerLinks" :key="link.label">
            <span v-if="index > 0" class="hidden text-slate-300 sm:inline" aria-hidden="true">|</span>
            <RouterLink
              :to="link.to"
              class="no-underline text-ink-heading transition-colors hover:text-brand"
            >
              {{ link.label }}
            </RouterLink>
          </template>
        </nav>
      </div>
    </div>
  </footer>
</template>
