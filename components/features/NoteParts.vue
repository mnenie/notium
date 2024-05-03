<script setup lang="ts">
import { useNotesStore } from '~/store/notes.store';
import { CheckCheck, Star, Trash2 } from 'lucide-vue-next';

defineProps<{
  selectedValues: string[];
  priorities: Priority[];
}>();
const emit = defineEmits<{
  (e: 'togglePriority', value: string): void;
}>();

const notesStore = useNotesStore();

const editor = inject(EditorKey);

const updateNote = async () => {
  await notesStore.updateNoteById({
    note_data: { content: editor!.content.value! as string, type: 'doc' },
    priority: 0
  });
};

const { store } = useColorMode();

const isStar = ref(false);
const colorStar = computed(() => {
  return isStar.value ? 'rgb(251 191 36)' : store.value === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)';
});
const toggleStar = () => {
  isStar.value = !isStar.value;
};

const isHovered = ref(false);

const trashColor = computed(() => {
  if (isHovered.value) {
    return 'rgb(239 68 68)';
  } else {
    return store.value === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)';
  }
});
</script>

<template>
  <div class="flex items-center gap-1.5">
    <FeaturesPriority
      :priorities="priorities"
      :selected-values="selectedValues"
      @toogle-priority="emit('togglePriority', $event)"
    />
    <UiButton @click="updateNote" variant="outline" size="sm" class="h-8 border-dashed px-2">
      <CheckCheck class="mr-2 h-4 w-4" :color="store === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)'" />
      <span class="text-[12px]">Update</span>
    </UiButton>
    <UiButton @click="toggleStar" variant="outline" size="sm" class="h-8 border-dashed px-2">
      <Star class="h-4 w-4" :color="colorStar" />
    </UiButton>
    <UiButton
      @click="notesStore.deleteNoteById"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      variant="outline"
      size="sm"
      class="h-8 border-dashed px-2"
    >
      <Trash2 class="h-4 w-4" :color="trashColor" />
    </UiButton>
  </div>
</template>
