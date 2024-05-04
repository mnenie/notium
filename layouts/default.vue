<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { menuItems } from '~/mocks/menu';
import { useNotesStore } from '~/store/notes.store';
import { cn } from '~/lib/utils';
import { EditorKey } from '~/utils/symbols';

const authstore = useAuthStore();
const notesStore = useNotesStore();

const route = useRoute();
const localPath = useLocalePath();

const getCurrentMenuItemTitle = computed(() => {
  let currentItemTitle = '';
  menuItems.value.forEach((item) => {
    if (localPath(item.route) === route.path) {
      currentItemTitle = item.title;
    } else if (item.children) {
      const childItem = item.children.find((child) => child.route === route.path);
      if (childItem) {
        currentItemTitle = childItem.title;
      }
    }
  });
  return currentItemTitle;
});

const content = ref('<h1>Untitled</h1><p></p>');
const selectedText = ref<string>('');

provide(EditorKey, { selectedText, content });

onMounted(async () => {
  authstore.setSkeleton();
});
onUnmounted(() => {
  authstore.setSkeletonOnUnmount();
});
</script>

<template>
  <div class="relative flex h-screen flex-1">
    <LayoutSidebar :nav-items="menuItems" />
    <div class="relative flex h-full w-full flex-col">
      <LayoutTopPart :title="getCurrentMenuItemTitle" />
      <div
        :class="
          cn('h-full w-full dark:bg-[#1a1a1a]', [
            $route.path !== AI_ROUTE && $route.path !== SETTINGS_ROUTE && $route.path !== NOTES_ROUTE
              ? 'overflow-auto pb-20'
              : ''
          ])
        "
      >
        <slot />
      </div>
    </div>
  </div>
</template>
