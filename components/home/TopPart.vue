<script setup lang="ts">
import { Ellipsis } from 'lucide-vue-next';

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="sticky top-0 z-50 flex w-full items-center justify-between py-2.5">
    <h2 class="text-lg font-semibold tracking-tight">{{ props.title }}</h2>
    <div class="flex items-center">
      <Ellipsis color="rgb(82 82 91)" :size="18" />
    </div>
  </div>
</template>
