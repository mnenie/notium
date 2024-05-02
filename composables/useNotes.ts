import type { AxiosResponse } from 'axios';

export default function useNotes() {
  const { $api } = useNuxtApp();

  const getExistingNotes = async (): Promise<AxiosResponse<Note[]>> => {
    const response = await $api.get('/notes');
    return response;
  };

  const getExistingNoteById = async (id: string): Promise<AxiosResponse<Note>> => {
    const response = await $api.get('/notes/' + id, {
      headers: { Authorization: `Bearer ${useCookie('token').value}` }
    });
    return response;
  };

  const postNoteToNotes = async (noteData: {
    note_data: NoteData;
    priority: number;
  }): Promise<AxiosResponse<Note, number>> => {
    const response = await $api.post('/notes', noteData, {
      headers: { Authorization: `Bearer ${useCookie('token').value}` }
    });
    return response;
  };

  return {
    getExistingNotes,
    getExistingNoteById,
    postNoteToNotes
  };
}
