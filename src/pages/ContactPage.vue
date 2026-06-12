<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { MailOutlined } from '@ant-design/icons-vue'
import { usePageSeo } from '@/composables/usePageSeo'
import PageHeader from '@/components/PageHeader.vue'

usePageSeo({
  title: 'AutoHandy Master — Контакты и поддержка',
  description:
    'Свяжитесь со службой поддержки AutoHandy Master: помощь с аккаунтом, заказами, выплатами Stripe Connect, запросами конфиденциальности и сообщениями об ошибках.',
})

const route = useRoute()

const isBugReport = computed(() => route.query.topic === 'bug')

const contactSections = [
  {
    key: 'general',
    title: 'Общая поддержка',
    description: 'Доступ к аккаунту, заказы, проблемы с приложением и общие вопросы.',
    email: 'support@autohandy.com',
    subject: '',
  },
  {
    key: 'bug',
    title: 'Сообщить об ошибке',
    description: 'Опишите проблему, шаги воспроизведения и модель устройства — мы разберёмся.',
    email: 'support@autohandy.com',
    subject: 'Сообщение об ошибке — AutoHandy Master',
  },
  {
    key: 'privacy',
    title: 'Конфиденциальность и данные',
    description: 'Запросы на доступ, исправление или удаление персональных данных в рамках закона.',
    email: 'support@autohandy.com',
    subject: 'Запрос конфиденциальности — AutoHandy Master',
  },
  {
    key: 'security',
    title: 'Безопасность',
    description: 'Сообщите об уязвимости, утечке данных или злоупотреблении информацией клиентов.',
    email: 'support@autohandy.com',
    subject: 'Сообщение о безопасности — AutoHandy Master',
  },
  {
    key: 'payout',
    title: 'Выплаты и Stripe Connect',
    description: 'Пропущенные или неверные выплаты, верификация и вопросы по Connect.',
    email: 'support@autohandy.com',
    subject: 'Вопрос о выплате — AutoHandy Master',
  },
]

function mailto(email: string, subject: string) {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${email}${params}`
}
</script>

<template>
  <div>
    <PageHeader
      title="Контакты"
      subtitle="Помощь с аккаунтом, заказами, выплатами, конфиденциальностью и сообщениями об ошибках."
      breadcrumb="Контакты"
    />
    <div class="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-12">
    <a-alert
      v-if="isBugReport"
      type="info"
      show-icon
      class="!mb-8"
      message="Сообщение об ошибке"
      description="Выберите раздел «Сообщить об ошибке» ниже или напишите на support@autohandy.com с описанием проблемы."
    />

    <div class="mb-10 grid gap-4 sm:grid-cols-2">
      <div
        v-for="section in contactSections"
        :key="section.key"
        class="rounded-2xl border border-brand/10 bg-white p-5 shadow-sm transition-all hover:border-brand/25 hover:shadow-md sm:p-6"
        :class="{ 'ring-2 ring-brand/30 sm:col-span-2': isBugReport && section.key === 'bug' }"
      >
        <h2 class="mb-1 text-base font-semibold text-ink-heading">{{ section.title }}</h2>
        <p class="mb-4 text-sm text-ink-muted">{{ section.description }}</p>
        <a
          :href="mailto(section.email, section.subject)"
          class="inline-flex items-center gap-2 text-base font-semibold text-brand hover:text-brand-dark hover:underline"
        >
          <MailOutlined />
          {{ section.email }}
        </a>
      </div>
    </div>

    <div class="prose-legal">
      <h2>Как написать нам</h2>
      <ul>
        <li>Укажите зарегистрированный номер телефона или название мастерской.</li>
        <li>Для вопросов по заказу или выплате приложите <strong>ID заказа</strong> из приложения Master.</li>
        <li>Не отправляйте по email полные номера карт, пароли Stripe или секретные ключи.</li>
        <li>На несрочные запросы ответим в течение <strong>2 рабочих дней</strong>.</li>
      </ul>

      <a-alert
        type="warning"
        show-icon
        class="!my-6"
        message="Только официальные каналы"
      >
        <template #description>
          AutoHandy никогда не запрашивает пароль Stripe или ссылки верификации в неофициальных
          сообщениях. Используйте только
          <a href="mailto:support@autohandy.com">support@autohandy.com</a>
          или поддержку в приложении.
        </template>
      </a-alert>

      <p class="text-sm text-ink-muted">
        Связанные документы:
        <RouterLink to="/privacy">Политика конфиденциальности</RouterLink>
        ·
        <RouterLink to="/security">Условия использования</RouterLink>
      </p>
    </div>
    </div>
  </div>
</template>
