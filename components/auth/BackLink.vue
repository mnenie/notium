<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';
</script>

<template>
  <div
    @click="navigateTo(HOME_ROUTE)"
    class="absolute ml-52 mt-20 flex cursor-pointer items-center gap-1 rounded-md dark:text-zinc-200"
  >
    <ChevronLeft :size="20" />
    <span class="text-sm font-medium">Back</span>
  </div>
</template>
