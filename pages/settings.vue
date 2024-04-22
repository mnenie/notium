<script setup lang="ts">
useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div class="h-full px-4 pt-16">
    <SettingsContacts />
    <SettingsAppearance />
  </div>
</template>
