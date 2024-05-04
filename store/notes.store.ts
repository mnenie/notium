import helperHtmlToText from '~/helpers/helperHtmlToText';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([]);
  const note = ref<Note>({} as Note);
  const skeletonNote = ref<boolean>(false);
  const filterModel = ref<string>('');
  const defaultNote = ref<NoteData>({
    content: '<h1>Untitled</h1><p></p>',
    type: 'doc'
  });

  const {
    getExistingNotes,
    getExistingNoteById,
    postNoteToNotes,
    updateCurrentNoteById,
    deleteCurrentNoteById
  } = useNotes();

  const { htmlH1ToText } = helperHtmlToText();

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
      const childrens = menuItems.value.find((item) => item.id === '1');
      if (childrens && childrens.children) {
        const index = childrens.children.findIndex((c) => c.id === note.value._id);
        if (index !== -1) {
          childrens.children[index].title = htmlH1ToText(note.value.note_data.content);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getNotes = async () => {
    try {
      skeletonNote.value = true;
      const response = await getExistingNotes();
      notes.value = response.data;
      notes.value.forEach((note) => {
        const { _id, note_data } = note;

        const child: Children = {
          id: _id,
          title: htmlH1ToText(note_data.content),
          route: NOTES_ROUTE + '/' + _id
        };
        const childrens = menuItems.value.find((item) => item.id === '1');
        if (childrens && childrens.children) {
          const index = childrens.children.findIndex((c) => c.id === _id);
          if (index === -1) {
            childrens.children.push(child);
          } else {
            childrens.children[index].title = htmlH1ToText(note_data.content);
          }
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      skeletonNote.value = false;
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
      skeletonNote.value = true;
    }, 1500);
  };
  const unsetSkeleton = () => {
    skeletonNote.value = false;
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
      await navigateTo(NOTES_ROUTE);
      const childrens = menuItems.value.find((item) => item.id === '1');
      if (childrens && childrens.children) {
        const index = childrens.children.findIndex((c) => c.id === note.value._id);
        if (index !== -1) {
          childrens.children.splice(index, 1);
        }
      }
      const indexNote = notes.value.findIndex((i) => i._id === note.value._id);
      if (indexNote !== -1) {
        notes.value.splice(indexNote, 1);
      }
      note.value = {} as Note;
    } catch (err) {
      console.log(err);
    }
  };

  const filteredNotes = computed(() => {
    if (filterModel.value === '') {
      return [...notes.value];
    }
    const filtered = [...notes.value].filter((note) =>
      htmlH1ToText(note.note_data.content).toLowerCase().includes(filterModel.value.toLowerCase())
    );
    return filtered;
  });

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
    deleteNoteById,
    filterModel,
    filteredNotes
  };
});
