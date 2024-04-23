<template>
  <div class="pt-10">
    {{slug}}
  </div>
</template>

<script setup lang="ts">
const {slug} = useRoute().params
</script>