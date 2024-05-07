<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '~/helpers/index';
import helperHtmlToText from '~/helpers/helperHtmlToText';

const { htmlH1ToText, htmlContentToText } = helperHtmlToText();

const props = defineProps<{
  notes: Note[];
}>();
const localPath = useLocalePath();

const redirectToNote = (id: string) => {
  navigateTo(localPath(NOTES_ROUTE + '/' + id));
  menuItems.value.forEach((item) => {
    if (item.id == '1') {
      item.isArrowActive = true;
    }
  });
};

const ellipsisText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength - 3) + '...' : text;
};
</script>

<template>
  <UiCard
    v-for="note in props.notes"
    :key="note._id"
    class="relative flex w-full max-w-[400px] cursor-pointer flex-col justify-between min-h-[145px]"
    @click="redirectToNote(note._id)"
  >
    <UiCardHeader class="flex flex-row items-start justify-between gap-4 space-y-0 p-4">
      <div class="space-y-1.5">
        <UiCardTitle class="text-base w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-start">{{ htmlH1ToText(note.note_data.content) }}</UiCardTitle>
        <UiCardDescription class="text-ellipsis text-sm text-zinc-600">
          {{ ellipsisText(htmlContentToText(note.note_data.content), 70) }}
        </UiCardDescription>
      </div>
    </UiCardHeader>
    <Star
      class="absolute right-[18px] top-[18px] h-4 w-4"
      :color="note.favorite ? 'rgb(251 191 36)' : 'rgb(82 82 91)'"
    />
    <UiCardContent class="relative p-4 pt-1">
      <div class="flex items-center space-x-3 text-xs text-zinc-500 dark:text-zinc-300">
        <Badge class="font-normal text-zinc-600">
          {{ note.priority!.map((i) => i).join(', ') }}
        </Badge>
        <div>{{ formatDate(note.updatedAt!) }}</div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
