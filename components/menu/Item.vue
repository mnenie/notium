<script setup lang="ts">
import { cn } from '~/lib/utils';
import { useNotesStore } from '~/store/notes.store';
import { File } from 'lucide-vue-next';

const props = defineProps<{
  menuItems: Menu[];
}>();

const toggleActiveArrow = (id: number): void => {
  props.menuItems.forEach((item) => {
    if (item.id === id) {
      item.isArrowActive = !item.isArrowActive;
    }
  });
};

const route = useRoute();

const isActiveRoute = (targetRoute: string): boolean => {
  return route.path === targetRoute;
};
const noteStore = useNotesStore();
const { notes } = storeToRefs(noteStore);
</script>

<template>
  <div v-for="item in props.menuItems" :key="item.id">
    <NuxtLink :to="item.route" :exact="true">
      <UiButton :variant="isActiveRoute(item.route) ? 'secondary' : 'ghost'" class="h-8 w-full justify-start">
        <component
          v-if="item.arrow"
          :is="item.arrow"
          @click.prevent="toggleActiveArrow(item.id)"
          :class="
            cn('mr-2 h-[14px] w-[14px] -rotate-90 hover:rounded-sm hover:bg-zinc-200/80', {
              'rotate-270': item.isArrowActive
            })
          "
          color="rgb(82 82 91 / 0.9)"
        />
        <component :is="item.icon" class="mr-2 h-[16px] w-[16px]" :color="item.color" />
        <span class="text-[13px] text-zinc-600">{{ item.title }}</span>
      </UiButton>
    </NuxtLink>
    <div
      v-if="notes && notes.length !== 0 && item.title === 'Notes'"
      v-show="item.isArrowActive"
      class="mt-px flex flex-col space-y-px"
    >
      <UiButton
        v-for="note in notes"
        :key="note.id"
        variant="ghost"
        class="h-8 w-full justify-start pl-[58px]"
      >
        <component :is="File" class="mr-2 h-[16px] w-[16px]" color="rgb(82 82 91 / 0.9)" />
        <span class="text-[13px] text-zinc-600">{{ note.title }}</span>
      </UiButton>
    </div>
  </div>
</template>
