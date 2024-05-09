<script setup lang="ts">
import { redirect } from '~/helpers';
import { TriangleAlert, GithubIcon } from 'lucide-vue-next';

const mode = useColorMode();
</script>
<template>
  <div class="flex h-dvh w-full flex-col items-center justify-center px-3 text-center">
    <TriangleAlert
      class="mb-1 h-[180px] w-[180px] -mt-16"
      :color="mode === 'light' ? 'rgb(39 39 42)' : 'rgb(212 212 216)'"
      :stroke-width="1"
    />
    <h2 class="text-2xl font-semibold tracking-tight dark:text-zinc-200">
      Notium is not available for your device type
    </h2>
    <p class="mb-4 text-sm text-[#72717a] dark:text-zinc-500">
      Please go to the official GitHub repository for more information or contact with us by telegram
    </p>
    <div class="flex items-center gap-4">
      <UiButton @click="redirect('https://github.com/mnenie/Notium')" variant="outline">
        <img v-if="mode === 'light'" src="/icons/github.png" class="mr-2 h-4 w-4" />
        <GithubIcon v-else class="mr-2 h-4 w-4" />
        GitHub
      </UiButton>
      <UiButton @click="redirect('https://t.me/youngjuicycashrussia')" variant="outline">
        <img src="/icons/telegram.webp" class="mr-2 h-4 w-4" />
        Telegram
      </UiButton>
    </div>
  </div>
</template>
