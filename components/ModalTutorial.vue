<template>
  <Card
    class="min-h-full"
    :pt="{
      title: 'text-xl text-center text-blue-800',
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #title>
      {{ t('tutorial.title') }}
    </template>
    <template #content>
      <div class="flex flex-col items-center justify-between gap-8">
        <p>
          {{ t('tutorial.greeting') }}
        </p>
        <img
          :src="getUrl('images/capybara/3.svg')"
          alt="capybara"
          class="h-48"
        >
        <p>
          {{ t('tutorial.content') }}
        </p>
        <p>
          {{ t('tutorial.cta') }}
        </p>
      </div>
    </template>
    <template #footer>
      <Button
        class="w-full"
        label="+"
        severity="info"
        rounded
        @click="showCategories"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import type { DialogRef } from '~/types/dialog-ref'

  const dialogRef = inject<DialogRef>('dialogRef')

  const { list } = useGoals()
  const { getUrl } = useMedia()
  const { showCategories } = useModals()
  const { gtag } = useGtag()
  const { t } = useI18n()

  watch(() => list.value.length, value => {
    if (value > 0) {
      dialogRef?.value.close()

      gtag('event', 'tutorial_complete')
    }
  })
</script>
