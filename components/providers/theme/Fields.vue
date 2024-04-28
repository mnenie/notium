<template>
  <UiFormField v-slot="{ componentField }" type="radio" name="theme">
    <UiFormItem class="space-y-1">
      <UiFormLabel class="dark:text-zinc-200">{{ $t('settings_page.appearence.theme.title') }}</UiFormLabel>
      <UiFormDescription>{{ $t('settings_page.appearence.theme.description') }}</UiFormDescription>
      <UiFormMessage />

      <UiRadioGroup class="grid max-w-2xl grid-cols-3 gap-8 pt-2" v-bind="componentField">
        <UiFormItem>
          <UiFormLabel class="[&:has([data-state=checked])>div]:border-zinc-900 dark:[&:has([data-state=checked])>div]:border-zinc-300">
            <UiFormControl>
              <UiRadioGroupItem value="light" class="sr-only" />
            </UiFormControl>
            <ProvidersThemeLightBlock />
            <span class="block w-full p-2 text-center font-normal dark:text-zinc-300">{{
              $t('settings_page.appearence.theme.light')
            }}</span>
          </UiFormLabel>
        </UiFormItem>
        <UiFormItem>
          <UiFormLabel class="[&:has([data-state=checked])>div]:border-zinc-900 dark:[&:has([data-state=checked])>div]:border-zinc-300">
            <UiFormControl>
              <UiRadioGroupItem value="dark" class="sr-only" />
            </UiFormControl>
            <ProvidersThemeDarkBlock />
            <span class="block w-full p-2 text-center font-normal dark:text-zinc-300">{{
              $t('settings_page.appearence.theme.dark')
            }}</span>
          </UiFormLabel>
        </UiFormItem>
        <UiFormItem>
          <UiFormLabel class="[&:has([data-state=checked])>div]:border-zinc-900 dark:[&:has([data-state=checked])>div]:border-zinc-300">
            <UiFormControl>
              <UiRadioGroupItem value="auto" class="sr-only" />
            </UiFormControl>
            <ProvidersThemeSystemBlock />
            <span class="block w-full p-2 text-center font-normal dark:text-zinc-300">{{
              $t('settings_page.appearence.theme.system')
            }}</span>
          </UiFormLabel>
        </UiFormItem>
      </UiRadioGroup>
    </UiFormItem>
  </UiFormField>
</template>
