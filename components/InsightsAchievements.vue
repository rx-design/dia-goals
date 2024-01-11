<template>
  <div class="mt-6">
    <div class="text-sm font-semibold">
      {{ t('label.achievementBadges') }}
    </div>
    <div class="flex flex-col gap-6 mt-6">
      <InsightsAchievementsItem
        v-for="{ uuid, brief, image } of achievements"
        :key="uuid"
        :title="brief"
        :badge="image"
        :class="{
          'opacity-20': !isCompleted(uuid)
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const { achievements } = storeToRefs(useAchievementsStore())
  const { list } = useAchievements()
  const { t } = useI18n()

  function isCompleted(achievementUuid: string) {
    return list.value
      .some(a => a.uuid === achievementUuid)
  }
</script>
