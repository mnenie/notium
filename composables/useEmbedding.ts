export default function useEmbedding(notes: Ref<Note[]>, text: Ref<string>) {
  const isPending = ref<boolean>(false)

  const usePostEmbedding = async () => {
    try {
      isPending.value = true;
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
    } finally{
      isPending.value = false;
    }
  };

  return {
    usePostEmbedding, isPending
  };
}
