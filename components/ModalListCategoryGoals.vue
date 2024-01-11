<template>
  <Card class="min-h-full">
    <template #header>
      <ProgressBar
        :value="50"
        :show-value="false"
        style="height: 0.375rem"
      />
    </template>
    <template #subtitle>
      {{ t('label.selectGoal') }}
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <Button
          v-for="(label, index) of category.goals"
          :key="index"
          v-on-click-outside="unselect"
          :label="label"
          class="text-start"
          severity="secondary"
          outlined
          @click="select(label)"
        />
        <FieldCustomGoal v-model="ownGoalText" />
      </div>
    </template>
    <template #footer>
      <Button
        ref="buttonRef"
        class="w-full"
        :label="t('action.next')"
        severity="info"
        rounded
        :disabled="!goalText"
        @click="next"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import type { Category } from '~/types/category'
  import type { DialogRef } from '~/types/dialog-ref'
  import { vOnClickOutside } from '@vueuse/components'

  const dialogRef = inject<DialogRef>('dialogRef')
  const buttonRef = ref<HTMLElement | null>(null)
  const newGoalText = ref('')
  const ownGoalText = defineModel<string>()

  const { showGoalDetails } = useModals()
  const { t } = useI18n()

  const category = computed<Category>(() => dialogRef?.value.data.category)
  const goalText = computed(() => newGoalText.value || ownGoalText.value || '')

  function select(newGoal: string) {
    newGoalText.value = newGoal
  }

  const unselect = [
    () => {
      newGoalText.value = ''
    },
    {
      ignore: [buttonRef],
    },
  ]

  function cancel() {
    dialogRef?.value.close({
      isCompleted: true,
    })
  }

  function next() {
    showGoalDetails(category.value, goalText.value, cancel)
  }
</script>
