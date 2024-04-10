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
const {usePostConversations} = useConversation(notes.value, model)

const handleSubmit = async () => {
  const response = await usePostConversations();
  messages.value = response;
};
</script>

<template>
  <div class="relative flex h-full w-full flex-col justify-end px-72">
    <div class="flex w-full flex-col items-center justify-center">
      {{ messages }}
      <AiMessage v-model="model" @on-submit="handleSubmit" />
    </div>
  </div>
</template>
