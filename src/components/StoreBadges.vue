<script setup lang="ts">
import { computed } from 'vue'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/constants/stores'

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md'
    direction?: 'row' | 'col'
  }>(),
  {
    size: 'md',
    direction: 'row',
  },
)

const heightClass = computed(() => (props.size === 'sm' ? 'h-9' : 'h-10'))
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-3"
    :class="direction === 'col' ? 'flex-col !items-stretch sm:flex-row sm:!items-center' : ''"
  >
    <a
      :href="APP_STORE_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex shrink-0 transition-opacity hover:opacity-80"
      aria-label="Скачать в App Store"
    >
      <img
        src="/assets/badges/app-store-ru.svg"
        alt=""
        :class="[heightClass, 'w-auto']"
        width="120"
        height="40"
        loading="lazy"
      />
    </a>

    <a
      :href="PLAY_STORE_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex shrink-0 transition-opacity hover:opacity-80"
      aria-label="Скачать в Google Play"
    >
      <img
        src="/assets/badges/google-play-ru.png"
        alt=""
        :class="[heightClass, 'w-auto']"
        width="135"
        height="40"
        loading="lazy"
      />
    </a>
  </div>
</template>
