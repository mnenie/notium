import type { Account } from 'appwrite';

export default function useAppwriteAuth() {
  const { $account } = useNuxtApp();

  const onYandexLogin = async () => {
    ($account as Account).createOAuth2Session(
      //@ts-expect-error
      'yandex',
      'http://localhost:3000/user/login',
      'http://localhost:3000/user/registration'
    );
    const creds = await ($account as Account).get()
    return creds
  };

  return {
    onYandexLogin
  };
}
