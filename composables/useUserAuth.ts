import type { AxiosResponse } from 'axios';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import type { Auth } from 'firebase/auth';

export default function useUserAuth() {
  const { $api, $auth } = useNuxtApp();

  const onRegistration = async (registrationData: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<UserAuth>> => {
    const resp = await $api.post('/auth/register', registrationData);
    return resp;
  };

  const onLogin = async (loginData: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<UserAuth>> => {
    const resp = await $api.post('/auth/login', loginData);
    return resp;
  };

  const oAuthLogin = async (githubData: {
    email: string;
    id: string;
    photoUrl: string;
  }): Promise<AxiosResponse<UserAuth>> => {
    const resp = await $api.post('/gitlogin', githubData);
    return resp;
  };

  const provider = new GithubAuthProvider();
  const onGithubLogin = async () => {
    const creds = await signInWithPopup($auth as Auth, provider);
    return creds;
  };

  const getUser = async (): Promise<AxiosResponse<UserType>> => {
    const resp = await $api.get('/auth/me', {
      headers: { Authorization: `Bearer ${useCookie('token').value}` }
    });
    return resp;
  };
  return {
    onRegistration,
    onLogin,
    onGithubLogin,
    oAuthLogin,
    getUser
  };
}
