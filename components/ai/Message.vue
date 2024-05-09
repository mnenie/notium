<script setup lang="ts">
import { ArrowBigUpDash } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';

const emit = defineEmits<{
  (e: 'onSubmit'): void;
}>();

const authstore = useAuthStore();
const { isSkeleton } = storeToRefs(authstore);
const { store } = useColorMode();

const model = defineModel<string>();
</script>

<template>
  <div v-if="!isSkeleton" class="message sticky bottom-0 z-50 flex w-full flex-col items-center px-64">
    <form @submit.prevent="emit('onSubmit')" class="relative w-full">
      <UiInput v-model="model" :placeholder="$t('ai.placeholder')" class="h-11" />
      <UiButton type="submit" variant="ghost" class="absolute right-[4px] top-1/2 h-9 -translate-y-1/2 px-2">
        <ArrowBigUpDash :color="store === 'light' ? 'rgb(82 82 91 / 0.9)' : 'rgb(113 113 122)'" />
      </UiButton>
    </form>
    <span class="py-1 text-xs text-zinc-400">
      {{ $t('ai.description') }}
    </span>
  </div>
  <div v-else class="skeleton sticky bottom-0 z-50 flex w-full flex-col items-center px-64">
    <UiSkeleton class="h-11 w-full" />
    <UiSkeleton class="my-1 h-4 w-[350px]" />
  </div>
</template>

<style scoped>
@media screen and (max-width: 1440px) {
  .message {
    @apply px-56;
  }
  .skeleton {
    @apply px-56;
  }
}
@media screen and (max-width: 1330px) {
  .message {
    @apply px-44;
  }
  .skeleton {
    @apply px-56;
  }
}
@media screen and (max-width: 1260px) {
  .message {
    @apply px-32;
  }
  .skeleton {
    @apply px-56;
  }
}
</style>
