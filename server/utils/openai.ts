import OpenAI from 'openai';

const config = useRuntimeConfig();

const apiKey = config.OPENAI_KEY;

export const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const getEmbedding = async (text: string) => {
  const creds = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text
  });
  const response = creds.data[0].embedding;

  return response;
};
