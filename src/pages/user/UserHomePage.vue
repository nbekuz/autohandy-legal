<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  ClockCircleOutlined,
  CreditCardOutlined,
  MessageOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons-vue'
import { usePageSeo } from '@/composables/usePageSeo'
import { useSiteMode } from '@/composables/useSiteMode'
import AppLogo from '@/components/AppLogo.vue'
import StoreBadges from '@/components/StoreBadges.vue'

const { pageRoute } = useSiteMode()

usePageSeo({
  title: 'AutoHandy — On-Demand Auto Repair for Drivers',
  description:
    'Download AutoHandy from the App Store. Request on-site car repair, track your technician, chat in-app, and pay securely through the platform.',
})

const features = [
  {
    icon: ThunderboltOutlined,
    title: 'Request repair on-site',
    text: 'Book standard, urgent SOS, or custom service requests from your phone.',
  },
  {
    icon: ClockCircleOutlined,
    title: 'Track your technician',
    text: 'See arrival status, route updates, and live job progress in the app.',
  },
  {
    icon: MessageOutlined,
    title: 'In-app chat',
    text: 'Message your technician to confirm details, timing, and repair updates.',
  },
  {
    icon: CreditCardOutlined,
    title: 'Secure payment',
    text: 'Pay for completed work through the platform — no cash handling required.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Request service',
    text: 'Open AutoHandy and book repair or maintenance at your location.',
  },
  {
    step: '02',
    title: 'Technician assigned',
    text: 'A verified technician accepts your order and heads to you.',
  },
  {
    step: '03',
    title: 'Repair on-site',
    text: 'The technician completes the agreed work at your location.',
  },
  {
    step: '04',
    title: 'Pay in the app',
    text: 'Review the job and pay securely through the platform.',
  },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-white">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,119,28,0.12),_transparent_50%)]"
      />
      <div
        class="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl"
      />
      <div class="relative mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div class="flex-1 text-center lg:text-left">
            <div
              class="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-light px-3.5 py-1.5 text-xs font-semibold text-brand sm:text-sm"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              For drivers
            </div>
            <h1
              class="mb-4 text-3xl font-bold leading-tight tracking-tight text-ink-heading sm:mb-5 sm:text-4xl lg:text-5xl"
            >
              Car repair,<br class="hidden sm:block" />
              <span class="text-brand">where you are</span>.
            </h1>
            <p
              class="mx-auto mb-8 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg lg:mx-0"
            >
              AutoHandy connects you with trusted technicians for on-site repair and maintenance.
              Request help, track arrival, and pay — all from your phone.
            </p>
            <div
              class="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <StoreBadges variant="user" />
              <RouterLink
                :to="pageRoute('contact')"
                class="no-underline inline-flex w-full items-center justify-center rounded-xl border border-brand/20 bg-white px-5 py-2.5 text-sm font-semibold text-ink-heading shadow-sm transition-all hover:border-brand hover:bg-brand-light hover:text-brand sm:w-auto"
              >
                Contact support
              </RouterLink>
            </div>
          </div>

          <div class="flex w-full shrink-0 justify-center lg:w-auto">
            <div class="relative">
              <div class="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" />
              <div class="relative max-sm:rounded-xl rounded-3xl">
                <AppLogo size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-brand/10 bg-slate-50 py-12 sm:py-20">
      <div class="mx-auto max-w-5xl px-4 sm:px-8">
        <div class="mb-10 text-center sm:mb-12">
          <h2 class="mb-2 text-2xl font-bold text-ink-heading sm:mb-3 sm:text-3xl">
            Why drivers choose AutoHandy
          </h2>
          <p class="mx-auto max-w-2xl text-sm text-ink-muted sm:text-base">
            Fast help on the road, without the hassle.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="rounded-2xl border border-brand/10 bg-white p-5 shadow-sm transition-all hover:border-brand/30 hover:shadow-md sm:p-6"
          >
            <div
              class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-lg text-brand"
            >
              <component :is="feature.icon" />
            </div>
            <h3 class="mb-2 text-base font-semibold text-ink-heading">{{ feature.title }}</h3>
            <p class="text-sm leading-relaxed text-ink-muted">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-brand/10 bg-white py-12 sm:py-20">
      <div class="mx-auto max-w-5xl px-4 sm:px-8">
        <div class="mb-10 text-center sm:mb-12">
          <h2 class="mb-2 text-2xl font-bold text-ink-heading sm:mb-3 sm:text-3xl">
            How it works
          </h2>
          <p class="text-sm text-ink-muted sm:text-base">
            Get back on the road in four simple steps
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          <div
            v-for="item in steps"
            :key="item.step"
            class="rounded-2xl border border-brand/10 bg-gradient-to-b from-brand-light/40 to-white p-5 sm:p-6"
          >
            <span class="mb-3 block text-2xl font-bold text-brand/40 sm:mb-4 sm:text-3xl">
              {{ item.step }}
            </span>
            <h3 class="mb-2 font-semibold text-ink-heading">{{ item.title }}</h3>
            <p class="text-sm leading-relaxed text-ink-muted">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-brand/10 bg-brand py-12 sm:py-16">
      <div class="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 class="mb-3 text-2xl font-bold text-white sm:text-3xl">
          Download AutoHandy
        </h2>
        <p class="mb-8 text-sm text-white/85 sm:text-base">
          Available on the App Store.
        </p>
        <div class="flex justify-center">
          <StoreBadges variant="user" />
        </div>
      </div>
    </section>

    <section class="border-t border-brand/10 bg-slate-50 py-12 sm:py-20">
      <div class="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 class="mb-4 text-2xl font-bold text-ink-heading sm:text-3xl">
          Legal & support
        </h2>
        <p class="mb-8 text-sm leading-relaxed text-ink-muted sm:text-base">
          Privacy policy, terms of use, and contact information for the AutoHandy driver app.
        </p>

        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <RouterLink :to="pageRoute('privacy')" class="w-full sm:w-auto">
            <a-button block size="large" class="!h-11 !rounded-xl">
              Privacy Policy
            </a-button>
          </RouterLink>
          <RouterLink :to="pageRoute('security')" class="w-full sm:w-auto">
            <a-button block size="large" class="!h-11 !rounded-xl">
              Terms of Use
            </a-button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
