<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';

const { notes } = storeToRefs(useNotesStore());

const {user} = storeToRefs(useAuthStore())

</script>
<template>
  <div class="px-4 pt-4">
    <div class="grid grid-cols-5 gap-3">
      <HomeNote :notes="notes" />
    </div>
  </div>
</template>

<style scoped></style>
