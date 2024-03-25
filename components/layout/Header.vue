<script setup lang="ts">
const links = reactive([
  { id: 0, name: 'About' },
  { id: 1, name: 'Examples' },
  { id: 2, name: 'Built-in AI' }
]);
</script>
<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#e4e4e766]/40 bg-[#fff9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60"
  >
    <div class="container flex h-14 max-w-full items-center justify-between">
      <div class="flex items-center space-x-3">
        <img src="/img/logo.png" class="h-7 w-7" />
        <span class="text-[22px] font-bold">Notium</span>
      </div>
      <div class="flex items-center space-x-10">
        <span
          v-for="link in links"
          :key="link.id"
          class="cursor-pointer text-sm font-medium text-zinc-950/60 transition-colors hover:text-zinc-950/90"
        >
          {{ link.name }}
        </span>
      </div>
      <div class="flex items-center space-x-3">
        <UiButton variant="ghost">Log in</UiButton>
        <UiButton>Get started</UiButton>
      </div>
    </div>
  </header>
</template>
