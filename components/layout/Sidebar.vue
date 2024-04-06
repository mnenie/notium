<script setup lang="ts">
const props = defineProps<{
  menuItems: Menu[];
}>();

const emit = defineEmits<{
  (e: 'changeActiveMenu', id: number): void
}>()
</script>

<template>
  <nav class="">
    <div class="py-1">
      <h2 class="mb-2.5 px-4 text-[20px] font-semibold tracking-tight">Workspace</h2>
      <div class="space-y-1">
        <UiButton
          v-for="item in props.menuItems"
          :key="item.id"
          :variant="item.active ? 'secondary' : 'ghost'"
          @click="emit('changeActiveMenu', item.id)"
          class="h-7 w-full justify-start"
        >
          <component v-if="item.arrow" :is="item.arrow" class="mr-2 h-4 w-4 -rotate-90" :color="item.color" />
          <component :is="item.icon" class="mr-2 h-4 w-4" :color="item.color" />
          <span class="text-zinc-600 text-sm">{{ item.title }}</span>
        </UiButton>
      </div>
    </div>
  </nav>
</template>
