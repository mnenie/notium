<script setup lang="ts">
import { GithubIcon, Loader2 } from 'lucide-vue-next';
import { useAuthStore } from '~/store/auth.store';

const authStore = useAuthStore();

const { isLoading } = storeToRefs(authStore);

const { store } = useColorMode();
</script>

<template>
  <UiButton @click="authStore.oAuth2Github" variant="outline" :disabled="isLoading">
    <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
    <img v-if="store === 'light'" src="/icons/github.png" class="mr-2 h-4 w-4" />
    <GithubIcon v-else class="mr-2 h-4 w-4" />
    GitHub
  </UiButton>
</template>
