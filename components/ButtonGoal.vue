<template>
  <Button
    :class="[
      'text-xl border-none w-full px-4',
      {
        '!bg-amber-300 hover:!bg-amber-400': category.color === 'amber-300',
        '!bg-pink-400 hover:!bg-pink-500': category.color === 'pink-400',
        '!bg-green-500 hover:!bg-green-600': category.color === 'green-500',
        '!bg-blue-900 hover:!bg-blue-950': category.color === 'blue-900',
        '!bg-zinc-400 hover:!bg-zinc-400': checked,
      },
    ]"
    aria-haspopup="true"
    @click="toggle"
  >
    <div class="flex items-center w-full m-0 p-0">
      <Checkbox
        :model-value="checked"
        :input-id="inputId"
        name="active_goal"
        binary
        disabled
      />
      <label
        :for="inputId"
        class="flex flex-col items-start text-start ml-6"
      >
        <span>
          {{ goal.text }}
        </span>
        <span class="text-xs mt-1">
          {{ category.label }}
        </span>
      </label>
    </div>
  </Button>
  <Menu
    ref="menu"
    :model="actions"
    popup
  />
</template>

<script setup lang="ts">
  import type { Goal } from '~/types/goal'
  import { getDateString, getMidnight } from '~/utils/date'
  import { cloneDeep, uniqueId } from 'lodash-es'

  const props = defineProps<{
    goal: Goal
    checked: boolean
  }>()

  const { showGoalDetailsEdit } = useModals()
  const { update, remove, getCategory, checkProgress } = useGoals()
  const { checkAchievements } = useAchievements()
  const { t } = useI18n()
  const confirm = useConfirm()

  const menu = ref()
  const inputId = ref(uniqueId('active_goal_'))

  const actions = computed(() => {
    const temp = []

    if (!props.checked) {
      temp.push({
        label: t('goalAction.markAsDone'),
        icon: 'pi pi-check-square',
        command() {
          confirmMarkAsDone()
        },
      })
    }

    temp.push({
      label: t('goalAction.edit'),
      icon: 'pi pi-file-edit',
      command() {
        showGoalDetailsEdit(props.goal, category.value)
      },
    }, {
      label: t('goalAction.delete'),
      icon: 'pi pi-trash',
      command() {
        confirmDelete()
      },
    })

    return temp
  })

  const category = computed(() => getCategory(props.goal))

  function toggle(event: PointerEvent) {
    menu.value.toggle(event)
  }

  function confirmMarkAsDone() {
    confirm.require({
      header: t('goalAction.markAsDoneConfirmHeader'),
      message: t('goalAction.markAsDoneConfirmMessage'),
      acceptLabel: t('action.yes'),
      rejectLabel: t('action.no'),
      async accept() {
        const id = <string>props.goal.id
        const copy = cloneDeep(props.goal)
        copy.completed.push(getDateString(getMidnight()))

        await update(id, copy)

        const copyWithId = {
          ...copy,
          id,
        }

        checkAchievements(copyWithId)
        checkProgress(copyWithId)
      },
    })
  }

  function confirmDelete() {
    confirm.require({
      header: t('goalAction.deleteConfirmHeader'),
      message: t('goalAction.deleteConfirmMessage'),
      acceptLabel: t('action.yes'),
      rejectLabel: t('action.no'),
      accept() {
        remove(<string>props.goal.id)
      },
    })
  }
</script>
