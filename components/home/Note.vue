<script setup lang="ts">
import { Star, Circle } from 'lucide-vue-next';

const props = defineProps<{
    notes: Note[]
}>()
</script>

<template>
  <UiCard v-for="note in props.notes" :key="note.id" class="max-w-[400px] w-full">
    <UiCardHeader class="flex justify-between flex-row items-start gap-4 space-y-0 p-4">
      <div class="space-y-1">
        <UiCardTitle class="text-base">{{ note.title }}</UiCardTitle>
        <UiCardDescription class="text-sm text-zinc-600">
          {{ note.content }}
        </UiCardDescription>
      </div>
      <Star class="h-4 w-4" />
    </UiCardHeader>
    <UiCardContent class="p-4 pt-1">
      <div class="text-zinc-500 flex space-x-4 text-xs">
        <div class="flex items-center">
          <Circle class="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
          {{ note.prioritet }}
        </div>
        <div class="flex items-center">
          <Star class="mr-1 h-3 w-3" />
          20k
        </div>
        <div>Updated April 2023</div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
