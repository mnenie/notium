<script setup lang="ts">
import { File } from 'lucide-vue-next';
import { cn } from '~/lib/utils';
import { useNotesStore } from '~/store/notes.store';

const props = defineProps<{
  menuItems: Menu[];
}>();

const { store } = useColorMode();
const { favs } = storeToRefs(useNotesStore());
const favsLength = computed(() => favs.value.length);

const toggleActiveArrow = (id: string): void => {
  props.menuItems.forEach((item) => {
    if (item.id === id) {
      item.isArrowActive = !item.isArrowActive;
    }
  });
};

const route = useRoute();
const localPath = useLocalePath();

const isActiveRoute = (targetRoute: string): boolean => {
  return route.path === localPath(targetRoute);
};

onMounted(() => {
  props.menuItems.forEach((item) => {
    if (item.children && item.id === '1') {
      item.children.forEach((child) => {
        if (route.path === localPath(child.route)) {
          toggleActiveArrow(item.id);
        }
      });
    }
  });
});
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
            cn(
              'mr-2 h-[14px] w-[14px] -rotate-90 hover:rounded-sm hover:bg-zinc-200/80 dark:hover:bg-neutral-700/60',
              {
                'rotate-270': item.isArrowActive
              }
            )
          "
          :color="store === 'light' ? 'rgb(82 82 91 / 0.9)' : 'rgb(113 113 122)'"
        />
        <div class="relative flex items-center">
          <component
            :is="item.icon"
            class="mr-2 h-[16px] w-[16px]"
            :color="store === 'light' ? 'rgb(82 82 91 / 0.9)' : 'rgb(113 113 122)'"
          />
          <div
            v-if="item.folder"
            class="absolute right-1.5 top-0 flex h-2 w-2 items-center justify-center rounded-full bg-amber-500"
          >
            <span class="text-[6px] text-zinc-50">{{ favsLength }}</span>
          </div>
        </div>

        <span class="text-[14px] text-zinc-600 dark:text-zinc-300 md:text-[13px] 2xl:text-[14px]">{{
          $t(item.title)
        }}</span>
      </UiButton>
    </NuxtLink>
    <div v-if="item.children">
      <div v-for="child in item.children" :key="child.id" v-show="item.isArrowActive">
        <NuxtLink :to="localPath(child.route)" :exact="true">
          <UiButton
            :variant="isActiveRoute(child.route) ? 'secondary' : 'ghost'"
            class="h-8 w-full justify-between pl-[50px]"
          >
            <div class="flex items-center">
              <component
                :is="File"
                class="mr-2 h-[16px] w-[16px]"
                :color="store === 'light' ? 'rgb(82 82 91 / 0.9)' : 'rgb(113 113 122)'"
              />
              <span class="text-[14px] text-zinc-600 dark:text-zinc-300 xl:text-[13px] 2xl:text-[14px] w-[134px] overflow-hidden text-ellipsis whitespace-nowrap text-start">{{
                child.title
              }}</span>
            </div>
          </UiButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
