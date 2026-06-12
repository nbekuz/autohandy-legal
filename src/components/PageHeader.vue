<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  subtitle?: string
  breadcrumb: string
}>()
</script>

<template>
  <div class="border-b border-brand/10 bg-white">
    <div class="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-10">
      <a-breadcrumb class="!mb-4">
        <a-breadcrumb-item>
          <RouterLink to="/" class="text-ink-muted hover:text-brand">Главная</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ breadcrumb }}</a-breadcrumb-item>
      </a-breadcrumb>
      <h1 class="text-2xl font-bold text-ink-heading sm:text-3xl">{{ title }}</h1>
      <p v-if="subtitle" class="mt-2 text-sm text-ink-muted sm:text-base">{{ subtitle }}</p>
    </div>
  </div>
</template>
