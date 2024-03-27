<script setup lang="ts">
//@ts-ignore
import VueWriter from 'vue-writer';
const text = ref(['Read all your notes and everything you wrote in them']);
</script>

<template>
  <section
    id="read"
    class="mx-auto grid max-w-7xl gap-10 px-4 pb-44 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
  >
    <img class="rounded-[0.5rem] border shadow" src="/img/mac.png" />
    <div class="flex flex-col space-y-4">
      <h2 class="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        Read your notes
      </h2>
      <span class="max-w-[500px] pb-6 text-lg text-[#72717a] sm:text-lg">
        When you have saved notes, you can always read and remember everything you wrote in them!
      </span>
      <VueWriter class="max-w-[500px] text-lg font-medium sm:text-lg" :array="text" />
    </div>
  </section>
</template>
