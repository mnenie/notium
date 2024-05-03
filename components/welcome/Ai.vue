<script setup lang="ts">
import { SearchCheck, ALargeSmall } from 'lucide-vue-next';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const cards = reactive<Card[]>([
  {
    id: 1,
    title: 'Search your thoughts',
    icon: SearchCheck,
    description: 'The built-in AI assistant will help you with finding your thoughts in notes cloud'
  },
  {
    id: 2,
    title: 'Сomplete your notes',
    icon: ALargeSmall,
    description: 'The built-in AI assistant will help you with finding auto-completion of the text'
  }
]);
</script>
<template>
  <section id="ai" class="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
    <h2
      class="mb-2 text-center text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] dark:text-zinc-100"
    >
      Notium Ai
    </h2>
    <span class="max-w-[500px] pb-12 text-center text-lg text-[#72717a] sm:text-lg dark:text-zinc-300">
      The built-in AI assistant will help you with finding your thoughts and auto-completion of the text
    </span>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-2">
      <Card v-for="card in cards" :key="card.id" class="w-full">
        <CardHeader>
          <component :is="card.icon" class="mb-2" />
          <CardTitle>{{ card.title }}</CardTitle>
          <CardDescription>
            {{ card.description }}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>
</template>
