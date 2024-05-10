<script setup lang="ts">
useSeoMeta({
  title: 'Notium - smart cloud app for your notes'
});
definePageMeta({
  middleware: 'auth'
});
import { useAuthStore } from '~/store/auth.store';
import { content } from '~/mocks/about.preview';
import { EditorKey } from '~/utils/symbols';

const authStore = useAuthStore();
const { isSkeleton } = storeToRefs(authStore);

const selectedText = ref<string>('');

provide(EditorKey, { selectedText, content });
</script>

<template>
  <div v-if="!isSkeleton">
    <EditorTiptap v-model="content" />
  </div>
  <div v-else class="skeleton flex w-full flex-col gap-6 px-72 pt-40">
    <UiSkeleton class="h-10 w-[500px]" />
    <UiSkeleton class="h-6 w-[220px]" />
  </div>
</template>

<style scoped>
@media screen and (max-width: 1330px) {
  .skeleton {
    @apply px-44
  }
}

@media screen and (max-width: 1260px) {
  .skeleton {
    @apply px-20
  }
}
</style>
