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
      Healthy Balanced Nutrition for T1D
    </template>
    <template #subtitle>
      University of Michigan Health
      <br>
      Michigan Medicine
    </template>
    <template #content>
      <div>
        <p>
          This video discusses what makes up a healthy diet for people with type 1 diabetes and why it is important for people with T1D to eat a balanced diet and stay hydrated.
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
