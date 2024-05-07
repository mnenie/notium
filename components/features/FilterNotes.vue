<script setup lang="ts">
import { PlusCircleIcon, Search } from 'lucide-vue-next';
import { useNotesStore } from '~/store/notes.store';

const noteStore = useNotesStore();
const { filterModel } = storeToRefs(noteStore);

const localPath = useLocalePath();
const { store } = useColorMode();
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="relative h-8">
      <Search
        class="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2"
        :color="store === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)'"
      />
      <UiInput
        v-model.trim="filterModel"
        :placeholder="$t('top_menu.btns.filter')"
        class="h-8 w-[150px] pb-[0.26rem] pl-8 lg:w-[250px]"
      />
    </div>
    <FeaturesFilterByPriority />
    <UiButton
      v-if="$route.path === localPath(NOTES_ROUTE)"
      @click="noteStore.addNewNote"
      size="sm"
      variant="outline"
      class="flex h-8 items-center border-dashed"
    >
      <PlusCircleIcon
        class="mr-2 h-4 w-4"
        :color="store === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)'"
      />
      <span class="text-sm">{{ $t('top_menu.btns.note') }}</span>
    </UiButton>
    <UiButton
      v-else
      @click="navigateTo(localPath(NOTES_ROUTE))"
      size="sm"
      variant="outline"
      class="flex h-8 items-center border-dashed"
    >
      <span class="text-sm">{{ $t('top_menu.btns.favorite') }}</span>
    </UiButton>
  </div>
</template>
