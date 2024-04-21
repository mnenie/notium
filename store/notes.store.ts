export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([]);

  const addNewNote = async () => {
    await navigateTo(NOTES_ROUTE + '/untitled')
    notes.value.push({id: "1", title: "Untitled", content: "", favorite: false, prioritet: ""})
  }

  return {
    notes,
    addNewNote
  };
});
