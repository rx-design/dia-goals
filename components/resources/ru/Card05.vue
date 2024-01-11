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
      How Sleep Affects Your Brain
    </template>
    <template #subtitle>
      Dana Foundation
    </template>
    <template #content>
      <div>
        <p>
          The better you sleep at night, the better your brain will function, and the better you’ll feel. Learn about what goes on in the brain while you rest, the negative effects of sleep deprivation, and steps to help ensure a good night’s sleep.
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
