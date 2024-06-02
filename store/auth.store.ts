import { toast } from 'vue-sonner';
import { ABOUT_ROUTE } from '~/utils/consts';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<null | UserType>(null);
  const isLoading = ref<boolean>(false);
  const token = useCookie('token');
  const isSkeleton = ref<boolean>(true);
  const error = ref('');
  const localPath = useLocalePath();

  const { onLogin, onRegistration, getUser, onGithubLogin, oAuthLogin } = useUserAuth();

  const login = async (userInfo: { email: string; password: string }) => {
    isLoading.value = true;
    try {
      const response = await onLogin(userInfo);
      user.value = {
        email: response.data.email,
        _id: response.data._id
      };
      token.value = response.data.token;
      if (token.value) {
        navigateTo(localPath(ABOUT_ROUTE));
      }
    } catch (err: any) {
      error.value = ErrorAuth.LOGIN_ERROR;
      toast.error(error.value);
    } finally {
      isLoading.value = false;
    }
  };

  const registration = async (userInfo: { email: string; password: string }) => {
    isLoading.value = true;
    try {
      const response = await onRegistration(userInfo);
      user.value = {
        email: response.data.email,
        _id: response.data._id!
      };
      token.value = response!.data.token;
      if (token.value) {
        navigateTo(localPath(ABOUT_ROUTE));
      }
    } catch (err: any) {
      error.value = ErrorAuth.REGISTRATION_ERROR;
      toast.error(error.value);
    } finally {
      isLoading.value = false;
    }
  };

  const oAuth2Github = async () => {
    isLoading.value = true;
    try {
      const response = await onGithubLogin();
      const creds = await oAuthLogin({
        id: response?.user.uid!,
        email: response?.user.email!,
        photoUrl: response?.user.photoURL!
      })
      user.value = creds.data;
      token.value = creds.data.token;
      if (token.value) {
        navigateTo(ABOUT_ROUTE);
      }
    } catch (err: any) {
      throw new Error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => {
    user.value = null;
    token.value = '';
    const uid = useCookie('uid');
    uid.value = null;
    await navigateTo(localPath(HOME_ROUTE));
  };

  const getCurrentUser = async () => {
    try {
      const response = await getUser();
      user.value = {
        _id: response.data._id,
        email: response.data.email!,
        photoUrl: response.data.photoUrl
      };
    } catch (err) {
      console.log(err);
    }
  };

  const setSkeleton = () => {
    setTimeout(() => {
      isSkeleton.value = false;
    }, 2000);
  };

  const setSkeletonOnUnmount = () => {
    isSkeleton.value = true;
  };

  return {
    user,
    error,
    token,
    isLoading,
    isSkeleton,
    login,
    registration,
    oAuth2Github,
    logout,
    setSkeleton,
    setSkeletonOnUnmount,
    getCurrentUser
  };
});
