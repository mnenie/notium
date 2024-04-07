import { Bot, ChevronDown, Star, BookText, Settings, File } from 'lucide-vue-next';

export default function useLayout() {
  const menuItems = ref<Menu[]>([
    {
      id: 0,
      title: 'About.file.txt',
      icon: File,
      color: 'rgb(82 82 91 / 0.9)',
      active: true,
      route: ABOUT_ROUTE
    },
    {
      id: 1,
      title: 'Notes',
      icon: BookText,
      arrow: ChevronDown,
      color: 'rgb(82 82 91 / 0.9)',
      active: false,
      route: NOTES_ROUTE
    },
    {
      id: 2,
      title: 'Favorites',
      icon: Star,
      color: 'rgb(82 82 91 / 0.9)',
      arrow: ChevronDown,
      active: false,
      route: FAVORITES_ROUTE
    },
    { id: 3, title: 'AI asistant', icon: Bot, color: 'rgb(82 82 91 / 0.9)', active: false, route: AI_ROUTE },
    {
      id: 4,
      title: 'Settings',
      icon: Settings,
      color: 'rgb(82 82 91 / 0.9)',
      active: false,
      route: SETTINGS_ROUTE
    }
  ]);

  const title = ref('About.file.txt');

  const changeActiveMenu = (id: number) => {
    menuItems.value.map((btn, i) => {
      btn.active = i === id;
      if (btn.active) {
        navigateTo(btn.route);
        title.value = btn.title;
      }
    });
    sessionStorage.setItem('activeMenuId', String(id));
  };

  const initializeActiveMenuItem = () => {
    const activeMenuItemId = sessionStorage.getItem('activeMenuId');
    if (activeMenuItemId) {
      changeActiveMenu(parseInt(activeMenuItemId));
    }
  };

  onMounted(() => {
    initializeActiveMenuItem();
  });

  return {
    menuItems,
    title,
    changeActiveMenu
  };
}
