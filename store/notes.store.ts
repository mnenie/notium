export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    {
      id: '1',
      title: 'Football',
      content: 'I need go to the football on Monday',
      favorite: false,
      prioritet: 'none'
    },
  ]);

  return {
    notes
  };
});
