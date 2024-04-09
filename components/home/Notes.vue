<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { useNotesStore } from '~/store/notes.store';

const { notes } = storeToRefs(useNotesStore());

const {user} = storeToRefs(useAuthStore())

const addNote = async () => {
  const {data, error} = await useFetch('/api/embedding', {
    method: 'POST',
    body: {
      title: 'Football',
      content: 'I need go to the football on Monday',
      id: '1',
      userId: user.value?.id
    }
  })
  console.log(data.value)
}
</script>
<template>
  <div class="px-4 pt-4">
    <div class="grid grid-cols-5 gap-3">
      <HomeNote :notes="notes" />
      <UiButton @click="addNote">Add Note</UiButton>
    </div>
  </div>
</template>

<style scoped></style>
