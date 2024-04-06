<script setup lang="ts">
import { Bold, Italic, Underline, Strikethrough, Heading1, Heading2, Heading3, Heading4 } from 'lucide-vue-next';
import { Editor, BubbleMenu } from '@tiptap/vue-3';

const props = defineProps<{
  editor: Editor | undefined;
}>();
</script>

<template>
  <BubbleMenu :editor="props.editor" :tippy-options="{ duration: 100 }" v-if="props.editor">
    <button
      class="btn-bubble-menu"
      @click="props.editor.chain().focus().toggleHeading({level: 1}).run()"
      :class="{ 'is-active': props.editor.isActive('heading', {level: 1}) }"
    >
      <Heading1 :size="17" color="rgb(63 63 70)" />
    </button>
    <button
      class="btn-bubble-menu"
      @click="props.editor.chain().focus().toggleHeading({level: 2}).run()"
      :class="{ 'is-active': props.editor.isActive('heading', {level: 2}) }"
    >
      <Heading2 :size="17" color="rgb(63 63 70)" />
    </button>
    <button
      class="btn-bubble-menu"
      @click="props.editor.chain().focus().toggleHeading({level: 3}).run()"
      :class="{ 'is-active': props.editor.isActive('heading', {level: 3}) }"
    >
      <Heading3 :size="17" color="rgb(63 63 70)" />
    </button>
    <button
      class="btn-bubble-menu"
      @click="props.editor.chain().focus().toggleBold().run()"
      :class="{ 'is-active': props.editor.isActive('bold') }"
    >
      <Bold :size="14" color="rgb(63 63 70)" />
    </button>
    <button
      class="btn-bubble-menu"
      @click="props.editor.chain().focus().toggleItalic().run()"
      :class="{ 'is-active': props.editor.isActive('italic') }"
    >
      <Italic :size="14" color="rgb(63 63 70)" />
    </button>
    <button
      class="btn-bubble-menu"
      @click="props.editor.chain().focus().toggleStrike().run()"
      :class="{ 'is-active': props.editor.isActive('strike') }"
    >
      <Strikethrough :size="14" color="rgb(63 63 70)" />
    </button>
  </BubbleMenu>
</template>

<style scoped>
.btn-bubble-menu {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  padding: 0 8px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.btn-bubble-menu:hover {
  background: rgba(55, 53, 47, 0.08);
}
</style>
