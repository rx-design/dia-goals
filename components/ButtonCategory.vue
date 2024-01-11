<template>
  <Button
    :class="[
      'text-xl border-none w-full h-20 px-4',
      {
        '!bg-amber-300 hover:!bg-amber-400': category.color === 'amber-300',
        '!bg-pink-400 hover:!bg-pink-500': category.color === 'pink-400',
        '!bg-green-500 hover:!bg-green-600': category.color === 'green-500',
        '!bg-blue-900 hover:!bg-blue-950': category.color === 'blue-900',
      },
    ]"
  >
    <div class="flex items-center justify-between w-full m-0 p-0">
      <span v-if="showLabel">
        {{ category.label }}
      </span>
      <img
        alt="icon"
        :src="getUrl(category.image)"
        class="h-16"
      >
    </div>
  </Button>
</template>

<script setup lang="ts">
  import type { Category } from '~/types/category'

  defineProps<{
    category: Category
    showLabel: boolean
  }>()

  const { getUrl } = useMedia()
</script>
