<script setup lang="ts">
import { CircleSlash2 } from 'lucide-vue-next';

const { store } = useColorMode();
</script>
<template>
  <div class="flex h-full flex-col">
    <div class="flex h-full flex-col items-center self-center pt-48">
      <CircleSlash2
        class="h-[180px] w-[180px]"
        :color="store === 'light' ? '' : 'rgb(212 212 216)'"
        :stroke-width="1"
      />
      <h2 class="text-2xl font-semibold tracking-tight dark:text-zinc-200">There are no such notes</h2>
      <p class="mb-4 text-sm text-[#72717a] dark:text-zinc-500">Try to enter the correct name!</p>
    </div>
  </div>
</template>
