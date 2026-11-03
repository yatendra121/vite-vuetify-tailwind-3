<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const UserForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const id = 'user_form'
</script>

<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card class="form-card">
    <UserForm :id="id" />
  </v-card>
</template>
