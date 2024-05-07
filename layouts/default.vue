<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { cn } from '~/lib/utils';
import { EditorKey } from '~/utils/symbols';

const authstore = useAuthStore();

const route = useRoute();
const localPath = useLocalePath();

const { getCurrentMenuItemTitle, filteredSidebarItems, filterSidebar } = useSidebar();

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
  <div class="relative flex h-screen w-screen flex-1">
    <LayoutSidebar v-model:filter="filterSidebar" :nav-items="filteredSidebarItems" />
    <div class="relative flex h-full w-full flex-col">
      <LayoutTopPart :title="getCurrentMenuItemTitle" />
      <div
        :class="
          cn('h-full w-full pl-[240px] dark:bg-[#1a1a1a]', [
            route.path !== localPath(AI_ROUTE) &&
            route.path !== localPath(SETTINGS_ROUTE) &&
            route.path !== localPath(NOTES_ROUTE) && 
            route.path !== localPath(FAVORITES_ROUTE)
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