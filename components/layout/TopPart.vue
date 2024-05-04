<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { priorities } from '~/mocks/priorities';

const props = defineProps<{
  title: string;
}>();

const authStore = useAuthStore();
const { isSkeleton } = storeToRefs(authStore);

const selectedValues = ref(['none']);

const localPath = useLocalePath();

const togglePriority = (value: string) => {
  const index = selectedValues.value.indexOf(value);
  if (index === -1) {
    selectedValues.value.push(value);
  } else {
    selectedValues.value.splice(index, 1);
  }
};
</script>

<template>
  <div
    class="absolute left-0 right-0 top-0 z-50 flex w-full select-none items-center justify-between bg-[#fff9]/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60 dark:bg-transparent"
  >
    <h2 v-if="!isSkeleton" class="text-xl font-semibold tracking-tight dark:text-zinc-100">
      {{
        $route.path === localPath(AI_ROUTE) ||
        $route.path === localPath(SETTINGS_ROUTE) ||
        $route.path === localPath(NOTES_ROUTE) ||
        $route.path === localPath(FAVORITES_ROUTE)
          ? $t(props.title)
          : props.title
      }}
    </h2>
    <UiSkeleton class="mt-[4px] h-6 w-[130px]" v-else />
    <div
      v-if="
        $route.path !== localPath(AI_ROUTE) &&
        $route.path !== localPath(NOTES_ROUTE) &&
        $route.path !== localPath(FAVORITES_ROUTE) &&
        $route.path !== localPath(SETTINGS_ROUTE)
      "
    >
      <FeaturesNoteParts
        v-if="!isSkeleton"
        :priorities="priorities"
        :selected-values="selectedValues"
        @toggle-priority="togglePriority"
      />
      <UiSkeleton v-else class="h-6 w-[160px]" />
    </div>
    <FeaturesFilterNotes
      v-if="$route.path === localPath(NOTES_ROUTE) || $route.path === localPath(FAVORITES_ROUTE)"
    />
    <UiButton
      v-if="$route.path === localPath(AI_ROUTE) || $route.path === localPath(SETTINGS_ROUTE)"
      @click="navigateTo(localPath(NOTES_ROUTE))"
      size="sm"
      variant="outline"
      class="flex h-8 items-center border-dashed"
    >
      <span class="text-sm">{{ $t('top_menu.btns.rerdirect_notes') }}</span>
    </UiButton>
  </div>
</template>
