<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { Star, PlusCircleIcon } from 'lucide-vue-next';
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
    class="absolute left-0 right-0 top-0 z-50 flex w-full select-none items-center justify-between bg-[#fff9]/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60"
  >
    <h2 v-if="!isSkeleton" class="text-xl font-semibold tracking-tight">{{ props.title }}</h2>
    <UiSkeleton class="mt-[4px] h-6 w-[130px]" v-else />
    <div
      v-if="
        $route.path !== AI_ROUTE &&
        $route.path !== NOTES_ROUTE &&
        $route.path !== FAVORITES_ROUTE &&
        $route.path !== SETTINGS_ROUTE
      "
    >
      <div v-if="!isSkeleton" class="flex items-center">
        <FeaturesPriority
          :priorities="priorities"
          :selected-values="selectedValues"
          @toogle-priority="togglePriority"
        />
        <UiButton @click="toggleStar" variant="outline" size="sm" class="h-8 border-dashed px-2">
          <Star class="h-4 w-4" :color="colorStar" />
        </UiButton>
      </div>
      <UiSkeleton v-else class="h-6 w-[160px]" />
    </div>
    <FeaturesFilterNotes v-if="$route.path === NOTES_ROUTE || $route.path === FAVORITES_ROUTE" />
    <UiButton
      v-if="$route.path === AI_ROUTE || $route.path === SETTINGS_ROUTE"
      @click="navigateTo(NOTES_ROUTE)"
      size="sm"
      variant="outline"
      class="flex h-8 items-center border-dashed"
    >
      <span class="text-sm">Go to Notes</span>
    </UiButton>
  </div>
</template>
