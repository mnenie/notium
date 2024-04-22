<script setup lang="ts">
import { Search } from 'lucide-vue-next';
const model = defineModel<string>();
</script>

<template>
  <div class="relative mb-3.5 h-8">
    <Search class="absolute left-4 top-1/2 h-[16px] w-[16px] -translate-y-1/2" color="rgb(82 82 91 / 0.9)" />
    <UiInput
      v-model="model"
      placeholder="Search"
      class="h-8 w-full border-0 border-none pl-[40px] pr-[40px] text-[14px] font-medium text-zinc-600 placeholder:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-zinc-100 xl:text-[13px] xl:placeholder:text-[13px] 2xl:text-[14px] 2xl:placeholder:text-[14px]"
    />
    <UiBadge
      variant="secondary"
      class="absolute right-2 top-1/2 h-4 -translate-y-1/2 rounded-sm px-1 font-normal"
    >
      <span class="text-zinc-500">⌘</span>
      <span class="text-zinc-500">K</span>
    </UiBadge>
  </div>
</template>
