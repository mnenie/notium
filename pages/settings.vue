<script setup lang="ts">
useSeoMeta({
  title: 'Notium - smart cloud app for your notes'
});
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div class="h-full px-4 pt-16">
    <SettingsContacts />
    <SettingsAppearence />
  </div>
</template>
