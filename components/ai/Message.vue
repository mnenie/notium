<script setup lang="ts">
import { ArrowBigUpDash } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';

const authstore = useAuthStore();
const { isSkeleton } = storeToRefs(authstore);

onMounted(() => {
  authstore.setSkeleton();
});
</script>

<template>
  <div v-if="!isSkeleton" class="relative flex w-full flex-col items-center">
    <div class="relative w-full">
      <UiTextarea placeholder="Tell NotiumAI a little bit about yourself" class="h-[46px] resize-none" />
      <UiButton variant="ghost" class="absolute right-[3px] top-1/2 -translate-y-1/2 px-2">
        <ArrowBigUpDash color="rgb(82 82 91 / 0.9)" />
      </UiButton>
    </div>
    <span class="py-1 text-sm text-zinc-400">
      Notium AI - your ai assistant. Remember your ideas in one click.
    </span>
  </div>
  <div v-else class="flex flex-col w-full items-center">
    <UiSkeleton class="h-12 w-full" />
    <UiSkeleton class="h-4 w-[250px] my-1" />
  </div>
</template>
