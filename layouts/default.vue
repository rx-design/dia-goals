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
    <NuxtPage />
  </div>
</template>
