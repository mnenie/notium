<script setup lang="ts">
import { cn } from '@/lib/utils';
import { marked } from 'marked';

const props = defineProps<{
  messages: ChatCompletionRequestMessage[];
}>();

const markedMessagesToHtml = computed(() => {
  return props.messages.map((message) => {
    return {
      ...message,
      text: marked.parse(message.text)
    };
  });
});
</script>

<template>
  <div class="h-full">
    <div class="flex h-[93%] flex-1 flex-col-reverse overflow-y-auto px-64 pb-1">
      <div class="mb-6 flex h-full flex-col-reverse gap-5">
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
          <div class="text-[13px] dark:text-zinc-200" v-html="message ? message.text : ''"></div>
        </div>
      </div>
    </div>
  </div>
</template>
