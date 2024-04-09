<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'lucide-vue-next';
import { Editor } from '@tiptap/vue-3';

const props = defineProps<{
  editor: Editor | undefined;
}>();

const urlRef = ref('');

const onLink = () => {
  const previousUrl = props.editor!.getAttributes('link').href;
  const url = null;

  if (url === null) {
    return;
  }
  if (url === '') {
    props.editor!.chain().focus().extendMarkRange('link').unsetLink().run();
    return;
  }
  props.editor!.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
};
</script>

<template>
  <div class="h-full">
    <DropdownMenu>
      <DropdownMenuTrigger class="h-full" as-child>
        <EditorMenuButton :is-active="props.editor!.isActive('link')" @click="onLink" class="h-full">
          <Link :size="14" />
        </EditorMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="p-2 mt-4 shadow-xl">
        <UiInput class="h-7" v-model="urlRef" placeholder="Paste your link" ref="" />
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>