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

  return {
    getCurrentMenuItemTitle,
    filteredSidebarItems,
    filterSidebar
  };
}
