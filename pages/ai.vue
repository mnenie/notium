<script setup lang="ts">
useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth',
  keepalive: true
});

import { useNotesStore } from '~/store/notes.store';
import useConversation from '~/composables/useConversation';

const model = ref('');

const messages = ref<ChatCompletionRequestMessage[]>([]);

const { notes } = storeToRefs(useNotesStore());
const { usePostConversations } = useConversation(notes, model);

const handleSubmit = async () => {
  const userMessage: { role: 'user'; text: string } = { role: 'user', text: model.value };
  messages.value.push(userMessage);
  const response = await usePostConversations();
  messages.value.push(response);
  model.value = '';
};
</script>

<template>
  <div class="transition-width h-full overflow-hidden relative w-full flex-col">
    <AiContent :messages="messages" />
    <AiMessage v-model="model" @on-submit="handleSubmit" />
  </div>
</template>
