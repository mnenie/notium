<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';

const { title, changeActiveMenu, menuItems } = useLayout();

const authstore = useAuthStore();

onMounted(() => {
  authstore.setSkeleton();
});

onUnmounted(() => {
  authstore.setSkeletonOnUnmount();
})
</script>

<template>
  <div class="relative flex h-screen flex-1">
    <div class="flex w-[280px] flex-col justify-between bg-zinc-50/80 p-1.5 select-none"
      style="box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset">
      <LayoutSidebar :menu-items="menuItems" @change-active-menu="changeActiveMenu" />
      <HomeAccount />
    </div>
    <div class="flex w-full flex-col">
      <HomeTopPart :title="title" />
      <slot />
    </div>
  </div>
</template>
