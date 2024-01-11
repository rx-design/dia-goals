<template>
  <TabMenu
    class="border-t"
    :pt="{
      action: '!p-4',
    }"
    :pt-options="{
      mergeProps: true,
    }"
    :active-index="activeIndex"
    :model="items"
  />
</template>

<script setup lang="ts">
  const { t } = useI18n()
  const { path } = useRoute()
  const localePath = useLocalePath()

  const activeIndex = computed(() => [
    '/board',
    '/stats',
    '/learn',
  ].findIndex(tabName => path === tabName))

  const items = computed(() => ([
    {
      label: t('page.board'),
      icon: 'pi pi-home',
      url: localePath('/board'),
    },
    {
      label: t('page.stats'),
      icon: 'pi pi-chart-line',
      url: localePath('/stats'),
    },
    {
      label: t('page.learn'),
      icon: 'pi pi-th-large',
      url: localePath('/learn'),
    },
  ]))
</script>
