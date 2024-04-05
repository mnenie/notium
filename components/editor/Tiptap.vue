<script setup lang="ts">
import { useEditor, EditorContent, FloatingMenu, BubbleMenu, type Content } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import HardBreak from '@tiptap/extension-hard-break'
import Focus from '@tiptap/extension-focus'

const props = defineProps<{
  modelValue: Content
}>();

const emits = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emits('update:modelValue', editor.getHTML())
  },
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: () => {
        return `Write something, or press 'space' for AI, '/' for commands…`
      },
    }),
    Focus.configure({
      className: 'focus-editor',
      mode: 'deepest',

    }),
    Color,
    Text,
    TextStyle,
    OrderedList,
    ListItem,
    HardBreak,
  ],
  editable: true,
  autofocus: useRoute().path === ABOUT_ROUTE ? 75 : 'start',
  editorProps: {
    attributes: {
      class: 'blog',
      spellcheck: 'false',
    }
  }
})

onMounted(() => {
  onMounted(() => {
    if (editor.value) {
      const emptyParagraph = document.querySelector('.editor-content p:empty');
      if (emptyParagraph instanceof HTMLElement) {
        emptyParagraph.focus();
      }
    }
  });
})
</script>
<template>
  <div class="overflow-auto">
    <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        bold
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        italic
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        strike
      </button>
    </bubble-menu>
    <editor-content :editor="editor" />
  </div>
</template>

<style>
.tiptap .is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: rgb(161 161 170);
  font-size: 1rem;
  pointer-events: none;
  height: 0;
}
</style>
