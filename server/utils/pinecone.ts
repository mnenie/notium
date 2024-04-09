import { Pinecone } from '@pinecone-database/pinecone';

const config = useRuntimeConfig();
const apiKey = config.PINECONE_KEY;

export const pinecone = new Pinecone({apiKey: apiKey});
export const notesIndex = pinecone.Index('notium')

