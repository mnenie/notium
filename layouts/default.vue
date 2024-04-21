<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';

const { menuItems } = useLayout();

const authstore = useAuthStore();

const route = useRoute()

const getCurrentMenuItemTitle = computed(() => {
  const currentItem = menuItems.value.find(item => item.route === route.path);
  return currentItem ? currentItem.title : '';
});

onMounted(() => {
  authstore.setSkeleton();
});

onUnmounted(() => {
  authstore.setSkeletonOnUnmount();
});
</script>

<template>
  <div class="relative flex h-screen flex-1">
    <LayoutSidebar :nav-items="menuItems" />
    <div class="flex w-full flex-col">
      <LayoutTopPart :title="getCurrentMenuItemTitle" />
      <slot />
    </div>
  </div>
</template>
