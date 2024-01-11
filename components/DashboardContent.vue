<template>
  <Card class="overflow-auto rounded-none">
    <template #header>
      <ProgressDetails />
    </template>
    <template #content>
      <ListGoalsActive
        :goals="dailyGoals"
        :title="t('label.dailyGoals')"
      />
      <ListGoalsActive
        :goals="weeklyGoals"
        :title="t('label.weeklyGoals')"
        class="mt-4"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { isEmpty } from 'lodash-es'

  const { list, dailyGoals, weeklyGoals } = useGoals()
  const { showTutorial } = useModals()
  const { t } = useI18n()

  watch(list, value => {
    if (isEmpty(value)) {
      showTutorial()
    }
  })
</script>
