<template>
  <Card class="min-h-full">
    <template #header>
      <ProgressBar
        :value="75"
        :show-value="false"
        style="height: 0.375rem"
      />
    </template>
    <template #content>
      <div class="flex flex-col items-center mb-10">
        <ButtonCategory
          :category="category"
          :show-label="false"
          class="!w-24 !h-24"
        />
        <span class="text-center font-semibold mt-2">
          {{ goalText }}
        </span>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col items-center gap-2">
          <label
            for="duration"
            class="text-sm sm:text-base"
          >
            {{ t('form.field.duration') }}
          </label>
          <Dropdown
            v-model="duration"
            input-id="duration"
            class="!w-full"
            option-label="label"
            option-value="value"
            :options="durationOptions"
            :disabled="durationOptions.length <= 1"
          />
        </div>
        <div class="flex flex-col items-center gap-2">
          <label
            for="goal-type"
            class="text-sm sm:text-base"
          >
            {{ t('form.field.goalType') }}
          </label>
          <SelectButton
            id="goal-type"
            v-model="goalType"
            :options="goalTypeOptions"
            option-label="label"
            option-value="value"
            :pt="{
              button: '!inline-block !w-1/2',
              label: 'text-sm',
            }"
            :pt-options="{
              mergeProps: true,
            }"
            class="!w-full"
          />
        </div>
        <div class="flex flex-col items-center gap-2">
          <label
            for="reminder"
            class="text-sm sm:text-base"
          >
            {{ t('form.field.reminder') }}
          </label>
          <Dropdown
            v-model="reminder"
            input-id="reminder"
            class="!w-full"
            option-label="label"
            option-value="value"
            :options="reminderOptions"
            disabled
          />
        </div>
      </div>
    </template>
    <template #footer>
      <Button
        class="w-full"
        :label="t('action.save')"
        severity="info"
        rounded
        @click="save"
      />
      <Button
        class="w-full mt-4"
        :label="t('action.cancel')"
        severity="info"
        rounded
        outlined
        @click="cancel"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import {
    getDate,
    getDateString,
    getDurationDaysEnd,
    getDurationDaysString,
    getDurationWeeksString, getEndOfWeek,
    getMidnight,
    getTimeString,
  } from '~/utils/date'
  import type { DialogRef } from '~/types/dialog-ref'
  import { GoalType } from '~/types/enums'

  const dialogRef = inject<DialogRef>('dialogRef')

  const { dfLocale } = storeToRefs(useGoalsStore())
  const { t } = useI18n()

  const durationOptionsDays = computed(() => [1, 2, 3, 5, 7]
    .map(value => ({
      value,
      label: getDurationDaysString(value, dfLocale.value),
    })))

  const durationOptionsWeeks = computed(() => [1]
    .map(value => ({
      value,
      label: getDurationWeeksString(value, dfLocale.value),
    })))

  const durationOptions = computed(() =>
    goalType.value === GoalType.D
      ? durationOptionsDays.value
      : durationOptionsWeeks.value)

  const reminderOptions = computed(() => [
    '08:30',
    '12:30',
    '17:30',
    '18:30',
    '19:30',
    '20:30',
  ].map(value => ({
    value,
    label: getTimeString(
      getDate(`1970-01-01T${value}:00`),
      dfLocale.value,
    ),
  })))

  const goalTypeOptions = computed(() => ([
    { label: t('form.option.dailyGoal'), value: GoalType.D },
    { label: t('form.option.weeklyGoal'), value: GoalType.W },
  ]))

  const goalType = defineModel<number>('goalType', { default: GoalType.D })
  const duration = defineModel<number>('duration', { default: 1 })
  const reminder = defineModel<string>('reminder', { default: '12:30' })

  const goalText = computed(() => dialogRef?.value.data.goalText)
  const category = computed(() => dialogRef?.value.data.category)

  const { create } = useGoals()
  const { checkAchievements } = useAchievements()

  watch(goalType, () => {
    duration.value = 1
  })

  function cancel() {
    dialogRef?.value.close({
      isCompleted: true,
    })
  }

  async function save() {
    const today = getMidnight()

    const newGoal = {
      categoryUuid: category.value.uuid,
      text: goalText.value,
      type: goalType.value,
      startDate: getDateString(today),
      endDate: goalType.value === GoalType.D
        ? getDateString(getDurationDaysEnd(today, duration.value - 1))
        : getDateString(getEndOfWeek(today)),
      reminderTime: reminder.value,
      completed: [],
    }

    await create(newGoal)

    checkAchievements(newGoal)
    cancel()
  }
</script>
