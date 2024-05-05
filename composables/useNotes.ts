import type { AxiosResponse } from 'axios';

export default function useNotes() {
  const { $api } = useNuxtApp();

  const postNoteToNotes = async (noteData: {
    note_data: NoteData;
    priority: string[];
  }): Promise<AxiosResponse<Note>> => {
    const response = await $api.post('/notes', noteData, {
      headers: { Authorization: `Bearer ${useCookie('token').value}` }
    });
    return response;
  };

  const updateCurrentNoteById = async (
    id: string,
    noteData: { note_data: NoteData; priority: string[] }
  ): Promise<AxiosResponse<Note>> => {
    const response = await $api.patch('/notes/' + id, noteData, {
      headers: { Authorization: `Bearer ${useCookie('token').value}` }
    });
    return response;
  };

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

  const deleteCurrentNoteById = async (id: string): Promise<void> => {
    await $api.delete('/notes/' + id, {
      headers: { Authorization: `Bearer ${useCookie('token').value}` }
    });
  };

  const toggleFavoriteNoteById = async (id: string, favorite: boolean): Promise<AxiosResponse<Note>> => {
    const response = await $api.patch(
      '/notes/' + id,
      { favorite },
      {
        headers: { Authorization: `Bearer ${useCookie('token').value}` }
      }
    );
    return response;
  };

  const getFavoriteNotes = async (): Promise<AxiosResponse<Note[]>> => {
    const response = await $api.get('/fav_notes');
    return response;
  };

  return {
    getExistingNotes,
    getExistingNoteById,
    updateCurrentNoteById,
    postNoteToNotes,
    deleteCurrentNoteById,
    toggleFavoriteNoteById,
    getFavoriteNotes
  };
}
