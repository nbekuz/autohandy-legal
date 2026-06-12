import { useHead } from '@unhead/vue'

export interface PageSeo {
  title: string
  description: string
}

export function usePageSeo(seo: PageSeo) {
  useHead({
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:type', content: 'website' },
    ],
    htmlAttrs: { lang: 'ru' },
  })
}
