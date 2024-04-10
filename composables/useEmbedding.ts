export default function useEmbedding(notes: Note[], text: Ref<string>) {
  const usePostEmbedding = async () => {
    try {
      const { data } = await useFetch('/api/embedding', {
        method: 'POST',
        body: {
          notes: notes,
          text: text.value
        }
      });
      return data.value;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    usePostEmbedding
  };
}
