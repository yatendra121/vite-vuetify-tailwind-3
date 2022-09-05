<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <title-layout> {{ 'casnjcnsan' }} </title-layout>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/9pdj4iJD08s"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <div class="text-center">{{ 'workerStatus' }}</div>
</template>
