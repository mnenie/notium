<script setup lang="ts">
useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div class="w-full">
    <HomeEmptyNotes />
  </div>
</template>
