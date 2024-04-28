<script setup lang="ts">
const { onSubmit } = useTheme();
</script>

<template>
  <div>
    <h3 class="mb-1 text-lg font-medium dark:text-zinc-200">{{ $t('settings_page.appearence.title') }}</h3>
    <p class="text-sm text-zinc-600 dark:text-zinc-400">
      {{ $t('settings_page.appearence.description') }}
    </p>
  </div>
  <UiSeparator class="my-6" />
  <form class="space-y-8" @submit="onSubmit">
    <SettingsLanguage />
    <ProvidersThemeFields />
    <div class="flex justify-start">
      <UiButton variant="outline" type="submit">{{ $t('settings_page.appearence.update') }}</UiButton>
    </div>
  </form>
</template>
