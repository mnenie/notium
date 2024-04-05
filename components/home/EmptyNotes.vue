<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
</script>
<template>
  <div class="flex flex-col pt-44">
    <div class="self-center flex flex-col items-center">
      <img class="h-52 w-52" src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" />
      <h2 class="text-2xl font-semibold tracking-tight">You dont have any notes</h2>
      <p class="text-sm text-[#72717a] mb-4">Add new notes to your collection</p>
      <UiButton>
        <CirclePlus class="mr-2 h-5 w-5"/>
        <span>Add new note</span>
      </UiButton>
    </div>
  </div>
</template>
