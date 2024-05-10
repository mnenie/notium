export default function useEmbedding(notes: Ref<Note[]>, text: Ref<string>) {

  const usePostEmbedding = async () => {
    try {
      const data = await $fetch('/api/embedding', {
        method: 'POST',
        body: {
          notes: notes.value,
          text: text.value
        }
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    usePostEmbedding
  };
}
