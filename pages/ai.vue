<script setup lang="ts">
import { useChat } from 'ai/vue';

useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});

const { messages, input, handleSubmit } = useChat();
</script>

<template>
  <div class="relative flex h-full w-full flex-col justify-end px-72">
    <div class="flex w-full items-center justify-center">
      {{ messages }}
      <AiMessage v-model="input" @on-submit="handleSubmit" />
    </div>
  </div>
</template>
