<template>
  <div class="flex justify-between gap-8">
    <div
      :class="[
        'flex justify-center items-center rounded-md content-center min-w-12 h-12',
        {
          'bg-amber-300': color === 'amber-300',
          'bg-pink-400': color === 'pink-400',
          'bg-green-500': color === 'green-500',
          'bg-blue-900': color === 'blue-900',
        },
      ]"
    >
      <img
        :src="getUrl(image)"
        alt="icon"
        class="h-6"
      >
    </div>
    <div class="flex flex-col w-full justify-around gap-2">
      <div class="flex justify-between gap-2">
        <span class="text-sm">
          {{ title }}
        </span>
        <span class="text-xs text-right">
          {{ subtitle }}
        </span>
      </div>
      <ProgressBar
        :pt="{
          root: '!bg-neutral-400',
          value: '!bg-teal-400',
        }"
        :pt-options="{
          mergeProps: true,
        }"
        :value="progress"
        :show-value="false"
        style="height: 0.5rem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getDurationDaysString, getDurationWeeksString } from '~/utils/date'

  const props = defineProps<{
    color: string
    image: string
    title: string
    total: number
    value: number
    daily: boolean
  }>()

  const { dfLocale } = storeToRefs(useGoalsStore())
  const { getUrl } = useMedia()

  const duration = computed(() => props.daily
    ? getDurationDaysString(props.total, dfLocale.value)
    : getDurationWeeksString(props.total, dfLocale.value))
  const subtitle = computed(() => `${props.value}/${duration.value}`)
  const progress = computed(() => props.value / props.total * 100)
</script>
