export default function useSidebar() {
  const route = useRoute();
  const localPath = useLocalePath();
  const filterSidebar = ref<string>('');

  const getCurrentMenuItemTitle = computed(() => {
    let currentItemTitle = '';
    menuItems.value.forEach((item) => {
      if (localPath(item.route) === route.path) {
        currentItemTitle = item.title;
      } else if (item.children) {
        const childItem = item.children.find((child) => child.route === route.path);
        if (childItem) {
          currentItemTitle = childItem.title;
        }
      }
    });
    return currentItemTitle;
  });

  const filteredSidebarItems = computed(() => {
    if (filterSidebar.value === '') {
      return [...menuItems.value];
    }
    return [...menuItems.value].map((item) => {
      if (item.id === '1' && item.children && item.children.length > 0) {
        const filteredChildren = item.children.filter((child) =>
          child.title.toLowerCase().includes(filterSidebar.value.toLowerCase())
        );
        return { ...item, children: filteredChildren, isArrowActive: true };
      } else {
        return item;
      }
    });
  });

  const updateMenuItemTitle = (menuItems: Menu[], itemId: string, noteId: string, newTitle: string) => {
    const menuItem = menuItems.find((item) => item.id === itemId);
    if (menuItem && menuItem.children) {
      const index = menuItem.children.findIndex((c) => c.id === noteId);
      if (index !== -1) {
        menuItem.children[index].title = newTitle;
      }
    }
  };

  const getMenuChildrens = (childrens: Children[] | undefined, id: string, newChild: Children) => {
    if (childrens) {
      const index = childrens.findIndex((c) => c.id === newChild.id);
      if (index === -1) {
        childrens.push(newChild);
      } else {
        childrens[index].title = newChild.title;
      }
    }
  };

  return {
    getCurrentMenuItemTitle,
    filteredSidebarItems,
    filterSidebar,
    updateMenuItemTitle,
    getMenuChildrens
  };
}
