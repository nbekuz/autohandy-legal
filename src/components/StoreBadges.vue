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

const badgeClass = computed(() =>
  props.size === 'sm'
    ? 'h-9 min-w-[7.5rem] gap-2 px-2.5'
    : 'h-10 min-w-[8.25rem] gap-2.5 px-3',
)

const iconClass = computed(() => (props.size === 'sm' ? 'h-5 w-5' : 'h-[22px] w-[22px]'))

const smallTextClass = computed(() =>
  props.size === 'sm' ? 'text-[8px]' : 'text-[9px]',
)

const largeTextClass = computed(() =>
  props.size === 'sm' ? 'text-[13px]' : 'text-sm',
)
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-3"
    :class="direction === 'col' ? 'flex-col !items-stretch sm:flex-row sm:!items-center' : ''"
  >
    <!-- App Store -->
    <a
      :href="APP_STORE_URL"
      target="_blank"
      rel="noopener noreferrer"
      :class="[
        badgeClass,
        'inline-flex shrink-0 items-center rounded-lg bg-black text-white no-underline transition-opacity hover:opacity-85',
      ]"
      aria-label="Скачать в App Store"
    >
      <svg
        :class="iconClass"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </svg>
      <span class="flex flex-col leading-none">
        <span :class="[smallTextClass, 'opacity-90']">Загрузите в</span>
        <span :class="[largeTextClass, 'font-semibold']">App Store</span>
      </span>
    </a>

    <!-- Google Play -->
    <a
      :href="PLAY_STORE_URL"
      target="_blank"
      rel="noopener noreferrer"
      :class="[
        badgeClass,
        'inline-flex shrink-0 items-center rounded-lg bg-black text-white no-underline transition-opacity hover:opacity-85',
      ]"
      aria-label="Скачать в Google Play"
    >
      <svg
        :class="iconClass"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="#00D2FF" d="M3 20.5V3.5c0-.59.34-1.11.84-1.35l9.85 9.85L3.84 21.85A1.17 1.17 0 0 1 3 20.5z" />
        <path fill="#00F076" d="M16.81 15.12 6.05 21.34l8.49-8.49 2.27 2.27z" />
        <path fill="#FF3A44" d="M3.84 2.15c.47-.23 1.02-.23 1.49 0l11.48 6.73-2.27 2.27L3.84 2.15z" />
        <path fill="#FFB900" d="M16.81 8.88 21.16 11.2c.51.3.51 1.32 0 1.62l-4.35 2.31-2.27-2.27 2.27-2.98z" />
      </svg>
      <span class="flex flex-col leading-none">
        <span :class="[smallTextClass, 'opacity-90']">Доступно в</span>
        <span :class="[largeTextClass, 'font-semibold']">Google Play</span>
      </span>
    </a>
  </div>
</template>
