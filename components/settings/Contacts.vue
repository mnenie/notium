<script setup lang="ts">
import {cards} from '~/mocks/cards'
</script>

<template>
  <div class="mb-10">
    <div>
      <h3 class="mb-1 text-lg font-medium">Contacts</h3>
      <p class="text-sm text-zinc-600">
        Follow us on social media and GitHub to stay updated on all the latest developments and news about our Notium!
      </p>
    </div>
    <UiSeparator class="my-6" />
    <div class="grid grid-cols-4 gap-6">
      <SettingsContactCard :cards="cards" />
    </div>
  </div>
</template>
