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
        <MyProfileForm :initial-values="response?.data" />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, defineAsyncComponent } from 'vue'
import { useAxios } from '@/composables/axios'
import { syncRefLoading } from '@/composables/loading'
const MyProfileForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const { response, loading, cancel } = useAxios('my-profile/show', {
  method: 'GET'
})

syncRefLoading(loading)

onBeforeUnmount(() => cancel())
</script>
