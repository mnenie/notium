<script setup lang="ts">
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import { useAuthStore } from '~/store/auth.store';

const props = defineProps<{
  messages: ChatCompletionRequestMessage[];
  isPending: boolean;
}>();

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const container = ref<HTMLElement | null>(null);

const markedMessagesToHtml = computed(() => {
  scrollToBottom();
  return props.messages.map((message) => {
    return {
      ...message,
      text: marked.parse(message.text)
    };
  });
});

const scrollToBottom = async () => {
  await nextTick(() => {
    if (container.value) {
      container.value.scrollTop = container.value.scrollHeight;
    }
  });
};

watch(
  () => props.messages,
  async () => {
    await scrollToBottom();
  }
);
</script>

<template>
  <div class="h-full">
    <div ref="container" class="content relative flex h-[92.5%] flex-1 flex-col overflow-y-auto px-64 pt-16">
      <div class="flex h-full flex-col gap-8">
        <div
          v-for="(message, index) in markedMessagesToHtml"
          :key="index"
          :class="
            cn(
              'flex items-center gap-4',
              message.role === 'user' ? 'flex-row-reverse' : '',
              index === markedMessagesToHtml.length - 1 && message.role === 'assistant' && 'pb-10'
            )
          "
        >
          <AiAvatar>
            <UiAvatarFallback>
              {{ message && user && message.role === 'user' ? user.email.slice(0, 2) : 'ai' }}
            </UiAvatarFallback>
          </AiAvatar>
          <div
            class="text-[14px] dark:text-zinc-200 md:text-[13px] 2xl:text-[14px]"
            v-html="message && message.text"
          />
        </div>
        <div v-if="props.isPending" class="flex items-center gap-2 pb-10">
          <AiAvatar>
            <UiAvatarFallback> ai </UiAvatarFallback>
          </AiAvatar>
          <div class="flex items-center gap-2 text-[14px] dark:text-zinc-200 md:text-[13px] 2xl:text-[14px]">
            <span>is thinking</span>
            <div class="inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1440px) {
  .content {
    @apply px-56;
  }
}
@media screen and (max-width: 1330px) {
  .content {
    @apply px-44;
  }
}
@media screen and (max-width: 1260px) {
  .content {
    @apply px-32;
  }
}
</style>
