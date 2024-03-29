<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';

const {onYandexLogin} = useAppwriteAuth()
</script>

<template>
  <UiButton @click="onYandexLogin" variant="outline">
    <!-- <Loader2 class="mr-2 h-4 w-4 animate-spin" /> -->
    <img src="/icons/yandex.png" class="mr-2 h-4 w-4" />
    Yandex
  </UiButton>
</template>
