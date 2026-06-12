<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  CarOutlined,
  DollarOutlined,
  MessageOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  ToolOutlined,
} from '@ant-design/icons-vue'
import { usePageSeo } from '@/composables/usePageSeo'
import AppLogo from '@/components/AppLogo.vue'
import StoreBadges from '@/components/StoreBadges.vue'

usePageSeo({
  title: 'AutoHandy Master — Auto Repair Technician App',
  description:
    'AutoHandy Master helps technicians and auto shops accept driver orders, manage jobs, chat with customers, and receive payouts through Stripe Connect.',
})

const features = [
  {
    icon: ThunderboltOutlined,
    title: 'Real-time orders',
    text: 'Receive standard, urgent SOS, and custom requests from drivers on the AutoHandy platform.',
  },
  {
    icon: ToolOutlined,
    title: 'Job management',
    text: 'Accept orders, track status, upload photos of completed work, and maintain service history.',
  },
  {
    icon: MessageOutlined,
    title: 'Customer chat',
    text: 'Message drivers directly in the app — confirm details, arrival time, and repair progress.',
  },
  {
    icon: CarOutlined,
    title: 'Navigation & location',
    text: 'Route to the customer, update your service area, and share arrival status.',
  },
  {
    icon: DollarOutlined,
    title: 'Stripe Connect payouts',
    text: 'Get paid to your real bank account after completing jobs — transparent and secure.',
  },
  {
    icon: SafetyCertificateOutlined,
    title: 'Data security',
    text: 'Account protection, customer privacy, and platform policy compliance.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Download the app',
    text: 'Install AutoHandy Master from the App Store or Google Play and sign in with your phone number.',
  },
  {
    step: '02',
    title: 'Set up your profile',
    text: 'Add your shop details, connect Stripe Connect, and define your service area.',
  },
  {
    step: '03',
    title: 'Accept orders',
    text: 'Receive requests from drivers, complete the work, and mark the order as finished.',
  },
  {
    step: '04',
    title: 'Get paid',
    text: 'Earnings are automatically transferred to your Stripe account after the order is completed.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
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
              AutoHandy app for technicians
            </div>
            <h1
              class="mb-4 text-3xl font-bold leading-tight tracking-tight text-ink-heading sm:mb-5 sm:text-4xl lg:text-5xl"
            >
              Manage orders.<br class="hidden sm:block" />
              <span class="text-brand">Earn</span> from auto repair.
            </h1>
            <p
              class="mx-auto mb-8 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg lg:mx-0"
            >
              AutoHandy Master is the mobile app for technicians and auto shops.
              Accept orders from drivers, perform on-site repairs, and receive
              payouts through Stripe Connect.
            </p>
            <div
              class="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <StoreBadges />
              <RouterLink
                to="/contact"
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

    <!-- Features -->
    <section class="border-t border-brand/10 bg-slate-50 py-12 sm:py-20">
      <div class="mx-auto max-w-5xl px-4 sm:px-8">
        <div class="mb-10 text-center sm:mb-12">
          <h2 class="mb-2 text-2xl font-bold text-ink-heading sm:mb-3 sm:text-3xl">
            Everything a technician needs
          </h2>
          <p class="mx-auto max-w-2xl text-sm text-ink-muted sm:text-base">
            From receiving an order to getting paid — all in one app.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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

    <!-- How it works -->
    <section class="border-t border-brand/10 bg-white py-12 sm:py-20">
      <div class="mx-auto max-w-5xl px-4 sm:px-8">
        <div class="mb-10 text-center sm:mb-12">
          <h2 class="mb-2 text-2xl font-bold text-ink-heading sm:mb-3 sm:text-3xl">
            How it works
          </h2>
          <p class="text-sm text-ink-muted sm:text-base">
            Start working on the AutoHandy platform in four steps
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

    <!-- Download CTA -->
    <section class="border-t border-brand/10 bg-brand py-12 sm:py-16">
      <div class="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 class="mb-3 text-2xl font-bold text-white sm:text-3xl">
          Download AutoHandy Master
        </h2>
        <p class="mb-8 text-sm text-white/85 sm:text-base">
          Available for iOS and Android. Start accepting orders today.
        </p>
        <div class="flex justify-center">
          <StoreBadges />
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="border-t border-brand/10 bg-slate-50 py-12 sm:py-20">
      <div class="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 class="mb-4 text-2xl font-bold text-ink-heading sm:text-3xl">
          About the AutoHandy platform
        </h2>
        <p class="mb-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          AutoHandy connects drivers who need car repair or maintenance
          with auto service technicians. Drivers place orders through the customer app,
          and technicians complete the work through AutoHandy Master — with platform payment
          and payouts via Stripe Connect.
        </p>
        <p class="text-sm leading-relaxed text-ink-muted sm:text-base">
          On this site you will find legal documents, terms of use,
          and support contact information.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <RouterLink to="/privacy" class="w-full sm:w-auto">
            <a-button block size="large" class="!h-11 !rounded-xl">
              Privacy Policy
            </a-button>
          </RouterLink>
          <RouterLink to="/security" class="w-full sm:w-auto">
            <a-button block size="large" class="!h-11 !rounded-xl">
              Terms of Use
            </a-button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
