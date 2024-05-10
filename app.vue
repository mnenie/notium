<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { Toaster } from '~/components/ui/sonner';

const cacheList = ref(['ai', 'login', 'registration']);
const { width } = useWindowSize()

useSeoMeta({
  title: 'Notium - smart cloud app for your notes',
  ogTitle: 'Notium - smart cloud app for your notes',
  description: 'Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI',
  ogDescription: 'Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI',
  ogImage: './favicon.ico',
})
</script>

<template>
  <NuxtLayout v-if="width >= 1120">
    <NuxtPage :keepalive="{ include: cacheList, max: 20 }" />
    <Toaster />
  </NuxtLayout>
  <ClientOnly v-else>
    <DeviceNotAvailable />
  </ClientOnly>
</template>
