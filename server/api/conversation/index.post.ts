import { getIamToken } from '~/server/utils/auth-gpt';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { text, dists, most_similar_index, most_similar_note_title, most_similar_note_text, most_similar_note_id } = await readBody(event);

  const token = await getIamToken(config);

  const similarityThreshold = 0.65;
  if (dists[most_similar_index] < similarityThreshold) {
    const response_completion = await fetch(
      'https://llm.api.cloud.yandex.net/foundationModels/v1/completion',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'x-folder-id': config.YANDEX_FOLDER_ID
        },
        body: JSON.stringify({
          modelUri: `gpt://${config.YANDEX_FOLDER_ID}/yandexgpt`,
          completionOptions: {
            temperature: 0.2,
            maxTokens: 8000
          },
          messages: [
            {
              role: 'system',
              text: `Ты умное приложение для заметок для помощи людям найти подходящую заметку из существующих. Выводи всегда типо: У вас есть такая заметка с названием: ${most_similar_note_title} и так же отвечай на поставленный вопрос, основываясь на содержании заметки - ${most_similar_note_text} кратко. Есть ли у вас еще вопросы?, ну и представь пользователю возможно как бы ты исправил содержимое заметки на 1-2 предложения. в конце пиши: Чтобы ознакомиться подробнее, перейдите к этой заметке. Добавь в конце ссылку на заметку: Ссылка на заметку - https://notium.vercel.app/home/notes/${most_similar_note_id}.`
            },
            {
              role: 'user',
              text
            }
          ]
        })
      }
    );

    const response_completionData = await response_completion.json();
    return response_completionData.result.alternatives[0].message;
  } else {
    return { role: 'assistant', text: 'Подходящей заметки не найдено, запишите свои идеи в Notium!' };
  }
});
