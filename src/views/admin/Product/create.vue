<script lang="ts" setup>
import ProductForm from './form.vue'

const id = 'product_form'
</script>

<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card class="form-card">
    <ProductForm :id="id" />
  </v-card>
</template>
