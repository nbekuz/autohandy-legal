import {
  TEAM_ANDROID_APP_LINKS_CONFIGURED,
  TEAM_ANDROID_PACKAGE_ID,
  TEAM_APP_CUSTOM_SCHEME,
  TEAM_APP_DEEP_LINK_PATH,
  TEAM_APP_STORE_URL,
  TEAM_PLAY_STORE_URL,
  TEAM_UNIVERSAL_LINKS_CONFIGURED,
  USER_ANDROID_APP_LINKS_CONFIGURED,
  USER_ANDROID_PACKAGE_ID,
  USER_APP_CUSTOM_SCHEME,
  USER_APP_DEEP_LINK_PATH,
  USER_APP_STORE_URL,
  USER_PLAY_STORE_URL,
  USER_UNIVERSAL_LINKS_CONFIGURED,
} from '@/constants/stores'
import { detectPlatform, type ClientPlatform } from '@/utils/platform'

const STORE_FALLBACK_MS = 1600

export type SmartQrVariant = 'user' | 'team'

export interface SmartQrRedirectResult {
  platform: ClientPlatform
  /** Desktop: caller should render store badges instead of redirecting. */
  showDesktopUi: boolean
  /** Mobile: brief status while attempting open / store redirect. */
  status: 'idle' | 'opening-app' | 'redirecting-store'
}

interface SmartQrConfig {
  appStoreUrl: string
  playStoreUrl: string
  androidPackageId: string
  customScheme: string | null
  deepLinkPath: string
  universalLinksConfigured: boolean
  androidAppLinksConfigured: boolean
}

const USER_QR_CONFIG: SmartQrConfig = {
  appStoreUrl: USER_APP_STORE_URL,
  playStoreUrl: USER_PLAY_STORE_URL,
  androidPackageId: USER_ANDROID_PACKAGE_ID,
  customScheme: USER_APP_CUSTOM_SCHEME,
  deepLinkPath: USER_APP_DEEP_LINK_PATH,
  universalLinksConfigured: USER_UNIVERSAL_LINKS_CONFIGURED,
  androidAppLinksConfigured: USER_ANDROID_APP_LINKS_CONFIGURED,
}

const TEAM_QR_CONFIG: SmartQrConfig = {
  appStoreUrl: TEAM_APP_STORE_URL,
  playStoreUrl: TEAM_PLAY_STORE_URL,
  androidPackageId: TEAM_ANDROID_PACKAGE_ID,
  customScheme: TEAM_APP_CUSTOM_SCHEME,
  deepLinkPath: TEAM_APP_DEEP_LINK_PATH,
  universalLinksConfigured: TEAM_UNIVERSAL_LINKS_CONFIGURED,
  androidAppLinksConfigured: TEAM_ANDROID_APP_LINKS_CONFIGURED,
}

function customSchemeUrl(config: SmartQrConfig): string | null {
  if (!config.customScheme) return null
  const path = config.deepLinkPath.replace(/^\//, '')
  return `${config.customScheme}://${path}`
}

function androidIntentUrl(config: SmartQrConfig, fallbackUrl: string, scheme: string): string {
  const path = config.deepLinkPath.replace(/^\//, '')
  const encodedFallback = encodeURIComponent(fallbackUrl)

  return (
    `intent://${path}#Intent;` +
    `scheme=${scheme};` +
    `package=${config.androidPackageId};` +
    `S.browser_fallback_url=${encodedFallback};` +
    `end`
  )
}

function go(url: string) {
  window.location.replace(url)
}

function tryOpenThenStore(appUrl: string, storeUrl: string): () => void {
  const started = Date.now()

  const onHidden = () => {
    if (document.hidden) clear()
  }

  const timer = window.setTimeout(() => {
    if (!document.hidden && Date.now() - started >= STORE_FALLBACK_MS - 50) {
      go(storeUrl)
    }
    clear()
  }, STORE_FALLBACK_MS)

  function clear() {
    window.clearTimeout(timer)
    document.removeEventListener('visibilitychange', onHidden)
  }

  document.addEventListener('visibilitychange', onHidden)
  go(appUrl)

  return clear
}

/**
 * Smart QR redirect for User or Team app.
 *
 * - Android: Intent (when custom scheme is set) or Play Store; App Links when configured
 * - iOS: custom scheme when set, else App Store; Universal Links when configured mean
 *   the OS may open the app for this HTTPS URL before JS runs
 * - Desktop: no redirect — show store buttons
 */
export function runSmartQrRedirect(variant: SmartQrVariant = 'user'): SmartQrRedirectResult {
  const config = variant === 'team' ? TEAM_QR_CONFIG : USER_QR_CONFIG
  const platform = detectPlatform()

  if (platform === 'desktop') {
    return { platform, showDesktopUi: true, status: 'idle' }
  }

  if (platform === 'ios') {
    if (config.universalLinksConfigured) {
      go(config.appStoreUrl)
      return { platform, showDesktopUi: false, status: 'redirecting-store' }
    }

    const schemeUrl = customSchemeUrl(config)
    if (schemeUrl) {
      tryOpenThenStore(schemeUrl, config.appStoreUrl)
      return { platform, showDesktopUi: false, status: 'opening-app' }
    }

    // TODO: Set custom scheme and/or enable Universal Links via
    // /.well-known/apple-app-site-association so an installed app can open from the QR URL.
    go(config.appStoreUrl)
    return { platform, showDesktopUi: false, status: 'redirecting-store' }
  }

  if (config.androidAppLinksConfigured) {
    go(config.playStoreUrl)
    return { platform, showDesktopUi: false, status: 'redirecting-store' }
  }

  if (config.customScheme) {
    go(androidIntentUrl(config, config.playStoreUrl, config.customScheme))
    return { platform, showDesktopUi: false, status: 'opening-app' }
  }

  // TODO: Host /.well-known/assetlinks.json and enable App Links, or set a custom scheme,
  // so the QR URL can open the installed app before falling back to Play.
  go(config.playStoreUrl)
  return { platform, showDesktopUi: false, status: 'redirecting-store' }
}
