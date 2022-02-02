<template>
  <title-layout> {{ 'casnjcnsan' }} </title-layout>
  <v-container fluid>
    <v-card>
      <v-responsive>
        <Form :initial-value="initialValue" />
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Form from './Form.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { _axios } from '@/plugins/axios'
export default defineComponent({
  components: {
    Form
  },
  setup() {
    const initialValue = ref({})
    const getResponse = () => {
      _axios.get('my-profile').then((response) => {
        initialValue.value = response.data.user
      })
    }
    console.time()
    console.log('1')
    console.timeEnd()
    onMounted(() => {
      getResponse()
    })
    return { initialValue }
  }
})
</script>
