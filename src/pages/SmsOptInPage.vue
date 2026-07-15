<script setup lang="ts">
import { usePageSeo } from '@/composables/usePageSeo'
import VerificationFlowSection from '@/components/VerificationFlowSection.vue'

usePageSeo({
  title: 'AutoHandy — SMS Opt-In & Phone Verification',
  description:
    'How AutoHandy users opt in to SMS verification codes and service notifications. Phone number entry, consent checkbox, and one-time code verification.',
})
</script>

<template>
  <div>
    <VerificationFlowSection variant="user" />
  </div>
</template>
