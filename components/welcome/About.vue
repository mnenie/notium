<script setup lang="ts">
import { GithubIcon } from 'lucide-vue-next';
import { redirect } from '~/helpers/helperBlankRedirect';
import { useAuthStore } from '~/store/auth.store';

const authStore = useAuthStore();
const { token } = storeToRefs(authStore);

const localPath = useLocalePath();
const mode = useColorMode();
</script>

<template>
  <section
    id="about"
    class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-52"
  >
    <h1
      class="mb-1 text-center text-3xl font-bold leading-tight tracking-tighter dark:text-zinc-100 md:text-6xl lg:leading-[1.1]"
    >
      Realize your future in notes
    </h1>
    <p class="max-w-[600px] text-center text-lg text-[#72717a] dark:text-zinc-400 sm:text-xl">
      Сloud app that allows users to create and store notes based on their priorities, also uses the built-in
      AI, assistant NotiumAI
    </p>
    <div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
      <UiButton v-if="!token" @click="navigateTo(localPath(REGISTRATION_ROUTE))">Get Started</UiButton>
      <UiButton v-else @click="navigateTo(localPath(ABOUT_ROUTE))">Go to Notium</UiButton>
      <UiButton @click="redirect('https://github.com/mnenie/Notium')" variant="outline">
        <img v-if="mode === 'light'" src="/icons/github.png" class="mr-2 h-4 w-4" />
        <GithubIcon v-else class="mr-2 h-4 w-4" />
        GitHub
      </UiButton>
    </div>
    <img
      class="rounded-[0.5rem] border shadow dark:border-zinc-600"
      :src="mode == 'light' ? '/img/about/main-light.png' : '/img/about/main-dark.png'"
    />
  </section>
</template>
