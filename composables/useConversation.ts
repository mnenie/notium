export default function useConversation(notes: Note[], text: Ref<string>) {
  const { usePostEmbedding } = useEmbedding(notes, text);
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
          most_similar_note: embeddings?.note
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
