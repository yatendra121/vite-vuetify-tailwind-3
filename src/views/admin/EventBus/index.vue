<script setup lang="ts">
import { ref } from 'vue'
const response = ref([])
fetch('https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json')
  .then((res) => res.json())
  .then((res) => {
    response.value = res
    console.log({ res })
  })
</script>

<template>
  <title-layout> </title-layout>
  <table v-if="response.products">
    <tr>
      <th>subcategory</th>
      <th>title</th>
      <th>price</th>
      <th>popularity</th>
    </tr>
    <tr v-for="item in response.products">
      <td>{{ item.subcategory }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.popularity }}</td>
    </tr>
  </table>
  <!-- <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/9pdj4iJD08s"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe> -->
  <div class="text-center">{{ 'workerStatus' }}</div>
</template>
