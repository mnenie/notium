<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';

const props = defineProps<{
  navItems: Menu[];
}>();

const authstore = useAuthStore();
const { isSkeleton } = storeToRefs(authstore);
</script>

<template>
  <aside
    class="group/sidebar relative z-[99999] flex h-full w-[280px] select-none flex-col justify-between overflow-y-auto bg-zinc-50/80 p-1.5 pb-1 pt-[8px]"
    style="box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset"
  >
    <div v-if="!isSkeleton" class="flex flex-col">
      <h2 class="mb-3 px-4 text-xl font-semibold tracking-tight">Workspace</h2>
      <div class="space-y-1">
        <MenuItem :menu-items="props.navItems" />
      </div>
    </div>
    <LayoutSkeletonSidebar v-else />
    <MenuAccount />
  </aside>
</template>
