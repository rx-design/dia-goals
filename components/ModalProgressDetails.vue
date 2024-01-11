<template>
  <Card
    :class="['w-full', tint]"
    :pt="{
      content: '!py-0',
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #content>
      <div class="flex flex-col text-white gap-1.5">
        <img
          :src="icon"
          alt="icon"
          class="w-12"
        >
        <span class="text-xs">
          {{ name }}
        </span>
        <span class="text-sm">
          {{ text }}
        </span>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  defineProps<{
    tint: string
    icon: string
    name: string
    text: string
  }>()
</script>
