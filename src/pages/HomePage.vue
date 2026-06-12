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
  title: 'AutoHandy Master — приложение для мастеров автосервиса',
  description:
    'AutoHandy Master помогает мастерам и автосервисам принимать заказы от водителей, управлять работой, общаться с клиентами и получать выплаты через Stripe Connect.',
})

const features = [
  {
    icon: ThunderboltOutlined,
    title: 'Заказы в реальном времени',
    text: 'Получайте стандартные, срочные SOS и индивидуальные заявки от водителей на платформе AutoHandy.',
  },
  {
    icon: ToolOutlined,
    title: 'Управление работой',
    text: 'Принимайте заказы, отслеживайте статус, загружайте фото выполненных работ и ведите историю обслуживания.',
  },
  {
    icon: MessageOutlined,
    title: 'Чат с клиентом',
    text: 'Общайтесь с водителем прямо в приложении — уточняйте детали, время прибытия и ход ремонта.',
  },
  {
    icon: CarOutlined,
    title: 'Навигация и геолокация',
    text: 'Стройте маршрут до клиента, обновляйте зону обслуживания и показывайте статус прибытия.',
  },
  {
    icon: DollarOutlined,
    title: 'Выплаты через Stripe Connect',
    text: 'Получайте заработок на реальный банковский счёт после выполнения заказов — прозрачно и безопасно.',
  },
  {
    icon: SafetyCertificateOutlined,
    title: 'Безопасность данных',
    text: 'Защита аккаунта, конфиденциальность клиентов и соблюдение правил платформы.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Скачайте приложение',
    text: 'Установите AutoHandy Master из App Store или Google Play и войдите по номеру телефона.',
  },
  {
    step: '02',
    title: 'Настройте профиль',
    text: 'Заполните данные мастерской, подключите Stripe Connect и укажите зону обслуживания.',
  },
  {
    step: '03',
    title: 'Принимайте заказы',
    text: 'Получайте заявки от водителей, выполняйте работу и отмечайте заказ завершённым.',
  },
  {
    step: '04',
    title: 'Получайте выплаты',
    text: 'Заработок автоматически переводится на ваш счёт Stripe после завершения заказа.',
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
              Приложение для мастеров AutoHandy
            </div>
            <h1
              class="mb-4 text-3xl font-bold leading-tight tracking-tight text-ink-heading sm:mb-5 sm:text-4xl lg:text-5xl"
            >
              Управляйте заказами.<br class="hidden sm:block" />
              <span class="text-brand">Зарабатывайте</span> на автосервисе.
            </h1>
            <p
              class="mx-auto mb-8 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg lg:mx-0"
            >
              AutoHandy Master — мобильное приложение для мастеров и автосервисов.
              Принимайте заказы от водителей, выполняйте ремонт на месте и получайте
              выплаты через Stripe Connect.
            </p>
            <div
              class="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <StoreBadges />
              <RouterLink
                to="/contact"
                class="no-underline inline-flex w-full items-center justify-center rounded-xl border border-brand/20 bg-white px-5 py-2.5 text-sm font-semibold text-ink-heading shadow-sm transition-all hover:border-brand hover:bg-brand-light hover:text-brand sm:w-auto"
              >
                Связаться с поддержкой
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
            Всё необходимое для мастера
          </h2>
          <p class="mx-auto max-w-2xl text-sm text-ink-muted sm:text-base">
            От получения заказа до выплаты на счёт — всё в одном приложении.
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
            Как это работает
          </h2>
          <p class="text-sm text-ink-muted sm:text-base">
            Начните работать на платформе AutoHandy за четыре шага
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
          Скачайте AutoHandy Master
        </h2>
        <p class="mb-8 text-sm text-white/85 sm:text-base">
          Доступно для iOS и Android. Начните принимать заказы уже сегодня.
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
          О платформе AutoHandy
        </h2>
        <p class="mb-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          AutoHandy объединяет водителей, которым нужен ремонт или обслуживание автомобиля,
          и мастеров автосервиса. Водитель оформляет заказ через клиентское приложение,
          а мастер выполняет работу через AutoHandy Master — с оплатой через платформу
          и выплатой на Stripe Connect.
        </p>
        <p class="text-sm leading-relaxed text-ink-muted sm:text-base">
          На этом сайте вы найдёте юридические документы, условия использования
          и контакты службы поддержки.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <RouterLink to="/privacy" class="w-full sm:w-auto">
            <a-button block size="large" class="!h-11 !rounded-xl">
              Политика конфиденциальности
            </a-button>
          </RouterLink>
          <RouterLink to="/security" class="w-full sm:w-auto">
            <a-button block size="large" class="!h-11 !rounded-xl">
              Условия использования
            </a-button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
