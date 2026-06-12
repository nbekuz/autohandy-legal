<script setup lang="ts">
import { RouterLink } from 'vue-router'
import StoreBadges from './StoreBadges.vue'

const year = new Date().getFullYear()

const footerLinks = [
  {
    label: 'Сообщить об ошибке',
    to: { name: 'contact', query: { topic: 'bug' } },
  },
  {
    label: 'Политика конфиденциальности',
    to: { name: 'privacy' },
  },
  {
    label: 'Условия использования',
    to: { name: 'security' },
  },
]
</script>

<template>
  <footer class="mt-auto border-t border-brand/10 bg-white">
    <div class="mx-auto max-w-5xl px-4 py-8 sm:px-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <RouterLink to="/" class="shrink-0 transition-opacity hover:opacity-80">
          <img
            src="/assets/logo.png"
            alt="AutoHandy Master"
            class="h-10 w-10 rounded-xl object-cover shadow-sm ring-1 ring-brand/10"
          />
        </RouterLink>
        <StoreBadges size="sm" />
      </div>

      <div class="my-6 border-t border-brand/10" />

      <div class="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p class="font-medium text-brand">
          AutoHandy © {{ year }}. Все права защищены.
        </p>

        <nav
          class="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1 sm:gap-y-2"
          aria-label="Юридические документы"
        >
          <template v-for="(link, index) in footerLinks" :key="link.label">
            <span v-if="index > 0" class="hidden text-slate-300 sm:inline" aria-hidden="true">|</span>
            <RouterLink
              :to="link.to"
              class="text-ink-heading transition-colors hover:text-brand"
            >
              {{ link.label }}
            </RouterLink>
          </template>
        </nav>
      </div>
    </div>
  </footer>
</template>
