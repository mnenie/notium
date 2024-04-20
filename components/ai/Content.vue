<script setup lang="ts">
import { cn } from '@/lib/utils';
import { marked } from 'marked';

const props = defineProps<{
  messages: ChatCompletionRequestMessage[];
}>();

const markedMessagesToHtml = computed(() => {
  return props.messages.map(message => {
    return {
      ...message,
      text: marked.parse(message.text)
    };
  });
});
</script>

<template>
  <div class="flex h-full flex-1 flex-col-reverse overflow-y-auto px-64">
    <div class="flex h-full flex-col-reverse gap-5 mb-6">
      <div
        v-for="(message, index) in markedMessagesToHtml"
        :key="index"
        :class="cn('flex items-center gap-4', message.role === 'user' ? 'flex-row-reverse' : '')"
      >
        <UiAvatar
          size="sm"
          :class="
            cn(
              'inline-flex h-8 w-8 shrink-0 select-none items-center justify-center overflow-hidden bg-zinc-100 font-normal text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50'
            )
          "
        >
          <UiAvatarFallback>{{ message && message.role === 'user' ? '1a' : 'ai' }}</UiAvatarFallback>
        </UiAvatar>
        <div class="text-[13px]" v-html="message ? message.text : ''"></div>
      </div>
    </div>
  </div>
</template>
