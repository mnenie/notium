<script setup lang="ts">
import { ArrowBigUpDash } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';

const emit = defineEmits<{
  (e: 'onSubmit'): void;
}>();

const authstore = useAuthStore();
const { isSkeleton } = storeToRefs(authstore);

onMounted(() => {
  authstore.setSkeleton();
});

const model = defineModel<string>();
</script>

<template>
  <div v-if="!isSkeleton" class="flex w-full flex-col items-center px-72 mt-2">
    <form @submit.prevent="emit('onSubmit')" class="relative w-full">
      <UiInput
        v-model="model"
        placeholder="Tell NotiumAI a little bit about yourself"
        class="h-11"
      />
      <UiButton type="submit" variant="ghost" class="absolute right-[3px] top-1/2 -translate-y-1/2 px-2">
        <ArrowBigUpDash color="rgb(82 82 91 / 0.9)" />
      </UiButton>
    </form>
    <span class="py-1 text-xs text-zinc-400">
      Notium AI - your ai assistant. Remember your ideas in one click.
    </span>
  </div>
  <div v-else class="flex w-full flex-col items-center px-72">
    <UiSkeleton class="h-[41px] w-full" />
    <UiSkeleton class="my-1 h-4 w-[250px]" />
  </div>
</template>
