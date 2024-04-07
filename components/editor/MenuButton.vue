<script setup lang="ts">
const props = defineProps<{
  isActive: boolean;
}>();
</script>

<template>
  <button :class="['btn-bubble-menu', props.isActive ? ' text-blue-600' : 'text-zinc-700']">
    <slot />
  </button>
</template>

<style scoped>
.btn-bubble-menu {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  padding: 0 6px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.btn-bubble-menu:hover {
  background: rgba(228, 228, 231, 0.5);
}
</style>
