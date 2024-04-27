<script setup lang="ts">
import { File } from 'lucide-vue-next';
import { cn } from '~/lib/utils';

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
const localPath = useLocalePath();

const isActiveRoute = (targetRoute: string): boolean => {
  return route.path === targetRoute;
};
</script>

<template>
  <div v-for="item in props.menuItems" :key="item.id">
    <NuxtLink :to="item.children ? localPath(item.route) : localPath(item.route)" :exact="true">
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
        <span class="text-[14px] text-zinc-600 xl:text-[13px] 2xl:text-[14px]">{{ $t(item.title) }}</span>
      </UiButton>
    </NuxtLink>
    <div v-if="item.children">
      <div v-for="child in item.children" :key="child.id" v-show="item.isArrowActive">
        <NuxtLink :to="localPath(child.route)" :exact="true">
          <UiButton
            :variant="isActiveRoute(child.route) ? 'secondary' : 'ghost'"
            class="h-8 w-full justify-start pl-[50px]"
          >
            <component :is="File" class="mr-2 h-[16px] w-[16px]" color="rgb(82 82 91 / 0.9)" />
            <span class="text-[14px] text-zinc-600 xl:text-[13px] 2xl:text-[14px]">{{ child.title }}</span>
          </UiButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
