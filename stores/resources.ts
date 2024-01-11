import resourcesJson from '~/assets/json/en/resources.json'
import type { Resource } from '~/types/resource'

export const useResourcesStore = defineStore('resources', () => {
  const { locale } = useI18n()

  const resources = computedAsync<Resource[]>(
    async () => {
      const { default: json } = await import(`~/assets/json/${locale.value}/resources.json`)

      return json
    },
    resourcesJson,
  )

  function findResources(categoryUuid: string) {
    return resources.value
      .filter(r => r.categoryUuid === categoryUuid)
  }

  return {
    resources,
    findResources,
  }
})
