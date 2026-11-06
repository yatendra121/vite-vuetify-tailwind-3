<script lang="ts" setup>
import CategoryForm from './form.vue'

const id = 'category_form'
</script>

<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card>
    <CategoryForm :id="id" />
  </v-card>
</template>
