<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { MenuOutlined } from '@ant-design/icons-vue'
import AppLogo from './AppLogo.vue'

const route = useRoute()
const drawerOpen = ref(false)

const navLinks = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'Privacy', to: { name: 'privacy' } },
  { label: 'Terms', to: { name: 'security' } },
  { label: 'Contact', to: { name: 'contact' } },
]

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
        to="/"
        class="no-underline transition-opacity hover:opacity-80"
      >
        <AppLogo size="sm" show-text />
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 md:flex" aria-label="Main navigation">
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

      <!-- Mobile menu button -->
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-lg text-ink-heading transition-colors hover:bg-brand-light md:hidden"
        aria-label="Open menu"
        @click="drawerOpen = true"
      >
        <MenuOutlined class="text-lg" />
      </button>
    </div>

    <!-- Mobile drawer -->
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
      </nav>
    </a-drawer>
  </header>
</template>
