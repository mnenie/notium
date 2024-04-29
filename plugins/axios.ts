import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = axios.create();
  api.defaults.baseURL = config.public.API_BASE_URL as string;
  api.defaults.withCredentials = true;

  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${useCookie('token').value}`
    return config;
  });

  return {
    provide: {
        api: api,
    }
  }
});
