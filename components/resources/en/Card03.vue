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
      Exercise with T1D
    </template>
    <template #subtitle>
      University of Michigan Health
      <br>
      Michigan Medicine
    </template>
    <template #content>
      <div>
        <p>
          This video discusses how exercise can affect blood glucose levels for people living with type 1 diabetes and offers some general tips on how to prepare for exercise.
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
