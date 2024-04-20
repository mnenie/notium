<script setup lang="ts">
import { PlusCircleIcon, Search } from 'lucide-vue-next';

const model = defineModel<string>();
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="relative h-8">
      <Search class="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4" color="rgb(82 82 91)" />
      <UiInput
        v-model="model"
        placeholder="Filter notes..."
        class="h-8 w-[150px] pb-[0.26rem] lg:w-[250px] pl-8"
      />
    </div>
    <UiButton size="sm" variant="outline" class="flex h-8 items-center border-dashed">
      <PlusCircleIcon class="mr-2 h-4 w-4" color="rgb(82 82 91)" />
      <span class="text-sm">{{ $route.path === NOTES_ROUTE ? 'Add Note' : 'Add Favorite' }}</span>
    </UiButton>
  </div>
</template>
