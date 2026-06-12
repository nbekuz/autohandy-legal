<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { MailOutlined } from '@ant-design/icons-vue'
import { usePageSeo } from '@/composables/usePageSeo'
import { useSiteMode } from '@/composables/useSiteMode'
import PageHeader from '@/components/PageHeader.vue'

const route = useRoute()
const { isTeam, appName, pageRoute } = useSiteMode()

usePageSeo(
  computed(() => ({
    title: `${appName.value} — Contact & Support`,
    description: isTeam.value
      ? 'Contact AutoHandy Team support for help with your technician account, orders, Stripe Connect payouts, privacy, and bug reports.'
      : 'Contact AutoHandy support for help with your driver account, orders, privacy requests, and bug reports.',
  })),
)

const isBugReport = computed(() => route.query.topic === 'bug')

const contactSections = computed(() => {
  const sections = [
    {
      key: 'general',
      title: 'General support',
      description: 'Account access, orders, app issues, and general questions.',
      email: 'support@autohandy.com',
      subject: '',
    },
    {
      key: 'bug',
      title: 'Report a bug',
      description: 'Describe the issue, steps to reproduce, and your device model — we will investigate.',
      email: 'support@autohandy.com',
      subject: `Bug report — ${appName.value}`,
    },
    {
      key: 'privacy',
      title: 'Privacy & data',
      description: 'Requests to access, correct, or delete personal data under applicable law.',
      email: 'support@autohandy.com',
      subject: `Privacy request — ${appName.value}`,
    },
    {
      key: 'security',
      title: 'Security',
      description: 'Report a vulnerability, data breach, or misuse of customer information.',
      email: 'support@autohandy.com',
      subject: `Security report — ${appName.value}`,
    },
  ]

  if (isTeam.value) {
    sections.push({
      key: 'payout',
      title: 'Payouts & Stripe Connect',
      description: 'Missing or incorrect payouts, verification, and Connect account questions.',
      email: 'support@autohandy.com',
      subject: 'Payout question — AutoHandy Team',
    })
  }

  return sections
})

const subtitle = computed(() =>
  isTeam.value
    ? 'Help with your technician account, orders, payouts, privacy, and bug reports.'
    : 'Help with your driver account, orders, privacy, and bug reports.',
)

function mailto(email: string, subject: string) {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${email}${params}`
}
</script>

<template>
  <div>
    <PageHeader
      title="Contact"
      :subtitle="subtitle"
      breadcrumb="Contact"
    />
    <div class="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-12">
    <a-alert
      v-if="isBugReport"
      type="info"
      show-icon
      class="!mb-8"
      message="Bug report"
      description="Select the Report a bug section below or email support@autohandy.com with a description of the issue."
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
      <h2>How to reach us</h2>
      <ul>
        <li>Include your registered phone number{{ isTeam ? ' or shop name' : '' }}.</li>
        <li>For order questions, attach the <strong>order ID</strong> from the {{ appName }} app.</li>
        <li v-if="isTeam">For payout questions, include your Stripe Connect account email if different from your login.</li>
        <li>Do not email full card numbers, Stripe passwords, or secret keys.</li>
        <li>We respond to non-urgent requests within <strong>2 business days</strong>.</li>
      </ul>

      <a-alert
        type="warning"
        show-icon
        class="!my-6"
        message="Official channels only"
      >
        <template #description>
          AutoHandy will never ask for your Stripe password or verification links in unofficial
          messages. Use only
          <a href="mailto:support@autohandy.com">support@autohandy.com</a>
          or in-app support.
        </template>
      </a-alert>

      <p class="text-sm text-ink-muted">
        Related documents:
        <RouterLink :to="pageRoute('privacy')">Privacy Policy</RouterLink>
        ·
        <RouterLink :to="pageRoute('security')">Terms of Use</RouterLink>
      </p>
    </div>
    </div>
  </div>
</template>
