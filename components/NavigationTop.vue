<template>
  <Menubar
    class="border-0 rounded-none"
    :model="items"
  >
    <template #end>
      <LanguageSwitcher />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
  const items = ref([
    //{
    //  label: 'User',
    //  icon: 'pi pi-user',
    //},
    //{
    //  label: 'Search',
    //  icon: 'pi pi-search',
    //},
    //{
    //  label: 'Calendar',
    //  icon: 'pi pi-calendar',
    //},
    //{
    //  label: 'Notifications',
    //  icon: 'pi pi-bell',
    //},
  ])
</script>
