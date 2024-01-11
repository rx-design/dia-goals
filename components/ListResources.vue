<template>
  <Card class="min-h-full rounded-none">
    <template #content>
      <div class="flex flex-col gap-6">
        <div
          v-for="{ uuid, label } of categories"
          :key="uuid"
          class="flex flex-col gap-2"
        >
          <span class="font-semibold">
            {{ label }}
          </span>
          <div class="flex gap-2">
            <div
              v-for="resource of findResources(uuid)"
              :key="resource.uuid"
              class="flex flex-col items-start gap-2 w-1/2"
            >
              <img
                :src="getUrl(resource.image)"
                alt="image"
                class="aspect-square object-cover h-24"
                @click="showResource(resource)"
              >
              <span class="text-xs">
                {{ resource.label }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  const { categories } = storeToRefs(useGoalsStore())
  const { findResources } = useResourcesStore()
  const { showResource } = useModals()
  const { getUrl } = useMedia()
</script>
