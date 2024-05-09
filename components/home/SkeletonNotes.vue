<template>
  <div class="h-full px-4 pt-16">
    <div class="notes grid grid-cols-5 gap-3">
      <UiSkeleton
        v-for="_ in 3"
        :key="_"
        class="flex h-[145px] w-full max-w-[400px] flex-col justify-between"
      />
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
