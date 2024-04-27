<script setup lang="ts">
const props = defineProps<{
  cards: ContactCard[];
}>();
</script>

<template>
  <UiCard v-for="card in props.cards" :key="card.id" class="w-full">
    <UiCardHeader class="flex flex-row items-start gap-2 space-y-0 p-4">
      <img class="h-8 w-8" :src="card.icon" />
      <div class="space-y-px">
        <UiCardTitle class="text-base">{{ $t(`settings_page.contacts.card.${card.title}`) }}</UiCardTitle>
        <UiCardDescription class="text-sm text-zinc-600">
          <UiBadge variant="secondary">
            <span class="text-xs text-zinc-500">{{ card.who }}</span>
          </UiBadge>
        </UiCardDescription>
      </div>
    </UiCardHeader>
    <UiCardContent class="pl-4 pr-4 pb-1">
      <div class="flex items-center space-x-4 text-xs text-zinc-500">
        {{ card.description }}
      </div>
    </UiCardContent>
    <UiCardFooter class="pl-4 pr-4 pt-3 pb-4">
      <a target="_blank" :href="card.url" class="text-xs text-blue-500 hover:text-blue-600">{{ $t(`settings_page.contacts.redirect`) }}</a>
    </UiCardFooter>
  </UiCard>
</template>
