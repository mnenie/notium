import {pinecone, getEmbedding} from '~/server/utils'

export default defineEventHandler(async (event) => {
  const { title, content, id, userId } = await readBody(event);

  const getEmbeddingForNote = async (title: string, content: string | undefined) => {
    return getEmbedding(title + '\n\n' + content);
  };

  const embedding = await getEmbeddingForNote(title, content);

  const vectors = async () => {
    await pinecone.Index('notium').upsert([
      {
        id: id, 
        values: embedding,
        metadata: userId
     }
    ]);
  };

  return vectors
});
