<script setup lang="ts">
import { redirect } from '~/helpers/helperBlankRedirect';
</script>

<template>
  <footer class="border-t border-[#e4e4e766]/40 py-4 md:py-0 dark:bg-transparent">
    <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p class="text-balance text-center text-sm leading-loose text-zinc-950/60 md:text-left dark:text-zinc-200">
        <span class="font-medium">Notium</span> - cloud app of your notes. The source code is available on
        <a
          @click.prevent="redirect('https://github.com/mnenie/Notium')"
          class="cursor-pointer font-medium underline underline-offset-4"
        >
          Github 
        </a>
      </p>
    </div>
  </footer>
</template>
