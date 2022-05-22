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
import { defineComponent, onBeforeUnmount } from 'vue'
import { useAxios } from '@/composables/axios'
import { syncRefLoading } from '@/composables/loading'
export default defineComponent({
  components: {
    Form
  },
  setup() {
    const { response, loading, cancel } = useAxios('my-profile', {
      method: 'GET'
    })

    syncRefLoading(loading)

    onBeforeUnmount(() => cancel())

    return { response, loading }
  }
})
</script>
