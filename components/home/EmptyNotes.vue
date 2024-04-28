<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';
import { useNotesStore } from '~/store/notes.store';

const noteStore = useNotesStore();
const localePath = useLocalePath();
</script>
<template>
  <div class="flex h-full flex-col">
    <div class="flex h-full flex-col items-center self-center pt-56">
      <img class="h-52 w-52" src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" />
      <h2 class="text-2xl font-semibold tracking-tight">
        {{ $route.path === localePath(NOTES_ROUTE) ? $t('notes_page_null.title') : $t('favorite_notes_page_null.title') }}
      </h2>
      <p class="mb-4 text-sm text-[#72717a]">
        {{
          $route.path === localePath(NOTES_ROUTE)
            ? $t('notes_page_null.description')
            : $t('favorite_notes_page_null.description')
        }}
      </p>
      <UiButton @click="noteStore.addNewNote">
        <CirclePlus class="mr-2 h-5 w-5" />
        <span>{{ $route.path === localePath(NOTES_ROUTE) ? $t('notes_page_null.btn') : $t('favorite_notes_page_null.btn') }}</span>
      </UiButton>
    </div>
  </div>
</template>
