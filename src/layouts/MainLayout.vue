<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
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
