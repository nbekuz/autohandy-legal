import { toValue, type MaybeRefOrGetter } from 'vue'
import { useHead } from '@unhead/vue'

export interface PageSeo {
  title: string
  description: string
}

export function usePageSeo(seo: MaybeRefOrGetter<PageSeo>) {
  useHead(() => {
    const { title, description } = toValue(seo)

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
      ],
      htmlAttrs: { lang: 'en' },
    }
  })
}
