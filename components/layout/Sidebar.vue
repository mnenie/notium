<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';

const props = defineProps<{
  navItems: Menu[];
}>();

const filter = defineModel<string>('filter');

const authstore = useAuthStore();
const { isSkeleton } = storeToRefs(authstore);
const notesStore = useNotesStore();

onMounted(async () => {
  await notesStore.getNotes();
  await notesStore.getFavsNotes();
});
</script>

<template>
  <aside
    class="absolute z-[99999] flex h-full w-[240px] min-w-[240px] max-w-[240px] select-none flex-col justify-between overflow-y-auto bg-zinc-50/80 pb-1 pl-1.5 pr-1.5 pt-[8.5px] dark:bg-[#202020]"
    style="box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset"
  >
    <div v-if="!isSkeleton" class="flex flex-col">
      <h2 class="mb-3 px-4 text-xl font-semibold tracking-tight dark:text-zinc-100">
        {{ $t('sidebar_title') }}
      </h2>
      <MenuFilter v-model="filter" />
      <div class="space-y-px">
        <MenuItem :menu-items="props.navItems" />
      </div>
      <div class="space-y-1 mt-5">
        <MenuBot />
        <ProvidersVideoPlayer />
      </div>
    </div>
    <LayoutSkeletonSidebar v-else />
    <MenuAccount />
  </aside>
</template>
