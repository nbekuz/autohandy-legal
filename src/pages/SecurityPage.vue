<script setup lang="ts">
import { usePageSeo } from '@/composables/usePageSeo'
import PageHeader from '@/components/PageHeader.vue'

usePageSeo({
  title: 'AutoHandy Master — Security & Terms of Use',
  description:
    'Account security, customer data privacy, Stripe Connect rules, and technician responsibilities when handling driver orders on the AutoHandy platform.',
})
</script>

<template>
  <div>
    <PageHeader
      title="Security & Terms of Use"
      subtitle="AutoHandy Master · Last updated: May 22, 2026"
      breadcrumb="Terms of Use"
    />
    <article class="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-12 prose-legal">
    <p>
      This document describes how <strong>AutoHandy Master</strong> protects your account,
      customer information, and business data. By using the app, you agree to handle
      confidential information responsibly as outlined below.
    </p>

    <h2>1. Account security</h2>
    <ul>
      <li>Sign-in uses SMS codes (one-time verification). Do not share codes with anyone.</li>
      <li>Access tokens are stored in the device's secure storage, not in plain text.</li>
      <li>Sign out on shared devices. Report suspicious access immediately.</li>
    </ul>

    <h2>2. Customer confidential information</h2>
    <p>When you accept an order, you may see customer names, phone numbers, addresses, vehicle data, photos, and messages. You agree to:</p>
    <ul>
      <li>Use this data <strong>only</strong> to perform the requested service.</li>
      <li>Not copy, sell, or disclose customer data outside the AutoHandy platform.</li>
      <li>Not contact customers for unrelated marketing without platform rules and consent.</li>
      <li>Not keep unnecessary screenshots of personal data on personal devices.</li>
    </ul>

    <h2>3. Payments, driver orders & Stripe Connect security</h2>
    <p>
      Real orders come from <strong>drivers</strong> on the AutoHandy platform. Earnings
      for completed work are paid through <strong>Stripe Connect</strong>. Follow
      these rules to protect yourself, customers, and the platform.
    </p>

    <h3>3.1 Orders and payouts</h3>
    <ul>
      <li>Accept and complete only orders created by drivers through official AutoHandy apps.</li>
      <li>Do not ask drivers to pay cash or transfer funds outside platform payment — this may violate terms and removes platform protection.</li>
      <li>Mark work as completed honestly when the agreed service is done; false completion may lead to account review or payout holds.</li>
      <li>Payout timing depends on order status, possible hold periods, refunds, and Stripe transfer schedules shown in the app.</li>
    </ul>

    <h3>3.2 Your Stripe Connect account</h3>
    <ul>
      <li>Register Connect with <strong>accurate real information</strong> (your name or legal business). False details may result in Stripe or platform suspension.</li>
      <li>Bank and identity data is sent to <strong>Stripe</strong> under their security and KYC standards — not stored in full on AutoHandy servers.</li>
      <li>Do not share your Stripe password, secret keys, or verification links with anyone claiming to be "support" outside official channels.</li>
      <li>Do not create fake orders, inflate prices, or collude with drivers for fraudulent payouts.</li>
      <li>Report missing or incorrect payouts to <a href="mailto:support@autohandy.com">support@autohandy.com</a> with the order ID; do not post bank details in public channels.</li>
    </ul>

    <h3>3.3 Customer payment data</h3>
    <ul>
      <li>The Master app does <strong>not</strong> collect or store driver card numbers. Card payments go through the platform and Stripe.</li>
      <li>Do not photograph or copy payment screens, receipts with full card numbers, or Stripe onboarding URLs on untrusted devices.</li>
    </ul>

    <h2>4. Communications & media</h2>
    <ul>
      <li>In-app chat and calls are for order support only.</li>
      <li>Uploaded photos and files (shop, completed work, documents) must be appropriate and lawful.</li>
      <li>Do not upload malicious content or material that infringes others' rights.</li>
    </ul>

    <h2>5. Location</h2>
    <p>
      Location is used for routing, arrival status, and service area. Disable
      GPS access in system settings when you are off shift if you do not want to share coordinates.
    </p>

    <h2>6. Device & network security</h2>
    <ul>
      <li>Keep your phone OS and AutoHandy Master app up to date.</li>
      <li>Avoid sensitive actions on unsecured public Wi‑Fi when possible.</li>
      <li>Enable device lock (PIN, biometrics) in case your phone is lost.</li>
    </ul>

    <h2>7. Reporting incidents</h2>
    <p>
      If you discover a security issue, data breach, or misuse of customer information,
      contact us immediately at
      <a href="mailto:support@autohandy.com">support@autohandy.com</a>. We will investigate
      and restrict account access if necessary.
    </p>

    <h2>8. Your responsibilities as a service provider</h2>
    <ul>
      <li>Keep your shop and service information up to date.</li>
      <li>Complete orders in good faith; fraud may lead to suspension and legal consequences.</li>
      <li>Comply with applicable auto service and consumer protection laws in your region.</li>
    </ul>

    <h2>9. Updates</h2>
    <p>
      We may revise these security and use terms. Continued use of the app
      after updates means you accept the new version.
    </p>
    </article>
  </div>
</template>
