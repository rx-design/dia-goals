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
      How does Stress Affect Diabetes?
    </template>
    <template #subtitle>
      See Yourself Health
    </template>
    <template #content>
      <div>
        <p>
          This video discusses how stress has an effect on diabetes and what how this stress can be reduced.
        </p>
        <video
          id="educational-video"
          class="video-js mt-8"
          controls
          preload="auto"
          width="640"
          height="264"
          :poster="getUrl('images/posters/video-poster-04.jpg')"
          data-setup="{}"
        >
          <source
            :src="getUrl('videos/mental-health.mp4')"
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
