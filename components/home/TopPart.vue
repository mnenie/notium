<script setup lang="ts">
import { Ellipsis } from 'lucide-vue-next';

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="sticky top-0 z-50 flex w-full select-none items-center justify-between bg-[#fff9]/95 px-4 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60"
  >
    <h2 class="text-[20px] font-semibold tracking-tight">{{ props.title }}</h2>
    <div class="flex items-center">
      <Ellipsis class="cursor-pointer" color="rgb(82 82 91)" :size="18" />
    </div>
  </div>
</template>
