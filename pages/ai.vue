<script setup lang="ts">
useSeoMeta({
  title: 'Notium - smart cloud app for your notes'
});
definePageMeta({
  middleware: 'auth'
});

import { useNotesStore } from '~/store/notes.store';
import useConversation from '~/composables/useConversation';

const model = ref('');
const isPending = ref(false);
const messages = ref<ChatCompletionRequestMessage[]>([]);

const notesStore = useNotesStore();

const { notes } = storeToRefs(notesStore);
const { usePostConversations } = useConversation(notes, model);

const handleSubmit = async () => {
  try {
    isPending.value = true;
    const userMessage: { role: 'user'; text: string } = { role: 'user', text: model.value };
    messages.value.push(userMessage);
    const response = await usePostConversations();
    messages.value.push(response);
    model.value = '';
  } catch (err) {
    console.log(err);
  } finally{
    isPending.value = false;
  }
};

onActivated(async () => {
  await notesStore.getNotes();
});
</script>

<template>
  <div class="transition-width relative h-full w-full flex-col overflow-hidden">
    <AiContent :messages="messages" :is-pending="isPending" />
    <AiMessage v-model="model" @on-submit="handleSubmit" />
  </div>
</template>
