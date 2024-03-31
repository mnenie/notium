import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';
import type { Auth } from 'firebase/auth';

export default function useAppwriteAuth() {
  const { $auth } = useNuxtApp();

  const provider = new GithubAuthProvider();
  const onGithubLogin = async () => {
    const creds = await signInWithPopup($auth as Auth, provider);
    return creds;
  };

  const onLoginEmail = async (userData: { email: string; password: string }) => {
    const creds = await signInWithEmailAndPassword($auth as Auth, userData.email, userData.password);
    return creds;
  };

  const onRegistrationEmail = async (userData: { email: string; password: string }) => {
    const creds = await createUserWithEmailAndPassword($auth as Auth, userData.email, userData.password);
    return creds;
  };

  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged($auth as Auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(null);
        }
      });
    });
  };

  const onLogout = async () => {
    await signOut($auth as Auth);
  };

  return {
    onGithubLogin,
    onLoginEmail,
    onRegistrationEmail,
    getCurrentUser,
    onLogout
  };
}
