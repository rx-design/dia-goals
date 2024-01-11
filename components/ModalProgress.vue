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
      {{ title }}
    </template>
    <template #content>
      <div class="flex flex-col items-center justify-between gap-8">
        <img
          :src="getUrl('images/capybara/5.svg')"
          alt="capybara"
          class="h-48"
        >
        <div class="flex w-full gap-5">
          <ModalProgressDetails
            :icon="getUrl('images/icons/rocket.svg')"
            :text="toString(list.length)"
            :name="t('label.goals')"
            tint="!bg-green-500"
          />
          <ModalProgressDetails
            :icon="getUrl('images/icons/lightning.svg')"
            :text="completionRateString"
            :name="t('label.completionRate')"
            tint="!bg-amber-400"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <Button
        class="w-full"
        :label="t('action.continue')"
        severity="info"
        rounded
        @click="close"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { toString } from 'lodash-es'
  import type { DialogRef } from '~/types/dialog-ref'

  const dialogRef = inject<DialogRef>('dialogRef')

  const { completionRateString, list } = useGoals()
  const { getUrl } = useMedia()
  const { t } = useI18n()

  const title = computed(() => dialogRef?.value.data.title)

  function close() {
    dialogRef?.value.close()
  }
</script>
