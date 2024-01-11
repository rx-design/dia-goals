<template>
  <Card
    class="min-h-full"
    :pt="{
      title: 'text-base',
      subtitle: 'text-xs',
      content: 'text-sm',
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #title>
      Milline on treeningu kasulikkus neile, kellel on 1. tüüpi diabeet?
    </template>
    <template #subtitle>
      Katkend diabinfo-st
      <br>
      Teaduslik tugi: Dr. Ulrike Becker
    </template>
    <template #content>
      <div>
        <img
          :src="getUrl('images/content/content-04.jpg')"
          alt="image"
          class="aspect-video object-cover h-48 mb-8"
        >
        <p>
          Füüsiline aktiivsus vähendab südame-veresoonkonna haiguste riski ja paljusid muid diabeediga seotud sekundaarseid haigusi. Samuti võib trenn aidata saavutada tervisliku kehakaalu ja seda säilitada ka pikaajaliselt.
          <br>
          Olemasoleva insuliiniresistentsuse korral põhjustab regulaarne füüsiline aktiivsus keha rakkudel reageerida insuliini hormoonile tundlikumalt. Selle tagajärjel võib pikema aja jooksul ka veresuhkru pikaajaline väärtus (HbA1c väärtus) paraneda.
        </p>
        <br>
        <p class="text-right">
          Loe veel: diabinfo
        </p>
      </div>
    </template>
    <template #footer>
      <slot />
    </template>
  </Card>
</template>

<script setup lang="ts">
  const { getUrl } = useMedia()
</script>
