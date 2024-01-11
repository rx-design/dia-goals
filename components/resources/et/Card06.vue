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
      Une mõju diabeedi haldamisele
    </template>
    <template #subtitle>
      Katkend Tervisekontrolli ja Haiguste Tõrje Keskusest
    </template>
    <template #content>
      <div>
        <img
          :src="getUrl('images/content/content-06.jpg')"
          alt="image"
          class="aspect-video object-cover h-48 mb-8"
        >
        <p class="font-semibold">
          Unepuudusest tingitud tüsistused
        </p>
        <p>
          Kui sa magad regulaarselt vähem kui 7 tundi öösel, muutub diabeedi haldamine raskemaks. Liiga vähene uni võib:
        </p>
        <ul class="list-disc list-inside">
          <li>Suurendada insuliiniresistentsust.</li>
          <li>Tekitada järgmisel päeval suurema näljatunde ja vähendada täiskõhutunnet pärast söömist.</li>
          <li>Suurendada isu ebatervislike toitude järele - need, mis on kõrge süsivesikute ja suhkrusisaldusega.</li>
          <li>Muuta kaalukaotuse raskemaks.</li>
          <li>Tõsta vererõhku ja suurendada tugevalt südameinfarkti riski.</li>
          <li>Nõrgendada sinu immuunsüsteemi võimet võidelda põletike vastu.</li>
          <li>Suurendada depressiooni ja ärevuse riski.</li>
        </ul>
        <br>
        <p class="text-right">
          Loe veel: CDC
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
