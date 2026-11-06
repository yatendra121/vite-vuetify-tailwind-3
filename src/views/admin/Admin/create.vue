<script lang="ts" setup>
import UserForm from './Form.vue'

const id = 'user_form'
</script>

<template>
  <title-layout>
    <vq-back-btn></vq-back-btn>
  </title-layout>

  <v-card>
    <UserForm :id="id" />
  </v-card>
</template>
