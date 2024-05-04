<template>
  <NuxtLayout>
    <NuxtPage :keepalive="{ include: ['ai', 'login', 'registration'] }" />
    <UiToaster />
  </NuxtLayout>
</template>
