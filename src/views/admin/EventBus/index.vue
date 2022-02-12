<script setup lang="ts">
import { ref } from 'vue'
import { useEventBus } from '@vueuse/core'

const { on, emit } = useEventBus<string>('vue-use-event-bus')
const message = ref('')
const news = ['1', '2', '3', '4', '5']
on(
  (_message) => (message.value = news[Math.floor(Math.random() * news.length)])
)
</script>

<template>
  <title-layout> {{ 'casnjcnsan' }} </title-layout>
  <div style="display: flex; gap: 100px">
    <div>
      <div class="whitespace-nowrap">News channel:</div>
      <button
        class="whitespace-nowrap"
        @click="emit('The Tokyo Olympics has begun')"
      >
        Broadcast
      </button>
    </div>
    <div>
      <div style="margin-bottom: 13px">Television:</div>
      <div>{{ message || '--- no signal ---' }}</div>
    </div>
  </div>
</template>
