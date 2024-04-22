<script setup lang="ts">
import { useNotesStore } from '~/store/notes.store';

useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});

const { notes } = storeToRefs(useNotesStore());
</script>

<template>
  <div class="w-full h-full">
    <HomeEmptyNotes v-if="notes.length === 0" />
    <HomeNotes v-else />
  </div>
</template>
