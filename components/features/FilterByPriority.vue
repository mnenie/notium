<script setup lang="ts">
import { ArrowUpDown, ArrowUpIcon, ArrowDownIcon, ArrowRightIcon, Ban } from 'lucide-vue-next';
import { useNotesStore } from '~/store/notes.store';

const localPath = useLocalePath();
const { store } = useColorMode();

const notesStore = useNotesStore();
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton
        v-if="$route.path === localPath(NOTES_ROUTE) || $route.path === localPath(FAVORITES_ROUTE)"
        size="sm"
        variant="outline"
        class="flex h-8 w-full items-center justify-between gap-2 border-dashed"
      >
        <span class="text-sm">Priority</span>
        <ArrowUpDown :color="store === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)'" class="h-4 w-4" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="center">
      <UiDropdownMenuItem @click="notesStore.togglePriorityFilter('high')">
        <ArrowUpIcon class="mr-2 h-3.5 w-3.5" />
        High
      </UiDropdownMenuItem>
      <UiDropdownMenuItem @click="notesStore.togglePriorityFilter('medium')">
        <ArrowRightIcon class="mr-2 h-3.5 w-3.5" />
        Medium
      </UiDropdownMenuItem>
      <UiDropdownMenuItem @click="notesStore.togglePriorityFilter('low')">
        <ArrowDownIcon class="mr-2 h-3.5 w-3.5" />
        Low
      </UiDropdownMenuItem>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuItem @click="notesStore.togglePriorityFilter('all')">
        <Ban class="mr-2 h-3.5 w-3.5" />
        All Notes
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
