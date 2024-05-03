import { menuItems } from '~/mocks/menu';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([]);
  const note = ref<Note>({} as Note);
  const skeletonNote = ref<boolean>(true);
  const defaultNote = ref<NoteData>({
    content: '<h1>Untitledddd</h1><p></p>',
    type: 'doc'
  });

  const {
    getExistingNotes,
    getExistingNoteById,
    postNoteToNotes,
    updateCurrentNoteById,
    deleteCurrentNoteById
  } = useNotes();

  const addNewNote = async () => {
    try {
      const response = await postNoteToNotes({ note_data: defaultNote.value, priority: 0 });
      notes.value.push(response.data);
      const childrens = menuItems.value.find((item) => item.id === '1');
      if (childrens && childrens.children) {
        childrens.children!.push({
          id: response.data._id,
          route: NOTES_ROUTE + '/' + response.data._id,
          title: 'Untitled'
        });
      }
      navigateTo(NOTES_ROUTE + '/' + response.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  const updateNoteById = async (data: { note_data: NoteData; priority: number }) => {
    try {
      const response = await updateCurrentNoteById(note.value._id, data);
      note.value = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getNotes = async () => {
    try {
      const response = await getExistingNotes();
      notes.value = response.data;
      notes.value.forEach((note) => {
        const { _id } = note;

        const child: Children = {
          id: _id,
          title: 'Untitled',
          route: NOTES_ROUTE + '/' + _id
        };
        const childrens = menuItems.value.find((item) => item.id === '1');
        if (childrens && childrens.children) {
          const index = childrens.children.findIndex((c) => c.id === _id);
          if (index === -1) {
            childrens.children.push(child);
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getNoteById = async (id: string) => {
    try {
      const response = await getExistingNoteById(id);
      note.value = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const setSkeleton = () => {
    setTimeout(() => {
      skeletonNote.value = false;
    }, 500);
  };
  const unsetSkeleton = () => {
    skeletonNote.value = true;
  };

  const deleteNotes = () => {
    notes.value = [];
    note.value = {} as Note;
    const childrens = menuItems.value.find((item) => item.id === '1');
    if (childrens && childrens.children) {
      childrens.children = [] as Children[];
    }
  };

  const deleteNoteById = async () => {
    try {
      await deleteCurrentNoteById(note.value._id);
      await navigateTo(HOME_ROUTE);
      note.value = {} as Note;
      const childrens = menuItems.value.find((item) => item.id === '1');
      if (childrens && childrens.children) {
        const index = childrens.children.findIndex((c) => c.id === note.value._id);
        if (index !== -1) {
          childrens.children.splice(index, 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    notes,
    note,
    defaultNote,
    unsetSkeleton,
    skeletonNote,
    setSkeleton,
    getNoteById,
    updateNoteById,
    addNewNote,
    getNotes,
    deleteNotes,
    deleteNoteById
  };
});
