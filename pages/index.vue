<script setup lang="ts">
useSeoMeta({
  title: 'Notium - smart cloud app for your notes',
  description:
    'Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI'
});

definePageMeta({
  layout: 'welcome'
});
</script>

<template>
  <div>
    <div class="welcome relative z-10 mb-28">
      <WelcomeAbout v-motion-slide-visible-top />
      <WelcomeWrite v-motion-slide-visible-left />
      <WelcomeRead v-motion-slide-visible-right />
      <WelcomeSearch v-motion-slide-visible-left />
      <WelcomeAi v-motion-slide-visible-bottom />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1370px) {
  .welcome {
    @apply overflow-x-hidden;
  }
}
</style>
