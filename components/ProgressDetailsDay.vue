<template>
  <div class="grid justify-center">
    <Knob
      class="col-start-1 row-start-1"
      :size="48"
      :model-value="progress"
      :stroke-width="5"
      :show-value="false"
      disabled
    />
    <Button
      class="col-start-1 row-start-1 place-self-center !p-0 !w-8 !h-8 border-none"
      :outlined="!done"
      :label="dayOfMonth"
      :severity="severity"
      rounded
      disabled
    />
    <span
      v-if="today"
      class="pi pi-circle-fill col-start-1 row-start-1 self-end text-center"
      style="font-size: 0.3rem"
    />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    dayOfMonth: string
    progress: number
    today: boolean
  }>()

  const done = computed(() => props.progress === 100)
  const severity = computed(() => done.value ? 'success' : 'info')
</script>
