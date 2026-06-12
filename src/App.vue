<script setup lang="ts">
import { RouterView } from 'vue-router'
import ruRU from 'ant-design-vue/es/locale/ru_RU'

const theme = {
  token: {
    colorPrimary: '#ff771c',
    borderRadius: 10,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
}
</script>

<template>
  <a-config-provider :locale="ruRU" :theme="theme">
    <RouterView />
  </a-config-provider>
</template>
