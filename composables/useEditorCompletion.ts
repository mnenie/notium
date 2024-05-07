import type { Content } from "@tiptap/vue-3";
import { marked } from 'marked';

export default function useEditorCompletion(text: Ref<string>, content: Ref<Content>) {
  const useEditorData = async () => {
    try {
      const data = await $fetch('/api/editor', {
        method: 'POST',
        body: {
          text: text.value
        }
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const onAutoCompletion = async () => {
    if (window) {
      text.value = window.getSelection()!.toString();
    }
    const response = await useEditorData();
    const index = content.value!.indexOf(text.value);
    if (index !== -1) {
      const newText = 
        content.value!.slice(0, index + text.value.length) +
        ` ${marked.parse(response)}` + 
        content.value!.slice(index + text.value.length);
      content.value = newText;
    }
  };

  return {
    useEditorData, onAutoCompletion
  };
}
