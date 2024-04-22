<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import { useNotesStore } from '~/store/notes.store';

const noteStore = useNotesStore();
</script>
<template>
  <div class="flex h-full flex-col">
    <div class="flex h-full flex-col items-center self-center pt-52">
      <img class="h-52 w-52" src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" />
      <h2 class="text-2xl font-semibold tracking-tight">
        {{ $route.path === NOTES_ROUTE ? "You don't have any notes" : "You don't have any favorite notes" }}
      </h2>
      <p class="mb-4 text-sm text-[#72717a]">
        {{
          $route.path === NOTES_ROUTE
            ? 'Add new notes to your collection'
            : 'Add new favorite notes to your collection'
        }}
      </p>
      <UiButton @click="noteStore.addNewNote">
        <CirclePlus class="mr-2 h-5 w-5" />
        <span>{{ $route.path === NOTES_ROUTE ? 'Add new note' : 'Add new fav note' }}</span>
      </UiButton>
    </div>
  </div>
</template>
