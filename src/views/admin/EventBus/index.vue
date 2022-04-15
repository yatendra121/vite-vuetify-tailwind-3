<script setup lang="ts">
import { ref } from 'vue'
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(() => {})
workerFn()
</script>

<template>
  <title-layout> {{ 'casnjcnsan' }} </title-layout>
  <div class="text-center">{{ workerStatus }}</div>
</template>
