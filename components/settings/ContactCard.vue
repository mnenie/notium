<script setup lang="ts">
const props = defineProps<{
  cards: ContactCard[];
}>();

const { locale } = useI18n();
</script>

<template>
  <UiCard v-for="card in props.cards" :key="card.id" class="w-full dark:bg-[#202020]">
    <UiCardHeader class="flex flex-row items-start gap-2 space-y-0 p-4">
      <img class="h-8 w-8" :src="card.icon" />
      <div class="space-y-px">
        <UiCardTitle class="text-base">{{ $t(`settings_page.contacts.card.${card.title}`) }}</UiCardTitle>
        <UiCardDescription class="text-sm text-zinc-600">
          <UiBadge variant="secondary">
            <span class="text-xs text-zinc-500 dark:text-zinc-300">{{ card.who }}</span>
          </UiBadge>
        </UiCardDescription>
      </div>
    </UiCardHeader>
    <UiCardContent class="pb-1 pl-4 pr-4">
      <div class="flex items-center space-x-4 text-xs text-zinc-500">
        {{ locale == 'en-US' || locale == 'zh-CN' ? card.description : card.descriptionRu }}
      </div>
    </UiCardContent>
    <UiCardFooter class="pb-4 pl-4 pr-4 pt-3">
      <a target="_blank" :href="card.url" class="text-xs text-blue-500 hover:text-blue-600">{{
        $t(`settings_page.contacts.redirect`)
      }}</a>
    </UiCardFooter>
  </UiCard>
</template>
