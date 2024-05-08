import type { Content } from '@tiptap/vue-3';
import { marked } from 'marked';

export default function useEditorCompletion(text: Ref<string>, content: Ref<Content>) {
  const isPending = ref(false);

  const useEditorData = async () => {
    try {
      isPending.value = true;
      const data = await $fetch('/api/editor', {
        method: 'POST',
        body: JSON.stringify({
          text: text.value
        })
      });
      return data;
    } catch (e) {
      console.log(e);
    } finally{
      isPending.value = false;
    }
  };

  const onAutoCompletion = async () => {
    if (window) {
      text.value = window.getSelection()?.toString() || '';
    }
    const response = await useEditorData();
    const index = content.value!.indexOf(text.value);
    if (index !== -1) {
      const newText =
        content.value!.slice(0, index + text.value.length) +
        ` ${marked(response)}` +
        content.value!.slice(index + text.value.length);
      content.value = newText;
    }
  };

  return {
    isPending,
    onAutoCompletion
  };
}
