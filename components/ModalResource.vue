<template>
  <CardComponent>
    <Button
      class="w-full"
      :label="t('action.continue')"
      severity="info"
      rounded
      @click="close"
    />
  </CardComponent>
</template>

<script setup lang="ts">
  import type { DialogRef } from '~/types/dialog-ref'

  const dialogRef = inject<DialogRef>('dialogRef')

  const { locale, t } = useI18n()

  const name = computed(() => dialogRef?.value.data.name)

  const CardComponent = defineAsyncComponent(() =>
    import(`./resources/${locale.value}/${name.value}.vue`))

  function close() {
    dialogRef?.value.close()
  }
</script>
