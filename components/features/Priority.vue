<script setup lang="ts">
import { PlusCircleIcon, CheckIcon } from 'lucide-vue-next';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  CommandGroup,
  CommandItem,
  CommandList,
  Command,
  CommandInput,
  CommandEmpty
} from '@/components/ui/command';

import { cn } from '@/lib/utils';
const props = defineProps<{
  selectedValues: string[];
  priorities: Priority[];
}>();

const emit = defineEmits<{
  (e: 'tooglePriority', value: string): void;
}>();
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <UiButton variant="outline" size="sm" class="mr-1 flex h-8 items-center border-dashed">
        <PlusCircleIcon class="mr-2 h-4 w-4" color="rgb(82 82 91)" />
        <span class="text-[12px]">Priority</span>
        <template v-if="selectedValues.length > 0">
          <Separator orientation="vertical" class="mx-2 h-4" />
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
                class="rounded-sm px-1 font-normal"
              >
                {{ option }}
              </Badge>
            </template>
          </div>
        </template>
      </UiButton>
    </PopoverTrigger>
    <PopoverContent class="w-[188px] p-0" align="end">
      <Command
        :filter-function="
          (list: Priority[], term) => list.filter((i) => i.label.toLowerCase().includes(term.toLowerCase()))
        "
      >
        <CommandInput :placeholder="'Priority'" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="option in priorities"
              :key="option.value"
              :value="option"
              class="cursor-pointer gap-1"
              @select="emit('tooglePriority', option.value)"
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
                  <span class="text-sm">{{ option.value }}</span>
                </div>
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
