<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { MenuOutlined } from '@ant-design/icons-vue'

const route = useRoute()
const drawerOpen = ref(false)

const navLinks = [
  { label: 'Главная', to: { name: 'home' } },
  { label: 'Конфиденциальность', to: { name: 'privacy' } },
  { label: 'Условия', to: { name: 'security' } },
  { label: 'Контакты', to: { name: 'contact' } },
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
  <header class="sticky top-0 z-50 border-b border-brand/10 bg-white/90 backdrop-blur-md">
    <div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-8">
      <RouterLink
        to="/"
        class="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-80"
      >
        <img
          src="/assets/logo.png"
          alt=""
          class="h-8 w-8 shrink-0 rounded-lg object-cover shadow-sm ring-1 ring-brand/10 sm:h-9 sm:w-9"
        />
        <span class="truncate text-base font-bold text-ink-heading sm:text-lg">
          Auto<span class="text-brand">Handy</span>
        </span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 md:flex" aria-label="Основная навигация">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
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
        aria-label="Открыть меню"
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
      title="Меню"
      class="nav-drawer"
    >
      <nav class="flex flex-col gap-1" aria-label="Мобильная навигация">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="rounded-xl px-4 py-3 text-base font-medium transition-colors"
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
