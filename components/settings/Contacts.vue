<script setup lang="ts">
import {cards} from '~/mocks/cards'
</script>

<template>
  <div class="mb-10">
    <div>
      <h3 class="mb-1 text-lg font-medium dark:text-zinc-200">{{ $t('settings_page.contacts.title') }}</h3>
      <p class="text-sm text-zinc-600 dark:text-zinc-400">
        {{ $t('settings_page.contacts.description') }}
      </p>
    </div>
    <UiSeparator class="my-6" />
    <div class="grid grid-cols-4 gap-6">
      <SettingsContactCard :cards="cards" />
    </div>
  </div>
</template>
