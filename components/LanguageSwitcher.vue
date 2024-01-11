<template>
  <Button
    text
    rounded
    severity="secondary"
    class="!p-0 !w-fit"
    @click="toggle"
  >
    <template #icon>
      <Icon
        :name="getFlag(locale)"
        size="1.5rem"
      />
    </template>
  </Button>
  <Menu
    ref="menu"
    :model="items"
    popup
  />
</template>

<script setup lang="ts">
  import type { I18nLocale } from '~/types/i18n-locale'

  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const items = computed(() => {
    return (<I18nLocale[]>locales.value)
      .filter(i => i.code !== locale.value)
      .map(({ name, code }) => ({
        label: name,
        url: switchLocalePath(code),
      }))
  })

  const flags = <Record<I18nLocale['code'], string>>{
    en: 'emojione:flag-for-united-kingdom',
    et: 'emojione:flag-for-estonia',
    ru: 'emojione:flag-for-russia',
    zh: 'emojione:flag-for-taiwan',
  }

  function getFlag(localeCode: I18nLocale['code']) {
    return flags[localeCode]
  }

  const menu = ref()

  function toggle(event: PointerEvent) {
    menu.value.toggle(event)
  }
</script>
