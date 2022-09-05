<script setup lang="ts">
import { onMounted } from 'vue'

// @ts-nocheck
// onMounted((el: any, binding: any) => {
//   el.style.position = 'fixed'
//   // binding.value is the value we pass to directive - in this case, it's 200
//   el.style.top = binding.value + 'px'
// })
</script>

<template>
  <div id="dynamic-arguments-example" class="demo">
    <p>Scroll down the page</p>
    <p v-pin="200">Stick me 200px from the top of the page</p>
  </div>
</template>
