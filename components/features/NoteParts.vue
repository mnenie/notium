<script setup lang="ts">
import { useNotesStore } from '~/store/notes.store';
import { CheckCheck, Star, Trash2 } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

const editor = inject(EditorKey);

const notesStore = useNotesStore();
const { note, skeletonNote } = storeToRefs(notesStore);

const route = useRoute();
const localPath = useLocalePath();
const { t } = useI18n();

const selectedValues = computed(() => {
  if (route.path === localPath(ABOUT_ROUTE)) {
    return ['none'];
  } else {
    return note.value && note.value.priority ? note.value.priority : ['none'];
  }
});

const togglePriority = (value: string) => {
  const index = selectedValues.value.indexOf(value);
  if (index === -1) {
    selectedValues.value.push(value);
  } else {
    selectedValues.value.splice(index, 1);
  }
};

const updateNote = async () => {
  if (route.path !== localPath(ABOUT_ROUTE)) {
    await notesStore.updateNoteById({
      note_data: { content: editor!.content.value! as string, type: 'doc' },
      priority: selectedValues.value
    });
  } else {
    toast.error(t('toasts.warning'), {
      description: t('toasts.update_about')
    });
  }
};

const deleteNote = async () => {
  if (route.path !== localPath(ABOUT_ROUTE)) {
    await notesStore.deleteNoteById();
  } else {
    toast.error(t('toasts.warning'), {
      description: t('toasts.delete_about')
    });
  }
};

const { store } = useColorMode();

const isStar = ref(note.value.favorite);
const colorStar = computed(() => {
  if (route.path !== localPath(ABOUT_ROUTE)) {
    return note.value.favorite
      ? 'rgb(251 191 36)'
      : store.value === 'light'
        ? 'rgb(82 82 91)'
        : 'rgb(113 113 122)';
  } else {
    return store.value === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)';
  }
});
const toggleFavorite = async () => {
  if (route.path !== localPath(ABOUT_ROUTE)) {
    note.value.favorite = !note.value.favorite;
    await notesStore.toggleFavoiteNote(note.value.favorite);
  } else {
    toast.error(t('toasts.warning'), {
      description: t('toasts.favorite_about')
    });
  }
};

const isHovered = ref(false);

const trashColor = computed(() => {
  if (isHovered.value) {
    return 'rgb(239 68 68)';
  } else {
    return store.value === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)';
  }
});

const skeleton = computed(() => {
  return route.path === localPath(ABOUT_ROUTE) ? true : skeletonNote.value;
});
</script>

<template>
  <div v-if="skeleton" class="flex items-center gap-1.5">
    <FeaturesPriority :selected-values="selectedValues" @toggle-priority="togglePriority" />
    <UiButton @click="updateNote" variant="outline" size="sm" class="h-8 border-dashed px-2">
      <CheckCheck class="mr-2 h-4 w-4" :color="store === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)'" />
      <span class="text-[12px]">{{ $t('top_menu.btns.update') }}</span>
    </UiButton>
    <UiButton @click="toggleFavorite" variant="outline" size="sm" class="h-8 border-dashed px-2">
      <Star class="h-4 w-4" :color="colorStar" />
    </UiButton>
    <UiButton
      @click="deleteNote"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      variant="outline"
      size="sm"
      class="h-8 border-dashed px-2"
    >
      <Trash2 class="h-4 w-4" :color="trashColor" />
    </UiButton>
  </div>
  <UiSkeleton v-else class="mt-[px] h-8 w-[300px]" />
</template>
