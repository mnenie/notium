<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';
import { EditorKey } from '~/utils/symbols';

useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});

const notesStore = useNotesStore();
const { note, skeletonNote } = storeToRefs(notesStore);

const authstore = useAuthStore();
const { isSkeleton } = storeToRefs(authstore);

const editor = inject(EditorKey);

const route = useRoute();

onMounted(async () => {
  await notesStore.getNoteById(route.params.id as string);
  if (note.value !== ({} as Note) && editor) {
    editor.content.value = note.value.note_data!.content;
  }
  notesStore.setSkeleton();
});
onUnmounted(() => {
  notesStore.unsetSkeleton();
});
</script>

<template>
  <div v-if="!isSkeleton">
    <EditorTiptap v-if="!skeletonNote && editor" v-model="editor.content.value" />
    <div v-else class="flex w-full flex-col gap-6 px-72 pt-40">
      <UiSkeleton class="h-10 w-[500px]" />
    </div>
  </div>
  <div v-else class="flex w-full flex-col gap-6 px-72 pt-40">
    <UiSkeleton class="h-10 w-[500px]" />
    <UiSkeleton class="h-6 w-[220px]" />
  </div>
</template>
