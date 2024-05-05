import { Bot, ChevronDown, Star, BookText, Settings, File } from 'lucide-vue-next';

export const menuItems = ref<Menu[]>([
    {
      id: "0",
      title: 'About.file.txt',
      icon: File,
      color: 'rgb(82 82 91 / 0.9)',
      route: ABOUT_ROUTE
    },
    {
      id: "1",
      title: 'Notes',
      icon: BookText,
      arrow: ChevronDown,
      color: 'rgb(82 82 91 / 0.9)',
      isArrowActive: false,
      route: NOTES_ROUTE,
      children: []
    },
    {
      id: "2",
      title: 'Favorites',
      icon: Star,
      folder: true,
      color: 'rgb(82 82 91 / 0.9)',
      route: FAVORITES_ROUTE,
    },
    { id: "3", title: 'AI asistant', icon: Bot, color: 'rgb(82 82 91 / 0.9)', route: AI_ROUTE },
    {
      id:"4" ,
      title: 'Settings',
      icon: Settings,
      color: 'rgb(82 82 91 / 0.9)',
      route: SETTINGS_ROUTE
    }
  ]);