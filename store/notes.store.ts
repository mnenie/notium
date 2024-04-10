export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    {
      id: '1',
      title: 'Футбол',
      content: 'Мне надо пойти на матч в понедельник',
      favorite: false,
      prioritet: 'none'
    },
    {
      id: '2',
      title: 'Рецепт',
      content: 'Рецепт пирога: 2 яйца и одно пшано',
      favorite: false,
      prioritet: 'none'
    },
  ]);

  return {
    notes
  };
});
