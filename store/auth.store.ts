import type { User } from 'firebase/auth';
import { ABOUT_ROUTE } from '~/utils/consts';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<null | UserType>(null);
  const isLoading = ref<boolean>(false);
  const token = useCookie('token');

  const { onFirebaseLogin, onFirebaseRegistration, onGithubLogin, getCurrentFirebaseUser, onLogout } = useFirebaseAuth();

  const login = async (userInfo: { email: string; password: string }) => {
    isLoading.value = true;
    try {
      const response = await onFirebaseLogin(userInfo);
      user.value = {
        email: userInfo.email,
        id: response?.user.uid!
      };
      //@ts-ignore
      token.value = response?.user.accessToken;
      if (token.value) {
        navigateTo(ABOUT_ROUTE);
      }
    } catch (err: any) {
      throw new Error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const registration = async (userInfo: { email: string; password: string }) => {
    isLoading.value = true;
    try {
      const response = await onFirebaseRegistration(userInfo);
      user.value = {
        email: userInfo.email,
        id: response?.user.uid!
      };
      //@ts-ignore
      token.value = response?.user.accessToken;
      if (token.value) {
        navigateTo(ABOUT_ROUTE);
      }
    } catch (err: any) {
      throw new Error(err);
    } finally {
      isLoading.value = false;
      await navigateTo(ABOUT_ROUTE);
    }
  };

  const oAuth2Github = async () => {
    isLoading.value = true;
    try {
      const response = await onGithubLogin();
      user.value = {
        id: response?.user.uid!,
        email: response?.user.email!,
        photoUrl: response?.user.photoURL!
      };
      //@ts-ignore
      token.value = response?.user.accessToken;
      if (token.value) {
        navigateTo(ABOUT_ROUTE);
      }
    } catch (err: any) {
      throw new Error(err);
    } finally {
      isLoading.value = false;
      await navigateTo(ABOUT_ROUTE);
    }
  };

  const logout = async () => {
    try {
      await onLogout();
      user.value = null;
      token.value = '';
      const uid = useCookie('uid');
      uid.value = null;
      await navigateTo(HOME_ROUTE);
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentUser = async () => {
    try {
      const response = (await getCurrentFirebaseUser()) as User;
      user.value = {
        id: response.uid,
        email: response.email!,
        photoUrl: response.photoURL!
      };
    } catch (err) {
      console.log(err);
    }
  };

  return {
    user,
    isLoading,
    login,
    registration,
    oAuth2Github,
    logout,
    getCurrentUser
  };
});
