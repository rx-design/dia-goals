importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyCv3wmtfl5qy2fHckyvURjxLPzQknuPUzQ',
  authDomain: 'dia-goals.firebaseapp.com',
  projectId: 'dia-goals',
  storageBucket: 'dia-goals.appspot.com',
  messagingSenderId: '874840838668',
  appId: '1:874840838668:web:a5dd7e71ef59a255105429',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  console.log('Background push message', payload)
})
