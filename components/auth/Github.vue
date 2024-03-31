<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';

const authStore = useAuthStore()

const { isLoading } = storeToRefs(authStore)
const { oAuth2Github } = authStore
</script>

<template>
  <UiButton @click="oAuth2Github" variant="outline" :disabled="isLoading">
    <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
    <img src="/icons/github.png" class="mr-2 h-4 w-4" />
    Github
  </UiButton>
</template>
