<script setup lang="ts">
import { Ellipsis } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';

const props = defineProps<{
  title: string;
}>();

const authStore = useAuthStore();
const { isSkeleton } = storeToRefs(authStore);
</script>

<template>
  <div
    class="sticky top-0 z-50 flex w-full select-none items-center justify-between bg-[#fff9]/95 px-4 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60"
  >
    <h2 v-if="!isSkeleton" class="text-lg font-semibold tracking-tight">{{ props.title }}</h2>
    <UiSkeleton class="h-6 w-[130px] mt-1" v-else />
    <div class="flex items-center">
      <Ellipsis v-if="!isSkeleton" class="cursor-pointer" color="rgb(82 82 91)" :size="18" />
      <UiSkeleton v-else class="w-4 h-3" />
    </div>
  </div>
</template>
