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
      How does Exercise Benefit People with T1D?
    </template>
    <template #subtitle>
      Excerpt from diabinfo
      <br>
      Scientific support: Dr. Ulrike Becker
    </template>
    <template #content>
      <div>
        <img
          :src="getUrl('images/content/content-04.jpg')"
          alt="image"
          class="aspect-video object-cover h-48 mb-8"
        >
        <p>
          Physical activity reduces the risk of cardiovascular disease and many other diabetes-related secondary diseases. Exercise can also help you achieve a healthy weight and maintain it in the long term.
          <br>
          In cases of preexisting insulin resistance, regular physical activity causes the body’s cells to react more sensitively to the hormone insulin. Subsequently, the long-term blood sugar value (HbA1c value) may also improve.
        </p>
        <br>
        <p class="text-right">
          Read more: diabinfo
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
