<script setup lang="ts">
//@ts-ignore
import VueWriter from 'vue-writer';
const text = ref(['Choose the priorities of your notes wisely']);

const { store } = useColorMode();
</script>

<template>
  <section
    id="priorities"
    class="mx-auto grid max-w-7xl gap-10 px-4 pb-52 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
  >
    <div class="flex flex-col space-y-4">
      <h2 class="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] dark:text-zinc-100">
        Set your priorities
      </h2>
      <span class="max-w-[500px] pb-6 text-lg text-[#72717a] sm:text-lg dark:text-zinc-300">
        Priorities are quite important for your notes in Notium, they allow you to quickly find a particular
        note!
      </span>
      <VueWriter class="max-w-[500px] text-lg font-medium sm:text-lg dark:text-zinc-400" :array="text" />
    </div>
    <img class="rounded-[0.5rem] border shadow dark:border-zinc-600" :src="store === 'light' ? '/img/mac.png' : '/img/dark-mac.png'" />
  </section>
</template>
