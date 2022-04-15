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
        <Form :initial-values="response?.data?.user" />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Form from './Form.vue'
import { defineComponent } from 'vue'
import { useAxios } from '@/composables/axios'
import { syncRefLoading } from '@/composables/loading'
export default defineComponent({
  components: {
    Form
  },
  setup() {
    const { response, loading } = useAxios('my-profile', {
      method: 'GET'
    })

    syncRefLoading(loading)

    return { response }
  }
})
</script>
