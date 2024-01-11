import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
})
