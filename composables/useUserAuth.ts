import type { AxiosResponse } from 'axios';

export default function useFirebaseAuth() {
  const { $api } = useNuxtApp();

  async function onRegistration(registrationData: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<UserAuth>> {
    const resp = await $api.post('/auth/login', registrationData);
    return resp;
  }

  async function onLogin(loginData: { email: string; password: string }): Promise<AxiosResponse<UserAuth>> {
    const resp = await $api.post('/users/login', loginData);
    return resp;
  }

  async function getUser(): Promise<AxiosResponse<UserType>> {
    const resp = await $api.get('/auth/me');
    return resp;
  }
  return {
    onRegistration,
    onLogin,
    getUser,
  };
}
