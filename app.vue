<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner';
const cacheList = ref(['ai', 'login', 'registration'])
</script>

<template>
  <NuxtLayout>
    <NuxtPage :keepalive="{include: cacheList, max:20}" />
    <Toaster />
  </NuxtLayout>
</template>
