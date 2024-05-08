import { cosineDistance, getRefreshToken } from '~/server/utils';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { text, notes } = await readBody(event);

  const token = await getRefreshToken(config)

  const doc_uri = `emb://${config.YANDEX_FOLDER_ID}/text-search-doc/latest`;
  const query_uri = `emb://${config.YANDEX_FOLDER_ID}/text-search-query/latest`;

  const doc_texts = (notes as Note[]).map((note) => note.note_data.content);

  const docs_embedding = [];
  for (const doc_text of doc_texts) {
    const response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/textEmbedding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'x-folder-id': config.YANDEX_FOLDER_ID
      },
      body: JSON.stringify({
        modelUri: doc_uri,
        text: doc_text
      })
    });

    const responseData = await response.json();
    const embedding = responseData.embedding;
    docs_embedding.push(embedding);
  }

  const query_response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/textEmbedding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'x-folder-id': config.YANDEX_FOLDER_ID
    },
    body: JSON.stringify({
      modelUri: query_uri,
      text: text
    })
  });

  const query_responseData = await query_response.json();
  const query_embedding = query_responseData.embedding;

  const dists = docs_embedding.map((doc_embedding) => cosineDistance(query_embedding, doc_embedding));

  const most_similar_index = dists.indexOf(Math.min(...dists));
  const most_similar_note = notes[most_similar_index] as Note;

  return {
    dists: dists,
    index: most_similar_index,
    note: most_similar_note,
  };
});
