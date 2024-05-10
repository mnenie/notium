<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { Toaster } from '~/components/ui/sonner';

const cacheList = ref(['ai', 'login', 'registration']);
const { width } = useWindowSize();
</script>

<template>
  <NuxtLayout v-if="width > 1120">
    <NuxtPage :keepalive="{ include: cacheList, max: 20 }" />
    <Toaster />
  </NuxtLayout>
  <DeviceNotAvailable v-else />
</template>
