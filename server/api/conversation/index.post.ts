import OpenAI from "openai";

const config = useRuntimeConfig();
const openai = new OpenAI({
    apiKey: config.OPENAI_KEY
});

export default defineEventHandler(async (event) => {
    const { messages } = await readBody(event);
    if (!openai.apiKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'OpenAI API Key not configured.',
        })
    }
    if (!messages) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Messages are required',
        })

    }
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
    })
    return response.choices[0].message

})