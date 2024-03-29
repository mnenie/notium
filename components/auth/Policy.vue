<script setup lang="ts">
import { redirect } from '~/helpers/helperBlankRedirect';
</script>

<template>
  <p class="px-8 pt-3 text-center text-sm text-[#72717a]">
    By clicking continue, you agree to our
    <span
      @click="redirect('https://github.com/mnenie/Notium')"
      class="cursor-pointer underline underline-offset-4 hover:text-zinc-900"
    >
      Terms of Service
    </span>
    and
    <span
      @click="redirect('https://github.com/mnenie/Notium')"
      class="cursor-pointer underline underline-offset-4 hover:text-zinc-900"
    >
      Privacy Policy 
    </span>.
  </p>
</template>
