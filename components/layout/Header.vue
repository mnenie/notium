<script setup lang="ts">
import { scrollToSection } from '~/helpers/helperScroll';
import { useAuthStore } from '~/store/auth.store';

const links = reactive<Links[]>([
  { id: 0, name: 'About', section: 'about' },
  { id: 1, name: 'Examples', section: 'write' },
  { id: 2, name: 'Built-in AI', section: 'ai' }
]);

const authStore = useAuthStore()
const { token } = storeToRefs(authStore);

const mode = useColorMode();

const localPath = useLocalePath();
</script>
<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#e4e4e766]/40 bg-[#fff9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60 dark:bg-transparent dark:border-zinc-800">
    <div class="container flex h-14 max-w-screen-2xl items-center justify-between">
      <div @click="navigateTo(HOME_ROUTE)" class="flex items-center space-x-3 cursor-pointer">
        <img :src="mode === 'light' ? '/img/logo.svg' : '/img/logo_white.svg'" class="h-7 w-7 text-zinc-100" />
        <span class="text-[22px] font-bold dark:text-zinc-100">Notium</span>
      </div>
      <div class="flex items-center space-x-10">
        <span v-for="link in links" :key="link.id" @click="scrollToSection(link.section)"
          class="cursor-pointer text-sm font-medium text-zinc-950/60 transition-colors hover:text-zinc-950/90 dark:text-zinc-200/80 dark:hover:text-zinc-200">
          {{ link.name }}
        </span>
      </div>
      <div v-if="!token" class="flex items-center space-x-3">
        <UiButton @click="navigateTo(localPath(LOGIN_ROUTE))" variant="ghost">Log in</UiButton>
        <UiButton @click="navigateTo(localPath(REGISTRATION_ROUTE))">Get started</UiButton>
      </div>
      <UiButton v-else @click="navigateTo(localPath(ABOUT_ROUTE))">Go to Notium</UiButton>
    </div>
  </header>
</template>
