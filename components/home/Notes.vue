<script setup lang="ts">
const props = defineProps<{
  notes: Note[];
}>()
</script>
<template>
  <div class="h-full px-4 pt-16">
    <div class="notes grid grid-cols-5 gap-3">
      <HomeNote :notes="props.notes" />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1670px) {
  .notes {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media screen and (max-width: 1340px) {
  .notes {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
