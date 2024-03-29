import { Account, Client } from 'appwrite';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const client = new Client();
  client.setEndpoint('https://cloud.appwrite.io/v1').setProject(config.public.APPWRITE_ID);
  const account = new Account(client);

  nuxtApp.vueApp.provide('account', account)
  nuxtApp.provide('account', account)
});
