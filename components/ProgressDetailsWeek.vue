<template>
  <div class="mx-2">
    <div class="grid grid-cols-7 text-center">
      <span
        v-for="(date, index) of weekDates"
        :key="index"
        class="font-semibold"
      >
        {{ getWeekDayString(date, dfLocale) }}
      </span>
    </div>
    <div
      :class="['grid grid-cols-7 border-2 rounded-md', {
        'border-green-500': weeklyDone,
        'border-neutral-300': !weeklyDone,
      }]"
    >
      <ProgressDetailsDay
        v-for="(date, index) of weekDates"
        :key="index"
        :day-of-month="getMonthDayString(date, dfLocale)"
        :progress="getDayProgress(date)"
        :today="isToday(date)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { isToday } from 'date-fns'
  import { first } from 'lodash-es'
  import { getMonthDayString, getWeekDayString } from '~/utils/date'

  const props = defineProps<{
    weekDates: Date[]
  }>()

  const { dfLocale } = storeToRefs(useGoalsStore())
  const { getDayProgress, getWeekProgress } = useGoals()

  const weeklyDone = computed(() =>
    getWeekProgress(first(props.weekDates)!) === 100)
</script>
