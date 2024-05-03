<template>
  <ClientOnly>
    <div class="relative flex min-h-screen flex-col dark:bg-[#1a1a1a]">
      <LayoutHeader />
      <slot class="flex-1" />
      <LayoutFooter />
    </div>
  </ClientOnly>
</template>
