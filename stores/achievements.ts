import achievementsJson from '~/assets/json/en/achievements.json'
import type { Achievement } from '~/types/achievement'

export const useAchievementsStore = defineStore('achievements', () => {
  const { locale } = useI18n()

  const achievements = computedAsync<Achievement[]>(
    async () => {
      const { default: json } = await import(`~/assets/json/${locale.value}/achievements.json`)

      return json
    },
    achievementsJson,
  )

  function findAchievement(uuid: string) {
    return achievements.value
      .find(a => a.uuid === uuid)
  }

  return {
    achievements,
    findAchievement,
  }
})
