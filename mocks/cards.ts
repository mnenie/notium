export const cards = reactive<ContactCard[]>([
  {
    id: 0,
    title: 'Alex Peshkov',
    description: "Follow my GitHub account under the name 'mnenie' to learn more information.",
    descriptionRu: "Подпишитесь на мой аккаунт GitHub под именем 'mnenie', чтобы получить больше информации.",
    who: 'Frontend-developer',
    icon: '/icons/github.png',
    url: 'https://github.com/mnenie'
  },
  {
    id: 1,
    title: 'Airat Bagautdinov',
    description: "Follow my GitHub account under the name 'airvt1x' to learn more information.",
    descriptionRu:
      "Подпишитесь на мой аккаунт GitHub под именем 'airvt1x', чтобы получить больше информации.",
    who: 'Backend-developer',
    icon: '/icons/github.png',
    url: 'https://github.com/airvt1x'
  },
  {
    id: 2,
    title: 'Alex Peshkov',
    description: 'Log into my Telegram account to communicate with me directly via messenger.',
    descriptionRu: 'Перейдите в мой аккаунт в Telegram, чтобы общаться со мной напрямую через мессенджер.',
    who: 'Frontend-developer',
    icon: '/icons/telegram.webp',
    url: 'https://t.me/youngjuicycashrussia'
  },
  {
    id: 3,
    title: 'Airat Bagautdinov',
    description: 'Log into my Telegram account to communicate with me directly via messenger.',
    descriptionRu: 'Перейдите в мой аккаунт в Telegram, чтобы общаться со мной напрямую через мессенджер.',
    who: 'Backend-developer',
    icon: '/icons/telegram.webp',
    url: 'https://t.me/airvt1x'
  }
]);
