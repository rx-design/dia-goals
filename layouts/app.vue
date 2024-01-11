<template>
  <div>
    <NuxtPwaManifest />
    <ConfirmDialog
      :pt="{
        root: '!w-full',
      }"
      :pt-options="{
        mergeProps: true,
      }"
    />
    <DynamicDialog />
    <Toast />
    <div class="flex flex-col min-h-screen">
      <NavigationTop class="sticky top-0 z-10" />
      <NuxtPage class="flex-1" />
      <NavigationBottom class="sticky bottom-0 mt-auto overflow-x-visible z-10" />
    </div>
  </div>
</template>
