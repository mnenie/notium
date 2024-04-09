<script setup lang="ts">
import { Editor, BubbleMenu } from '@tiptap/vue-3';

const props = defineProps<{
  editor: Editor | undefined;
}>();

</script>

<template>
  <BubbleMenu v-if="props.editor" :editor="props.editor" :tippy-options="{ duration: 100 }">
    <EditorHeading :editor="props.editor" />
    <EditorTextStyles :editor="props.editor" />
    <EditorLink :editor="props.editor" />
    <EditorListing :editor="props.editor" />
  </BubbleMenu>
</template>
