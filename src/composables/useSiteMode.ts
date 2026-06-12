import { computed, inject, ref, type InjectionKey, type Ref } from 'vue'

export type SiteMode = 'user' | 'team'

export const SITE_MODE_KEY: InjectionKey<Ref<SiteMode>> = Symbol('siteMode')

export function useSiteMode() {
  const mode = inject(SITE_MODE_KEY, ref<SiteMode>('user'))

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
