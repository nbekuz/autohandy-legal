export type ClientPlatform = 'ios' | 'android' | 'desktop'

export function detectPlatform(userAgent = navigator.userAgent): ClientPlatform {
  const ua = userAgent.toLowerCase()

  if (/iphone|ipad|ipod/.test(ua)) return 'ios'
  // iPadOS 13+ may report as Macintosh with touch
  if (/macintosh/.test(ua) && navigator.maxTouchPoints > 1) return 'ios'
  if (/android/.test(ua)) return 'android'

  return 'desktop'
}
