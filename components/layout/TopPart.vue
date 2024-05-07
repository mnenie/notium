<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';
import helperHtmlToText from '~/helpers/helperHtmlToText';

const props = defineProps<{
  title: string;
}>();

const authStore = useAuthStore();
const { isSkeleton } = storeToRefs(authStore);
const { note, skeletonNote } = storeToRefs(useNotesStore());

const { htmlH1ToText } = helperHtmlToText();

const localPath = useLocalePath();
const route = useRoute();

const skeleton = computed(() => {
  return route.path === localPath(AI_ROUTE) ||
    route.path === localPath(NOTES_ROUTE) ||
    route.path === localPath(FAVORITES_ROUTE) ||
    route.path === localPath(ABOUT_ROUTE) ||
    route.path === localPath(SETTINGS_ROUTE)
    ? !isSkeleton.value
    : !isSkeleton.value && skeletonNote.value;
});
</script>

<template>
  <div
    class="absolute left-0 right-0 top-0 z-50 flex w-full select-none items-center justify-between bg-[#fff9]/95 px-4 pl-[256px] py-2 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60 dark:bg-transparent"
  >
    <h2 v-if="skeleton" class="text-xl font-semibold tracking-tight dark:text-zinc-100 overflow-hidden text-ellipsis whitespace-nowrap">
      {{
        $route.path !== localPath(NOTES_ROUTE + '/' + note._id)
          ? $t(props.title)
          : htmlH1ToText(note.note_data.content)
      }}
    </h2>
    <UiSkeleton v-else class="mt-[px] h-6 w-[130px]" />
    <div
      v-if="
        $route.path !== localPath(AI_ROUTE) &&
        $route.path !== localPath(NOTES_ROUTE) &&
        $route.path !== localPath(FAVORITES_ROUTE) &&
        $route.path !== localPath(SETTINGS_ROUTE)
      "
    >
      <FeaturesNoteParts v-if="!isSkeleton" />
      <UiSkeleton v-else class="mt-[px] h-8 w-[300px]" />
    </div>
    <div v-if="$route.path === localPath(NOTES_ROUTE) || $route.path === localPath(FAVORITES_ROUTE)">
      <FeaturesFilterNotes v-if="!isSkeleton" />
      <UiSkeleton v-else class="mt-[px] h-8 w-[365px]" />
    </div>
    <div v-if="$route.path === localPath(AI_ROUTE) || $route.path === localPath(SETTINGS_ROUTE)">
      <UiButton
        v-if="!isSkeleton"
        @click="navigateTo(localPath(NOTES_ROUTE))"
        size="sm"
        variant="outline"
        class="flex h-8 items-center border-dashed"
      >
        <span class="text-sm">{{ $t('top_menu.btns.rerdirect_notes') }}</span>
      </UiButton>
      <UiSkeleton v-else class="mt-[px] h-8 w-[100px]" />
    </div>
  </div>
</template>
