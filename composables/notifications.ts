import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { useFirebaseApp } from 'vuefire'

export function useNotifications() {
  const { public: { vapidKey } } = useRuntimeConfig()
  const messaging = getMessaging(useFirebaseApp())

  async function getPermission() {
    const result = await Notification.requestPermission()

    if (result === 'granted') {
      await subscribeToFCM()
    }
  }

  async function subscribeToFCM() {
    const currentToken = await getToken(messaging, {
      vapidKey,
    })

    registerToken(currentToken)
    listenMessages()
  }

  function registerToken(token: string) {
    console.log('Firebase Cloud Messaging registration token', token)
  }

  function listenMessages() {
    onMessage(messaging, payload => {
      console.log('Foreground push message', payload)
    })
  }

  return {
    getPermission,
  }
}
