<script setup lang="ts">
import { PlusCircleIcon, CheckIcon } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { priorities } from '~/mocks/priorities';

defineProps<{
  selectedValues: string[];
}>();

const emit = defineEmits<{
  (e: 'togglePriority', value: string): void;
}>();

const { store } = useColorMode();
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton variant="outline" size="sm" class="flex h-8 items-center border-dashed">
        <PlusCircleIcon class="mr-2 h-4 w-4" :color="store === 'light' ? 'rgb(82 82 91)' : 'rgb(113 113 122)'" />
        <span class="text-[12px]">{{ $t('top_menu.priority.title') }}</span>
        <template v-if="true">
          <UiSeparator orientation="vertical" class="mx-2 h-4" />
          <Badge variant="secondary" class="rounded-sm px-1 font-normal lg:hidden">
            {{ selectedValues.length }}
          </Badge>
          <div class="hidden space-x-1 lg:flex">
            <Badge v-if="selectedValues.length > 2" variant="secondary" class="rounded-sm px-1 font-normal">
              {{ selectedValues.length }} selected
            </Badge>

            <template v-else>
              <Badge
                v-for="(option, i) in selectedValues"
                :key="i"
                variant="secondary"
                class="rounded-sm px-1 font-normal dark:text-zinc-200"
              >
                {{ $t(`top_menu.priority.${option}`) }}
              </Badge>
            </template>
          </div>
        </template>
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-[188px] p-0" align="end">
      <UiCommand
        :filter-function="
          (list: Priority[], term) => list.filter((i) => i.label.toLowerCase().includes(term.toLowerCase()))
        "
      >
        <UiCommandInput :placeholder="$t(`top_menu.priority.filter`)" />
        <UiCommandList>
          <UiCommandEmpty>No results found.</UiCommandEmpty>
          <UiCommandGroup>
            <UiCommandItem
              v-for="option in priorities"
              :key="option.value"
              :value="option"
              class="cursor-pointer gap-1"
              @select="emit('togglePriority', option.value)"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div
                    :class="
                      cn(
                        'border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border',
                        selectedValues.includes(option.value) ? '' : 'opacity-50 [&_svg]:invisible'
                      )
                    "
                  >
                    <CheckIcon :class="cn('h-4 w-4')" />
                  </div>
                  <component
                    :is="option.icon"
                    v-if="option.icon"
                    class="mr-2 h-4 w-4"
                    color="rgb(82 82 91 / 0.9)"
                  />
                  <span class="text-sm">{{ $t(`top_menu.priority.${option.value}`) }}</span>
                </div>
              </div>
            </UiCommandItem>
          </UiCommandGroup>
        </UiCommandList>
      </UiCommand>
    </UiPopoverContent>
  </UiPopover>
</template>
