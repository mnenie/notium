<script setup lang="ts">
import { Bold, Italic, Underline, Strikethrough, Code } from 'lucide-vue-next';
import { Editor } from '@tiptap/vue-3';
import MenuButton from './MenuButton.vue';

const props = defineProps<{
  editor: Editor | undefined;
}>();
</script>

<template>
  <div class="flex h-full items-center border-r border-r-zinc-200/70 dark:border-r-neutral-700/80">
    <MenuButton
      :is-active="props.editor!.isActive('bold')"
      @click="props.editor!.chain().focus().toggleBold().run()"
    >
      <Bold :size="14" />
    </MenuButton>
    <MenuButton
      :is-active="props.editor!.isActive('italic')"
      @click="props.editor!.chain().focus().toggleItalic().run()"
    >
      <Italic :size="14" />
    </MenuButton>
    <div class="h-full">
      <MenuButton
        :is-active="props.editor!.isActive('underline')"
        @click="props.editor!.chain().focus().toggleUnderline().run()"
      >
        <Underline :size="16" class="mt-px" />
      </MenuButton>
    </div>
    <MenuButton
      :is-active="props.editor!.isActive('strike')"
      @click="props.editor!.chain().focus().toggleStrike().run()"
    >
      <Strikethrough :size="14" />
    </MenuButton>
    <MenuButton
      :is-active="props.editor!.isActive('code')"
      @click="props.editor!.chain().focus().toggleCode().run()"
    >
      <Code :size="14" />
    </MenuButton>
  </div>
</template>
