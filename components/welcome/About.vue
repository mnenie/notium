<template>
  <section
    class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
  >
    <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-1">
      Realize your future in notes
    </h1>
    <p class="max-w-[600px] text-center text-lg text-[#72717a] sm:text-xl">
      Сloud app that allows users to create and store notes based on their priorities, also uses the built-in
      AI, assistant NotiumAI
    </p>
    <div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
      <UiButton>Get Started</UiButton>
      <UiButton variant="outline">
        <img src="/icons/github.png" class="h-4 w-4 mr-2" />
        GitHub
      </UiButton>
    </div>
    <img class="rounded-[0.5rem] border shadow" src="/img/mac.png" />
  </section>
</template>
