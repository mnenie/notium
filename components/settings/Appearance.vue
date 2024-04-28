<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

const appearanceFormSchema = toTypedSchema(
  z.object({
    theme: z.enum(['light', 'dark', 'system'], {
      required_error: 'Please select a theme.'
    }),
    language: z.enum(['English', 'Русский'], {
      invalid_type_error: 'Select a language',
      required_error: 'Please select a language.'
    })
  })
);

const { handleSubmit } = useForm({
  validationSchema: appearanceFormSchema,
  initialValues: {
    theme: 'light',
    language: 'English'
  }
});

const onSubmit = handleSubmit((values) => {});
</script>

<template>
  <div>
    <h3 class="mb-1 text-lg font-medium">{{ $t('settings_page.appearence.title') }}</h3>
    <p class="text-sm text-zinc-600">
      {{ $t('settings_page.appearence.description') }}
    </p>
  </div>
  <UiSeparator class="my-6" />
  <form class="space-y-8" @submit="onSubmit">
    <SettingsLanguage />
    <SettingsTheme />
    <div class="flex justify-start">
      <UiButton variant="outline" type="submit">{{ $t('settings_page.appearence.update') }}</UiButton>
    </div>
  </form>
</template>
