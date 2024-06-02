import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: 'notium-e76ec.firebaseapp.com',
    projectId: 'notium-e76ec',
    storageBucket: 'notium-e76ec.appspot.com',
    messagingSenderId: '761477865497',
    appId: '1:761477865497:web:7431625ddbed6d22bd0a88',
    measurementId: 'G-TCTJH2YJZE'
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return {
    provide: {
      auth: auth
    }
  };
});
