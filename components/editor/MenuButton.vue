<script setup lang="ts">
const props = defineProps<{
  isActive: boolean;
}>();
</script>

<template>
  <button :class="['btn-bubble-menu', props.isActive ? ' text-blue-600 dark:text-zinc-100' : 'text-zinc-700 dark:text-zinc-500']">
    <slot />
  </button>
</template>

<style scoped>
.btn-bubble-menu {
  user-select: none;
  cursor: pointer;
  display: flex;
  padding: 0 6px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.btn-bubble-menu:hover {
  background: rgba(228, 228, 231, 0.5);
  @apply dark:bg-neutral-700/80
}
</style>
