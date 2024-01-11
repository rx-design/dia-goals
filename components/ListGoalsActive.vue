<template>
  <Panel
    :pt="{
      content: '!border-none !p-0',
      header: '!bg-transparent !border-none'
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #header>
      <span class="font-semibold">
        {{ title }}
      </span>
    </template>
    <template #icons>
      <button
        class="p-panel-header-icon p-link"
        @click="showCategories"
      >
        <span class="pi pi-plus" />
      </button>
    </template>
    <div v-if="isEmpty(uncompletedGoals)">
      {{ t('label.noGoalsSet') }}
    </div>
    <div
      v-else
      class="flex flex-col gap-3"
    >
      <ButtonGoal
        v-for="goal of uncompletedGoals"
        :key="goal.id"
        :goal="goal"
        :checked="isDone(goal)"
      />
    </div>
  </Panel>
</template>

<script setup lang="ts">
  import { isEmpty } from 'lodash-es'
  import type { Goal } from '~/types/goal'

  const props = defineProps<{
    goals: Goal[]
    title: string
  }>()

  const { isCompleted, isDone } = useGoals()
  const { showCategories } = useModals()
  const { t } = useI18n()

  const uncompletedGoals = computed(() => props.goals
    .filter(g => !isCompleted(g)))
</script>
