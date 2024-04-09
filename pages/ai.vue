<script setup lang="ts">
useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});

const model = ref("")

const messages = ref<ChatCompletionRequestMessage[]>([]);

const handleSubmit = async () => {
  const userMessage: ChatCompletionRequestMessage = {
    role: 'user',
    content: model.value,
  };
  const newMessages = [...messages.value, userMessage];
  const { data, error } = await useFetch('/api/conversation', {
    method: 'POST',
    body: {
      messages: newMessages,
    },
  });
  if (error.value) {
    console.log(error.value.statusMessage);
  }
  if (data.value) {
    messages.value = [
      ...messages.value,
      userMessage,
      {
        role: 'assistant',
        content: (data.value as ChatCompletionRequestMessage).content as string,
      },
    ];
    await refreshNuxtData('userData');
  }
  model.value = '';
};

</script>

<template>
  <div class="relative flex h-full w-full flex-col justify-end px-72">
    <div class="flex w-full items-center justify-center">
      {{ messages }}
      <AiMessage v-model="model" @on-submit="handleSubmit" />
    </div>
  </div>
</template>
