<template>
  <div class="flex flex-col py-1">
    <UiSkeleton class="mx-4 mb-3 mt-1 h-6 w-[110px]" />
    <div class="w-full space-y-1 px-3">
      <div
        v-for="(_, index) in 5"
        :key="index"
        class="flex h-7 items-center justify-start"
      >
        <UiSkeleton class="mr-2 h-5 w-5" :class="[index === 1 || index === 2 ? 'ml-6' : 'ml-1']" />
        <UiSkeleton class="h-3 w-20" />
      </div>
    </div>
  </div>
</template>
