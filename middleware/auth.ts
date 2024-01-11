export default defineNuxtRouteMiddleware(async (from ,to) => {
  const user = await getCurrentUser()
  const localePath = useLocalePath()

  if (!user) {
    return navigateTo({
      path: localePath('/login'),
    })
  }

  const { skipIntro, disableIntro } = useStorageStore()

  if (from.path === localePath('/') && to.path === localePath('/') && skipIntro) {
    return navigateTo({
      path: localePath('/board'),
    })
  }
  else {
    disableIntro()
  }
})
