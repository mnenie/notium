<script setup lang="ts">
import { MonitorPlay } from 'lucide-vue-next';
import { isHLSProvider, type MediaCanPlayEvent, type MediaProviderChangeEvent } from 'vidstack';
import type { MediaPlayerElement } from 'vidstack/elements';

import 'vidstack/player/styles/base.css';
import 'vidstack/player';
import 'vidstack/player/ui';
import 'vidstack/icons';

const $player = ref<MediaPlayerElement>();

function onProviderChange(event: MediaProviderChangeEvent) {
  const provider = event.detail;
  if (isHLSProvider(provider)) {
    provider.config = {};
  }
}

const isVideoActive = ref(false);
const toggleVideo = () => {
  isVideoActive.value = !isVideoActive.value;
  if (!isVideoActive.value) {
    $player.value?.destroy();
  }
};
</script>

<template>
  <div>
    <UiButton @click="toggleVideo" variant="ghost" class="mt-4 h-8 w-full justify-start">
      <MonitorPlay class="mr-2 h-[16px] w-[16px]" color="rgb(82 82 91 / 0.9)" />
      <span class="text-[14px] text-zinc-600 xl:text-[13px] 2xl:text-[14px]">{{
        isVideoActive ? 'Close Preview' : 'Notium Preview'
      }}</span>
    </UiButton>
    <media-player
      v-if="isVideoActive"
      class="fixed top-10 right-10 aspect-video w-full overflow-hidden rounded-md bg-slate-900 font-sans text-white data-[focus]:ring-4"
      title="Notium Story"
      src="/video/notium1.mp4"
      crossOrigin
      playsInline
      autoplay
      @provider-change="onProviderChange"
      style="position: fixed !important; width: 300px !important; top: 40px !important; right: 40px !important;"
      ref="$player"
    >
      <media-provider>
        <media-poster
          class="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
          src="/video/notium1.mp4"
          alt="Notium Story"
        />
      </media-provider>
      <media-controls
        class="media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity"
      >
        <div class="flex-1" />
      </media-controls>
    </media-player>
  </div>
</template>