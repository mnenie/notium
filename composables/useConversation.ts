import helperHtmlToText from '~/helpers/helperHtmlToText';
import useEmbedding from "./useEmbedding";

export default function useConversation(notes: Ref<Note[]>, text: Ref<string>) {
  const { usePostEmbedding } = useEmbedding(notes, text);
  const {htmlH1ToText } = helperHtmlToText()
  const usePostConversations = async () => {
    const embeddings = await usePostEmbedding();
    try {
      const data = await $fetch('/api/conversation', {
        method: 'POST',
        body: {
          text: text.value,
          dists: embeddings?.dists,
          most_similar_index: embeddings?.index,
          //@ts-ignore
          most_similar_note_title: htmlH1ToText(embeddings?.note.note_data.content),
          //@ts-ignore
          most_similar_note_text: embeddings?.note.note_data.content,
        }
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    usePostConversations
  };
}
