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
  <div v-if="!isSkeleton" class="sticky bottom-0 z-50 flex w-full flex-col items-center px-64">
    <form @submit.prevent="emit('onSubmit')" class="relative w-full">
      <UiInput v-model="model" :placeholder="$t('ai.placeholder')" class="h-11" />
      <UiButton type="submit" variant="ghost" class="absolute right-[5px] top-1/2 -translate-y-1/2 px-2 h-9">
        <ArrowBigUpDash :color="store === 'light' ? 'rgb(82 82 91 / 0.9)' : 'rgb(113 113 122)'" />
      </UiButton>
    </form>
    <span class="py-1 text-xs text-zinc-400">
      {{ $t('ai.description') }}
    </span>
  </div>
  <div v-else class="sticky bottom-0 z-50 flex w-full flex-col items-center px-64">
    <UiSkeleton class="h-11 w-full" />
    <UiSkeleton class="my-1 h-4 w-[350px]" />
  </div>
</template>
