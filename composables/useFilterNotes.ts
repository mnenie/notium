import helperHtmlToText from '~/helpers/helperHtmlToText';

export default function useFilterNotes(notes: Ref<Note[]>, favs: Ref<Note[]>, filterModel: Ref<string>, isFilteredNotes: Ref<boolean>) {
  const values = {
    high: 'high',
    medium: 'medium',
    low: 'low',
    none: 'none',
    all: 'all'
  } as const;
  const isPriority = ref<keyof typeof values>('all');

  const { htmlH1ToText } = helperHtmlToText();

  const togglePriorityFilter = (priority: keyof typeof values) => {
    isPriority.value = priority;
  };

  const route = useRoute();
  const localPath = useLocalePath();

  const filteredNotes = computed(() => {
    const source = route.path === localPath(NOTES_ROUTE) ? [...notes.value] : [...favs.value];
    const filtered =
      filterModel.value === '' && isPriority.value === 'all'
        ? source
        : source.filter((note) => {
            const filterValue = filterModel.value.toLowerCase();
            const content = htmlH1ToText(note.note_data.content).toLowerCase();
            const contentMatch = content.includes(filterValue);
            if (isPriority.value === 'all') {
              return contentMatch;
            }
            const priority = note.priority && note.priority.includes(values[isPriority.value]);
            return contentMatch && priority;
          });
    isFilteredNotes.value = filtered.length === 0;
    return filtered;
  });
  
  return{
    filteredNotes,
    togglePriorityFilter,
  }
}
