<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { Toaster } from '~/components/ui/sonner';

const cacheList = ref(['ai', 'login', 'registration']);
const { width } = useWindowSize();
</script>

<template>
  <Head>
    <Title>Notium - smart cloud app for your notes</Title>
    <Meta charset="utf-8" />
    <Meta name="title" content="Notium - smart cloud app for your notes" />
    <Meta name="og:title" content="Notium - smart cloud app for your notes" />
    <Meta
      name="description"
      content="Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI"
    />
    <Meta
      name="og:description"
      content="Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI"
    />
  </Head>
  <NuxtLayout v-if="width >= 1120">
    <NuxtPage :keepalive="{ include: cacheList, max: 20 }" />
    <Toaster />
  </NuxtLayout>
  <ClientOnly v-else>
    <DeviceNotAvailable />
  </ClientOnly>
</template>
