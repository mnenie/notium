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
const { notes, filteredNotes, favs } = storeToRefs(notesStore);
const authStore = useAuthStore();
const { isSkeleton } = storeToRefs(authStore);

onMounted(async () => {
  await notesStore.getFavsNotes();
});
</script>

<template>
  <div v-if="!isSkeleton" class="h-full w-full">
    <HomeEmptyNotes v-if="favs.length === 0" />
    <HomeFavoriteNotes v-else :favs="filteredNotes" />
  </div>
  <HomeSkeletonNotes v-else />
</template>
