<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePageSeo } from '@/composables/usePageSeo'
import StoreBadges from '@/components/StoreBadges.vue'
import AppLogo from '@/components/AppLogo.vue'
import {
  TEAM_APP_STORE_URL,
  TEAM_PLAY_STORE_URL,
  USER_APP_STORE_URL,
  USER_PLAY_STORE_URL,
} from '@/constants/stores'
import { runSmartQrRedirect, type SmartQrVariant } from '@/utils/smartQrRedirect'

const route = useRoute()
const variant = computed<SmartQrVariant>(() =>
  route.meta.qrVariant === 'team' ? 'team' : 'user',
)
const isTeam = computed(() => variant.value === 'team')

const appStoreUrl = computed(() =>
  isTeam.value ? TEAM_APP_STORE_URL : USER_APP_STORE_URL,
)
const playStoreUrl = computed(() =>
  isTeam.value ? TEAM_PLAY_STORE_URL : USER_PLAY_STORE_URL,
)

usePageSeo(
  computed(() =>
    isTeam.value
      ? {
          title: 'AutoHandy Team — Get the App',
          description:
            'Open AutoHandy Masters or download it from the App Store or Google Play.',
        }
      : {
          title: 'AutoHandy — Get the App',
          description:
            'Open AutoHandy or download it from the App Store or Google Play.',
        },
  ),
)

const showDesktopUi = ref(false)
const status = ref<'idle' | 'opening-app' | 'redirecting-store'>('idle')

onMounted(() => {
  const result = runSmartQrRedirect(variant.value)
  showDesktopUi.value = result.showDesktopUi
  status.value = result.status
})
</script>

<template>
  <section class="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16">
    <div class="mb-8">
      <AppLogo size="md" show-text :team="isTeam" />
    </div>

    <template v-if="showDesktopUi">
      <h1 class="mb-2 text-center text-2xl font-bold text-ink-heading sm:text-3xl">
        {{ isTeam ? 'Get AutoHandy Team' : 'Get AutoHandy' }}
      </h1>
      <p class="mb-8 max-w-md text-center text-sm text-ink-muted sm:text-base">
        {{
          isTeam
            ? 'Download the Team app from the App Store or Google Play.'
            : 'Download the User app from the App Store or Google Play.'
        }}
      </p>
      <StoreBadges :variant="variant" direction="col" />
    </template>

    <template v-else>
      <p class="text-center text-sm text-ink-muted sm:text-base">
        <template v-if="status === 'opening-app'">
          {{ isTeam ? 'Opening AutoHandy Team…' : 'Opening AutoHandy…' }}
        </template>
        <template v-else>Taking you to the store…</template>
      </p>
      <p class="mt-4 text-center text-xs text-ink-muted">
        If nothing happens,
        <a
          :href="appStoreUrl"
          class="text-brand no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >App Store</a>
        or
        <a
          :href="playStoreUrl"
          class="text-brand no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >Google Play</a>.
      </p>
    </template>
  </section>
</template>
