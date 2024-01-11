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
      Effects on Sleep on Diabetes Management
    </template>
    <template #subtitle>
      Excerpt from Centers for Disease Control and Prevention
    </template>
    <template #content>
      <div>
        <img
          :src="getUrl('images/content/content-06.jpg')"
          alt="image"
          class="aspect-video object-cover h-48 mb-8"
        >
        <p class="font-semibold">
          Complications From Lack of Sleep
        </p>
        <p>
          If you get less than 7 hours of sleep per night regularly, your diabetes will be harder to manage. Too little sleep can:
        </p>
        <ul class="list-disc list-inside">
          <li>Increase insulin resistance.</li>
          <li>Make you hungrier the next day and reduce how full you feel after eating.</li>
          <li>Make you more likely to reach for junk foods—those that are high in carbs and sugar.</li>
          <li>Make it harder to lose weight.</li>
          <li>Raise blood pressure and seriously increase the risk of a heart attack.</li>
          <li>Make your immune system less able to fight infections.</li>
          <li>Increase your risk of depression and anxiety.</li>
        </ul>
        <br>
        <p class="text-right">
          Read more: CDC
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
