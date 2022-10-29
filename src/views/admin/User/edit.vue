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
        <UserForm
          :action="`user/${route.params.id}`"
          method="PUT"
          :initial-values="response?.data"
        />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useAxiosWithLoading } from '@/composables/axios/useAxiosWithLoading'
import { defineAsyncComponent, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const UserForm = defineAsyncComponent(
  () => import(/* webpackChunkName: "my-profile" */ './Form.vue')
)

const route = useRoute()

const { response, cancelLoading } = useAxiosWithLoading(
  `user/${route.params.id}`,
  {
    method: 'GET'
  }
)

onBeforeUnmount(() => cancelLoading())
</script>
