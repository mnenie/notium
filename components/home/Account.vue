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

const authStore = useAuthStore()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UiButton variant="ghost" class="flex h-9 w-[236px] items-center justify-between">
        <div class="mr-4 flex items-center">
          <Avatar class="mr-2 h-5 w-5">
            <AvatarImage src="https://www.shadcn-vue.com/avatars/02.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <span class="w-32 overflow-hidden text-ellipsis whitespace-nowrap">1alexpeshkov@gmail.com</span>
        </div>
        <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" />
      </UiButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-[236px]">
      <DropdownMenuLabel class="w-56 overflow-hidden text-ellipsis whitespace-nowrap">
        1alexpeshkov@gmail.com
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem @click="authStore.logout">
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
