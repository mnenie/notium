import type { Content } from "@tiptap/vue-3";

interface EditorContent {
    selectedText: Ref<string>;
    content: Ref<Content>;
  }

export const EditorKey: InjectionKey<EditorContent> = Symbol('EditorKey');