import { openai, getEmbedding, notesIndex } from '~/server/utils';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { ChatCompletionMessage } from 'openai/resources/index.mjs';

export default defineLazyEventHandler(async () => {
  return defineEventHandler(async (event) => {
    const { messages, userId, notes } = await readBody(event)

    const messagesAi: ChatCompletionMessage[] = messages

    const messagesSliced = messagesAi.slice(-6);

    const embedding = await getEmbedding(messagesSliced.map((message) => message.content).join("\n"));

    const vectorQueryReponse = await notesIndex.query({
        vector: embedding,
        topK: 1,
        filter: {userId}
    })

    const relevantNotes = () => {
      const matchedIds = vectorQueryReponse.matches.map((match) => match.id);
      return (notes as Note[]).filter(note => matchedIds.includes(note.id));
    }

    const systemMessage: ChatCompletionMessage = {
        role: 'assistant',
        content: 
        'You are an intelligent note-taking app. You anwer the users question based on their existing notes.' + 
        'The relevant notes for this query are: \n' +
        relevantNotes().map((note) => `Title: ${note.title}\n\nContent: \n${note.content}`).join("\n\n")
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [systemMessage, ...messagesSliced]
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  });
});
