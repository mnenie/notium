<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = defineProps<{
  messages: ChatCompletionRequestMessage[];
}>();
</script>

<template>
  <div class="flex h-full flex-1 flex-col-reverse overflow-y-auto px-72">
    <div class="flex h-full flex-col-reverse">
      <div v-for="(message, index) in props.messages" :key="index" class="mb-4 flex items-center gap-4">
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
        <div class="text-sm" v-html="message ? message.text : ''"></div>
      </div>
    </div>
  </div>
</template>