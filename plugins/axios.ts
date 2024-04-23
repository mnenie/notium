import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = axios.create();
  api.defaults.baseURL = config.API_BASE_URL

  return {
    provide: {
        api: api,
    }
  }
});
