<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';

const { notes } = storeToRefs(useNotesStore());

const {user} = storeToRefs(useAuthStore())

</script>
<template>
  <div class="px-4 pt-4">
    <div v-if="notes.length === 0">
      <HomeEmptyNotes />
    </div>
    <div v-else class="grid gap-3 grid-cols-5 notes">
      <HomeNote :notes="notes" />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1670px) {
  .notes{
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media screen and (max-width: 1340px) {
  .notes{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
