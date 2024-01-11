import { skipHydrate } from 'pinia'

export const useStorageStore = defineStore('storage', () => {
  const skipIntro = useLocalStorage('skip-intro', false)

  function disableIntro() {
    skipIntro.value = true
  }

  return {
    skipIntro: skipHydrate(skipIntro),
    disableIntro,
  }
})
