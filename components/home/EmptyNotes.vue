<script setup lang="ts">
import { CirclePlus, Inbox, Box } from 'lucide-vue-next';
import { useNotesStore } from '~/store/notes.store';

const noteStore = useNotesStore();
const localePath = useLocalePath();
const route = useRoute();

const { store } = useColorMode();

const addNewNote = async () => {
  if (route.path === localePath(NOTES_ROUTE)) {
    await noteStore.addNewNote();
  } else {
    navigateTo(localePath(NOTES_ROUTE));
  }
};
</script>
<template>
  <div class="flex h-full flex-col">
    <div class="flex h-full flex-col items-center self-center pt-56">
      <Box
        class="h-[250px] w-[250px]"
        :color="store === 'light' ? '' : 'rgb(212 212 216)'"
        :stroke-width="1"
      />
      <h2 class="text-2xl font-semibold tracking-tight dark:text-zinc-200">
        {{
          $route.path === localePath(NOTES_ROUTE)
            ? $t('notes_page_null.title')
            : $t('favorite_notes_page_null.title')
        }}
      </h2>
      <p class="mb-4 text-sm text-[#72717a] dark:text-zinc-500">
        {{
          $route.path === localePath(NOTES_ROUTE)
            ? $t('notes_page_null.description')
            : $t('favorite_notes_page_null.description')
        }}
      </p>
      <UiButton @click="addNewNote">
        <CirclePlus v-if="$route.path === localePath(NOTES_ROUTE)" class="mr-2 h-5 w-5" />
        <span>{{
          $route.path === localePath(NOTES_ROUTE)
            ? $t('notes_page_null.btn')
            : $t('favorite_notes_page_null.btn')
        }}</span>
      </UiButton>
    </div>
  </div>
</template>
