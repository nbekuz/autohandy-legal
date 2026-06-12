import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/UserLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/user/UserHomePage.vue'),
        },
        {
          path: 'privacy',
          name: 'privacy',
          component: () => import('@/pages/PrivacyPage.vue'),
        },
        {
          path: 'security',
          name: 'security',
          component: () => import('@/pages/SecurityPage.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/pages/ContactPage.vue'),
        },
      ],
    },
    {
      path: '/team',
      component: () => import('@/layouts/TeamLayout.vue'),
      children: [
        {
          path: '',
          name: 'team-home',
          component: () => import('@/pages/team/TeamHomePage.vue'),
        },
        {
          path: 'privacy',
          name: 'team-privacy',
          component: () => import('@/pages/PrivacyPage.vue'),
        },
        {
          path: 'security',
          name: 'team-security',
          component: () => import('@/pages/SecurityPage.vue'),
        },
        {
          path: 'contact',
          name: 'team-contact',
          component: () => import('@/pages/ContactPage.vue'),
        },
      ],
    },
    {
      path: '/privacy_policy.html',
      redirect: '/privacy',
    },
    {
      path: '/security_confidentiality.html',
      redirect: '/security',
    },
    {
      path: '/contact.html',
      redirect: '/contact',
    },
    {
      path: '/privacy-policy',
      redirect: '/privacy',
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
