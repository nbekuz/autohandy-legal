import { computed, inject, type InjectionKey, type Ref } from 'vue'
import { useRoute } from 'vue-router'

export type SiteMode = 'user' | 'team'

export const SITE_MODE_KEY: InjectionKey<Ref<SiteMode>> = Symbol('siteMode')

export function useSiteMode() {
  const route = useRoute()
  const injected = inject(SITE_MODE_KEY, null)

  const mode = computed<SiteMode>(() => {
    if (route.path === '/team' || route.path.startsWith('/team/')) {
      return 'team'
    }
    if (injected) {
      return injected.value
    }
    return 'user'
  })

  const isTeam = computed(() => mode.value === 'team')
  const appName = computed(() => (isTeam.value ? 'AutoHandy Team' : 'AutoHandy'))
  const homeRoute = computed(() => (isTeam.value ? { name: 'team-home' } : { name: 'home' }))
  const switchRoute = computed(() => (isTeam.value ? { name: 'home' } : { name: 'team-home' }))
  const switchLabel = computed(() => (isTeam.value ? 'AutoHandy' : 'AutoHandy Team'))

  function pageRoute(page: 'privacy' | 'security' | 'contact', query?: Record<string, string>) {
    const name = isTeam.value ? `team-${page}` : page
    return query ? { name, query } : { name }
  }

  return {
    mode,
    isTeam,
    appName,
    homeRoute,
    switchRoute,
    switchLabel,
    pageRoute,
  }
}
