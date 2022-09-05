<template>
  <title-layout>
    <template #default> </template>
    <template #button>
      <vq-submit-btn></vq-submit-btn>
      <vq-back-btn></vq-back-btn>
    </template>
  </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <UserForm />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const UserForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)
</script>
