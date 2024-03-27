<script setup lang="ts">
useSeoMeta({
  title: 'Notium - cloud app of your notes',
  description:
    'Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI'
});
</script>

<template>
  <div>
    <div class="relative z-10 mb-28">
      <WelcomeAbout v-motion-slide-visible-top />
      <WelcomeWrite v-motion-slide-visible-left />
      <WelcomeRead v-motion-slide-visible-right />
      <WelcomePriorities v-motion-slide-visible-left />
      <WelcomeAi v-motion-slide-visible-bottom />
    </div>
  </div>
</template>
