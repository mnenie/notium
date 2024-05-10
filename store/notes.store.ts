import { toast } from 'vue-sonner';
import helperHtmlToText from '~/helpers/helperHtmlToText';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([]);
  const note = ref<Note>({} as Note);
  const favs = ref<Note[]>([]);
  const skeletonNote = ref<boolean>(false);
  const filterModel = ref<string>('');
  const isFilteredNotes = ref<boolean>(true);
  const defaultNote = ref<NoteData>({
    content: '<h1>Untitled</h1><p></p>',
    type: 'doc'
  });

  const {
    getExistingNotes,
    getExistingNoteById,
    postNoteToNotes,
    updateCurrentNoteById,
    deleteCurrentNoteById,
    toggleFavoriteNoteById,
    getFavoriteNotes
  } = useNotes();
  const { filteredNotes, togglePriorityFilter } = useFilterNotes(notes, favs, filterModel, isFilteredNotes);

  const { htmlH1ToText } = helperHtmlToText();
  const localPath = useLocalePath();
  const { t } = useI18n();

  const addNewNote = async () => {
    try {
      const response = await postNoteToNotes({ note_data: defaultNote.value, priority: ['none'] });
      notes.value.push(response.data);
      navigateTo(localPath(NOTES_ROUTE + '/' + response.data._id));
      const childrens = menuItems.value.find((item) => item.id === '1');
      if (childrens && childrens.children) {
        childrens.children!.push({
          id: response.data._id,
          route: localPath(NOTES_ROUTE + '/' + response.data._id),
          title: 'Untitled'
        });
      }
      menuItems.value.forEach((item) => {
        if (item.id == '1') {
          item.isArrowActive = true;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateNoteById = async (data: { note_data: NoteData; priority: string[] }) => {
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
      toast.info(t('toasts.update'));
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
          route: localPath(NOTES_ROUTE + '/' + _id)
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
    }, 1000);
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
      toast.warning(t('toasts.delete'));
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
      if (favs.value.length > 0) {
        const indexToRemove = favs.value.findIndex((favNote) => favNote._id === note.value._id);
        if (indexToRemove !== -1) {
          favs.value.splice(indexToRemove, 1);
        }
      }
      note.value = {} as Note;
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFavoiteNote = async (fav: boolean) => {
    try {
      const response = await toggleFavoriteNoteById(note.value._id, fav);
      note.value.favorite = response.data.favorite;
      if (note.value.favorite === true) {
        favs.value.push(note.value);
      } else {
        const indexToRemove = favs.value.findIndex((favNote) => favNote._id === note.value._id);
        if (indexToRemove !== -1) {
          favs.value.splice(indexToRemove, 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getFavsNotes = async () => {
    try {
      skeletonNote.value = true;
      const response = await getFavoriteNotes();
      favs.value = response.data;
    } catch (err) {
      console.log(err);
    } finally {
      skeletonNote.value = false;
    }
  };

  return {
    notes,
    note,
    favs,
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
    isFilteredNotes,
    filteredNotes,
    togglePriorityFilter,
    toggleFavoiteNote,
    getFavsNotes
  };
});
