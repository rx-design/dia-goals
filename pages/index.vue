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
      <p class="text-3xl font-semibold text-center">
        {{ t('index.title') }}
      </p>
      <p class="mt-8">
        {{ t('index.greeting') }}
      </p>
      <br>
      <p>
        {{ t('index.keyFeatures') }}
      </p>
      <ul>
        <li>{{ t('index.feature1') }}</li>
        <li>{{ t('index.feature2') }}</li>
        <li>{{ t('index.feature3') }}</li>
      </ul>
      <br>
      <p>
        {{ t('index.cta') }}
      </p>
    </template>
    <template #footer>
      <NuxtLinkLocale to="/board">
        <Button
          class="w-full"
          :label="t('action.start')"
          severity="info"
          rounded
        />
      </NuxtLinkLocale>
    </template>
  </Card>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth',
  })

  const { getPermission } = useNotifications()
  const { t } = useI18n()

  onMounted(getPermission)
</script>
