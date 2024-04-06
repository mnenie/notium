<script setup lang="ts">
useSeoMeta({
  title: 'Notium - cloud app of your notes'
});
definePageMeta({
  middleware: 'auth'
});

const content = ref(`
        <h1>👋 Welcome to Notium</h1>
        <p>Cloud app for users that can realize their thoughts</p>
        <p></p>
        <p>
          About this app:
        </p>
        <ul>
          <li>Allows users to create and store notes.</li>
          <li>State the priorities.</li>
          <li>Uses the built-in ai, assistant NotiumAI 🤖.</li>
        </ul>
        <p>
          Do you want to see more? Ok! Let me know and give me feedback:
        </p>
        <ul>
          <li>I’am a 👨‍💻 vue/nuxt frontend developer.</li>
          <li>Contributor of <span style="font-weight: 500;font-style: italic;">@vuejs</span> 💚 community.</li>
          <li>Have a lot of projects ranging from standard applications to large-scale endeavors, such as an ecommerce websites, business services, agile system, virtual whiteboard, configs and more.</li>
        </ul>
        <span style="color: rgb(113 113 122)">👉 Have a question? Telegram - <span>@youngjuicycashrussia</span> 🌐, send me a message.</span>
`)
</script>

<template>
  <EditorTiptap v-model="content" />
</template>
