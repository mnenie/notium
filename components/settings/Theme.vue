<template>
  <UiFormField v-slot="{ componentField }" type="radio" name="theme">
    <UiFormItem class="space-y-1">
      <UiFormLabel>Theme</UiFormLabel>
      <UiFormDescription> Select the theme for Notium.</UiFormDescription>
      <UiFormMessage />

      <UiRadioGroup class="grid max-w-2xl grid-cols-3 gap-8 pt-2" v-bind="componentField">
        <UiFormItem>
          <UiFormLabel class="[&:has([data-state=checked])>div]:border-zinc-900">
            <UiFormControl>
              <UiRadioGroupItem value="light" class="sr-only" />
            </UiFormControl>
            <div class="items-center rounded-md border-2 border-zinc-200 p-1 hover:border-zinc-300">
              <div class="space-y-2 rounded-sm bg-[#ecedef] p-2">
                <div class="space-y-2 rounded-md bg-white p-2 shadow-sm">
                  <div class="h-2 w-20 rounded-lg bg-[#ecedef]" />
                  <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
                <div class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div class="h-4 w-4 rounded-full bg-[#ecedef]" />
                  <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
                <div class="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div class="h-4 w-4 rounded-full bg-[#ecedef]" />
                  <div class="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
              </div>
            </div>
            <span class="block w-full p-2 text-center font-normal"> Light </span>
          </UiFormLabel>
        </UiFormItem>
        <UiFormItem>
          <UiFormLabel class="[&:has([data-state=checked])>div]:border-zinc-900">
            <UiFormControl>
              <UiRadioGroupItem value="dark" class="sr-only" />
            </UiFormControl>
            <div class="items-center rounded-md border-2 border-zinc-200 p-1 hover:border-zinc-300">
              <div class="space-y-2 rounded-sm bg-slate-950 p-2">
                <div class="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div class="h-2 w-20 rounded-lg bg-slate-400" />
                  <div class="h-2 w-[100px] rounded-lg bg-slate-400" />
                </div>
                <div class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div class="h-4 w-4 rounded-full bg-slate-400" />
                  <div class="h-2 w-[100px] rounded-lg bg-slate-400" />
                </div>
                <div class="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                  <div class="h-4 w-4 rounded-full bg-slate-400" />
                  <div class="h-2 w-[100px] rounded-lg bg-slate-400" />
                </div>
              </div>
            </div>
            <span class="block w-full p-2 text-center font-normal"> Dark </span>
          </UiFormLabel>
        </UiFormItem>
        <UiFormItem>
          <UiFormLabel class="[&:has([data-state=checked])>div]:border-zinc-900">
            <UiFormControl>
              <UiRadioGroupItem value="system" class="sr-only" />
            </UiFormControl>
            <div class="items-center rounded-md border-2 border-zinc-200 p-1 hover:border-zinc-300">
              <div class="space-y-2 rounded-sm bg-slate-500 p-2">
                <div class="space-y-2 rounded-md bg-slate-400 p-2 shadow-sm">
                  <div class="h-2 w-20 rounded-lg bg-slate-200" />
                  <div class="h-2 w-[100px] rounded-lg bg-slate-200" />
                </div>
                <div class="flex items-center space-x-2 rounded-md bg-slate-500 p-2 shadow-sm">
                  <div class="h-4 w-4 rounded-full bg-slate-200" />
                  <div class="h-2 w-[100px] rounded-lg bg-slate-200" />
                </div>
                <div class="flex items-center space-x-2 rounded-md bg-slate-500 p-2 shadow-sm">
                  <div class="h-4 w-4 rounded-full bg-slate-200" />
                  <div class="h-2 w-[100px] rounded-lg bg-slate-200" />
                </div>
              </div>
            </div>
            <span class="block w-full p-2 text-center font-normal"> System </span>
          </UiFormLabel>
        </UiFormItem>
      </UiRadioGroup>
    </UiFormItem>
  </UiFormField>
</template>
