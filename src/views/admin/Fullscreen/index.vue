<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

const el = ref(null)
const { toggle } = useFullscreen(el)
</script>

<template>
  <title-layout> {{ 'casnjcnsan' }} </title-layout>
  <div class="text-center">
    <video
      ref="el"
      class="mb-2"
      src="https://vjs.zencdn.net/v/oceans.mp4"
      width="500"
      controls
    />
    <br />
    <br />
    <button @click="toggle">Go Fullscreen</button>
  </div>
</template>
