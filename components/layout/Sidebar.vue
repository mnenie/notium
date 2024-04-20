<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';

const props = defineProps<{
  menuItems: Menu[];
}>();

const emit = defineEmits<{
  (e: 'changeActiveMenu', id: number): void;
}>();

const authstore = useAuthStore();
const { isSkeleton } = storeToRefs(authstore);
</script>

<template>
  <nav v-if="!isSkeleton">
    <div>
      <h2 class="mb-3 px-4 text-xl font-semibold tracking-tight">Workspace</h2>
      <div class="space-y-1">
        <UiButton
          v-for="item in props.menuItems"
          :key="item.id"
          :variant="item.active ? 'secondary' : 'ghost'"
          @click="emit('changeActiveMenu', item.id)"
          class="h-8 w-full justify-start"
        >
          <component v-if="item.arrow" :is="item.arrow" class="mr-2 h-[16px] w-[16px] -rotate-90" color="rgb(82 82 91 / 0.9)" />
          <component :is="item.icon" class="mr-2 h-[16px] w-[16px]" :color="item.color" />
          <span class="text-[13px] text-zinc-600">{{ item.title }}</span>
        </UiButton>
      </div>
    </div>
  </nav>
  <LayoutSkeletonSidebar v-else />
</template>
