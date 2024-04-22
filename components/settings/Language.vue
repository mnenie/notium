<script setup lang="ts">
import { cn } from '~/lib/utils';
import { buttonVariants } from '../ui/button';
import { ChevronDownIcon } from 'lucide-vue-next';
</script>

<template>
  <UiFormField v-slot="{ field }" name="language">
    <UiFormItem class="space-y-1">
      <UiFormLabel>Language</UiFormLabel>
      <UiFormMessage />
      <div class="relative w-[200px]">
        <UiFormControl>
          <select
            :class="
              cn(
                buttonVariants({ variant: 'outline' }),
                'w-[200px] appearance-none bg-transparent font-normal'
              )
            "
            v-bind="field"
          >
            <option value="English">English</option>
            <option value="Русский">Русский</option>
          </select>
        </UiFormControl>
        <ChevronDownIcon class="pointer-events-none absolute right-3 top-2.5 h-4 w-4 opacity-50" />
      </div>
    </UiFormItem>
  </UiFormField>
</template>
