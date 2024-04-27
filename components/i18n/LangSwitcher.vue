<script setup lang="ts">
import { cn } from '~/lib/utils';
import { buttonVariants } from '../ui/button';

const { locale, locales, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  }
});
</script>

<template>
  <UiSelect
    :class="cn(buttonVariants({ variant: 'outline' }), 'appearance-none bg-transparent font-normal')"
    v-model="language"
  >
    <UiSelectTrigger class="w-[200px]">
      <UiSelectValue :placeholder="language" />
    </UiSelectTrigger>
    <UiSelectContent>
      <UiSelectGroup>
        <UiSelectItem
          v-for="item in locales"
          :key="typeof item === 'object' ? item.code : item"
          :value="typeof item === 'object' ? item.code : item"
        >
          {{ typeof item === 'object' ? item.name : item }}
        </UiSelectItem>
      </UiSelectGroup>
    </UiSelectContent>
  </UiSelect>
</template>
