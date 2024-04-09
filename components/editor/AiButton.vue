<script setup lang="ts">
import { Sparkle } from 'lucide-vue-next';
</script>

<template>
  <button class="btn_ai gap-1 border-r border-r-zinc-200/70">
    <Sparkle color="rgb(202 138 4)" :size="14" />
    <span class="text-sm font-medium text-yellow-600">Ask AI</span>
  </button>
</template>

<style scoped>
.btn_ai {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  padding: 0 10px;
  height: 100%;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.btn_ai:hover {
  background: rgba(228, 228, 231, 0.5);
}
</style>
