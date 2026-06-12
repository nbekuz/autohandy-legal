<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { usePageSeo } from '@/composables/usePageSeo'
import { useSiteMode } from '@/composables/useSiteMode'
import PageHeader from '@/components/PageHeader.vue'

const { isTeam, appName, pageRoute } = useSiteMode()

usePageSeo(
  computed(() => ({
    title: `${appName.value} — Privacy Policy`,
    description: isTeam.value
      ? 'AutoHandy Team privacy policy: what technician data we collect, how driver orders work, Stripe Connect payouts, and your rights.'
      : 'AutoHandy privacy policy: what driver data we collect, how orders work, payments, and your rights.',
  })),
)

const subtitle = computed(() => `${appName.value} · Last updated: May 22, 2026`)
</script>

<template>
  <div>
    <PageHeader
      title="Privacy Policy"
      :subtitle="subtitle"
      breadcrumb="Privacy Policy"
    />
    <article class="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-12 prose-legal">
    <p v-if="!isTeam">
      This Privacy Policy describes how <strong>AutoHandy</strong>
      ("we", "the app") collects, uses, and protects information when you use
      our mobile app as a driver requesting on-site car repair and maintenance.
    </p>
    <p v-else>
      This Privacy Policy describes how <strong>AutoHandy Team</strong>
      ("we", "the app") collects, uses, and protects information when you use
      our mobile app as a technician or auto shop on the AutoHandy platform.
    </p>

    <h2>1. Who we are</h2>
    <p v-if="!isTeam">
      AutoHandy is the driver app for requesting on-site car repair and maintenance
      from verified technicians on the AutoHandy platform.
    </p>
    <p v-else>
      AutoHandy Team is the technician app for accepting and managing platform orders,
      communicating with customers, navigating to job sites, maintaining shop profiles,
      and receiving payouts for completed services.
    </p>

    <h2>2. Data we collect</h2>
    <ul>
      <li><strong>Account data:</strong> phone number, name, email (if provided), profile photo, vehicle or shop details, and app role (driver or technician).</li>
      <li><strong>Verification:</strong> one-time SMS codes for sign-in and account security.</li>
      <li><strong>Location:</strong> GPS coordinates when sharing position, navigating to a customer, or updating your service area — only with your permission.</li>
      <li><strong>Orders & work:</strong> orders from <strong>drivers</strong> (platform customers), job details, vehicle data, schedule, photos, chat, services, reviews, and completion records.</li>
      <li><strong>Payments & payouts:</strong> Stripe Connect account ID, verification status, payout history, order amounts, platform fees, and bank details you provide to Stripe (not stored in full on our servers).</li>
      <li><strong>Device data:</strong> push notification tokens (Firebase), app version, and technical logs needed for service operation and security.</li>
    </ul>

    <h2>3. How we use your data</h2>
    <ul>
      <li>Authentication and account maintenance.</li>
      <li>Matching you with customer orders (including urgent/SOS and custom requests).</li>
      <li>In-app chat, maps, and order status updates.</li>
      <li>Calculating metrics (rating, acceptance/completion rate, earnings summary).</li>
      <li>Processing driver payments for completed services and transferring your share via Stripe Connect.</li>
      <li>Displaying earnings, payout history, and Stripe connection status in the app.</li>
      <li>Push notifications for new orders, messages, and status changes.</li>
      <li>Improving reliability, preventing fraud, and complying with applicable law.</li>
    </ul>

    <h2>4. Payments, driver orders & Stripe Connect</h2>
    <p>
      AutoHandy Team is used by technicians who deliver
      <strong>real on-site automotive services</strong> to drivers who book through the AutoHandy app.
      Below is how payments work on the platform.
    </p>

    <h3>4.1 How orders and payment work</h3>
    <ul>
      <li>A <strong>driver</strong> places a repair or maintenance order through the <strong>AutoHandy</strong> app (standard, urgent/SOS, or custom).</li>
      <li>A technician <strong>accepts</strong> the order in <strong>AutoHandy Team</strong> and performs the agreed service on site.</li>
      <li>Order payment is processed through <strong>platform payment</strong> (card or other methods supported by AutoHandy and Stripe). Technicians do not manually charge the driver's card in AutoHandy Team.</li>
      <li>After the work is completed and any review or hold period, your <strong>net earnings</strong> for the order are scheduled for payout to your connected account.</li>
    </ul>

    <h3>4.2 Stripe Connect (real payout account)</h3>
    <p>
      To receive payment for completed work, you must connect a <strong>real Stripe Connect account</strong>
      in your name or registered business. This is not a virtual balance inside the app only —
      payouts are sent through Stripe to the bank or debit account you verify with Stripe.
    </p>
    <ul>
      <li>We share with Stripe: identity and business data, tax information when required, Connect status, order IDs, amounts, fees, and payout instructions.</li>
      <li>We do <strong>not</strong> store full card or bank account numbers on AutoHandy servers. Stripe is the payment processor and payout provider.</li>
      <li>The app shows payout history, available balance, and onboarding steps; sensitive bank details are entered in Stripe interfaces.</li>
      <li>AutoHandy may deduct a <strong>platform fee</strong> from each order; the payout amount is shown in the app in advance.</li>
      <li>Refunds, cancellations, and chargebacks are handled per platform rules, order status, and Stripe policies; adjustments may reduce or delay payouts.</li>
    </ul>

    <h3>4.3 What we do not do</h3>
    <ul>
      <li>We do not sell your personal or payment data.</li>
      <li>We do not pay technicians outside Stripe Connect for platform orders unless explicitly stated in writing by support.</li>
      <li>Cash or off-platform payments for orders created in AutoHandy may violate platform terms and are not covered by this payout process.</li>
    </ul>

    <h2>5. Sharing with third parties</h2>
    <p>We may share data only as needed to operate the service:</p>
    <ul>
      <li><strong>Drivers (customers)</strong> for active orders — limited contact details and job information.</li>
      <li><strong>Stripe</strong> — Connect onboarding, payment processing, fraud prevention, balances, transfers, and tax reporting when required.</li>
      <li><strong>Google Maps / Directions</strong> — routing and map display.</li>
      <li><strong>Firebase</strong> — push notifications.</li>
      <li>Cloud hosting providers and APIs processing data on our behalf under contractual obligations.</li>
    </ul>
    <p>We do not sell your personal data.</p>

    <h2>6. Data retention</h2>
    <p>
      We retain account and order data while your account is active, and as long as required
      for accounting, disputes, and legal compliance. You may request account deletion
      subject to open orders and payout obligations.
    </p>

    <h2>7. Your rights & controls</h2>
    <ul>
      <li>Update your profile in the app.</li>
      <li>Manage location and notification permissions in device settings.</li>
      <li>Contact support to access, correct, or delete personal data under applicable law.</li>
    </ul>

    <h2>8. Children</h2>
    <p>The app is not intended for users under 18 years of age.</p>

    <h2>9. Changes</h2>
    <p>
      We may update this policy. Material changes will be reflected in the app or on this site.
      Continued use after changes means you accept the updated policy.
    </p>

    <h2>10. Contact</h2>
    <p>
      Privacy questions:
      <a href="mailto:support@autohandy.com">support@autohandy.com</a> or our
      <RouterLink :to="pageRoute('contact')">contact page</RouterLink>.
    </p>
    </article>
  </div>
</template>
