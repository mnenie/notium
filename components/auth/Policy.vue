<script setup lang="ts">
import { redirect } from '~/helpers/helperBlankRedirect';
</script>

<template>
  <p class="px-8 pt-3 text-center text-sm text-[#72717a] dark:text-zinc-400">
    By clicking continue, you agree to our
    <span
      @click="redirect('https://github.com/mnenie/Notium')"
      class="cursor-pointer underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-400/80"
    >
      Terms of Service
    </span>
    and
    <span
      @click="redirect('https://github.com/mnenie/Notium')"
      class="cursor-pointer underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-400/80"
    >
      Privacy Policy 
    </span>.
  </p>
</template>
