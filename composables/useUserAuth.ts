import type { AxiosResponse } from 'axios';

export default function useUserAuth() {
  const { $api } = useNuxtApp();

  const onRegistration = async(registrationData: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<UserAuth>> => {
    const resp = await $api.post('/auth/register', registrationData);
    return resp;
  }

  const onLogin = async(loginData: { email: string; password: string }): Promise<AxiosResponse<UserAuth>> => {
    const resp = await $api.post('/auth/login', loginData);
    return resp;
  }

  const getUser = async(): Promise<AxiosResponse<UserType>> => {
    const resp = await $api.get('/auth/me', {headers: {'Authorization': `Bearer ${useCookie('token').value}`}});
    return resp;
  }
  return {
    onRegistration,
    onLogin,
    getUser,
  };
}
