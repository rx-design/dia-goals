<template>
  <DashboardContent />
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'app',
    middleware: 'auth',
  })
</script>
