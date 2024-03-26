<script setup lang="ts">
import type { Container } from '@tsparticles/engine';

const options = {
  fullScreen: {
    enable: true,
    zIndex: -2
  },
  particles: {
    mode: 'full',
    lazy: true,
    color: {
      value: '#000',
      opacity: 0.4
    },
    links: {
      color: '#000',
      enable: true,
      opacity: 0.4
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  }
};

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 0);
};
</script>

<template>
  <div>
    <!-- <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles> -->
    <div class="relative z-10">
      <LayoutHeader />
      <WelcomeAbout />
    </div>
  </div>
</template>
