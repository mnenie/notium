<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';

definePageMeta({
  layout: 'auth'
});

useSeoMeta({
  title: 'Registration | Notium'
});
</script>

<template>
  <div class="container relative h-full">
    <div @click="navigateTo(HOME_ROUTE)" class="mt-20 ml-52 absolute rounded-md flex items-center gap-1 cursor-pointer">
      <ChevronLeft :size="20" />
      <span class="text-sm font-medium">Back</span>
    </div>
    <div class="mx-auto flex h-full w-full flex-col items-center justify-center">
      <div class="flex w-[460px] flex-col space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Get started</h1>
        <p class="pb-4 text-sm text-[#72717a]">Enter your info below to create your account</p>
        <AuthForm />
        <AuthLine />
        <AuthGithub />
        <AuthPolicy />
      </div>
    </div>
  </div>
</template>
