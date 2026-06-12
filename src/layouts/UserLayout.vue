<script setup lang="ts">
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import { SITE_MODE_KEY, type SiteMode } from '@/composables/useSiteMode'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

provide(SITE_MODE_KEY, ref<SiteMode>('user'))
</script>

<template>
  <div class="flex min-h-screen flex-col bg-slate-50">
    <AppNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
