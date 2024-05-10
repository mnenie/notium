<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';

useSeoMeta({
  title: 'Notium - smart cloud app for your notes'
});
definePageMeta({
  middleware: 'auth'
});
const notesStore = useNotesStore();
const { notes, filteredNotes } = storeToRefs(notesStore);
const authStore = useAuthStore();
const { isSkeleton } = storeToRefs(authStore);

onMounted(async () => {
  await notesStore.getNotes();
})
</script>

<template>
  <div v-if="!isSkeleton" class="h-full w-full">
    <HomeEmptyNotes v-if="notes.length === 0" />
    <HomeNotes v-else :notes="filteredNotes" />
  </div>
  <HomeSkeletonNotes v-else />
</template>
