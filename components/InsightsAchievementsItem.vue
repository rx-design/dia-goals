<template>
  <div class="flex gap-4 items-center">
    <img
      :src="getUrl(badge)"
      alt="badge"
      class="h-16"
    >
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    badge: string
    title: string
  }>()

  const { getUrl } = useMedia()
</script>
