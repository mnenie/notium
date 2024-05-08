<script setup lang="ts">
import { Sparkle, Loader2 } from 'lucide-vue-next';

const editor = inject(EditorKey);

const { onAutoCompletion, isPending } = useEditorCompletion(editor!.selectedText, editor!.content);
</script>

<template>
  <button
    @click="onAutoCompletion"
    class="btn_ai gap-1 border-r border-r-zinc-200/70 text-yellow-600 dark:border-r-neutral-700/80 dark:text-yellow-500 disabled:pointer-events-none disabled:opacity-70"
    :disabled="isPending"
  >
    <Sparkle :size="14" />
    <span class="text-sm font-medium">Ask AI</span>
    <Loader2 v-if="isPending" class="w-4 h-4 ml-2 animate-spin" />
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
  @apply dark:bg-neutral-700/80;
}
</style>
