<template>
  <div class="flex flex-col">
    <UiSkeleton class="mx-4 mb-3 mt-[3px] h-6 w-[110px]" />
    <UiSkeleton class="mb-[22px] mt-[6px] mx-4 h-5 w-[180px]" />
    <div class="w-full space-y-px px-3">
      <div
        v-for="(_, index) in 5"
        :key="index"
        class="flex h-8 items-center justify-start"
      >
        <UiSkeleton class="mr-2 h-5 w-5" :class="[index === 1 ? 'ml-6' : 'ml-1']" />
        <UiSkeleton class="h-4 w-20" />
      </div>
    </div>
  </div>
</template>
