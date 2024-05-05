<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';

useSeoMeta({
  title: 'Notium - cloud app of your notes'
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
})
</script>

<template>
  <div v-if="!isSkeleton" class="h-full w-full">
    <HomeEmptyNotes v-if="notes.length === 0" />
    <HomeFavoriteNotes v-else :favs="filteredNotes" />
  </div>
  <div v-else class="h-full px-4 pt-16">
    <div class="notes grid grid-cols-5 gap-3">
      <UiSkeleton
        v-for="_ in 3"
        :key="_"
        class="flex h-[98px] w-full max-w-[400px] flex-col justify-between"
      />
    </div>
  </div>
</template>
