<script setup lang="ts">
import { PlusCircleIcon, Search } from 'lucide-vue-next';
import { useNotesStore } from '~/store/notes.store';
const noteStore = useNotesStore();
const model = defineModel<string>();

const localPath = useLocalePath();
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="relative h-8">
      <Search class="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2" color="rgb(82 82 91)" />
      <UiInput
        v-model="model"
        :placeholder="$t('top_menu.btns.filter') "
        class="h-8 w-[150px] pb-[0.26rem] pl-8 lg:w-[250px]"
      />
    </div>
    <UiButton
      @click="noteStore.addNewNote"
      size="sm"
      variant="outline"
      class="flex h-8 items-center border-dashed"
    >
      <PlusCircleIcon class="mr-2 h-4 w-4" color="rgb(82 82 91)" />
      <span class="text-sm">{{ $route.path === localPath(NOTES_ROUTE) ? $t('top_menu.btns.note') : $t('top_menu.btns.favorite') }}</span>
    </UiButton>
  </div>
</template>
