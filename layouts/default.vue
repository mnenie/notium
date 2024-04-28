<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { menuItems } from '~/mocks/menu';
const authstore = useAuthStore();

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
    <div class="relative flex h-full w-full flex-col">
      <LayoutTopPart :title="getCurrentMenuItemTitle" />
      <div class="dark:bg-[#1a1a1a] h-full w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
