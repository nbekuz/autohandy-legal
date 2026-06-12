<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    showText?: boolean
  }>(),
  {
    size: 'md',
    showText: false,
  },
)

const sizeClasses = {
  sm: 'h-8 w-8 sm:h-9 sm:w-9',
  md: 'h-10 w-10',
  lg: 'h-36 w-36 sm:h-44 sm:w-44 lg:h-48 lg:w-48',
}

const radiusClasses = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-[1.75rem]',
}

const textClasses = {
  sm: 'text-base sm:text-lg',
  md: 'text-base sm:text-lg',
  lg: 'text-base sm:text-lg',
}
</script>

<template>
  <div
    class="flex min-w-0 items-center gap-2.5"
    :class="!showText && [radiusClasses[size], 'w-fit overflow-hidden']"
  >
    <div
      class="flex shrink-0 overflow-hidden bg-logo-wrap shadow-md ring-1 p-0.5 ring-slate-600/40"
      :class="[sizeClasses[size], radiusClasses[size]]"
    >
      <img
        src="/assets/logo.png"
        alt=""
        class="block h-full w-full object-cover"
      />
    </div>
    <span
      v-if="showText"
      class="truncate font-bold text-ink-heading"
      :class="textClasses[size]"
    >
      Auto<span class="text-brand">Handy</span>
    </span>
  </div>
</template>
