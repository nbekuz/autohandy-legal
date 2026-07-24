import {
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

export interface SmartQrRedirectResult {
  platform: ClientPlatform
  /** Desktop: caller should render store badges instead of redirecting. */
  showDesktopUi: boolean
  /** Mobile: brief status while attempting open / store redirect. */
  status: 'idle' | 'opening-app' | 'redirecting-store'
}

function customSchemeUrl(): string | null {
  if (!USER_APP_CUSTOM_SCHEME) return null
  const path = USER_APP_DEEP_LINK_PATH.replace(/^\//, '')
  return `${USER_APP_CUSTOM_SCHEME}://${path}`
}

/**
 * Android Intent URL: opens the app when installed; otherwise browser uses fallback URL.
 * Requires a custom scheme handled by the User app (or verified App Links + https host).
 */
function androidIntentUrl(fallbackUrl: string, scheme: string): string {
  const path = USER_APP_DEEP_LINK_PATH.replace(/^\//, '')
  const encodedFallback = encodeURIComponent(fallbackUrl)

  return (
    `intent://${path}#Intent;` +
    `scheme=${scheme};` +
    `package=${USER_ANDROID_PACKAGE_ID};` +
    `S.browser_fallback_url=${encodedFallback};` +
    `end`
  )
}

function go(url: string) {
  window.location.replace(url)
}

/**
 * Try custom-scheme open, then fall back to the store if the page is still visible.
 * Used when Universal Links / App Links are not verified yet.
 */
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
 * Smart QR redirect for the User app only.
 *
 * - Android: Intent (when custom scheme is set) or Play Store; App Links when configured
 * - iOS: custom scheme when set, else App Store; Universal Links when configured mean
 *   the OS may open the app for this HTTPS URL before JS runs
 * - Desktop: no redirect — show store buttons
 */
export function runUserSmartQrRedirect(): SmartQrRedirectResult {
  const platform = detectPlatform()

  if (platform === 'desktop') {
    return { platform, showDesktopUi: true, status: 'idle' }
  }

  if (platform === 'ios') {
    // If Universal Links are live and the app is installed, iOS may already have
    // opened the app for /qr. Reaching this JS means we are still in Safari → store.
    if (USER_UNIVERSAL_LINKS_CONFIGURED) {
      go(USER_APP_STORE_URL)
      return { platform, showDesktopUi: false, status: 'redirecting-store' }
    }

    const schemeUrl = customSchemeUrl()
    if (schemeUrl) {
      tryOpenThenStore(schemeUrl, USER_APP_STORE_URL)
      return { platform, showDesktopUi: false, status: 'opening-app' }
    }

    // TODO: Set USER_APP_CUSTOM_SCHEME and/or enable Universal Links via
    // /.well-known/apple-app-site-association so an installed app can open from /qr.
    go(USER_APP_STORE_URL)
    return { platform, showDesktopUi: false, status: 'redirecting-store' }
  }

  // Android
  if (USER_ANDROID_APP_LINKS_CONFIGURED) {
    // Verified App Links: still in browser ⇒ app not installed / link not claimed → Play.
    go(USER_PLAY_STORE_URL)
    return { platform, showDesktopUi: false, status: 'redirecting-store' }
  }

  if (USER_APP_CUSTOM_SCHEME) {
    go(androidIntentUrl(USER_PLAY_STORE_URL, USER_APP_CUSTOM_SCHEME))
    return { platform, showDesktopUi: false, status: 'opening-app' }
  }

  // TODO: Host /.well-known/assetlinks.json, enable App Links in the User app, and set
  // USER_ANDROID_APP_LINKS_CONFIGURED — or set USER_APP_CUSTOM_SCHEME — so /qr can open
  // the installed app before falling back to Play.
  go(USER_PLAY_STORE_URL)
  return { platform, showDesktopUi: false, status: 'redirecting-store' }
}
