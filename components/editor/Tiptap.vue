<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import type { Content } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Color } from '@tiptap/extension-color';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import HardBreak from '@tiptap/extension-hard-break';
import Focus from '@tiptap/extension-focus';
import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Code from '@tiptap/extension-code';
import BulletList from '@tiptap/extension-bullet-list';
import Typography from '@tiptap/extension-typography';

const props = defineProps<{
  modelValue: Content;
}>();

const emits = defineEmits(['update:modelValue']);

const { ColorHighlighter } = useFindColorsConverter();
const { SmilieReplacer } = useSmileConverter();

const localePath = useLocalePath();
const route = useRoute();

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emits('update:modelValue', editor.getHTML());
  },
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: () => {
        return `Write something, or press 'Ask AI' in menu, highlight for commands…`;
      }
    }),
    Focus.configure({
      className: 'focus-editor',
      mode: 'deepest'
    }),
    Color,
    Document,
    Paragraph,
    Text,
    Bold,
    Underline,
    TextStyle,
    OrderedList,
    ListItem,
    HardBreak,
    Code,
    BulletList,
    OrderedList,
    ListItem,
    Heading.configure({
      levels: [1, 2, 3, 4]
    }),
    Link.configure({
      openOnClick: true
    }),
    Typography,
    ColorHighlighter,
    SmilieReplacer
  ],
  editable: true,
  autofocus: route.path === localePath(ABOUT_ROUTE) ? 75 : 'end',
  editorProps: {
    attributes: {
      class: 'editor-notium',
      spellcheck: 'false'
    }
  }
});

watch(
  () => props.modelValue,
  (value) => {
    if (editor.value) {
      if (editor.value.getHTML() === value) return;
      editor.value.commands.setContent(props.modelValue, false);
    }
  }
);

onMounted(() => {
  if (editor.value) {
    const emptyParagraph = document.querySelector('.editor-content p:empty');
    if (emptyParagraph instanceof HTMLElement) {
      emptyParagraph.focus();
    }
  }
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>
<template>
  <div class="overflow-auto">
    <EditorBubbleMenu :editor="editor" />
    <EditorContent :editor="editor" />
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
