<script setup lang="ts">
import { useNotesStore } from '~/store/notes.store';
useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});

const model = ref('');

const messages = ref<ChatCompletionRequestMessage[]>([]);

const { notes } = storeToRefs(useNotesStore());
const { usePostConversations } = useConversation(notes.value, model);

const handleSubmit = async () => {
  const userMessage: { role: 'user'; text: string } = { role: 'user', text: model.value };
  messages.value.push(userMessage);
  const response = await usePostConversations();
  messages.value.push(response);
  model.value = '';
};
</script>

<template>
  <div class="transition-width messages relative w-full flex-col">
    <AiContent :messages="messages" class="" />
    <AiMessage v-model="model" @on-submit="handleSubmit" />
  </div>
</template>

<style scoped>
.messages {
  height: calc(100% - 128px);
}
</style>
