import type { User } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as UserType);
  const isLoading = ref<boolean>(false);

  const { onLoginEmail, onRegistrationEmail, onGithubLogin, getCurrentUser, onLogout } = useAppwriteAuth();

  const login = async (userInfo: { email: string; password: string }) => {
    isLoading.value = true;
    try {
      const response = await onLoginEmail(userInfo);
      user.value = {
        email: userInfo.email,
        id: response?.user.uid!
      };
      console.log(user.value);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const registration = async (userInfo: { email: string; password: string }) => {
    isLoading.value = true;
    try {
      const response = await onRegistrationEmail(userInfo);
      user.value = {
        email: userInfo.email,
        id: response?.user.uid!
      };
      console.log(user.value);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      isLoading.value = false;
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
      console.log(response);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => {
    try {
      await onLogout();
      user.value = {} as UserType;
      const uid = useCookie('uid');
      uid.value = null;
      await navigateTo(LOGIN_ROUTE);
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentSessionUser = async () => {
    try {
      const response = (await getCurrentUser()) as User;
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
    getCurrentSessionUser
  };
});
