import { enUS, et, ru, zhTW, type Locale } from 'date-fns/locale'
import categoriesJson from '~/assets/json/en/categories.json'
import type { I18nLocale } from '~/types/i18n-locale'
import type { Category } from '~/types/category'

const localeMap = <Record<I18nLocale['code'], Locale>>{
  'en': enUS,
  'et': et,
  'ru': ru,
  'zh': zhTW,
}

export const useGoalsStore = defineStore('goals', () => {
  const { locale } = useI18n()

  const categories = computedAsync<Category[]>(
    async () => {
      const { default: json } =  await import(`~/assets/json/${locale.value}/categories.json`)

      return json
    },
    categoriesJson,
  )

  const dfLocale = computed(() => localeMap[locale.value])

  return {
    categories,
    dfLocale,
  }
})
