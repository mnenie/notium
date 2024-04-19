<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { Star } from 'lucide-vue-next';
import { priorities } from '~/mocks/priorities';

const props = defineProps<{
  title: string;
}>();

const authStore = useAuthStore();
const { isSkeleton } = storeToRefs(authStore);

const selectedValues = ref(['none']);

const togglePriority = (value: string) => {
  const index = selectedValues.value.indexOf(value);
  if (index === -1) {
    selectedValues.value.push(value);
  } else {
    selectedValues.value.splice(index, 1);
  }
};

const isStar = ref(false);

const colorStar = computed(() => {
  return isStar.value ? 'rgb(251 191 36)' : 'rgb(82 82 91)';
});

const toggleStar = () => {
  isStar.value = !isStar.value;
};
</script>

<template>
  <div
    class="sticky top-0 z-50 flex w-full select-none items-center justify-between bg-[#fff9]/95 px-4 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60"
  >
    <h2 v-if="!isSkeleton" class="text-lg font-semibold tracking-tight">{{ props.title }}</h2>
    <UiSkeleton class="mt-1 h-6 w-[130px]" v-else />
    <div v-if="$route.path !== AI_ROUTE && $route.path !== NOTES_ROUTE && $route.path !== FAVORITES_ROUTE">
      <div v-if="!isSkeleton" class="flex items-center">
        <FeaturesPriority
          :priorities="priorities"
          :selected-values="selectedValues"
          @toogle-priority="togglePriority"
        />
        <UiButton @click="toggleStar" variant="outline" size="sm" class="h-7 border-dashed px-2">
          <Star class="h-4 w-4" :color="colorStar" />
        </UiButton>
      </div>
      <UiSkeleton v-else class="h-6 w-[180px]" />
    </div>
  </div>
</template>
