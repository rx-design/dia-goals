<template>
  <Toolbar class="bg-transparent border-0 rounded-none">
    <template #start>
      <Button
        class="!static"
        icon="pi pi-angle-left"
        text
        rounded
        @click="prev"
      />
    </template>
    <template #center>
      <span class="capitalize">
        {{ title }}
      </span>
    </template>
    <template #end>
      <Button
        class="!static"
        icon="pi pi-angle-right"
        text
        rounded
        @click="next"
      />
    </template>
  </Toolbar>
  <ProgressDetailsWeek :week-dates="dates" />
</template>

<script setup lang="ts">
  import {
    getMidnight,
    getMonthString,
    getNextWeek,
    getPrevWeek,
    getWeekDates,
  } from '~/utils/date'

  const date = ref(getMidnight())

  const { dfLocale } = storeToRefs(useGoalsStore())

  const dates = computed(() => getWeekDates(date.value))
  const title = computed(() => getMonthString(date.value, dfLocale.value))

  function next() {
    date.value = getNextWeek(date.value)
  }

  function prev() {
    date.value = getPrevWeek(date.value)
  }
</script>
