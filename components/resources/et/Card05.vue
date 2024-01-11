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
      Kuidas uni mõjutab sinu aju
    </template>
    <template #subtitle>
      Dana Foundation
    </template>
    <template #content>
      <div>
        <p>
          Mida paremini sa öösel magad, seda paremini toimib su aju ja seda paremini sa end ka tunned. Õpi, mis toimub ajus puhates ning millesed on unepuuduse negatiivsed mõjud ja sammud, et tagada hea ööuni.
        </p>
        <video
          id="educational-video"
          class="video-js mt-8"
          controls
          preload="auto"
          width="640"
          height="264"
          :poster="getUrl('images/posters/video-poster-03.jpg')"
          data-setup="{}"
        >
          <source
            :src="getUrl('videos/sleep.mp4')"
            type="video/mp4"
          >
        </video>
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
