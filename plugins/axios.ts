import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = axios.create({
    baseURL: config.API_BASE_URL as string,
  });

  return {
    provide: {
        api: api,
    }
  }
});
