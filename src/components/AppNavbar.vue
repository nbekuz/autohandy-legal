<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { MenuOutlined, SwapOutlined } from '@ant-design/icons-vue'
import { useSiteMode } from '@/composables/useSiteMode'
import AppLogo from './AppLogo.vue'

const route = useRoute()
const drawerOpen = ref(false)
const { isTeam, homeRoute, switchRoute, switchLabel, pageRoute } = useSiteMode()

const navLinks = computed(() => [
  { label: 'Home', to: homeRoute.value },
  { label: 'Privacy', to: pageRoute('privacy') },
  { label: 'Terms', to: pageRoute('security') },
  { label: 'Contact', to: pageRoute('contact') },
])

const activeName = computed(() => route.name as string)

function isActive(name: string) {
  return activeName.value === name
}

watch(() => route.fullPath, () => {
  drawerOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
    <div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-8">
      <RouterLink
        :to="homeRoute"
        class="no-underline transition-opacity hover:opacity-80"
      >
        <AppLogo size="sm" show-text :team="isTeam" />
      </RouterLink>

      <div class="hidden items-center gap-1 md:flex">
        <nav class="flex items-center gap-1" aria-label="Main navigation">
          <RouterLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="no-underline rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="
              isActive(link.to.name as string)
                ? 'bg-brand-light text-brand'
                : 'text-ink-muted hover:bg-brand-light/60 hover:text-brand'
            "
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <RouterLink
          :to="switchRoute"
          class="no-underline ml-1 inline-flex items-center gap-1.5 rounded-lg border border-brand/20 bg-brand-light/50 px-3 py-2 text-sm font-semibold text-brand transition-colors hover:border-brand/40 hover:bg-brand-light"
        >
          <SwapOutlined class="text-xs" />
          {{ switchLabel }}
        </RouterLink>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-lg text-ink-heading transition-colors hover:bg-brand-light md:hidden"
        aria-label="Open menu"
        @click="drawerOpen = true"
      >
        <MenuOutlined class="text-lg" />
      </button>
    </div>

    <a-drawer
      v-model:open="drawerOpen"
      placement="right"
      :width="280"
      :closable="true"
      title="Menu"
      class="nav-drawer"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="no-underline rounded-xl px-4 py-3 text-base font-medium transition-colors"
          :class="
            isActive(link.to.name as string)
              ? 'bg-brand-light text-brand'
              : 'text-ink hover:bg-slate-50'
          "
        >
          {{ link.label }}
        </RouterLink>

        <div class="my-2 border-t border-brand/10" />

        <RouterLink
          :to="switchRoute"
          class="no-underline flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-brand transition-colors hover:bg-brand-light"
        >
          <SwapOutlined />
          Switch to {{ switchLabel }}
        </RouterLink>
      </nav>
    </a-drawer>
  </header>
</template>
