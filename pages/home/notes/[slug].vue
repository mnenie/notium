<template>
  <div>
    {{slug}}
  </div>
</template>

<script setup lang="ts">
const {slug} = useRoute().params
</script>