<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'user' | 'team'
  }>(),
  {
    variant: 'user',
  },
)

const userScreens = [
  {
    src: '/assets/a_1.jpeg',
    step: '01',
    title: 'Open login',
    text: 'Drivers see the phone sign-in screen with an empty number field and SMS consent unchecked.',
  },
  {
    src: '/assets/a_2.jpeg',
    step: '02',
    title: 'Enter phone number',
    text: 'The mobile number is entered. SMS messages are not sent until consent is given.',
  },
  {
    src: '/assets/a_3.jpeg',
    step: '03',
    title: 'Consent & request code',
    text: 'Users check SMS consent and tap Get code to receive a verification message.',
  },
  {
    src: '/assets/a_4.jpeg',
    step: '04',
    title: 'Enter SMS code',
    text: 'A 4-digit one-time code is sent by SMS. The user enters it to verify their number.',
  },
]

const teamScreens = [
  {
    src: '/assets/am_1.jpeg',
    step: '01',
    title: 'Open login',
    text: 'Technicians see the phone sign-in screen with an empty number field and SMS consent unchecked.',
  },
  {
    src: '/assets/am_2.jpeg',
    step: '02',
    title: 'Enter phone number',
    text: 'The mobile number is entered. SMS messages are not sent until consent is given.',
  },
  {
    src: '/assets/am_3.jpeg',
    step: '03',
    title: 'Consent & request code',
    text: 'Users check SMS consent and tap Get code to receive a verification message.',
  },
  {
    src: '/assets/am_4.png',
    step: '04',
    title: 'Enter SMS code',
    text: 'A 4-digit one-time code is sent by SMS. The user enters it to verify their number.',
  },
]
</script>

<template>
  <section class="border-t border-brand/10 bg-slate-50 py-12 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-8">
      <div class="mb-10 text-center sm:mb-14">
        <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-brand sm:text-sm">
          Phone verification
        </p>
        <h2 class="mb-2 text-2xl font-bold text-ink-heading sm:mb-3 sm:text-3xl">
          Sign in with SMS
        </h2>
        <p class="mx-auto max-w-2xl text-sm text-ink-muted sm:text-base">
          {{
            variant === 'team'
              ? 'AutoHandy Team verifies technician accounts with a one-time SMS code. Users must opt in before any message is sent.'
              : 'AutoHandy verifies driver accounts with a one-time SMS code. Users must opt in before any message is sent.'
          }}
        </p>
      </div>

      <div class="grid gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="screen in variant === 'team' ? teamScreens : userScreens"
          :key="screen.src"
          class="group flex flex-col items-center"
        >
          <div class="relative mb-5 w-full max-w-[220px] sm:max-w-[240px]">
            <div
              class="absolute -inset-3 rounded-[2rem] bg-brand/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
            />
            <div
              class="relative overflow-hidden rounded-[1.35rem] border border-slate-800/20 bg-[#1b222c] shadow-xl shadow-slate-900/15 ring-1 ring-black/5"
            >
              <img
                :src="screen.src"
                :alt="`${screen.title} — AutoHandy ${variant === 'team' ? 'Team' : ''} app`"
                class="block h-auto w-full"
                loading="lazy"
              />
            </div>
            <span
              class="absolute -left-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-bold text-white shadow-md sm:h-10 sm:w-10 sm:text-sm"
            >
              {{ screen.step }}
            </span>
          </div>

          <div class="max-w-xs text-center">
            <h3 class="mb-1.5 text-base font-semibold text-ink-heading sm:text-lg">
              {{ screen.title }}
            </h3>
            <p class="text-sm leading-relaxed text-ink-muted">
              {{ screen.text }}
            </p>
          </div>
        </article>
      </div>

      <p
        class="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-muted sm:mt-12 sm:text-sm"
      >
        SMS messages are used only for account verification and essential service notifications.
        Message frequency varies. Message and data rates may apply. Reply STOP to opt out.
      </p>
    </div>
  </section>
</template>
