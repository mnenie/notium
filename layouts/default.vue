<script setup lang="ts">
const { title, changeActiveMenu, menuItems } = useLayout();
</script>

<template>
  <div class="relative flex h-screen flex-1">
    <div class="flex w-56 flex-col justify-between border-r border-zinc-50 bg-zinc-50/80 p-1.5">
      <LayoutSidebar :menu-items @change-active-menu="changeActiveMenu" />
      <HomeAccount />
    </div>
    <div class="flex w-full flex-col px-4">
      <HomeTopPart :title />
      <slot />
    </div>
  </div>
</template>
