<script setup lang="ts">
import { Heading1, Heading2, Heading3 } from 'lucide-vue-next';
import { Editor } from '@tiptap/vue-3';
import MenuButton from './MenuButton.vue';

const props = defineProps<{
  editor: Editor | undefined;
}>();
</script>

<template>
  <div class="flex h-full items-center border-r border-r-zinc-200/70 dark:border-r-neutral-700/80">
    <MenuButton
      :is-active="props.editor!.isActive('heading', { level: 1 })"
      @click="props.editor!.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      <Heading1 :size="17" />
    </MenuButton>
    <MenuButton
      :is-active="props.editor!.isActive('heading', { level: 2 })"
      @click="props.editor!.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      <Heading2 :size="17" />
    </MenuButton>
    <MenuButton
      :is-active="props.editor!.isActive('heading', { level: 3 })"
      @click="props.editor!.chain().focus().toggleHeading({ level: 3 }).run()"
    >
      <Heading3 :size="17" />
    </MenuButton>
  </div>
</template>
