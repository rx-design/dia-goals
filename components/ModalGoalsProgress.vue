<template>
  <Card
    class="min-h-full"
    :pt="{
      title: 'text-center',
      subtitle: '!font-semibold',
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #title>
      {{ t('label.goals') }}
    </template>
    <template #subtitle>
      {{ t('label.goalsProgress') }}
    </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <ModalGoalsProgressItem
          v-for="goal of list"
          :key="goal.id"
          :color="getCategory(goal).color"
          :image="getCategory(goal).image"
          :title="goal.text"
          :total="getTotal(goal)"
          :value="getValue(goal)"
          :daily="goal.type === GoalType.D"
          class="bg-gray-100 p-3 rounded-md"
        />
      </div>
    </template>
    <template #footer>
      <Button
        class="w-full"
        :label="t('action.close')"
        severity="info"
        rounded
        @click="close"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { isAfter } from 'date-fns'
  import { getDate, getDurationDays, getDurationWeeks, getMidnight } from '~/utils/date'
  import type { DialogRef } from '~/types/dialog-ref'
  import type { Goal } from '~/types/goal'
  import { GoalType } from '~/types/enums'

  const dialogRef = inject<DialogRef>('dialogRef')

  const { list, getCategory, isDone } = useGoals()
  const { t } = useI18n()

  function getTotal(goal: Goal) {
    return goal.type === GoalType.D
      ? getDurationDays(getDate(goal.startDate), getDate(goal.endDate))
      : getDurationWeeks(getDate(goal.startDate), getDate(goal.endDate))
  }

  function getValue(goal: Goal) {
    const today = getMidnight()
    const goalEndDate = getDate(goal.endDate)
    const isEnded = isAfter(today, goalEndDate)
    const endDate = isEnded ? goalEndDate : today

    const duration = goal.type === GoalType.D
      ? getDurationDays(getDate(goal.startDate), endDate)
      : getDurationWeeks(getDate(goal.startDate), endDate)

    if (isEnded || isDone(goal)) {
      return duration
    }

    return duration - 1
  }

  function close() {
    dialogRef?.value.close()
  }
</script>
