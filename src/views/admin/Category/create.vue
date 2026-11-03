<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const CategoryForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "category" */ './form.vue')
)

const id = 'category_form'
</script>

<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card class="form-card">
    <CategoryForm :id="id" />
  </v-card>
</template>
