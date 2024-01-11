<template>
  <Inplace
    :pt="{
      display: '!p-0',
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #display>
      <Button
        class="text-start w-full"
        :label="newGoal || t('form.option.customGoalText')"
        icon="pi pi-pencil"
        severity="secondary"
        outlined
      />
    </template>
    <template #content>
      <InputText
        v-model="newGoal"
        class="w-full"
        type="text"
        autofocus
      />
    </template>
  </Inplace>
</template>

<script setup lang="ts">
  const newGoal = defineModel<string>()

  const { t } = useI18n()
</script>
