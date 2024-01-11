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
      Trenn diabeediga
    </template>
    <template #subtitle>
      University of Michigan Health
      <br>
      Michigan Medicine
    </template>
    <template #content>
      <div>
        <p>
          See video räägib sellest, kuidas trenn võib mõjutada veresuhkru taset inimestel, kellel on 1. tüüpi diabeet, ning pakub mõningaid üldisi näpunäiteid, kuidas treenimiseks valmistuda.
        </p>
        <video
          id="educational-video"
          class="video-js mt-8"
          controls
          preload="auto"
          width="640"
          height="264"
          :poster="getUrl('images/posters/video-poster-02.jpg')"
          data-setup="{}"
        >
          <source
            :src="getUrl('videos/activity.mp4')"
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
