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
      {{ t('label.congrats') }}
    </template>
    <template #content>
      <div class="flex flex-col items-center justify-between gap-8">
        <img
          :src="getUrl(achievement.image)"
          alt="badge"
          class="h-28"
        >
        <div class="text-xl text-center">
          {{ achievement.title }}
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
  import type { DialogRef } from '~/types/dialog-ref'

  const dialogRef = inject<DialogRef>('dialogRef')

  const { findAchievement } = useAchievementsStore()
  const { getUrl } = useMedia()
  const { t } = useI18n()

  const achievement = computed(() =>
    findAchievement(dialogRef?.value.data.achievementUuid))

  function close() {
    dialogRef?.value.close()
  }
</script>
