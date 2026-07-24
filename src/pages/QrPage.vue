<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePageSeo } from '@/composables/usePageSeo'
import StoreBadges from '@/components/StoreBadges.vue'
import AppLogo from '@/components/AppLogo.vue'
import {
  USER_APP_STORE_URL,
  USER_PLAY_STORE_URL,
} from '@/constants/stores'
import { runUserSmartQrRedirect } from '@/utils/smartQrRedirect'

usePageSeo({
  title: 'AutoHandy — Get the App',
  description:
    'Open AutoHandy or download it from the App Store or Google Play.',
})

const showDesktopUi = ref(false)
const status = ref<'idle' | 'opening-app' | 'redirecting-store'>('idle')

onMounted(() => {
  const result = runUserSmartQrRedirect()
  showDesktopUi.value = result.showDesktopUi
  status.value = result.status
})
</script>

<template>
  <section class="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16">
    <div class="mb-8">
      <AppLogo size="md" show-text />
    </div>

    <template v-if="showDesktopUi">
      <h1 class="mb-2 text-center text-2xl font-bold text-ink-heading sm:text-3xl">
        Get AutoHandy
      </h1>
      <p class="mb-8 max-w-md text-center text-sm text-ink-muted sm:text-base">
        Download the User app from the App Store or Google Play.
      </p>
      <StoreBadges variant="user" direction="col" />
    </template>

    <template v-else>
      <p class="text-center text-sm text-ink-muted sm:text-base">
        <template v-if="status === 'opening-app'">Opening AutoHandy…</template>
        <template v-else>Taking you to the store…</template>
      </p>
      <p class="mt-4 text-center text-xs text-ink-muted">
        If nothing happens,
        <a
          :href="USER_APP_STORE_URL"
          class="text-brand no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >App Store</a>
        or
        <a
          :href="USER_PLAY_STORE_URL"
          class="text-brand no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >Google Play</a>.
      </p>
    </template>
  </section>
</template>
