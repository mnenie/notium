import type { AxiosResponse } from 'axios';

export default function useNotes() {
  const { $api } = useNuxtApp();

  const postNoteToNotes = async (noteData: {
    note_data: NoteData;
    priority: number;
  }): Promise<AxiosResponse<Note>> => {
    const response = await $api.post('/notes', noteData, {
      headers: { Authorization: `Bearer ${useCookie('token').value}` }
    });
    return response;
  };

  const updateCurrentNoteById = async (
    id: string,
    noteData: { note_data: NoteData; priority: number }
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

  return {
    getExistingNotes,
    getExistingNoteById,
    updateCurrentNoteById,
    postNoteToNotes,
    deleteCurrentNoteById
  };
}
