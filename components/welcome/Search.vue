<script setup lang="ts">
//@ts-ignore
import VueWriter from 'vue-writer';
const text = ref(['Go to your appropriate note, which AI will help you find']);

const mode = useColorMode();
</script>

<template>
  <section
    id="priorities"
    class="mx-auto grid max-w-7xl gap-10 px-4 pb-48 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
  >
    <div class="flex flex-col space-y-4">
      <h2
        class="text-xl font-bold leading-tight tracking-tighter dark:text-zinc-100 md:text-4xl lg:leading-[1.1]"
      >
        Enjoy our AI
      </h2>
      <span class="max-w-[500px] pb-6 text-lg text-[#72717a] dark:text-zinc-300 sm:text-lg">
        Ask, be interested and find notes from your cloud that our AI found based on the "knowledge base"
      </span>
      <VueWriter class="max-w-[500px] text-lg font-medium dark:text-zinc-400 sm:text-lg" :array="text" />
    </div>
    <img
      class="rounded-[0.5rem] border shadow dark:border-zinc-600"
      :src="mode === 'light' ? '/img/about/chat-light.png' : '/img/about/chat-dark.png'"
    />
  </section>
</template>
