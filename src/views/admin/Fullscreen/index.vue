<script setup lang="ts">
import { ref } from 'vue'
import { mdiFullscreen } from '@mdi/js'
import { useFullscreen } from '@vueuse/core'

const el = ref(null)
const { toggle } = useFullscreen(el)
</script>

<template>
  <title-layout>
    <v-btn color="primary" :prepend-icon="mdiFullscreen" @click="toggle">
      Go Fullscreen
    </v-btn>
  </title-layout>
  <v-card class="form-card overflow-hidden">
    <video
      ref="el"
      class="d-block w-100"
      src="https://vjs.zencdn.net/v/oceans.mp4"
      controls
    />
  </v-card>
</template>
