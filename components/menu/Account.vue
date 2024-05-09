<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';
import { useOnline } from '@vueuse/core';
import { useNotesStore } from '~/store/notes.store';

const authStore = useAuthStore();
const { user, token, isSkeleton } = storeToRefs(authStore);
const notesStore = useNotesStore()
const online = useOnline();

const localePath = useLocalePath();
const { store } = useColorMode();

const onLogout = () => {
  authStore.logout();
  notesStore.deleteNotes()
}

onMounted(async () => {
  if (user) {
    await authStore.getCurrentUser();
  }
});
</script>

<template>
  <UiDropdownMenu v-if="!isSkeleton && token">
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="ghost" class="flex w-full items-center justify-between py-1 h-9">
        <div class="mr-4 flex items-center justify-start">
          <UiAvatar class="mr-2 h-6 w-6">
            <UiAvatarImage v-if="user && user.photoUrl" :src="user.photoUrl" :alt="user.email" />
            <UiAvatarFallback v-if="user && user.email">{{ user.email.slice(0, 2) }}</UiAvatarFallback>
          </UiAvatar>
          <span v-if="user" class="w-[134px] overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-start dark:text-zinc-200 md:text-[12px] 2xl:text-[13px]">{{
            user.email
          }}</span>
        </div>
        <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" :color="store === 'light' ? 'rgb(82 82 91 / 0.9)' : 'rgb(113 113 122)'" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent class="z-[999999] w-[220px]">
      <UiDropdownMenuLabel
        v-if="token && user"
        class="flex w-full items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {{ user.email }}
        <div v-if="online" class="h-2 w-2 rounded-full bg-green-600"></div>
        <div v-else class="h-2 w-2 rounded-full bg-amber-500"></div>
      </UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuGroup>
        <UiDropdownMenuItem @click="navigateTo(localePath(HOME_ROUTE))">
          <span>{{ $t('account.welcome') }}</span>
          <UiDropdownMenuShortcut>⌘B</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem @click="onLogout">
          <span>{{ $t('account.logout') }}</span>
          <UiDropdownMenuShortcut>⇧⌘Q</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
  <div v-else class="flex items-center h-9 px-[14px] py-[3px]">
    <UiSkeleton class="h-6 w-6 rounded-full mr-2" />
    <UiSkeleton class="h-4 w-[176px]" />
  </div>
</template>
