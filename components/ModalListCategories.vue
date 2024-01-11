<template>
  <Card class="min-h-full">
    <template #header>
      <ProgressBar
        :value="25"
        :show-value="false"
        style="height: 0.375rem"
      />
    </template>
    <template #subtitle>
      {{ t('label.selectCategory') }}
    </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <ButtonCategory
          v-for="category of categories"
          :key="category.uuid"
          :category="category"
          show-label
          @click="next(category)"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import type { Category } from '~/types/category'
  import type { DialogRef } from '~/types/dialog-ref'

  const dialogRef = inject<DialogRef>('dialogRef')

  const { categories } = storeToRefs(useGoalsStore())
  const { showCategoryGoals } = useModals()
  const { t } = useI18n()

  function cancel() {
    dialogRef?.value.close()
  }

  function next(category: Category) {
    showCategoryGoals(category, cancel)
  }
</script>
