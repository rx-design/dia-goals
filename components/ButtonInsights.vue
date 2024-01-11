<template>
  <Button
    class="text-xl border-none w-full px-4 bg-teal-400 hover:bg-teal-500"
    raised
    @click="showGoalsProgress"
  >
    <div class="flex flex-col w-full gap-3 text-left">
      <div class="flex items-center justify-between">
        <span>
          {{ t('label.goals') }}
        </span>
        <span>
          {{ list.length }}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span>
          {{ t('label.completionRate') }}
        </span>
        <span>
          {{ completionRateString }}
        </span>
      </div>
    </div>
  </Button>
</template>

<script setup lang="ts">
  const { completionRateString, list } = useGoals()
  const { showGoalsProgress } = useModals()
  const { t } = useI18n()
</script>
