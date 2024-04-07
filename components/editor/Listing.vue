<script setup lang="ts">
import { List, ListOrdered } from 'lucide-vue-next';

import { Editor } from '@tiptap/vue-3';

const props = defineProps<{
  editor: Editor | undefined;
}>();
</script>

<template>
  <div class="flex h-full items-center border-l border-l-zinc-200/70">
    <EditorMenuButton
      :is-active="props.editor!.isActive('bulletList')"
      @click="props.editor!.chain().focus().toggleBulletList().run()"
    >
      <List :size="16" />
    </EditorMenuButton>
    <EditorMenuButton
      :is-active="props.editor!.isActive('orderedList')"
      @click="props.editor!.chain().focus().toggleOrderedList().run()"
    >
      <ListOrdered :size="16" />
    </EditorMenuButton>
  </div>
</template>
