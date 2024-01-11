<template>
  <Card
    class="min-h-full rounded-none"
    :pt="{
      title: 'text-center',
      subtitle: 'text-center'
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #title>
      {{ t('label.dataInsights') }}
    </template>
    <template
      v-if="completionRate !== -1"
      #subtitle
    >
      {{ t('label.keepGoing') }}
    </template>
    <template #content>
      <ButtonInsights />
      <InsightsGraph />
      <InsightsAchievements />
    </template>
  </Card>
</template>

<script setup lang="ts">
  const { completionRate } = useGoals()
  const { t } = useI18n()
</script>
