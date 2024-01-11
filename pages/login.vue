<template>
  <Card
    :pt="{
      body: 'flex flex-col min-h-screen',
      content: 'flex-1',
      footer: 'mt-auto',
    }"
    :pt-options="{
      mergeProps: true,
    }"
    class="rounded-none"
  >
    <template #title>
      <NavigationTop />
    </template>
    <template #content>
      <p class="text-3xl font-semibold">
        {{ t('action.login') }}
      </p>
      <div class="flex flex-col gap-6 w-full mt-8">
        <div>
          <label for="country-code">
            {{ t('form.field.country') }}
          </label>
          <Dropdown
            v-model="countryCode"
            :options="countries"
            input-id="country-code"
            option-label="label"
            option-value="value"
            :pt="{
              root: '!w-full',
            }"
            :pt-options="{
              mergeProps: true,
            }"
          />
        </div>
        <div>
          <label for="phone-number">
            {{ t('form.field.phone') }}
          </label>
          <div
            v-if="countryCode === 'ee'"
            class="flex flex-col"
          >
            <InputMask
              id="phone-number"
              v-model="phoneNumber"
              mask="+3729999999?9"
              placeholder="+372..."
              aria-describedby="phone-number-help"
              @focus="isTyping = true"
              @blur="isTyping = false"
            />
            <small id="phone-number-help">
              5xx xxxx or 5xxx xxxx
            </small>
          </div>
          <div
            v-if="countryCode === 'zh'"
            class="flex flex-col"
          >
            <InputMask
              id="phone-number"
              v-model="phoneNumber"
              mask="+886999999999"
              placeholder="+886..."
              aria-describedby="phone-number-help"
              @focus="isTyping = true"
              @blur="isTyping = false"
            />
            <small id="phone-number-help">
              9xx-xxx-xxx
            </small>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div
        id="recaptcha-container"
        class="hidden"
      />
      <Button
        id="sign-in-button"
        class="w-full mt-auto"
        :label="t('action.signIn')"
        severity="info"
        rounded
        :disabled="isTyping || !phoneNumber"
        :loading="isLoading"
        @click="submit"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import {
    getAuth,
    indexedDBLocalPersistence,
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from '@firebase/auth'

  const phoneNumber = defineModel<string>('phoneNumber')
  const countryCode = defineModel<string>('countryCode', { default: 'ee' })

  const auth = getAuth()
  const verifier = ref<RecaptchaVerifier | null>(null)
  auth.setPersistence(indexedDBLocalPersistence)

  const isTyping = ref(false)
  const isLoading = ref(false)

  onMounted(createVerifier)

  const { showLoginVerification } = useModals()
  const { t } = useI18n()

  const countries = computed(() => ([
    { label: t('form.option.estonia'), value: 'ee' },
    { label: t('form.option.taiwan'), value: 'zh' },
  ]))

  function createVerifier() {
    verifier.value = new RecaptchaVerifier(
      auth, 'recaptcha-container', {
        'size': 'invisible',
      })
  }

  async function submit() {
    isLoading.value = true

    const result = await signInWithPhoneNumber(
      auth,
      <string>phoneNumber.value,
      <RecaptchaVerifier>verifier.value)

    showLoginVerification(result, createVerifier)

    isLoading.value = false
  }
</script>
