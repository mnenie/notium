<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '~/helpers/index';
import helperHtmlToText from '~/helpers/helperHtmlToText';

const {htmlH1ToText, htmlContentToText} = helperHtmlToText()

const props = defineProps<{
  notes: Note[];
}>();
</script>

<template>
  <UiCard
    v-for="note in props.notes"
    :key="note._id"
    class="flex w-full max-w-[400px] cursor-pointer flex-col justify-between"
    @click="navigateTo(NOTES_ROUTE + '/' + note._id)"
  >
    <UiCardHeader class="flex flex-row items-start justify-between gap-4 space-y-0 p-4">
      <div class="space-y-1">
        <UiCardTitle class="text-base">{{ htmlH1ToText(note.note_data.content) }}</UiCardTitle>
        <UiCardDescription class="text-sm text-zinc-600">
          {{ htmlContentToText(note.note_data.content) }}
        </UiCardDescription>
      </div>
      <Star class="h-4 w-4" color="rgb(82 82 91)" />
    </UiCardHeader>
    <UiCardContent class="relative p-4 pt-1">
      <div class="flex items-center space-x-4 text-xs text-zinc-500 dark:text-zinc-300">
        <Badge variant="secondary" class="font-normal text-zinc-600">
          {{ note.priority }}
        </Badge>
        <div>{{ formatDate(note.updatedAt!) }}</div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
