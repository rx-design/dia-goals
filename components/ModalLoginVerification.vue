<template>
  <div class="flex flex-col min-h-full">
    <div class="flex flex-col gap-8 flex-1 justify-center">
      <div class="flex flex-col gap-2">
        <label for="verification-code">
          {{ t('form.field.verificationCode') }}
        </label>
        <InputMask
          id="verification-code"
          v-model="verificationCode"
          mask="999999"
          placeholder="xxxxxx"
          @focus="isTyping = true"
          @blur="isTyping = false"
        />
      </div>
    </div>
    <Button
      class="w-full mt-auto"
      :label="t('action.confirm')"
      severity="info"
      rounded
      :disabled="isTyping || !verificationCode"
      :loading="isLoading"
      @click="submit"
    />
  </div>
</template>

<script setup lang="ts">
  import type { ConfirmationResult } from '@firebase/auth'
  import type { DialogRef } from '~/types/dialog-ref'

  const dialogRef = inject<DialogRef>('dialogRef')

  const result = computed(() => <ConfirmationResult>dialogRef?.value.data.result)

  const verificationCode = defineModel<string>('verificationCode')

  const toast = useToast()
  const localePath = useLocalePath()
  const { gtag } = useGtag()
  const { t } = useI18n()

  const isTyping = ref(false)
  const isLoading = ref(false)

  async function submit() {
    isLoading.value = true

    try {
      await result.value
        .confirm(<string>verificationCode.value)
    } catch {
      isLoading.value = false

      return
    }

    dialogRef?.value.close({
      isCompleted: true,
    })

    toast.add({
      severity: 'success',
      summary: t('label.welcome'),
      detail: t('label.loginSuccessful'),
      life: 3000,
    })

    gtag('event', 'login')

    await navigateTo(localePath('/'))
  }
</script>
