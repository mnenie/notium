<script setup lang="ts">
import { Star, Circle } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';

const props = defineProps<{
  notes: Note[];
}>();
</script>

<template>
  <UiCard
    v-for="note in props.notes"
    :key="note.id"
    class="flex w-full max-w-[400px] flex-col justify-between"
  >
    <UiCardHeader class="flex flex-row items-start justify-between gap-4 space-y-0 p-4">
      <div class="space-y-1">
        <UiCardTitle class="text-base">{{ note.title }}</UiCardTitle>
        <UiCardDescription class="text-sm text-zinc-600">
          {{ note.content }}
        </UiCardDescription>
      </div>
      <Star class="h-4 w-4" color="rgb(82 82 91)" />
    </UiCardHeader>
    <UiCardContent class="relative p-4 pt-1">
      <div class="flex space-x-4 text-xs text-zinc-500 items-center">
        <Badge variant="secondary" class="text-zinc-600 font-normal">
          {{ note.prioritet }}
        </Badge>
        <div>Updated April 2023</div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
