<script setup lang="ts">
useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div class="relative px-72 h-full w-full flex-col flex justify-end">
    <div class="flex items-center justify-center w-full">
      <AiMessage />
    </div>
  </div>
</template>