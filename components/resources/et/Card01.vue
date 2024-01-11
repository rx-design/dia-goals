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
      Tervislik tasakaalustatud toitumine diabeedi jaoks
    </template>
    <template #subtitle>
      University of Michigan Health
      <br>
      Michigan Medicine
    </template>
    <template #content>
      <div>
        <p>
          See video räägib sellest, mis on tervislik toitumine nende jaoks, kellel on 1. tüüpi diabeet, ja miks on oluline, et inimesed, kellel on diabeet, sööksid tasakaalustatud toitu ja jooksid piisavalt vett.
        </p>
        <video
          id="educational-video"
          class="video-js mt-8"
          controls
          preload="auto"
          width="640"
          height="264"
          :poster="getUrl('images/posters/video-poster-01.jpg')"
          data-setup="{}"
        >
          <source
            :src="getUrl('videos/nutrition.mp4')"
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
