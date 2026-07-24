/** AutoHandy — customer app (App Store & Google Play) */
export const USER_APP_STORE_URL =
  'https://apps.apple.com/uz/app/autohandy/id6761601306'
export const USER_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.nbekdev.autohandy'

/** Android applicationId — derived from USER_PLAY_STORE_URL (`id=` query). */
export const USER_ANDROID_PACKAGE_ID =
  new URL(USER_PLAY_STORE_URL).searchParams.get('id') ?? 'com.nbekdev.autohandy'

/**
 * Custom URL scheme for the User app (e.g. `autohandy`).
 * Set when the native app registers a scheme; used as a best-effort open
 * before falling back to the store when Universal/App Links are unavailable.
 *
 * TODO: Replace `null` with the real scheme once configured in the iOS/Android apps.
 */
export const USER_APP_CUSTOM_SCHEME: string | null = null

/**
 * Path opened inside the app via custom scheme / Intent (e.g. `qr` → `autohandy://qr`).
 */
export const USER_APP_DEEP_LINK_PATH = 'qr'

/**
 * Universal Links (iOS) / App Links (Android) for https://<domain>/qr.
 *
 * Currently NOT configured in this repo (no apple-app-site-association or assetlinks.json).
 *
 * TODO (server / domain):
 * - Serve `/.well-known/apple-app-site-association` (no file extension, `application/json`)
 *   with appID `<TEAM_ID>.com.nbekdev.autohandy` (or the real iOS bundle id) and paths `["/qr","/qr/*"]`.
 * - Serve `/.well-known/assetlinks.json` with package_name `USER_ANDROID_PACKAGE_ID` and
 *   the app’s signing certificate SHA-256 fingerprints.
 * - Ensure Vercel (or CDN) does NOT rewrite those `.well-known` paths to `index.html`
 *   and serves them with HTTP 200 + correct Content-Type.
 * - Enable Associated Domains (iOS) and Digital Asset Links (Android) in the User app.
 *
 * When those are live, set both flags to `true` so /qr can open the installed app via HTTPS.
 */
export const USER_UNIVERSAL_LINKS_CONFIGURED = false
export const USER_ANDROID_APP_LINKS_CONFIGURED = false

/** AutoHandy Masters — technician app (App Store & Google Play) */
export const TEAM_APP_STORE_URL =
  'https://apps.apple.com/uz/app/autohandy-masters/id6761601427'
export const TEAM_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.nbek.autohandymaster'
