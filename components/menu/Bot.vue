<script setup lang="ts">
import { redirect } from '~/helpers';
import { TabletSmartphone } from 'lucide-vue-next';

const config = useRuntimeConfig();
const { store } = useColorMode();
</script>

<template>
  <UiButton
    @click="redirect(config.public.BOT_URL)"
    variant="ghost"
    class="relative h-8 w-full justify-start"
  >
    <TabletSmartphone
      class="mr-2 h-[16px] w-[16px]"
      :color="store === 'light' ? 'rgb(82 82 91 / 0.9)' : 'rgb(113 113 122)'"
    />
    <span class="text-[14px] text-zinc-600 dark:text-zinc-300 xl:text-[13px] 2xl:text-[14px]">
      {{ $t('telegram') }}
    </span>
    <div
      class="absolute left-[26px] top-5 flex h-1.5 w-1.5 items-center justify-center rounded-full bg-[#3ca1eb]/90"
    ></div>
  </UiButton>
</template>
