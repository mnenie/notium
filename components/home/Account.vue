<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronsUpDown } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';
import { useOnline } from '@vueuse/core';

const authStore = useAuthStore();
const { user, token, isSkeleton } = storeToRefs(authStore);
const online = useOnline();

onMounted(async () => {
  if (user) {
    await authStore.getCurrentUser();
  }
});
</script>

<template>
  <DropdownMenu v-if="!isSkeleton && token">
    <DropdownMenuTrigger as-child>
      <UiButton variant="ghost" class="flex h-9 w-[236px] items-center justify-between">
        <div class="mr-4 flex items-center">
          <Avatar class="mr-2 h-5 w-5">
            <AvatarImage v-if="user && user.photoUrl" :src="user.photoUrl" :alt="user.email" />
            <AvatarFallback v-if="user && user.email">{{ user.email.slice(0, 2) }}</AvatarFallback>
          </Avatar>
          <span v-if="user" class="w-36 overflow-hidden text-ellipsis whitespace-nowrap">{{
            user.email
          }}</span>
        </div>
        <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" />
      </UiButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-[236px]">
      <DropdownMenuLabel
        v-if="token && user"
        class="flex w-full items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {{ user.email }}
        <div v-if="online" class="h-2 w-2 rounded-full bg-green-600"></div>
        <div v-else class="h-2 w-2 rounded-full bg-amber-500"></div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem @click="navigateTo(HOME_ROUTE)">
          <span>Go to Welcome</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem @click="authStore.logout">
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  <div v-else class="flex items-center h-9 px-[14px] py-[5px]">
    <UiSkeleton class="h-6 w-6 rounded-full mr-2" />
    <UiSkeleton class="h-4 w-[176px]" />
  </div>
</template>
